<?php
session_start();
if(isset($_SESSION['uid']) && $_SESSION['uid']!='')
	{
	include("connection.php");
	$qry="select *from register";
	$rs = mysqli_query($con, $qry);
  
?>
<!doctype html>
<html>

<head>
  <title>MAIN PAGE</title>
  <link href="../css/style1.css" type="text/css" rel="stylesheet">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Tourney:wght@300&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400" rel="stylesheet" />
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <script src="https://kit.fontawesome.com/a076d05399.js" crossorigin="anonymous"></script>
</head>

<body>
  <div class="slider">
    <div class="load"></div>
    <div class="content">
      <nav>
        <label class="logo">TESTSPY.COM</label>
        <ul>
          <li><a href="#">HOME</a>
          <li><a href="#">COURSES <img src="../icons/arrow1.png" width="10" height="10" style="transform: rotate(90deg)"></a>
            <ul>
              <li><a href="../html/aptibeg.html">APTITUDE <img src="../icons/arrow1.png" width="10" height="10"></a>
              </li>
              <li><a href="../html/verbeg.html">VERBAL <img src="../icons/arrow1.png" width="10" height="10"></a>

              </li>
                <ul>
                  <!--<li><a href="#">BEGINNER</a></li>
                          <li><a href="#">ADVANCE</a></li>-->
                </ul>
              </li>
            </ul>
          <li><a href="../html/future.html">FUTURE</a>
          <li><a href="../html/contact - Copy.html">CONTACT</a>
          <li><a href="logout.php">Logout</a></li>
        </ul>
      </nav>
      <br>
      <br>
      <br>
      <br>
      <br>
      <center><h3 class="dynamic" style="color:powderblue;"><strong><?php echo 'welcome .....' . $_SESSION['uid']; ?></strong></h3></center>
      <br>
      <br><br><br><br>
      <div class="row">
        <div class="col col1">
          <h1 class="dynamic">Our soul purpose is to provide the best test materials to the students for their bright future</h1>
        </div>
        <div class="col col2">
          <h2>We Offer</h2>
          <div class="card card1">
            <h5>APTITUDE</h5>
          </div>
          <div class="card card2">
            <h5>VERBAL</h5>
          </div>
        </div>
      </div>
      <div class="reach">
        <h2>Reach us on ...</h2>
          <a href="#"><img src="../icons/fb.png" width="20" height="20"></a>
          <a href="#"><img src="../icons/insta.png" width="20" height="20"></a>
          <a href="#"><img src="../icons/twit.png" width="20" height="20"></a>
      </div>
    </div>
  </div>
</body>

</html>
<?php
}
	else
	{
	echo '<script type="text/javascript">window.location="index.html"</script>';
	}
?>