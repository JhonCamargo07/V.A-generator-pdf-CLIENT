const urlFetch = 'http://127.0.0.1:64022';
const typeDoc = ['C\u00e9dula de ciudadan\u00eda', 'C\u00e9dula de extranjer\u00eda', 'Tarjeta de identidad'];
const prefixTypeDoc = ['C.C', 'C.E', 'T.I'];
const rolComunidad = ['arrendatario', 'propietario'];

const getHeaders = {
	Accept: 'application/json',
	'Content-Type': 'application/json',
	Authorization: localStorage.getItem('token'),
};

async function signIn() {
	const data = {};

	data.email = document.getElementById('nameUser').value;
	data.pass = document.getElementById('password').value;

	const response = await fetch(`${urlFetch}/api/login`, {
		method: 'POST',
		headers: getHeaders,
		body: JSON.stringify(data),
	}).then((response) => response.json());

	if (!response.success) {
		return alert(response.message);
	}

	localStorage.setItem('token', response.token);

	location.href = 'home.php';
}

async function getInfoFiles() {
	const response = await fetch(`${urlFetch}/public/`, {
		method: 'GET',
		headers: getHeaders,
	}).then((response) => response.json());

	console.log(response);

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
				<a onclick="getPdf('${file.url}')" class="btn btn-info btn-circle text-center btn"><i class="fas fa-file-pdf"></i></a>
			</td>
			<td class="text-center">
				<a onclick="getQr('${file.qr}')" class="btn btn-warning btn-circle text-center btn"><i class="fas fa-qrcode"></i></a>
			</td>
		</tr>` + infoFiles;
	});

	document.querySelector('#dataTable tbody').outerHTML = infoFiles;
}

const getPdf = async (fullUrlPdf) => {
	console.log(fullUrlPdf);
	fetch(`${fullUrlPdf}`, {
		method: 'get',
		headers: getHeaders,
	})
		.then((response) => response.blob())
		.then((blob) => {
			const urlPdf = URL.createObjectURL(blob);
			window.open(urlPdf);
		})
		.catch((err) => console.log(err));
};

const getQr = async (fullUrlQr) => {
	fetch(`${fullUrlQr}`, {
		method: 'get',
		headers: getHeaders,
	})
		.then((response) => response.blob())
		.then((blob) => {
			const urlQr = URL.createObjectURL(blob);
			window.open(urlQr);
		})
		.catch((err) => console.log(err));
};

function getField(nameField) {
	if (document.getElementById(nameField) && document.getElementById(nameField) != '') {
		return document.getElementById(nameField).value;
	}
	return;
}

function getDataForm() {
	const data = {};

	data.namePeopleCertifier = getField('nameRecomendador');
	data.phonePeopleCertifier = getField('celRecomendador');
	data.documentPeopleCertifier = getField('numeroDocRecomendador');
	data.documentTypePeopleCertifier = getField('tipoDocRecomendador') != null ? typeDoc[getField('tipoDocRecomendador')] : '';

	if (getField('lugarExpRecomendador') != null) {
		console.log('Entro, no es "nulo"');
		data.originDocumentPeopleCertifier = getField('lugarExpRecomendador');
	}

	data.prefixDocumentTypePeopleCertifier =
		getField('tipoDocRecomendador') != null ? prefixTypeDoc[getField('tipoDocRecomendador')] : '';
	data.isManPeopleCertifier = getField('generoRecomendador') == 0;
	data.namePeopleCertified = getField('nameRecomendado');
	data.documentPeopleCertified = getField('numeroDocRecomendado');
	data.documentTypePeopleCertified = getField('tipoDocRecomendado') != null ? typeDoc[getField('tipoDocRecomendado')] : '';

	if (getField('lugarExpRecomendado') != null) {
		console.log('Entro, no es "nulo"');
		data.originDocumentPeopleCertified = getField('lugarExpRecomendado');
	}

	data.isManPeopleCertified = getField('generoRecomendado') == 0;

	if (document.getElementById('tiempoConocidos')) {
		data.acquaintanceTime = getField('tiempoConocidos');
	}

	if (getField('direccionRecomendador') != null) {
		console.log('Entro, no es "nulo"');
		data.addresPeopleCertified = getField('direccionRecomendador');
	}
	return data;
}

async function generatePersonalCard() {
	const data = this.getDataForm();

	const response = await fetch(`${urlFetch}/api/personal-card`, {
		method: 'POST',
		headers: getHeaders,
		body: JSON.stringify(data),
	}).then((response) => response.json());

	if (!response.success) {
		return alert(response.message);
	}

	setTimeout(function () {
		getPdf(response.data.url);
	}, 1000);
}

async function generateFamilyCard() {
	const data = this.getDataForm();

	const response = await fetch(`${urlFetch}/api/family-card`, {
		method: 'POST',
		headers: getHeaders,
		body: JSON.stringify(data),
	}).then((response) => response.json());

	if (!response.success) {
		return alert(response.message);
	}

	setTimeout(function () {
		getPdf(response.data.url);
	}, 1000);
}

async function generateComunityCard() {
	const data = this.getDataForm();

	const response = await fetch(`${urlFetch}/api/comunity-card`, {
		method: 'POST',
		headers: getHeaders,
		body: JSON.stringify(data),
	}).then((response) => response.json());

	if (!response.success) {
		return alert(response.message);
	}

	setTimeout(function () {
		getPdf(response.data.url);
	}, 1000);
}
