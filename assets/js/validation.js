

var Name=document.getElementById('name-error')
var Email=document.getElementById('email-error')



function validateName(){
  var name=document.getElementById('name').value;

  if(name.length==0){
    Name.innerHTML='Name is required';
    return false;
  }
  if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
    Name.innerHTML='full name is required';
    return false;
  }
  Name.innerHTML='';
  return true;
}
function validateEmail(){
  var email=document.getElementById('email').value;

  if(email.length==0){
    Email.innerHTML='email is required';
    return false;
  }
  if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
    Email.innerHTML='enter valid email';
    return false;
  }
  Email.innerHTML='';
  return true;
}


function validateForm(){
  if(!validateName() || !validateEmail() ) {
              submitError.style.display='block';
              setTimeout(function() { submitError.style.display='none';},3000);
              return false;
  }
}
