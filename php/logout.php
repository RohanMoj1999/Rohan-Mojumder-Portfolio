<?php
	session_start();
	$_SESSION['uid']='';
	session_destroy();
	header("location:../html/index.html");
?>