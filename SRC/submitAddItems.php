<?php
	include_once 'config.php';
?>

<?php
	$name=$_POST["field2"];
	$code=$_POST["field6"];
	$price=$_POST["field4"];
	$qty=$_POST["field5"];
	$des=$_POST["field3"];

	$sql="insert into item(Item_Id,Name,Item_Description,price,quantity,Item_code)values('','$name','$des','$price','$qty','$code')";

	if(mysqli_query($conn,$sql)){
		echo"<script>alert('Record inserted successfully!!')</script>";
		header("Location:index.php");
	}
	else{
		echo"<script>alert(Error inserting Records</script>";
	}

	mysqli_close($conn);

?>