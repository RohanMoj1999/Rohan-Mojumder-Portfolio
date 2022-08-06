<?php
	//creating db connection
	include("connection.php");
	
	//Capturing data from post/get call
	$uid=$_POST['user'];
	$name=$_POST['email'];
	$state=$_POST['password'];
	
	
	$sql="insert into register (Name,Mail,Password)  values('".$uid."','".$name."','".$state."')  ";
	//echo $sql;
	
	//Executing query
	if (mysqli_query($con, $sql)) 
	{
  		echo '<script type="text/javascript">alert("New account create successfully");</script>';
		echo '<script type="text/javascript">window.location="../html/Login.html";</script>';
	} 
	else 
	{
  		echo "Error: " . $sql . "<br>" . mysqli_error($con);
	}
?>
