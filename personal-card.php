<!DOCTYPE html>
<html lang="en">
	<head>
		<title>Carta personal</title>
		<?php include('./comunes/head.php'); ?>
	</head>

	<body id="page-top">
		<!-- Page Wrapper -->
		<div id="wrapper">
			<!-- Content Wrapper -->
			<?php include('./comunes/sidebar.php'); ?>
			<div id="content-wrapper" class="d-flex flex-column">
				<!-- Main Content -->
				<div id="content">
					<?php include('./comunes/navbar.php'); ?>

					<div class="container-fluid">
						<div class="card shadow mb-4">
							<div class="card-header py-3">
								<h6 class="m-0 font-weight-bold text-primary fw-bold">Carta personal</h6>
							</div>
							<div class="card-body">
								<form method="post" class="needs-validation" id="formLogin" novalidate>
									<div class="row">
										<div class="col-md-1"></div>
										<div class="col-md-5">
											<h5 class="text-center fw-bold mb-4">Informaci&#243;n recomendador</h5>
											<div class="mb-3">
												<label for="nameRecomendador" class="form-label">
													Nombre del recomendador <span class="text-danger">*</span>
												</label>
												<input type="text" name="nameRecomendador" class="form-control" id="nameRecomendador" required />
												<div class="invalid-feedback">El nombre es obligatorio</div>
											</div>
											<div class="mb-3">
												<label for="generoRecomendador" class="form-label">
													Genero <span class="text-danger">*</span>
												</label>
												<select class="form-control" id="generoRecomendador" required>
													<option value="0">Hombre</option>
													<option value="1">Mujer</option>
												</select>
												<div class="invalid-feedback">El tipo de documento es obligatorio</div>
											</div>
											<div class="mb-3">
												<label for="tipoDocRecomendador" class="form-label">
													Tipo de documento <span class="text-danger">*</span>
												</label>
												<select class="form-control" id="tipoDocRecomendador" required>
													<option value="0">C&#233;dula de ciudadan&#237;a</option>
													<option value="1">C&#233;dula de extranjer&#237;a</option>
													<option value="2">Tarjeta de identidad</option>
												</select>
												<div class="invalid-feedback">El tipo de documento es obligatorio</div>
											</div>
											<div class="mb-3">
												<label for="numeroDocRecomendador" class="form-label">
													N&#250;mero de identificaci&#243;n <span class="text-danger">*</span>
												</label>
												<input
													type="number"
													name="numeroDocRecomendador"
													class="form-control"
													id="numeroDocRecomendador"
													required />
												<div class="invalid-feedback">
													El n&#250;mero de identificación es obligatorio
												</div>
											</div>
											<div class="mb-3">
												<label for="lugarExpRecomendador" class="form-label"> Lugar de expedici&#243;n </label>
												<input type="text" name="lugarExpRecomendador" class="form-control" id="lugarExpRecomendador" />
											</div>
											<div class="mb-3">
												<label for="direccionRecomendador" class="form-label"> Dirreci&#243;n </label>
												<input type="text" name="direccionRecomendador" class="form-control" id="direccionRecomendador" />
											</div>
											<div class="mb-3">
												<label for="celRecomendador" class="form-label">
													Tel&#233;fono <span class="text-danger">*</span>
												</label>
												<input
													type="number"
													name="celRecomendador"
													class="form-control"
													id="celRecomendador"
													required />
												<div class="invalid-feedback">
													El tel&#233;fono es obligatorio
												</div>
											</div>
										</div>
										<div class="col-md-5">
											<h5 class="text-center fw-bold mb-4">Informaci&#243;n persona recomendada</h5>
											<div class="mb-3">
												<label for="nameRecomendado" class="form-label">
													Nombre del recomendado <span class="text-danger">*</span>
												</label>
												<input type="text" name="nameRecomendado" class="form-control" id="nameRecomendado" required />
												<div class="invalid-feedback">El nombre es obligatorio</div>
											</div>
											<div class="mb-3">
												<label for="generoRecomendado" class="form-label">
													Genero <span class="text-danger">*</span>
												</label>
												<select class="form-control" id="generoRecomendado" required>
													<option value="0">Hombre</option>
													<option value="1">Mujer</option>
												</select>
												<div class="invalid-feedback">El tipo de documento es obligatorio</div>
											</div>
											<div class="mb-3">
												<label for="tipoDocRecomendado" class="form-label">
													Tipo de documento <span class="text-danger">*</span>
												</label>
												<select class="form-control" id="tipoDocRecomendado" required>
													<option value="0">C&#233;dula de ciudadan&#237;a</option>
													<option value="1">C&#233;dula de extranjer&#237;a</option>
													<option value="2">Tarjeta de identidad</option>
												</select>
												<div class="invalid-feedback">El tipo de documento es obligatorio</div>
											</div>
											<div class="mb-3">
												<label for="numeroDocRecomendado" class="form-label">
													N&#250;mero de identificaci&#243;n <span class="text-danger">*</span>
												</label>
												<input
													type="number"
													name="numeroDocRecomendado"
													class="form-control"
													id="numeroDocRecomendado"
													required />
												<div class="invalid-feedback">
													El n&#250;mero de identificación es obligatorio
												</div>
											</div>
											<div class="mb-3">
												<label for="lugarExpRecomendado" class="form-label"> Lugar de expedici&#243;n </label>
												<input type="text" name="lugarExpRecomendado" class="form-control" id="lugarExpRecomendado" />
											</div>
											<div class="mb-3">
												<label for="tiempoConocidos" class="form-label">
													Tiempo de conocidos <span class="text-danger">*</span>
												</label>
												<input
													type="number"
													name="tiempoConocidos"
													class="form-control"
													id="tiempoConocidos"
													required />
												<div class="invalid-feedback">El tiempo es obligatorio</div>
											</div>
										</div>
										<div class="col-md-1"></div>
										<div class="col-md-12">
											<div class="mb-3 mt-2 d-flex justify-content-center align-items-center">
												<button class="btn btn-primary text-center">Generar carta personal</button>
											</div>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
				<!-- End of Main Content -->
				<?php include('./comunes/footer.php'); ?>
			</div>
			<!-- End of Content Wrapper -->
		</div>
		<!-- End of Page Wrapper -->

		<!-- Scroll to Top Button-->
		<a class="scroll-to-top rounded" href="#page-top">
			<i class="fas fa-angle-up"></i>
		</a>

		<!-- Bootstrap core JavaScript-->
		<script src="vendor/jquery/jquery.min.js"></script>
		<script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

		<!-- Core plugin JavaScript-->
		<script src="vendor/jquery-easing/jquery.easing.min.js"></script>

		<!-- Custom scripts for all pages-->
		<script src="js/sb-admin-2.min.js"></script>

		<!-- Page level plugins -->
		<script src="vendor/chart.js/Chart.min.js"></script>

		<!-- Page level custom scripts -->
		<script src="js/demo/chart-area-demo.js"></script>
		<script src="js/demo/chart-pie-demo.js"></script>

		<script src="js/fetchs.js"></script>
		<script src="js/validateBootstrap.js"></script>

		<script>
			const formLogin = document.getElementById('formLogin');

			formLogin.addEventListener('submit', (e) => {
				e.preventDefault();
				generatePersonalCard();
			});
		</script>
	</body>
</html>
