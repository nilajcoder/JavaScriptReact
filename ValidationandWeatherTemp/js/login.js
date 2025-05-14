
// validation for login form
function validateLoginForm() {

    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if (email== "" || password == "") {
        alert("Username and Password must be filled out");
    
        return false;
    }
    
    if(password.length < 6) {
        alert("Password must be at least 6 characters long");
        return false;
    }

    var emailregex= /^\S+@\S+\.\S+$/;
    

    if(!emailregex.test(email)) {
        alert("Please enter a valid email address");
        return false;
    }


   // if all validations pass, return true
   alert("Login successful!");
    return true;




}