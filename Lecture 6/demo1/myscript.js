var vall = 5;
var val2 = 4;
var myName = "Ticoalu, Alexander John";

document.getElementById("my-btn").addEventListener("click",
function () {
myFunction (myName, vall, val2);
});

function myFunction (name, a, b) {
	var value = a * b;
	var join = name+": "+value;
	document.getElementById("value-demo").innerHTML = join;
}