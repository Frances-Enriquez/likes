var countlikes = 9;
var countlikesElement = document.querySelector("#countlikes");

function likecount() {
    countlikes++;
    countlikesElement.innerText = countlikes + " like(s)";
    console.log(countlikes++);
}

var countlikestwo = 12;
var countlikestwoElement = document.querySelector("#countlikestwo");

function likecounttwo() {
    countlikestwo++;
    countlikestwoElement.innerText = countlikestwo + " like(s)";
    console.log(countlikestwo++);
}

var countlikesthree = 9;
var countlikesthreeElement = document.querySelector("#countlikesthree");

function likecountthree() {
    countlikesthree++;
    countlikesthreeElement.innerText = countlikesthree + " like(s)";
    console.log(countlikesthree++);
}