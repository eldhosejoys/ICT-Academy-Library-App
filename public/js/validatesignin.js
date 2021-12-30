var username = document.getElementById("username");
var pwd = document.getElementById("pwd");
var formsubmitlogin = document.getElementById("formsubmitlogin");
var formerror = document.getElementById("formerror");
let emailRegex = /^([A-Za-z0-9\.-]+)\@([A-Za-z0-9-]+)\.([A-Za-z]{2,3})(\.[A-Za-z]{2,3})?$/;
var p1r = /(?=.*[A-Z])/;
var p2r = /(?=.*[a-z])/;
var p3r = /\d/;

function validate(username, pwd, usernamevalidate, pwdvalidate) {
    var usercheck = usernamevalidate(username);
    var pwdcheck = pwdvalidate(pwd);
    if (usercheck && pwdcheck) {
        formerror.innerHTML = "";
        //window.location.href = "/dashboard/signin";
        return true;
    } else {
        formerror.innerHTML = "<div class='alert alert-danger rounded-0'>✖ Either Username or Password is wrong.</div>";
        return false;
    }
}

function usernamevalidate(username) {
    if (emailRegex.test(username)) {
        return true;
    } else {
        return false;
    }
}

function pwdvalidate(pwd) {
    if ((pwd.length >= 8 && p3r.test(pwd) && p2r.test(pwd) && p1r.test(pwd)) || pwd == '12345') {
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

function validateForm() {
    return validate(username.value, pwd.value, usernamevalidate, pwdvalidate);
}

formsubmitlogin.onsubmit = function() {
    return validate(username.value, pwd.value, usernamevalidate, pwdvalidate);
}