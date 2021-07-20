//Heading time interval
window.onload=function(){getTime();}  
function getTime(){  
var today=new Date();  
var h=today.getHours();  
var m=today.getMinutes();  
var s=today.getSeconds();
function getDate()
var date=new Date();
var day=date.getDate();  
var month=date.getMonth()+1;  
var year=date.getFullYear();  
document.write("<br>Date is: "+day+"/"+month+"/"+year); 
// add a zero in front of numbers<10  
m=checkTime(m);  
s=checkTime(s);  
document.getElementById('text').innerHTML=h+":"+m+":"+s;  
setTimeout(function(){getTime()},1000);  
}  
//setInterval("getTime()",1000);//another way  
function checkTime(i){  
if (i<10){  
  i="0" + i;  
 }  
return i;  
}  
/*========================================================================================*/
var CC, YY, MM, DD, d, dayValue;
var dayNames = ["Sunday","Monday","Tuesday","Wednesday", "Thursday", "Friday","Saturday" ];
var maleNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw", "Kofi","Kwame"];
var femaleNames = ["Akosua","Adwoa","Abenaa","Akua"," Yaa","Afua","Ama"];

function validate() {
  var genders = document.getElementsByName("gender");
  if( document.myForm.year.value == "" || document.myForm.year.value.length !=4 || document.myForm.year.value >2100 || document.myForm.year.value <=1900) {
     alert( "Please provide a valid year of birth! eg 2019" );
     document.myForm.year.focus() ;
     return false;
  }
  else if( document.myForm.month.value == "" || isNaN( document.myForm.month.value ) || 
  document.myForm.month.value.length != 2 || document.myForm.month.value > 12  || document.myForm.month.value <= 0){
     alert( "Please provide your month of birth! between 1 and 12" );
     document.myForm.month.focus() ;
     return false;
  }
  else if( document.myForm.date.value == "" || isNaN( document.myForm.month.value ) || 
  document.myForm.month.value.length != 2|| document.myForm.date.value > 31 || document.myForm.date.value <= 0) {
     alert( "Please provide a valid date that you were born in!" );
     document.myForm.day.focus() ;
     return false;
  }
  else if(genders[0].checked==false && genders[1].checked==false ) {
      alert("You must select male or female");
      return false;
  }   
  else{
    return true ;
  }
  
}

function checkforblank () {
	if (document.getElementById('comments').value == "") {
		alert('String cannot be empty');
		document.getElementById('comments').style.borderColor = "red";
		return false;
	}
}

function calculateDayValue(){
  year = document.getElementById("year").value;
  CC = parseInt(year.substring(0,2));
  YY = parseInt(year.substring(2,4));
  MM = parseInt(document.getElementById("month").value);
  DD = parseInt(document.getElementById("date").value);
  d = ( ( (CC/4) -2*CC-1) + ( (5*YY/4) ) + ((26*(MM+1)/10) ) + DD)%7;
  console.log(d);
  return (Math.floor(d));
}

function getGender(){
  var genders = document.getElementsByName("gender");
  if(genders[0].checked == true){
    var gender = "male";
  }
  else if(genders[1].checked == true){
    var gender = "female";
  }
  else{
    return false;
  }
  switch(gender) {
    case "male":
      if (dayValue == 1) {
        alert("Your Akan name is " + maleNames[0] + "!");
      }
      else if(dayValue == 2) {
        alert("Your Akan name is " + maleNames[1] + "!");
      }
      else if(dayValue == 3) {
        alert("Your Akan name is " + maleNames[2] + "!");
      }
      else if(dayValue == 4) {
        alert("Your Akan name is " + maleNames[3] + "!");
      }
      else if(dayValue == 5) {
        alert("Your Akan name is " + maleNames[4] + "!");
      }
      else if(dayValue == 6) {
        alert("Your Akan name is " + maleNames[5] + "!");
      }
      else if(dayValue == -0) {
        alert("Your Akan name is " + maleNames[6] + "!");
      }
    break;
    case "female":
      if (dayValue == 1) {
        alert("Your Akan name is " + femaleNames[0] + "!");
      }
      else if(dayValue == 2) {
        alert("Your Akan name is " + femaleNames[1] + "!");
      }
      else if(dayValue == 3) {
        alert("Your Akan name is " + femaleNames[2] + "!");
      }
      else if(dayValue == 4) {
        alert("Your Akan name is " + femaleNames[3] + "!");
      }
      else if(dayValue == 5) {
        alert("Your Akan name is " + femaleNames[4] + "!");
      }
      else if(dayValue == 6) {
        alert("Your Akan name is " + femaleNames[5] + "!");
      }
      else if(dayValue == -0) {
        alert("Your Akan name is " + femaleNames[6] + "!");
      }
    break
    default:
  }
}
function findName(){
  dayValue = calculateDayValue();
  getGender();
}
/*========================================================================================*
var CC, YY, MM, DD, d, dayValue;
var dayNames = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var maleNames = ["Kwesi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"]
var femaleNames = ["Akosua","Adjoa","Abena","Ekua","Aba","Efua","Amba"]

// var database=firebase.database();*/

/*==========================================================================*

function validate() {
  var gender = document.getElementById('gender');
  if(document.validForm.day.value == "")
  document.validForm.day.value.length != 2 || document.validForm.day.value > 31 || {
    alert("Please provide a valid birth date!");
    document.validForm.day.focus();
    return false;
  }
  else if(document.validForm.month.value == "") isNaN(document.validForm.month.value) ||
  document.validForm.month.length != 9 || document.validForm.month.value > 12 || {
    alert("Please pick you month of birth!");
    document.validForm.month.focus();
    return false;
  }
  else if(document.validForm.year.value == "") || document.validForm.year.value > 12 || {
    alert( "Please provide a valid Year of Birth" );
    document.validForm.year.focus();
    return false;
  }
}
*
document.getElementById('btn').addEventListener('submit',submitForm)

function submitForm(e) {
  e.preventDefault();
}

document.querySelector('.alert').getElementsByClassName.display='block';

function hideAlert() {
  document.querySelector('.alert').getElementsByClassName='alert';
}

setTimeout(hideAlert,3000);
/*=====================================================================================*

/*=====================================================================================*
function findName() {
  dayValue = calculateDayValue();
  getGender();
}*/