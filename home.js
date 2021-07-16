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
var database=firebase.database();

function checkforblank () {
	if (document.getElementById('comment').value == "") {
		alert('message cannot be empty');
		document.getElementById('comment').style.borderColor = "red";
		return false;
	}
}

function sendMessage() {
  var email=document.getElementById("email").value;
  var name=document.getElementById("name").value;
  var message=document.getElementById("message").value;

  var newMessageKey=database.ref().child('comments').push().key;
  database.ref('comments/'+newMessageKey+'/Email').set(email);
  database.ref('comments/'+newMessageKey+'/Name').set(name);
  database.ref('comments/'+newMessageKey+'/message').set(message);
}


document.getElementById('contactForm').addEventListener('submit',submitForm)

function submitForm(e) {
  e.preventDefault();
}

document.querySelector('.alert').getElementsByClassName.display='block';

function hideAlert() {
  document.querySelector('.alert').getElementsByClassName='none';
}

setTimeout(hideAlert,3000);
