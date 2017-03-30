function ctof(){
	var n1=document.getElementById("n1").value;
	var ans=32+((9/5)*n1);
	document.getElementById("n2").value=ans;
}
function ftoc(){
	var n2=document.getElementById("n2").value;
	var ans=5*((n2-32)/9);
	document.getElementById("n1").value=ans;
}
