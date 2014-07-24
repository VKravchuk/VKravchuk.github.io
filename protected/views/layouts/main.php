<!DOCTYPE html>
<html>
	<head>
		<title>MyBlog</title>
		<meta name="viewport" content="width=device-width, initial-scale=1.0"> 
		<link href="/css/main.css" rel="stylesheet">
		<link href="/css/bootstrap.css" rel="stylesheet">
		<meta charset="UTF-8">
		<!--[if lt IE 9]>
			<script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
			<script src="https://oss.maxcdn.com/libs/respond.js/1.3.0/respond.min.js"></script>
		<![endif]-->
	</head>
	<body>
		<div class="wrapper container mrg-top">
			<header class="row mrg-top">
				<a href="/" class="col-xs-offset-1 col-sm-offset-0 header-logo"><img src="/images/logo.png" alt="Whitesquare logo"></a>
				<div id="small-device-menu" class="col-xs-12"></div>
				<form name="search" action="#" method="get" class="form-inline form-search pull-right col-md-3 col-sm-5 col-xs-12">
					<div class="input-group">
						<label class="sr-only" for="searchInput">Search</label>
						<input class="form-control" id="searchInput" type="text" name="search" placeholder="Search">
						<div class="input-group-btn">
							<button type="submit" class="btn btn-info">GO</button>
						</div>
					</div>
				</form>
			</header>
			<nav>
				<div class="container mrg-top">
					<div class="row" id="default-menu-position">
						<div class="navbar topmenu navbar-default col-sm-12 col-xs-12">
							<div class="container">
								<div class="navbar-header">
									<a href="/" class="navbar-logo"><img src="/images/logo.png" alt="Whitesquare logo"></a>
									<button type="button" class="navbar-toggle " data-toggle="collapse" data-target=".navbar-collapse">
										<span class="icon-bar"></span>
										<span class="icon-bar"></span>
										<span class="icon-bar"></span>
									</button>
								</div>
								<div class="collapse navbar-collapse">
									<?php
									$this->widget('zii.widgets.CMenu', array(
										'htmlOptions' => array( 'class' => 'nav navbar-nav'),
										'items' => array(
											array('label' => 'Home', 'url' => array('/site/index')),
											array('label' => 'About', 'url' => array('/site/page', 'view' => 'about')),
											array('label' => 'Contact', 'url' => array('/site/contact')),
											array('label' => 'News', 'url' => array('tblNews/index')),
											array('label' => 'Login', 'url' => array('/site/login'), 'visible' => Yii::app()->user->isGuest),
											array('label' => 'Logout (' . Yii::app()->user->name . ')', 'url' => array('/site/logout'), 'visible' => !Yii::app()->user->isGuest)
										),
									));
									?>
								</div>

							</div>


						</div>
					</div>
				</div>
			</nav>
			<div class="container-fluid back-to-top navbar-fixed-bottom">
				<button class="btn btn-default" id="btn-back-to-top"><span class="glyphicon glyphicon-chevron-up"></span></button>
			</div>
			<div class="row">
				<?php echo $content; ?>
			</div>
		</div>
		<footer>
			<div class="container-fluid footer mrg-top col-md-12">
				<div class="container">
					<div class="col-md-3 col-md-offset-5 mrg-top">
						<img src="/images/footer-logo.png" class="footer-logo">
						<p class="copy">Copyrigth &copy; Some copyright olololo azazaza</p>
					</div>
				</div>
			</div>
		</footer>
	</body>
		
	<script type="text/javascript" src="/js/jquery-2.1.1.js"></script>
	<script type="text/javascript" src="/js/work.js"></script>
	<script src="/js/bootstrap.min.js"></script>
</html>