var countlikes = 3;
var countlikesElement = document.querySelector("#countlikes");


function likecount() {
    countlikes++;
    countlikesElement.innerText = countlikes + " like(s)";
    console.log(countlikes++);
}