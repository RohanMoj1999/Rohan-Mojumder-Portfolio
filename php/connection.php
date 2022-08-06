<?php

	$servername="localhost";
	$username="exposys";
	$password="exposys@21";
	$dbname="exposys";
	// Create connection
	$con= mysqli_connect($servername, $username, $password, $dbname);
	
	
	// Check connection
	if (!$con) 
	{
  		die("Connection failed: " . mysqli_connect_error());
	}
	/*echo "Connect successfully";*/
?>
	