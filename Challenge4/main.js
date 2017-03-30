var a=5,b=6,c=7;
var s=(a+b+c)/2;
var area=Math.sqrt(s*(s-a)*(s-b)*(s-c));
document.getElementById("p").innerHTML="Area of a triangle where lengths of the three of its sides are 5, 6, 7 is : "+area;
