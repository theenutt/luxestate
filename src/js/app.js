let stbl1 = document.getElementById("step1");
let stpbd1 = document.getElementById("step-border1");

let stbl2 = document.getElementById("step2");
let stpbd2 = document.getElementById("step-border2");

let stbl3 = document.getElementById("step3");
let stpbd3 = document.getElementById("step-border3");

stbl1.onmouseover = function() {
    stpbd1.style.borderBottom = "3px solid white";
}
stbl1.onmouseout = function() {
    stpbd1.style.borderBottom = "3px solid black";
} 

stbl2.onmouseover = function() {
    stpbd2.style.borderBottom = "3px solid white";
}
stbl2.onmouseout = function() {
    stpbd2.style.borderBottom = "3px solid black";
} 

stbl3.onmouseover = function() {
    stpbd3.style.borderBottom = "3px solid white";
}
stbl3.onmouseout = function() {
    stpbd3.style.borderBottom = "3px solid black";
} 