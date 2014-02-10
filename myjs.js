
var myVar=setInterval(function(){myTimer()},1000);
function myTimer()
	{
		var d=new Date();
		var t=d.toLocaleDateString() + "  " + d.toLocaleTimeString();
		document.getElementById("time").innerHTML=t;
	}		


	
	function validateEmpty()
{	
	
		if (document.getElementById('firstname').value == "")
			{ 
			document.getElementById('firstname').style.borderColor = 'Red'; 
			alert("Please fill in your first name.");
			return false;
			}
		if (document.getElementById('lastname').value == "")
			{ 
			document.getElementById('lastname').style.borderColor = 'Red'; 
			alert("Please fill in your second name");
			return false;
			}
		if (document.getElementById('email').value == "")
			{ 
			document.getElementById('email').style.borderColor = 'Red'; 
			alert("Please fill in your email.");
			return false;
			}
		if (document.getElementById('pwd1').value == "")
			{ 
			document.getElementById('pwd1').style.borderColor = 'Red'; 
			alert("Please fill in your password.");
			return false;
			}
		if (document.getElementById('pwd2').value == "")
			{ 
			document.getElementById('pwd2').style.borderColor = 'Red'; 
			alert("Please re-enter your password.");
			return false;
			}
			
		else
		{
			fld.style.background = 'White';
		}
	
   }
   function validateEmail(email){
	var reg = /^(?:[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+\.)*[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+@(?:(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!\.)){0,61}[a-zA-Z0-9]?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!$)){0,61}[a-zA-Z0-9]?)|(?:\[(?:(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\.){3}(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\]))$/;
	if (!email.match(reg)){
		alert("Ooops, you might have entered wrong format email :(");
		return false;
		}
		return true;
   }
   //10 digits with no comma, no spaces, no punctuation and there will be no + sign in front the number 
   function phoneNumber(phone){
   var phoneReg = /^\d{10}$/;
	if (!phone.match(phoneReg)){
		alert("Ooops,we only allow phone number with 10 digits with no comma, no spaces, no punctuation and there will be no + sign in front the number.:(");
		return false;
	}
	return true;
   }
   function passVad(){
	var ps1 = document.getElementById('pwd1');
	var ps2 = document.getElementById('pwd2');
	var message = document.getElementById('confirmMessage');
	
	if(ps1.value == ps2.value){
		message.innerHTML="Ye!Password  match";
		
		
	}
	else{
		
		message.innerHTML="Password doesn't match";
	}
	
   }
   
