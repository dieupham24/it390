function checking() 
{	

	var productID = document.getElementById("productID").value;
	var productType = document.getElementById("productType").value;
	var productName = document.getElementById("productName").value;
	var productPrice = document.getElementById("productPrice").value;
	var productDescription = document.getElementById("productDescription").value;
	var api = "https://5zwmpqna5g.execute-api.us-east-1.amazonaws.com/dev/select";
	
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
		
			var myObj = JSON.parse(this.responseText);

			// if exiting an object, out put "entered ID is already exist! Enter another one"
			// if there is no returned object, call show() function
			if (myObj.errorMessage != null && myObj.errorMessage != "undefined" ) {
				insert(params);
			} else {
				//document.getElementById("productID").innerHTLML = "The productID: " + productID + "must be unique. You must enter a different productID.";
				document.getElementById("outPut").innerHTML  = "ProductID must be unique";
		
			}	
			
		}
	};
	xhttp.open("POST", api, false);
	
	var param1 = {
		"productID":productID
	}
	
	var params = {
		"productID":productID,
		"productType":productType,
		"productName":productName,
		"productPrice":productPrice,
		"productDescription":productDescription
	}
	xhttp.send(JSON.stringify(param1));
			
}

function insert(params)
{
	
	var api = "https://c3z2rnfxk2.execute-api.us-east-1.amazonaws.com/Insert/insert";
	
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			document.getElementById("myForm").reset();
			document.getElementById("outPut").innerHTML  = "Successfully insert a product";

		}
	};
	
	xhttp.open("POST", api, false);
	xhttp.send(JSON.stringify(params));

}