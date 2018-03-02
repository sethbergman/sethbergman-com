/* Javascript Form Validation */

function checkForm(email_form){

 var error = document.getElementById("error");

 if(form.name.value == ""){

   error.innerHTML = "This value is required.";
   form.name.focus();
   return false;

 }

 // if(form.last.name.value == ""){
 // 
 //   error.innerHTML = "This value is required.";
 //   form.last.name.focus();
 //   return false;
 // 
 // }
 // 
 // if(form.phone.value == ""){
 // 
 //   error.innerHTML = "This value is required.";
 //   form.phone.focus();
 //   return false;
 // 
 // }

 // if(!form.checkbox.checked){
 //   error.innerHTML = "This value is required.";
 //   form.checkbox.focus();
 //   return false;
 // }

function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

 if (validateEmail(form.email.value)) {

   // email validated

 } else {
    error.innerHTML = "Error: This email is invalid.";
    form.email.focus();
    return false;


 }

}
