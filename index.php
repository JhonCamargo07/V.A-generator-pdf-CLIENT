<!DOCTYPE html>
<html lang="en">

<head>
	<title>V.A Generator pdf - Login</title>
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
							<h6 class="m-0 font-weight-bold text-primary fw-bold">Iniciar sesi&#243;n</h6>
						</div>
						<div class="card-body">
					
							<div class="row">
								<div class="col-md-3"></div>
								<div class="col-md-6">
					
									<form method="post" class="needs-validation" id="formLogin" novalidate>
										<div class="mb-3">
											<label for="nameUser" class="form-label">
												Usuario <span class="text-danger">*</span>
											</label>
											<input type="text" name="nameUser" class="form-control" id="nameUser" required />
											<div class="invalid-feedback">
												El usuario es obligatorio
											</div>
										</div>
										<div class="mb-3">
											<label for="password" class="form-label">
												Contrase&#241;a <span class="text-danger">*</span>
											</label>
											<input type="password" name="password" class="form-control" id="password" required />
											<div class="invalid-feedback">
												Ingrese su contrase&#241;a
											</div>
										</div>
										<div class="mb-3 text-center">
											<button class="btn btn-primary text-center">
												Ingresar
											</button>
										</div>
									</form>
								</div>
								<div class="col-md-3"></div>
							</div>
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
			signIn();
			
		});
	</script>

</body>

</html>