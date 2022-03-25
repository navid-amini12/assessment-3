console.log("hello world");
function handleSubmit(evt) {
	evt.preventDefault();
	console.log('form submit');
}
function showAlert(){
	const name = document.getElementById("name").value;
	const message = document.getElementById("messag").value;
	 if (name == "" || message == "") {
		 alert("Please fill out your Name and Message")
	 }else {
		 alert("Your message has been successfully submitted. You will hear from us in 2 working days. Thank you ")
	 }
}

let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);
var hoverOver = document.getElementById("imageButton");
hoverOver.addEventListener("mouseover", hoverFunction);

function hoverFunction() {
  alert("Hey thanks for hovering over our image. You are superb")
}
