import React from 'react';
import imgLogo from './../assets/img/variedades-ampi.png';
import { Link } from 'react-router-dom';

export default function Navbar() {
	return (
		<>
			<div className="offcanvas offcanvas-start w-25" id="offcanvas" data-bs-keyboard="true" data-bs-backdrop="true">
				<div className="offcanvas-header">
					<Link to="/" className="navbar-brand offcanvas-title d-none d-sm-block">
						<img src={imgLogo} alt="Logo Variedades Ampi" width="200" />
					</Link>
					<button
						type="button"
						className="btn-close text-reset"
						data-bs-dismiss="offcanvas"
						aria-label="Close"></button>
				</div>
				<div className="offcanvas-body px-0">
					<ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-start" id="menu">
						<li className="nav-item">
							<Link to="/" className="nav-link">
								<i className="fs-5 bi-house"></i>
								<span className="ms-1 d-none d-sm-inline">Home</span>
							</Link>
						</li>
						<li>
							<span className="nav-link">
								<i className="fs-5 bi-file-earmark-pdf"></i>{' '}
								<span className="ms-1 d-none d-sm-inline">Cartas</span>{' '}
							</span>
							<ul className="nav flex-column ms-1">
								<li>
									<Link to="/personal-card" className="nav-link ms-1">
										<i className="bi bi-person-fill"></i> <span className="d-none d-sm-inline">Personal</span>
									</Link>
								</li>
								<li>
									<Link to="/family-card" className="nav-link ms-1">
										<i className="bi bi-people-fill"></i> <span className="d-none d-sm-inline">Familiar</span>
									</Link>
								</li>
								<li>
									<Link to="/labor-card" className="nav-link ms-1">
										<i className="bi bi-folder-fill"></i> <span className="d-none d-sm-inline">Laboral</span>
									</Link>
								</li>
								<li>
									<Link to="/comunity-card" className="nav-link ms-1">
										<i className="bi bi-globe-americas"></i>{' '}
										<span className="d-none d-sm-inline">Jac Recuerdo</span>
									</Link>
								</li>
							</ul>
						</li>
					</ul>
				</div>
			</div>
			<button
				className="btn float-start d-flex align-items-center position-absolute bg-info"
				data-bs-toggle="offcanvas"
				data-bs-target="#offcanvas"
				role="button">
				<i className="bi bi-arrow-right-square-fill fs-3" data-bs-toggle="offcanvas" data-bs-target="#offcanvas"></i>
				<span className="fw-bold ps-1">Menú</span>
			</button>
		</>
	);
}
