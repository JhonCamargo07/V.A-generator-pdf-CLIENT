const urlFetch = 'http://127.0.0.1:64022';
const typeDoc = [
	'C\u00e9dula de ciudadan\u00eda',
	'C\u00e9dula de extranjer\u00eda',
	'Tarjeta de identidad',
];
const prefixTypeDoc = ['C.C', 'C.E', 'T.I'];
const rolComunidad = ['arrendatario', 'propietario'];

const getHeaders = () => {
	const token = localStorage.getItem('token');
	return {
		Accept: 'application/json',
		'Content-Type': 'application/json',
		Authorization: token,
	};
};

async function signIn() {
	const data = {};

	data.email = document.getElementById('nameUser').value;
	data.pass = document.getElementById('password').value;

	const response = await fetch(`${urlFetch}/api/login`, {
		method: 'POST',
		headers: getHeaders(),
		body: JSON.stringify(data),
	}).then((response) => response.json());

	if (!response.success) {
		return alert(response.message);
	}

	localStorage.setItem('token', response.token);

	location.href = 'home.php';
}

async function getNewToken() {
	const response = await fetch(`${urlFetch}/api/resetToken`, {
		method: 'POST',
		headers: getHeaders(),
	}).then((response) => response.json());

	if (!response.success) {
		alert('Su sesi\u00f3n ha espirado, debe iniciarse sesi\u00f3n nuevamente');
		location.href = 'index.php';
		return;
	}

	localStorage.setItem('token', response.token);
}

async function resetToken() {
	getNewToken();
	setInterval(() => {
		getNewToken();
	}, 25000); // 25s
}

async function deleteFile(idFile) {
	if (!confirm('¿Enserio quieres eliminar esta carta?')) return;

	const data = {};
	data.idFile = idFile;

	const response = await fetch(`${urlFetch}/api/deleteCard`, {
		method: 'DELETE',
		headers: getHeaders(),
		body: JSON.stringify(data),
	}).then((response) => response.json());

	alert(response.message);

	location.reload();
}

async function deleteAllFiles() {
	if (!confirm('¿Enserio quieres eliminar todas las cartas?')) return;

	const pass = prompt('Para continuar, ingresa la contraseña');

	const response = await fetch(`${urlFetch}/api/deleteAllCards`, {
		method: 'DELETE',
		headers: getHeaders(),
		body: JSON.stringify({ pass }),
	}).then((response) => response.json());

	alert(response.message);

	location.reload();
}

async function getInfoFiles() {
	const response = await fetch(`${urlFetch}/public/`, {
		method: 'GET',
		headers: getHeaders(),
	}).then((response) => response.json());

	let infoFiles = '';
	response.map((file, index) => {
		// Se agregan en orden descendente la informacion de las cartas
		infoFiles =
			`<tr>
			<td class="text-center pt-4">${response.length - index}</td>
			<td class="text-center pt-4">${file.fecha}</td>
			<td class="text-center pt-4">${file.hora}</td>
			<td class="text-center pt-4">${file.tipo_carta}</td>
			<td class="text-center">
				<a onclick="getPdf('${
					file.url
				}')" class="btn btn-info btn-circle text-center btn"><i class="fas fa-file-pdf"></i></a>
			</td>
			<td class="text-center">
				<a onclick="getQr('${
					file.qr
				}')" class="btn btn-warning btn-circle text-center btn"><i class="fas fa-qrcode"></i></a>
			</td>
			<td class="text-center">
				<a onclick="deleteFile('${
					file.id
				}')" class="btn btn-danger btn-circle text-center btn"><i class="fas fa-trash"></i></a>
			</td>
		</tr>` + infoFiles;
	});

	document.querySelector('#dataTable tbody').outerHTML = infoFiles;

	// Destruir la tabla actual
	$('#dataTable').DataTable().destroy();

	// Crear una nueva tabla con DataTable
	$('#dataTable').DataTable({
		ordering: true,
		searching: true,
		// Configurar el idioma
		language: {
			url: '//cdn.datatables.net/plug-ins/1.10.25/i18n/Spanish.json',
		},
	});
}

const getPdf = async (fullUrlPdf) => {
	fetch(`${fullUrlPdf}`, {
		method: 'get',
		headers: getHeaders(),
	})
		.then((response) => response.blob())
		.then((blob) => {
			window.open(URL.createObjectURL(blob));
		})
		.catch((err) => console.log(err));
};

const getQr = async (fullUrlQr) => {
	fetch(`${fullUrlQr}`, {
		method: 'get',
		headers: getHeaders(),
	})
		.then((response) => response.blob())
		.then((blob) => {
			window.open(URL.createObjectURL(blob));
		})
		.catch((err) => console.log(err));
};

function getField(nameField) {
	if (document.getElementById(nameField) && document.getElementById(nameField) != '') {
		return document.getElementById(nameField).value;
	}
}

function getDataForm() {
	const data = {};

	data.namePeopleCertifier = getField('nameRecomendador');
	data.phonePeopleCertifier = getField('celRecomendador');
	data.documentPeopleCertifier = getField('numeroDocRecomendador');
	data.documentTypePeopleCertifier = getField('tipoDocRecomendador')
		? typeDoc[getField('tipoDocRecomendador')]
		: undefined;

	if (getField('lugarExpRecomendador')) {
		data.originDocumentPeopleCertifier = getField('lugarExpRecomendador');
	}

	data.prefixDocumentTypePeopleCertifier = getField('tipoDocRecomendador')
		? prefixTypeDoc[getField('tipoDocRecomendador')]
		: undefined;
	data.isManPeopleCertifier = getField('generoRecomendador') == 0;
	data.namePeopleCertified = getField('nameRecomendado');
	data.documentPeopleCertified = getField('numeroDocRecomendado');
	data.documentTypePeopleCertified = getField('tipoDocRecomendado')
		? typeDoc[getField('tipoDocRecomendado')]
		: undefined;
	data.phonePeopleCertified = getField('celPeopleRecomendado');

	if (getField('lugarExpRecomendado')) {
		data.originDocumentPeopleCertified = getField('lugarExpRecomendado');
	}

	data.isManPeopleCertified = getField('generoRecomendado') == 0;

	if (document.getElementById('tiempoConocidos')) {
		data.acquaintanceTime = getField('tiempoConocidos');
	}

	if (getField('direccionRecomendador')) {
		data.addresPeopleCertified = getField('direccionRecomendador');
	}

	if (getField('rolEnLaComunidad')) {
		data.homePeopleCertified = rolComunidad[getField('rolEnLaComunidad')];
	}

	return data;
}

async function generatePersonalCard() {
	const data = this.getDataForm();

	const response = await fetch(`${urlFetch}/api/personal-card`, {
		method: 'POST',
		headers: getHeaders(),
		body: JSON.stringify(data),
	}).then((response) => response.json());

	if (!response.success) {
		return alert(response.message);
	}
	alert(response.message);
	getPdf(response.data.url);
}

async function generateFamilyCard() {
	const data = this.getDataForm();

	const response = await fetch(`${urlFetch}/api/family-card`, {
		method: 'POST',
		headers: getHeaders(),
		body: JSON.stringify(data),
	}).then((response) => response.json());

	if (!response.success) {
		return alert(response.message);
	}
	alert(response.message);
	getPdf(response.data.url);
}

async function generateComunityCard() {
	const data = this.getDataForm();

	const response = await fetch(`${urlFetch}/api/comunity-card`, {
		method: 'POST',
		headers: getHeaders(),
		body: JSON.stringify(data),
	}).then((response) => response.json());

	if (!response.success) {
		return alert(response.message);
	}
	alert(response.message);
	getPdf(response.data.url);
}
