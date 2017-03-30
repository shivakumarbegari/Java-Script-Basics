for(var year=2014;year<=2050;year++){
	var date=new Date(year,0,1);
	if(date.getDay()===0){
		window.alert("1st Jan is sunday in "+year);
	}
}
