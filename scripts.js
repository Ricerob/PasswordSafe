function passData() {
var input = document.getElementById("pass").value;
if(check(pass) == true) {
    document.getElementById("strong-text").innerHTML = " Strong";
}
else {
    document.getElementById("strong-text").innerHTML = " Weak";
}
}

function check(pass) {
var tests = false;
var i;
var numFound = false;
var symbFound = false;

for(i = 0; i < pass.length; i++) {
    var current = pass[i].charAt(i);
    if(current >= '0' && current <= '9'){
        numFound = true;
    } 
    if((current >= '!' && current <= '/') || (current  >= ':' && current <= '@') || (current >= '[' && current <= '`') || (current >= '{')) {
        symbFound = true;
    }
}

if(pass.length > 8 && numFound == true && symbFound == true) {
    tests = true;
}
return tests;
}

function generate() {

}