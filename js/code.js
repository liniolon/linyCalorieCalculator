var name = document.getElementById('txtName');
var age = document.getElementById('txtAge');
var weight = document.getElementById('txtWeight');
var hight = document.getElementById('txtHight');
var rate = document.getElementById('Rate');

var form = document.getElementById('form');

var rate_string = "";

form.addEventListener('submit', function(event){

  if(rate.value=="Very low: just work in office or home working."){
    rate_string = "1";
  }else if(rate.value == "Low: 1 - 3 day have activity."){
    rate_string = "2";
  }else if(rate.value == "Normal: 3 - 5 day have activity."){
    rate_string = "3";
  }else if(rate.value == "Hard: 5 - 7 day have activity."){
    rate_string = "4";
  }else if(rate.value == "Very Hard: 7 day activity with hight pressure."){
    rate_string = "5";
  }else{
    rate_string = "";
  }

  console.log(rate_string);
  event.preventDefault();
}
);
