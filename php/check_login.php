<?php
session_start();
	//include('header.php');
	//creating db connection
	include("connection.php");
	
	$name=$_POST['user'];
	$password=$_POST['password'];
	
	//creating dynamic query
	$qry="select * from register where Name='".$name."' AND Password='".$password."' ";
	
	
	//Executing query
	$rs = mysqli_query($con, $qry);
	

		if(mysqli_num_rows($rs) > 0)
		{
			$_SESSION['uid']=$name;
			echo '<script type="text/javascript">window.location="home.php"</script>';    
		}
		else 
		{
			echo '<script type="text/javascript">alert("Invalid Username/Password");</script>';
			echo '<script type="text/javascript">window.location="../html/Login.html"</script>';
		}
?>