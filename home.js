//Heading time interval
window.onload=function(){getTime();}  
function getTime(){  
var today=new Date();  
var h=today.getHours();  
var m=today.getMinutes();  
var s=today.getSeconds();  
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
var dayNames = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var maleNames = ["Kwesi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"]
var femaleNames = ["Akosua","Adjoa","Abena","Ekua","Aba","Efua","Amba"]

var database=firebase.database();

function checkforblank () {
	if (document.getElementById('comments').value == "") {
		alert('String cannot be empty');
		document.getElementById('comments').style.borderColor = "red";
		return false;
	}
}

/*==========================================================================*/

function validate() {
  var genders = document.getElementById('gender');
  if(document.validForm.day.value == "") || document.validForm.day.value.length != 2 || document.validForm.day.value > 31 || {
    alert("Please provide a valid birth date!");
    document.validForm.day.focus();
    return false;
  }
  else if(document.validForm.month.value == "") || isNaN(document.validForm.month.value) || document.validForm.month.length != 9 || document.validForm.month.value > 12 || {
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



/*function validate() {
  var genders = document.getElementById("gender");
  if(document.validForm.day.value =="") || (document.validForm.day.value) ||
  document.validForm.day.value.length != 2 {
  alert( "Please provide a valid birth-date!" );
  document.validForm.day.focus();
  return false;
  }
  else if(document.validForm.month.value == "") || isNaN(document.validForm.month.value) ||
  document.validForm.month.value.length != 9 || document.validForm.month.value > 12 || {
  alert( "Please pick your month of birth!" );
  return false;
  }
  else if(document.validForm.year.value == "") || document.validForm.year.value != 4 || {
    alert( "Please provide a valid Year of Birth" );
    document.validForm.year.focus() ;
    return false;
  }
  else if(genders[0].checked==false && genders[1].checked==false) {
    alert("You MUST select male or female");
    return false;
  }
  else{
    return true
  }
}*/

document.getElementById('btn').addEventListener('submit',submitForm)

function submitForm(e) {
  e.preventDefault();
}

document.querySelector('.alert').getElementsByClassName.display='block';

function hideAlert() {
  document.querySelector('.alert').getElementsByClassName='alert';
}

setTimeout(hideAlert,3000);
/*=====================================================================================*/
function checkButton() {
  var getSelectedValue = document.querySelector('input[name="gender"]:checked');
  var isvalid = checked < 0;

  if(getSelectedValue != null) {
    document.getElementById("disp").innerHTML
    = getSelectedValue.value
    + "Gender is selected"
  }
  else {
    document.getElementById("error").innerHTML
    = "*You have not selected any gender"
  }
  else {
    document.getElementById("error1").innerHTML
    = "*Only one gender"
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
/*=====================================================================================*/
function findName() {
  dayValue = calculateDayValue();
  getGender();
}