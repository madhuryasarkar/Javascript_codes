
var format = ["12/16/1990","07/13/1993"];

for(var i=0;i<format.length;i++){
	
var date = new Date(format[i]);
var noo = date.getDay();
//console.log(date);
console.log(noo);

switch(noo){
	case 1: console.log("Monday"); break;
	case 2: console.log("Tuesday"); break;
	case 3: console.log("Wednesday"); break;
	case 4: console.log("Thursday"); break;
	case 5: console.log("Friday"); break;
	case 6: console.log("Saturday"); break;
	case 0: console.log("Sunday"); break;
	

}

}
