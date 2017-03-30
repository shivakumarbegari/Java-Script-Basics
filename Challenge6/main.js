var year=window.prompt("Enter a year to determine whether its a leap yeat or not.");
if(year%4===0||(!year%100&&!year%400)){
	document.getElementById("p").innerHTML="The Year : "+year+" is a Leap year";
}
else{
	document.getElementById("p").innerHTML="The Year : "+year+" is a not a Leap year";	
}
