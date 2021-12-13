var username = document.getElementById("username");
var pwd = document.getElementById("pwd");
var formsubmitlogin = document.getElementById("formsubmitlogin");
var formerror = document.getElementById("formerror");

function validate(username, pwd, usernamevalidate, pwdvalidate) {
    var usercheck = usernamevalidate(username);
    var pwdcheck = pwdvalidate(pwd);
    if (usercheck && pwdcheck) {
        formerror.innerHTML = "";
        window.location.href = "/dashboard";
        return false;
    } else {
        formerror.innerHTML = "<div class='alert alert-danger rounded-0'>✖ Either Username or Password is wrong.</div>";
        return false;
    }
}

function usernamevalidate(username) {
    if (username == "admin@admin.com") {
        return true;
    } else {
        return false;
    }
}

function pwdvalidate(pwd) {
    if (pwd == "12345") {
        return true;
    } else {
        return false;
    }
}

username.onfocus = function() {
    formerror.innerHTML = "";
}

pwd.onfocus = function() {
    formerror.innerHTML = "";
}

formsubmitlogin.onsubmit = function() {
    return validate(username.value, pwd.value, usernamevalidate, pwdvalidate);
}