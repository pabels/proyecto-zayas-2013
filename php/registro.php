<?php

echo '<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>Registro</title>

    <!-- Bootstrap core CSS -->
    <link href="css/bootstrap.css" rel="stylesheet">

    <!-- Add custom CSS here -->
    <link href="css/modern-business.css" rel="stylesheet">
    <link href="font-awesome/css/font-awesome.min.css" rel="stylesheet">
  </head>

  <body>
   <form role="form" method="POST" action="connectdb.php">
    <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="index.html">Paint it Black!</a>
        </div>

        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse navbar-ex1-collapse">
          <ul class="nav navbar-nav navbar-right">
            <li><a href="#">Sobre nosotros</a></li>
            <li><a href="contact.html">Contacta</a></li>
            <li class="dropdown">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown">Galeria <b class="caret"></b></a>
              <ul class="dropdown-menu">
                <li><a href="portfolio-1-col.html">Proyectos</a></li>
                <li><a href="portfolio-2-col.html">Galeria de coches</a></li>
              </ul>
            </li>
            <li class="dropdown">
              <a href="#">Foro</a>
            </li>
            <li><a href="registro.php">Registro</a>
            </li>
            <li><a href="#">LogIn</a></li>
          </ul>
        </div><!-- /.navbar-collapse -->
      </div><!-- /.container -->
    </nav>

    <div class="container">

      <div class="row">

        <div class="col-lg-12">
          <h1 class="page-header">Registro <small>Rellena el formulario</small></h1>
        </div>

      </div>

      <div class="row">

        <div class="col-lg-12">
              <div class="row">
                <div class="form-group col-lg-4">
                  <label for="input1">Nombre*</label>
                  <input type="text" name="nombre" class="form-control" id="input1" placeholder="nombre de usuario">
                </div>
                <div class="form-group col-lg-4">
                  <label for="input2">Contraseña*</label>
                  <input type="password" name="password" class="form-control" id="input2">
                </div>
                <div class="form-group col-lg-4">
                  <label for="input3">Direccion E-Mail*</label>
                  <input type="email" name="email" class="form-control" id="input3">
                </div>
                <div class="clearfix"></div>
                <div class="form-group col-lg-12">
                  <label for="input4">Mensaje</label>
                  <textarea name="mensaje" class="form-control" rows="6" id="input4" placeholder="Escribe aqui tu mensaje"></textarea>
                </div>
                <div class="form-group col-lg-12">
                  <input type="hidden" name="save" value="contact">
                  <button type="submit" class="btn btn-primary">Enviar</button>
                  <br>Los campos con * son obligatorios.
                </div>
              </div>
            </form>
        </div>

      </div>

    </div><!-- /.container -->
    </form>
    <div class="container">

      <hr>

      <footer>
        <div class="row">
          <div class="col-lg-12">
            <p>Copyright &copy; Paint it Black!</p>
          </div>
        </div>
      </footer>

    </div><!-- /.container -->

    <!-- JavaScript -->
    <script src="js/jquery-1.10.2.js"></script>
    <script src="js/bootstrap.js"></script>
    <script src="js/modern-business.js"></script>

  </body>
</html>';

?>