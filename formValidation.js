// validate a form to ensure the password is not below 6 characters
function pass() {
    var password = document.getElementById("password").value;
    if (password.length < 6) {
        alert("Password is too short");
        return false;
    }
}

// function to check for an empty input field
function emptyInput() {
    var formInput = documnet.getElementById("fname").value;
    if(formInput == "") {
        alert("Name cannot be empty");
        return false;
    }
}