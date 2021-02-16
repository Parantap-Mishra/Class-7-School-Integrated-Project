function sayHello(){
	var name = document.getElementById("name").value;
	var Class = document.getElementById("class").value;
	if (Class >= 12){
		var message = "<h2>Hello " + name + "! You must be finding a university right? Well if yes then this is the perfect website for you!</h2>"
		var country = document.getElementById("country");
		country.style.display = "block";
	}
	else{
		var message ="<h2>Hello " + name + "! It is still not your time for finding universities, so this is the wrong website for you.</h2>"
	}
	document.getElementById("sayingHello").innerHTML = message;
	var clear = document.getElementById("clear");
	clear.style.display = "block";
}

function removeDiv(btnstate){
	var eDiv = document.getElementById("clear");
	eDiv.parentNode.removeChild(eDiv);
}
function USA(){
	document.getElementById("first").textContent = "M.I.T.";
	document.getElementById("second").textContent = "Michigan University";
	document.getElementById("third").textContent = "Cornell University";
	var college = document.getElementById("college");
	College.style.display = "block";
}
function Singapore(){
	document.getElementById("first").textContent = "NUS";
	document.getElementById("second").textContent = "NTU";
	document.getElementById("third").textContent = "SMU";
	var college = document.getElementById("college");
	College.style.display = "block";
}
function Canada(){
	document.getElementById("first").textContent = "Toronto";
	document.getElementById("second").textContent = "McGill";
	document.getElementById("third").textContent = "Waterloo";
	var college = document.getElementById("college");
	College.style.display = "block";
}
function country(){
	var country = document.getElementById("Country").value;
	if (country == "USA"){
		USA();
	}
	if (country == "Singapore"){
		Singapore();
	}
	if (country == "Canada"){
		Canada();
	}
}
//////////////////////////////////////////////////////////////

function result(){
	var percent = document.getElementById("percent").value;
	console.log(percent)
	var colleges = document.getElementById("college").value;
	if (colleges == "M.I.T."){
		if (percent >= 99){
			var print = "<h2>Congrats, you are selected!!</h2>"
		}
		else{
			var print = "<h2>Sorry, You didn't get selected!</h2>"
		}
	document.getElementById("final").innerHTML = print;
	}
	if (colleges == "Michigan University"){
		if (percent >= 90){
			var print = "<h2>Congrats, you are selected!!</h2>"
		}
		else{
			var print = "<h2>Sorry, You didn't get selected!</h2>"
		}
	document.getElementById("final").innerHTML = print;
	}
	if (colleges == "Cornell University"){
		if (percent >= 95){
			var print = "<h2>Congrats, you are selected!!</h2>"
		}
		else{
			var print = "<h2>Sorry, You didn't get selected!</h2>"
		}
	document.getElementById("final").innerHTML = print;
	}
	if (colleges == "NUS"){
		if (percent >= 96){
			var print = "<h2>Congrats, you are selected!!</h2>"
		}
		else{
			var print = "<h2>Sorry, You didn't get selected!</h2>"
		}
	document.getElementById("final").innerHTML = print;
	}
	if (colleges == "NTU"){
		if (percent >= 91){
			var print = "<h2>Congrats, you are selected!!</h2>"
		}
		else{
			var print = "<h2>Sorry, You didn't get selected!</h2>"
		}
	document.getElementById("final").innerHTML = print;
	}
	if (colleges == "SMU"){
		if (percent >= 85){
			var print = "<h2>Congrats, you are selected!!</h2>"
		}
		else{
			var print = "<h2>Sorry, You didn't get selected!</h2>"
		}
	document.getElementById("final").innerHTML = print;
	}
	if (colleges == "Toronto"){
		if (percent >= 90){
			var print = "<h2>Congrats, you are selected!!</h2>"
		}
		else{
			var print = "<h2>Sorry, You didn't get selected!</h2>"
		}
	document.getElementById("final").innerHTML = print;
	}
	if (colleges == "McGill"){
		if (percent >= 85){
			var print = "<h2>Congrats, you are selected!!</h2>"
		}
		else{
			var print = "<h2>Sorry, You didn't get selected!</h2>"
		}
	document.getElementById("final").innerHTML = print;
	}
	if (colleges == "Waterloo"){
		if (percent >= 87){
			var print = "<h2>Congrats, you are selected!!</h2>"
		}
		else{
			var print = "<h2>Sorry, You didn't get selected!</h2>"
		}
	document.getElementById("final").innerHTML = print;
	}
}
function college(){
	percentage.style.display = "block";
}
function Alert(){
		alert("Please do not enter the '%' sign")
}