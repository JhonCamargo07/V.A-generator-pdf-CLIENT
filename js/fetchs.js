const urlFetch = 'http://127.0.0.1:64022';
const typeDoc = ['C\u00e9dula de ciudadan\u00eda', 'C\u00e9dula de extranjer\u00eda', 'Tarjeta de identidad'];
const prefixTypeDoc = ['C.C', 'C.E', 'T.I'];

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

async function generatePersonalCard() {
	const data = {};

	data.namePeopleCertifier = document.getElementById('nameRecomendador').value;
	data.phonePeopleCertifier = document.getElementById('celRecomendador').value;
	data.documentPeopleCertifier = document.getElementById('numeroDocRecomendador').value;
	data.documentTypePeopleCertifier = typeDoc[document.getElementById('tipoDocRecomendador').value];

	if (document.getElementById('lugarExpRecomendador').value != '') {
		data.originDocumentPeopleCertifier = document.getElementById('lugarExpRecomendador').value;
	}

	data.prefixDocumentTypePeopleCertifier = prefixTypeDoc[document.getElementById('tipoDocRecomendador').value];
	data.isManPeopleCertifier = document.getElementById('generoRecomendador').value == 0;

	data.namePeopleCertified = document.getElementById('nameRecomendado').value;
	data.documentPeopleCertified = document.getElementById('numeroDocRecomendado').value;
	data.documentTypePeopleCertified = typeDoc[document.getElementById('tipoDocRecomendado').value];
	if (document.getElementById('lugarExpRecomendado').value != '') {
		data.originDocumentPeopleCertified = document.getElementById('lugarExpRecomendado').value;
	}

	data.isManPeopleCertified = document.getElementById('generoRecomendado').value == 0;

	data.acquaintanceTime = document.getElementById('tiempoConocidos').value;

	if (document.getElementById('direccionRecomendador').value != '') {
		data.addresPeopleCertified = document.getElementById('direccionRecomendador').value;
	}

	const response = await fetch(`${urlFetch}/api/personal-card`, {
		method: 'POST',
		headers: getHeaders,
		body: JSON.stringify(data),
	}).then((response) => response.json());

	if (!response.success) {
		return alert(response.message);
	}

	alert(response.message);

	// setTimeout(() => {
	getPdf(response.data.url);
	// }, 2000);
}
