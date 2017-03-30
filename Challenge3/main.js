var d= new Date();
var date=d.getDate();
var mon=d.getMonth()+1;
var year=d.getFullYear();
if(date<10){
	date='0'+date;
}
if(mon<10){
	mon='0'+mon;
}
document.getElementById("p").innerHTML="Today is : " + mon + "/" + date + "/"  + year+"		(mm/dd/yyyy)";
document.getElementById("p2").innerHTML=  mon + "-" + date + "-"  + year+"		(mm-dd-yyyy)";
document.getElementById("p3").innerHTML= date+"/" + mon + "/"  + year+"		(dd/mm/yyyy)";
document.getElementById("p4").innerHTML= date+ "-" + mon + "-"  + year+"		(dd-mm-yyyy)";
