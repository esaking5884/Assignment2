/*global $*/
let memory = "";
let temp = "";
let flag = "";
function cal(flag, m, t){
  let ans;
  if(flag == "plu"){
    ans = Number(m) + Number(t);
  }else if(flag == "min"){
    ans = m - t;
  }else if(flag == "mul"){
    ans = m * t;
  }else if(flag == "div"){
    ans = m / t;
  }else{
    ans = t;
  }
  return ans;
}
$(document).ready(function(){
  $("#NINE").click(function(){
    temp+="9";
    $("#DISPLAY").text(temp);
  });
  $("#EIGHT").click(function(){
    temp+="8";
    $("#DISPLAY").text(temp);
  });
  $("#SEVEN").click(function(){
    temp+="7";
    $("#DISPLAY").text(temp);
  });
  $("#SIX").click(function(){
    temp+="6";
    $("#DISPLAY").text(temp);
  });
  $("#FIVE").click(function(){
    temp+="5";
    $("#DISPLAY").text(temp);
  });
  $("#FOUR").click(function(){
    temp+="4";
    $("#DISPLAY").text(temp);
  });
  $("#THREE").click(function(){
    temp+="3";
    $("#DISPLAY").text(temp);
  });
  $("#TWO").click(function(){
    temp+="2";
    $("#DISPLAY").text(temp);
  });
  $("#ONE").click(function(){
    temp+="1";
    $("#DISPLAY").text(temp);
  });
  $("#ZERO").click(function(){
    if(temp != ""){
      temp+="0";
    }
    $("#DISPLAY").text(temp);
  });
  $("#POINT").click(function(){
    if(temp == ""){
      temp += "0.";
    }else{
      temp+=".";
    }
    $("#DISPLAY").text(temp);
  });
  $("#AC").click(function(){
    temp="";
    memory="";
    $("#DISPLAY").text(temp);
  });
  $("#PLMI").click(function(){
    if(temp != ""){
      temp=-Number(temp);
      $("#DISPLAY").text(temp);
    }
  });
  $("#PERCENT").click(function(){
    temp=Number(temp)/100;
    $("#DISPLAY").text(temp);
  });
  $("#DIVISION").click(function(){
    if(temp == ""){
      flag = "div";
      return;
    }
    if(memory != ""){
      temp = cal(flag, memory, temp);
    }
    flag = "div";
    memory=temp;
    temp="";
    $("#DISPLAY").text(memory);
  });
  $("#MULTIPLE").click(function(){
    if(temp == ""){
      flag = "mul";
      return;
    }
    if(memory != ""){
      temp = cal(flag, memory, temp);
    }
    flag = "mul";
    memory=temp;
    temp="";
    $("#DISPLAY").text(memory);
  });
  $("#MINUS").click(function(){
    if(temp == ""){
      flag = "min";
      return;
    }
    if(memory != ""){
      temp = cal(flag, memory, temp);
    }
    flag = "min";
    memory=temp;
    temp="";
    $("#DISPLAY").text(memory);
  });
  $("#PLUS").click(function(){
    if(temp == ""){
      flag = "plu";
      return;
    }
    if(memory != ""){
      temp = cal(flag, memory, temp);
    }
    flag = "plu";
    memory=temp;
    temp="";
    $("#DISPLAY").text(memory);
  });
  
  $("#EQ").click(function(){
    temp = cal(flag, memory, temp);
    memory = temp;
    $("#DISPLAY").text(temp);
    flag = "";
  });
  
  
});
