var name = document.getElementById('txtName');
var age = document.getElementById('txtAge');
var weight = document.getElementById('txtWeight');
var hight = document.getElementById('txtHight');
var rate = document.getElementById('Rate');
var gender = document.getElementById('gender');
var form = document.getElementById('form');

var rate_string = "";
var gender_string = "";
var StaticRateBmr ;


var BMI = "";
var BMI_STATUS = "";
var BMR = "";
var MIN_WEIGHT = "";
var MAX_WEIGHT = "";

form.addEventListener('submit', function(event){

  if(rate.value=="Very low: just work in office or home working."){
    rate_string = "1";
    StaticRateBmr = 404.00;
  }else if(rate.value == "Low: 1 - 3 day have activity."){
    rate_string = "2";
    StaticRateBmr = 755.50;
  }else if(rate.value == "Normal: 3 - 5 day have activity."){
    rate_string = "3";
    StaticRateBmr = 1111.00;
  }else if(rate.value == "Hard: 5 - 7 day have activity."){
    rate_string = "4";
    StaticRateBmr = 1464.50;
  }else if(rate.value == "Very Hard: 7 day activity with hight pressure."){
    rate_string = "5";
    StaticRateBmr = 1818;
  }else{
    rate_string = "";
  }

  if(gender.value == "Male"){
    gender_string = "1";
  }else if(gender.value == "Female"){
    gender_string = "2";
  }else{
    gender_string = "";
  }

  BMI = (parseFloat(weight.value) / ((parseFloat(hight.value) / 100) * (parseFloat(hight.value) / 100)) );

  if(gender_string == "1"){
    BMR = 66 + (13.75 * parseFloat(weight.value)) + (5.003 * parseFloat(hight.value)) - (6.755 * parseFloat(age.value));
  }else if(gender_string == "2"){
    BMR = 655 + (9.563 * parseFloat(weight.value)) + (1.850 * parseFloat(hight.value)) - (4.676 * parseFloat(age.value));
  }

  if(gender_string == "1"){
      MIN_WEIGHT = 18.5 * (parseFloat(hight.value) / 100 * parseFloat(hight.value) / 100);
      MAX_WEIGHT = 25 * (parseFloat(hight.value) / 100 * parseFloat(hight.value) / 100);
  }else if(gender_string == "2"){
      MIN_WEIGHT = 18.5 * (parseFloat(hight.value) / 100 * parseFloat(hight.value) / 100);
      MAX_WEIGHT = 25 * (parseFloat(hight.value) / 100 * parseFloat(hight.value) / 100);
  }

  if(BMI < 20){
      document.getElementById('bmiStatus').innerText = "BMI STATUS : Your weight is under normal";
  }else if(BMI > 20 && BMI < 25){
      document.getElementById('bmiStatus').innerText = "BMI STATUS : Your weight is normal";
  }else if(BMI > 25){
      document.getElementById('bmiStatus').innerText = "BMI STATUS : Your weight is more normal";
  }else{
      document.getElementById('bmiStatus').innerText = "BMI STATUS : -";
  }

  document.getElementById('bmi').innerText = "BMI : " + BMI;
  document.getElementById('bmr').innerText = "BMR : " + BMR;
  document.getElementById('myWeight').innerText = "Minimus weight: " + MIN_WEIGHT + " and Maximum weight: " + MAX_WEIGHT;

  var normal_rate_calorie = 1100;
  var normal_bmr = BMR + StaticRateBmr;
  console.log(normal_bmr);

  if(rate_string == "1"){
      document.getElementById('bmrStatus').innerText = "Normal BMR : " + normal_bmr + " | " + "Lose weight : " + (normal_bmr - normal_rate_calorie) + " | " + "Gain weight : " + (normal_bmr + normal_rate_calorie) ; 
  }else if(rate_string == "2"){
      document.getElementById('bmrStatus').innerText = "Normal BMR : " + normal_bmr + " | " + "Lose weight : " + (normal_bmr - normal_rate_calorie) + " | " + "Gain weight : " + (normal_bmr + normal_rate_calorie) ;
  }else if(rate_string == "3"){
      document.getElementById('bmrStatus').innerText = "Normal BMR : " + normal_bmr + " | " + "Lose weight : " + (normal_bmr - normal_rate_calorie) + " | " + "Gain weight : " + (normal_bmr + normal_rate_calorie) ;
  }else if(rate_string == "4"){
      document.getElementById('bmrStatus').innerText = "Normal BMR : " + normal_bmr + " | " + "Lose weight : " + (normal_bmr - normal_rate_calorie) + " | " + "Gain weight : " + (normal_bmr + normal_rate_calorie) ;
  }else if(rate_string == "5"){
      document.getElementById('bmrStatus').innerText =  "Normal BMR : " + normal_bmr + " | " + "Lose weight : " + (normal_bmr - normal_rate_calorie) + " | " + "Gain weight : " + (normal_bmr + normal_rate_calorie) ;
  }else{
      document.getElementById('bmrStatus').innerText = "BMR : - ";
  }






  event.preventDefault();
}
);
