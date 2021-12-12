var email = document.getElementById("email");
var emailerror = document.getElementById("emailerror");
let emailRegex = /^([A-Za-z0-9\.-]+)\@([A-Za-z0-9-]+)\.([A-Za-z]{2,3})(\.[A-Za-z]{2,3})?$/;
var pwd = document.getElementById("pwd");
var pwderror = document.getElementById("pwderror");
var formsubmitlogin = document.getElementById("formsubmitlogin");
var formerror = document.getElementById("formerror");

var emailvalid = 0;
var pwdvalid = 0;
var p1, p2, p3, p4;

let p1r = /(?=.*[A-Z])/;
let p2r = /(?=.*[a-z])/;
let p3r = /\d/;

formsubmitlogin.onsubmit = function() {
    if (emailRegex.test(email.value) && pwd.value.length >= 8 && p3r.test(pwd.value) && p2r.test(pwd.value) && p1r.test(pwd.value)) {
        return true;
    } else {
        window.scrollTo({ top: 0, behavior: 'smooth' }); // For more details: https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollTo
        formerror.innerHTML = "<div class='alert alert-danger rounded-0'>✖ Kindly check all the Fields of the Form. All Fields are required and should be valid.</div>";
        return false;
    }

}

function emailvalidate() {
    if (emailRegex.test(email.value)) {
        emailerror.innerHTML = "<div class='mt-4'><span class='alert alert-success rounded-0'>✔ Valid Email Id.</span></div>";
        emailvalid = 1;
    } else {
        emailerror.innerHTML = "<div class='mt-4'><span class='alert alert-danger rounded-0'>✖ Invalid Email Id.</span></div>";
        emailvalid = 0;
    }
}

function pwdvalidate() {
    p1 = p2 = p3 = p4 = 0;
    p4w = "<span class='text-danger'>✖ Minimum 8 characters required</span>";
    p3w = "<span class='text-danger'>✖ Atleast one number required</span>";
    p2w = "<span class='text-danger'>✖ Atleast one lower case required</span>";
    p1w = "<span class='text-danger'>✖ Atleast one upper case required</span>";
    if (pwd.value.length >= 8) {
        p4 = 1; // length condition good
        p4w = "<span class='text-success'>✔ Minimum 8 characters found</span>";
    }
    if (p3r.test(pwd.value)) {
        p3 = 1; // at least one number condition good
        p3w = "<span class='text-success'>✔ Atleast one number found</span>";
    }
    if (p2r.test(pwd.value)) {
        p2 = 1; // one lowercase condition good
        p2w = "<span class='text-success'>✔ Atleast one lower case found</span>";
    }
    if (p1r.test(pwd.value)) {
        p1 = 1; // one uppercase condition good
        p1w = "<span class='text-success'>✔ Atleast one upper case found</span>";
    }

    if (p1 == 1 && p2 == 1 && p3 == 1 && p4 == 1) {
        pwderror.innerHTML = "<div class='mt-4 alert alert-success rounded-0'>✔ Password looks fine.</div>";
        pwdvalid = 1;
    } else {
        pwderror.innerHTML = "<div class='mt-4 alert alert-info rounded-0'>" + p4w + "</br>" + p3w + "</br>" + p2w + "</br>" + p1w + "</div>";
        pwdvalid = 0;
    }
}

email.onfocus = function() {
    emailvalidate();
    formerror.innerHTML = "";
    email.onkeyup = function() {
        emailvalidate();
    }
}

email.onblur = function() {
    formerror.innerHTML = "";
    if (emailvalid == 1) {
        emailerror.innerHTML = "";
    }
}

pwd.onfocus = function() {
    pwdvalidate();
    formerror.innerHTML = "";
    pwd.onkeyup = function() {
        pwdvalidate();
    }
}

pwd.onblur = function() {
    formerror.innerHTML = "";
    if (pwdvalid == 1) {
        pwderror.innerHTML = "";
    }
}