var email = document.getElementById("email");
var emailerror = document.getElementById("emailerror");
var mobile = document.getElementById("mobile");
var mobileerror = document.getElementById("mobileerror");
var pname = document.getElementById("name");
var nameerror = document.getElementById("nameerror");
let emailRegex = /^([A-Za-z0-9\.-]+)\@([A-Za-z0-9-]+)\.([A-Za-z]{2,3})(\.[A-Za-z]{2,3})?$/;
let mobileRegex = /^[0-9]{10,10}$/;
let mobileRegex1 = /^([0-9]{3,3})\.([0-9]{3,3})\.([0-9]{4,4})$/;
let mobileRegex2 = /^([0-9]{3,3})\s([0-9]{3,3})\s([0-9]{4,4})$/;
let mobileRegex3 = /^([0-9]{3,3})-([0-9]{3,3})-([0-9]{4,4})$/;
let nameRegex = /^([A-Za-z]{1,30})(\s[A-Za-z]{1,30}){0,2}$/;
let spChars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
var pwd = document.getElementById("pwd");
var pwderror = document.getElementById("pwderror");
var formsubmitsignup = document.getElementById("formsubmitsignup");
var formerror = document.getElementById("formerror");

var emailvalid = 0;
var mobilevalid = 0;
var namevalid = 0;
var pwdvalid = 0;
var p1, p2, p3, p4;
var pwdstrength;

let p1r = /(?=.*[A-Z])/;
let p2r = /(?=.*[a-z])/;
let p3r = /\d/;


formsubmitsignup.onsubmit = function() {
    if (emailRegex.test(email.value) && (mobileRegex.test(mobile.value) || mobileRegex1.test(mobile.value) || mobileRegex2.test(mobile.value) || mobileRegex3.test(mobile.value)) && nameRegex.test(pname.value) && pwd.value.length >= 8 && p3r.test(pwd.value) && p2r.test(pwd.value) && p1r.test(pwd.value)) {
        return true;
    } else {
        window.scrollTo({ top: 0, behavior: 'smooth' }); // For more details: https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollTo
        formerror.innerHTML = "<div class='alert alert-danger rounded-0'>✖ Kindly check all the Fields of the Form. All Fields are required and should be valid.</div>";
        return false;
    }

}

function validateForm() {
    if (emailRegex.test(email.value) && (mobileRegex.test(mobile.value) || mobileRegex1.test(mobile.value) || mobileRegex2.test(mobile.value) || mobileRegex3.test(mobile.value)) && nameRegex.test(pname.value) && pwd.value.length >= 8 && p3r.test(pwd.value) && p2r.test(pwd.value) && p1r.test(pwd.value)) {
        return true;
    } else {
        window.scrollTo({ top: 0, behavior: 'smooth' }); // For more details: https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollTo
        formerror.innerHTML = "<div class='alert alert-danger rounded-0'>✖ Kindly check all the Fields of the Form. All Fields are required and should be valid.</div>";
        return false;
    }
}

function emailvalidate() {
    if (emailRegex.test(email.value)) {
        emailerror.innerHTML = "<div class='mt-4 alert alert-success rounded-0'>✔ Valid Email Id.</div>";
        emailvalid = 1;
    } else {
        emailerror.innerHTML = "<div class='mt-4 alert alert-danger rounded-0'>✖ Invalid Email Id.</div>";
        emailvalid = 0;
    }
}

function mobilevalidate() {
    if (mobileRegex.test(mobile.value) || mobileRegex1.test(mobile.value) || mobileRegex2.test(mobile.value) || mobileRegex3.test(mobile.value)) {
        mobileerror.innerHTML = "<div class='mt-4 alert alert-success rounded-0'>✔ Valid Mobile Number.</div>";
        mobilevalid = 1;
    } else {
        mobileerror.innerHTML = "<div class='mt-4 alert alert-danger rounded-0'>✖ Invalid Mobile Number.</div>";
        mobilevalid = 0;
    }
}

function namevalidate() {
    if (nameRegex.test(pname.value)) {
        nameerror.innerHTML = "<div class='mt-4 alert alert-success rounded-0'>✔ Name looks fine.</div>";
        namevalid = 1;
    } else {
        nameerror.innerHTML = "<div class='mt-4 alert alert-danger rounded-0'>✖ Name doesn't look fine.</div>";
        namevalid = 0;
    }
}

function pwdvalidate() {
    p1 = p2 = p3 = p4 = p5 = 0;
    var pstrength = 0;
    p5w = "<span class='text-danger'>✖ Optional Special character not found</span>";
    p4w = "<span class='text-danger'>✖ Minimum 8 characters required</span>";
    p3w = "<span class='text-danger'>✖ Atleast one number required</span>";
    p2w = "<span class='text-danger'>✖ Atleast one lower case required</span>";
    p1w = "<span class='text-danger'>✖ Atleast one upper case required</span>";
    if (pwd.value.length >= 8) {
        p4 = 1; // length condition good
        pstrength = pstrength + 1;
        p4w = "<span class='text-success'>✔ Minimum 8 characters found</span>";
    }
    if (p3r.test(pwd.value)) {
        p3 = 1; // at least one number condition good
        pstrength = pstrength + 1;
        p3w = "<span class='text-success'>✔ Atleast one number found</span>";
    }
    if (p2r.test(pwd.value)) {
        p2 = 1; // one lowercase condition good
        pstrength = pstrength + 1;
        p2w = "<span class='text-success'>✔ Atleast one lower case found</span>";
    }
    if (p1r.test(pwd.value)) {
        p1 = 1; // one uppercase condition good
        pstrength = pstrength + 1;
        p1w = "<span class='text-success'>✔ Atleast one upper case found</span>";
    }
    if (spChars.test(pwd.value)) {
        p5 = 1; // special char condition good
        pstrength = pstrength + 1;
        p5w = "<span class='text-success'>✔ Atleast one special character found</span>";
    }

    if (pstrength <= 0) {
        pstrengthbg = 'bg-danger';
        pwdstrength = 'Very Weak';
        pl = 5;
    }
    if (pstrength == 1) {
        pstrengthbg = 'bg-danger';
        pwdstrength = 'Weak';
        pl = 20;
    }
    if (pstrength == 2) {
        pstrengthbg = 'bg-warning';
        pwdstrength = 'Medium';
        pl = 40;
    }
    if (pstrength == 3) {
        pstrengthbg = 'bg-warning';
        pwdstrength = 'Good';
        pl = 60;
    }
    if (pstrength == 4) {
        pstrengthbg = 'bg-success';
        pwdstrength = 'Strong';
        pl = 80;
    }
    if (pstrength >= 5) {
        pstrengthbg = 'bg-success';
        pwdstrength = 'Excellent';
        pl = 100;
    }

    if (p1 == 1 && p2 == 1 && p3 == 1 && p4 == 1 && p5 == 1) {
        pwderror.innerHTML = "<div class='mt-4 alert alert-success rounded-0'>✔ Password looks fine.</br></br>Password Strength: " + pwdstrength + "<div class='progress'><div class='progress-bar " + pstrengthbg + "' role='progressbar' style='width: " + pl + "%' aria-valuenow=" + pstrength + " aria-valuemin='0' aria-valuemax='5'></div></div></div></div>";
        pwdvalid = 1;
    } else if (p1 == 1 && p2 == 1 && p3 == 1 && p4 == 1 && p5 == 0) {
        pwderror.innerHTML = "<div class='mt-4 alert alert-success rounded-0'>✔ Password looks fine.</br>" + p5w + "</br>Password Strength: " + pwdstrength + "<div class='progress'><div class='progress-bar " + pstrengthbg + "' role='progressbar' style='width: " + pl + "%' aria-valuenow=" + pstrength + " aria-valuemin='0' aria-valuemax='5'></div></div></div></div>";
        pwdvalid = 1;
    } else {
        pwderror.innerHTML = "<div class='mt-4 alert alert-info rounded-0'>" + p5w + "</br>" + p4w + "</br>" + p3w + "</br>" + p2w + "</br>" + p1w + "</br></br>Password Strength: " + pwdstrength + "<div class='progress'><div class='progress-bar " + pstrengthbg + "' role='progressbar' style='width: " + pl + "%' aria-valuenow=" + pstrength + " aria-valuemin='0' aria-valuemax='5'></div></div></div></div>";
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

pname.onfocus = function() {
    namevalidate();
    formerror.innerHTML = "";
    pname.onkeyup = function() {
        namevalidate();
    }
}

pname.onblur = function() {
    formerror.innerHTML = "";
    if (namevalid == 1) {
        nameerror.innerHTML = "";
    }
}

mobile.onfocus = function() {
    mobilevalidate();
    formerror.innerHTML = "";
    mobile.onkeyup = function() {
        mobilevalidate();
    }
}

mobile.onblur = function() {
    formerror.innerHTML = "";
    if (mobilevalid == 1) {
        mobileerror.innerHTML = "";
    }
}