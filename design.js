var email = document.forms['form']['email'];
var password = document.forms['form']['password'];

var email_error = document.getElementById("email_error")
var pass_error = document.getElementById("pass_error")

email.addEventListener('textInput',email_Verify)
password.addEventListener('textInput',pass_Verify)

function validated(){
    if(email.value.length < 5){ 
        email_error.style.display="block";
        email.focus();
        swal({
            title: "Give the valid input!",
            text: "Click OK to continue!",
            icon: "error",
            button: "OK",
          });
        return false;
    }
    if(password.value.length < 5){ 
        pass_error.style.display="block";
        password.focus();
        swal({
            title: "Give the valid input!",
            text: "Click OK to continue!",
            icon: "error",
            button: "OK",
          });
        return false;
    }
    else{
        swal({
            title: "Thank You!",
            text: "Your Details Register Successfully!",
            icon: "success",
            button: "OK",
          });
    }
}
function email_Verify(){
    if (email.value.length >= 8){
        email_error.style.display="none"
        return true;
    }   
}
function pass_Verify(){
    if (password.value.length >= 8)
    {
        pass_error.style.display="none"
        return true;
    }
}