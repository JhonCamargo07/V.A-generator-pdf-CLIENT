import React from 'react';
import ReactDOM from 'react-dom/client';
import Routes from './Routes/Router';
import * as bootstrap from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Routes />
	</React.StrictMode>
);
