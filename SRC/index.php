<?php
	include_once 'config.php';
?>

<!DOCTYPE html>

<html>
	<head>
	<!--add a title (a) -->
	<title >My Shopping Cart</title>

	<!--Connect the style sheet (lab 3)-->
	<link rel="stylesheet" type="text/css"  href="styles/styles.css">
	<style>

	button{
	margin: 8px 4px 4px 4px;
	width: 15%;
	height: 35px;
	background-color:lightgreen;
	font-size: 16px;
	font-weight: bold;}
	button{

	hover:background-color: pink;
}

	</style>
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
<br><br>
<center>
	<button><a href="addItems.html">Add Items</a></button><br><br>
</center>


	<center>
	<div>

	<!-- add a table (f)-->
	<table class="productData tbl" border="2" width="75%"  style="border-style: groove; border-color: darkblue">
	
		<tr>
			<th class="col1"> Item ID</th>
			<th class="col1"> Item Name</th>
			<th class="col1"> Item Code</th>
			<th class="col2"> Description</th>
			<th class="col1"> Price</th>
			<th class="col1">Quantity</th>
		</tr>
		
		<?php
		$sql="select * from item";
		$result=$conn->query($sql);

		if ($result->num_rows>0) {
			while($row=$result->fetch_assoc()){
				echo"<tr><td>".$row["Item_Id"]."</td>,<td>".$row["Name"]."</td>,<td>".$row["Item_code"]."</td>,<td>".$row["Item_Description"]."</td>,<td>".$row["price"]."</td>,<td>".$row["quantity"]."</td></tr>";
			}
		}
		else{
			echo"0 results";
		}
		echo"</table>";

		$conn->close();
		?>

	
</div>
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