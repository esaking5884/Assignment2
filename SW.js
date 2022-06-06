/*global $*/

let timeErr=0;
let startTime=Number(new Date());
let temp=0;
var counting;

function timeWrite(startTime){
  timeErr=(Number(new Date())-startTime)/1000+temp;
  let hour=String(Math.floor(timeErr/3600));
  let min=String(Math.floor(timeErr%3600/60));
  let sec=String(Math.floor(timeErr%60));
  let msec=String(Math.floor(timeErr*10%10));
  if(hour<10){
    hour="0"+hour;
  }
  if(min<10){
    min="0"+min;
  }
  if(sec<10){
    sec="0"+sec;
  }
  $(".hour").text(hour);
  $(".min").text(min);
  $(".sec").text(sec);
  $(".msec").text(msec);
}

$(document).ready(function () {
  $(".startButton").click(function(){
    startTime=Number(new Date());
    counting=setInterval("timeWrite(startTime)",100);
    document.getElementById("startId").disabled = true;
    document.getElementById("stopId").disabled = false;
  });
  $(".stopButton").click(function(){
    clearInterval(counting);
    document.getElementById("startId").disabled = false;
    temp=timeErr;
  });
  $(".resetButton").click(function(){
    clearInterval(counting);
    document.getElementById("startId").disabled = false;
    $(".hour").text("00");
    $(".min").text("00");
    $(".sec").text("00");
    $(".msec").text("0");
    temp=0;
  });
});
