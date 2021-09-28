function loadData(name){
	if(name=="btn1"){
		document.getElementById("para").innerHTML="iphone text is displayed here.*All specifications and descriptions provided herein may be different from the actual specifications and descriptions for the product. Samsung reserves the right to make changes to this document and the product described herein, at anytime, without obligation on Samsung to provide notification of such change. All functionality, features, specifications, GUI and other product information provided in this document including, but not limited to, the benefits, design, pricing, components, performance, availability, and capabilities of the product are subject to change without notice or obligation. The contents within the screen are simulated images and are for demonstration purposes only.";
		document.getElementById("image1").src="images/iphones.jpg";
	}
	else if(name=="btn2"){
		document.getElementById("para").innerHTML="nokia text is displayed here.*All specifications and descriptions provided herein may be different from the actual specifications and descriptions for the product. Samsung reserves the right to make changes to this document and the product described herein, at anytime, without obligation on Samsung to provide notification of such change. All functionality, features, specifications, GUI and other product information provided in this document including, but not limited to, the benefits, design, pricing, components, performance, availability, and capabilities of the product are subject to change without notice or obligation. The contents within the screen are simulated images and are for demonstration purposes only.";
		document.getElementById("image1").src="images/nokiaPhone.jpg";
	}
	else if(name=="btn3"){
		document.getElementById("para").innerHTML="samsung text is displayed here.*All specifications and descriptions provided herein may be different from the actual specifications and descriptions for the product. Samsung reserves the right to make changes to this document and the product described herein, at anytime, without obligation on Samsung to provide notification of such change. All functionality, features, specifications, GUI and other product information provided in this document including, but not limited to, the benefits, design, pricing, components, performance, availability, and capabilities of the product are subject to change without notice or obligation. The contents within the screen are simulated images and are for demonstration purposes only.";
		document.getElementById("image1").src="images/samsung.jpg";
	}
	else if(name=="btn4"){
		document.getElementById("para").innerHTML="oppo text is displayed here.*All specifications and descriptions provided herein may be different from the actual specifications and descriptions for the product. Samsung reserves the right to make changes to this document and the product described herein, at anytime, without obligation on Samsung to provide notification of such change. All functionality, features, specifications, GUI and other product information provided in this document including, but not limited to, the benefits, design, pricing, components, performance, availability, and capabilities of the product are subject to change without notice or obligation. The contents within the screen are simulated images and are for demonstration purposes only.";
		document.getElementById("image1").src="images/oppo.jpg";
	}
	else{
		alert("invalid");
	}

}
/*
function loadData(name){
	switch(name){
		case "btn1":document.getElementById("para").innerHTML="iphone text is displayed here.*All specifications and descriptions provided herein may be different from the actual specifications and descriptions for the product. Samsung reserves the right to make changes to this document and the product described herein, at anytime, without obligation on Samsung to provide notification of such change. All functionality, features, specifications, GUI and other product information provided in this document including, but not limited to, the benefits, design, pricing, components, performance, availability, and capabilities of the product are subject to change without notice or obligation. The contents within the screen are simulated images and are for demonstration purposes only.";
					document.getElementById("image1").src="images/iphones.jpg"
					break;
		case "btn2":document.getElementById("para").innerHTML="nokia text is displayed here.*All specifications and descriptions provided herein may be different from the actual specifications and descriptions for the product. Samsung reserves the right to make changes to this document and the product described herein, at anytime, without obligation on Samsung to provide notification of such change. All functionality, features, specifications, GUI and other product information provided in this document including, but not limited to, the benefits, design, pricing, components, performance, availability, and capabilities of the product are subject to change without notice or obligation. The contents within the screen are simulated images and are for demonstration purposes only.";
					document.getElementById("image1").src="images/nokiaPhone.jpg"
					break;
		case "btn3":document.getElementById("para").innerHTML="samsung text is displayed here.*All specifications and descriptions provided herein may be different from the actual specifications and descriptions for the product. Samsung reserves the right to make changes to this document and the product described herein, at anytime, without obligation on Samsung to provide notification of such change. All functionality, features, specifications, GUI and other product information provided in this document including, but not limited to, the benefits, design, pricing, components, performance, availability, and capabilities of the product are subject to change without notice or obligation. The contents within the screen are simulated images and are for demonstration purposes only.";
					document.getElementById("image1").src="images/samsung.jpg"
					break;
		case "btn4":document.getElementById("para").innerHTML="oppo text is displayed here.*All specifications and descriptions provided herein may be different from the actual specifications and descriptions for the product. Samsung reserves the right to make changes to this document and the product described herein, at anytime, without obligation on Samsung to provide notification of such change. All functionality, features, specifications, GUI and other product information provided in this document including, but not limited to, the benefits, design, pricing, components, performance, availability, and capabilities of the product are subject to change without notice or obligation. The contents within the screen are simulated images and are for demonstration purposes only.";
					document.getElementById("image1").src="images/oppo.jpg"
					break;
	}
}
*/
function priceForLoop(){
	var phone = ["iphone XS = Rs 10000/=","Apple Iphone XR = Rs 5000/=","iPhone 8 = Rs 15000/=","IPhone X= Rs 25000/=","Nova 5 = Rs 10000","Nova 5 pro = Rs8000","P 30 Lite = Rs 80000/=","Z 5 Pro = Rs 90000/=","K9 = Rs 18000/=","K8 Plus = Rs 10000/=","3.1 Plus = Rs 36000/="];

	for(i = 0,len = phone.length, list="List of Average prices(using For loop)<br/>"; i<len; i++){
		list += phone[i] + "<br/>";
	}
	document.getElementById("image1").src="images/phn3.jpg";
	document.getElementById("para").innerHTML = list;
}

function priceForInLoop(){

	var phone = [];

	phone ["iphone XS" ] = "Rs 1000/=";
	phone ["Apple Iphone XR"] = "Rs 500/=";
	phone ["iPhone 8"] = "Rs 1500/=";
	phone ["IPhone X"] = "Rs 2500/=";
	phone ["Nova 5"] = "Rs 100/=";
	phone ["Nova 5 pro"] = "Rs 800/=";
	phone ["P 30 Lite" ] = "Rs 8000/=";
	phone ["Z 5 Pro"] = "Rs 9000/=";
	phone ["K9"] = "Rs 1800/=";
	phone ["K8 Plus" ] ="Rs 100/=";
	phone ["3.1 Plus"] = "Rs 360/=";

	var list = "List Average Prices (using For In Loop)<br/>";

	for (var item in phone) {
		list += item + " : " + phone[item] + "<br/>";
	}
	document.getElementById("image1").src="images/phn2.jpg";
	document.getElementById("para").innerHTML = list;
}

function priceHigher(){

	var phone = [];

	phone ["iphone XS" ] = 1000;
	phone ["Apple Iphone XR"] = 500;
	phone ["iPhone 8"] = 1500;
	phone ["IPhone X"] =  2500;
	phone ["Nova 5"] = 100;
	phone ["Nova 5 pro"] =  800;
	phone ["P 30 Lite" ] =  8000;
	phone ["Z 5 Pro"] =  9000;
	phone ["K9"] = 1800;
	phone ["K8 Plus" ] =100;
	phone ["3.1 Plus"] = 360;

	var HighPrice = "List of Higher cost mobile phone<br/>";

	for (var item in phone) {
		if (phone[item] > 1000) {
			HighPrice += item + " : " + phone[item] + "<br/>";
		}	
	}
	document.getElementById("image1").src="images/phn3.jpg";
	document.getElementById("para").innerHTML = HighPrice;
}

function priceLower(){

	var phone = [];

	phone ["iphone XS" ] = 1000;
	phone ["Apple Iphone XR"] = 500;
	phone ["iPhone 8"] = 1500;
	phone ["IPhone X"] =  2500;
	phone ["Nova 5"] = 100;
	phone ["Nova 5 pro"] =  800;
	phone ["P 30 Lite" ] =  8000;
	phone ["Z 5 Pro"] =  9000;
	phone ["K9"] = 1800;
	phone ["K8 Plus" ] =100;
	phone ["3.1 Plus"] = 360;

	var LowPrice = "List of Lower cost mobile phone<br/>";

	for (var item in phone) {
		if (phone[item] < 1000) {
			LowPrice += item + " : " + phone[item] + "<br/>";
		}	
	}
	document.getElementById("image1").src="images/phn1.jpg";
	document.getElementById("para").innerHTML = LowPrice;
}
/*registration form*/

/*check password*/
function checkpassword(){
	if (document.getElementById("pwd").value != document.getElementById("cnfrmpwd").value) {
		alert("password mismatch!");
		return false;
	}
	else{
		alert("Success");
		return true;
	}
}
/*checkBox*/
function enableButten(){
	if (document.getElementById("checkbox").checked) {
		document.getElementById("submitBtn").disabled=false;
	}
	else{
		document.getElementById("submitBtn").disabled=true;
	}
}