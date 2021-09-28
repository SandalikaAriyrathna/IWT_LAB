<!DOCTYPE html>

<html>
	<head>

	<!--add a title (a) -->
	<title >My Shopping Cart</title>

	<!--Connect the style sheet (lab 3)-->
	<link rel="stylesheet" type="text/css"  href="styles/styles.css">
	
	</head>
	
	<body>
	
	<center>

	<!-- add a logo (b) -->
	<img class="logo" src="images/cart.png"width="200px" height="200px" alt="Shopping Cart Image">
	
	<!-- add a header (c)-->
	<h1><pa style="color:yellow">Sandu Mobiles</pa></h1>
	
	<!-- add a sub-header (c) -->
	<h3 id="header"><pa style="color:darkorange"> The Online Shopping Store</pa> </h3>
	</center>
	
	<!-- add a horizontal line (d)-->
	<hr id="test" />
	
	<!-- add a horizontal menu (e) -->
	<ul class="menu">
		<li class="menu"> <a href="index.html">Home</a></li>
		<li class="menu"> <a href="news.html">News</a></li>
		<li class="menu"> <a href="registration.html">Contact</a></li>
		<li class="menu"> <a href="AboutUs.php">About Us</a></li>
	</ul>
<center>
	<?php
	//2
		define("companyName","Sandu Mobiles");
		echo "<h2> About ". companyName."</h2>";

		//3
		echo "<h4> This page is mainly about the ".companyName. " web site</h4>";

		//4
		$sold=75;
		$total=100;

		echo"<h2> Shopping cart details</h2><br>";

		//5
		echo"<h2><table border='1' width='50%'><tr><td>Number of sold items</td><td>".$sold."</td></tr><tr><td>Total number of items</td><td>".$total."</td></tr></table></h2>";

		//6
		function findPercentage(){
			$GLOBALS['percentage']=( $GLOBALS['sold'] / $GLOBALS['total'] ) * 100;
		}
			
		//7
		findPercentage();

		//8
		echo"<h3>Percentage of sold item : ". $percentage."%<br></h3>";

		//9
		$today="Today is ".date("l");
		echo"<h3>".$today."</h3>";

		//9.a
		$c=date("Y-m-d");
		$currentDay=date_create($c);
		$shipDay=date_create("2019-09-21");

		$diff=date_diff($currentDay,$shipDay);
		echo "<h4>Number of days remaining for shipping : ".$diff->format("%R%a days")."</h4>";

		if ($diff->format("%R%a") > 0) {
			$status = "To be shipped";
		}
		else{
			$status = "Shipped";
		}
		echo "<h4><br>For ".$c." 24 items has ".$status."</h4>";
	?>
</center>

	<!-- add a horizontal line (d)-->
	<hr id="test" >
	
	<!-- add a footer (g)--> 
	<center>
		<h4 id="footer"><pa style="color:yellow">Created by : Dilini Sandalika</pa></h5>
		<a id="footer" href="https://courseweb.sliit.lk/">Visit to Our Course</a>
	</center>
	
	</body>
</html>