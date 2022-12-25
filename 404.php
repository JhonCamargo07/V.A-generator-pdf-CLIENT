<!DOCTYPE html>
<html lang="en">
	<head>
		<title>P&#225;gina no encontrada</title>
		<?php include('./comunes/head.php'); ?>
	</head>

	<body id="page-top">
		<!-- Page Wrapper -->
		<div id="wrapper">
			<?php include('./comunes/sidebar.php'); ?>

			<!-- Content Wrapper -->
			<div id="content-wrapper" class="d-flex flex-column">
				<!-- Main Content -->
				<div id="content">
					<?php include('./comunes/navbar.php'); ?>

					<!-- Begin Page Content -->
					<div class="container-fluid">
						<!-- 404 Error Text -->
						<div class="text-center my-5">
							<div class="error mx-auto" data-text="404">404</div>
							<p class="lead text-gray-800 mb-5">P&#225;gina no encontrada</p>
							<p class="text-gray-500 mb-0">Parece que encontraste una falla en la matriz...</p>
							<a href="home.php">&larr; Volver al inicio</a>
						</div>
					</div>
					<!-- /.container-fluid -->
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
	</body>
</html>
