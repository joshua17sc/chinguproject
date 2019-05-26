var tmonth=["January","February","March","April","May","June","July","August","September","October","November","December"];

function getHour(){
var d=new Date();
var nmonth=d.getMonth(),ndate=d.getDate(),nyear=d.getFullYear();

var nhour=d.getHours(),nmin=d.getMinutes(),ap;
if(nhour==0){ap="AM";nhour=12;}
else if(nhour<12){ap="AM";}
else if(nhour==12){ap="PM";}
else if(nhour>12){
  ap="PM";
  nhour-=12;
}

if(nmin<=9) nmin="0"+nmin;

var clocktext=nhour+":"+nmin;
document.getElementById('clockhour').innerHTML=clocktext;
var clockampm=ap;
document.getElementById('clockampm').innerHTML=clockampm;
var clockday=tmonth[nmonth]+" "+ndate+", "+nyear;
document.getElementById('clockday').innerHTML=clockday;

setTimeout(getHour, 1000);
}

getHour();
