

// regiter validation

function validateRegisterForm() {

    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirm-password").value;

    if (username == "" || email == "" || password == "" || confirmPassword == "") {
        alert("All fields must be filled out");
        return false;
    }

    if (password.length < 6) {
        alert("Password must be at least 6 characters long");
        return false;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match");
        return false;
    }

    var emailregex = /^\S+@\S+\.\S+$/;

    if (!emailregex.test(email)) {
        alert("Please enter a valid email address");
        return false;
    }

    // if all validations pass, return true
    alert("Registration successful!");
    return true;


}