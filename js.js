let patikimai=0;
let nepatikimai=0;

function countLike() {
    patikimai++;
    document.getElementById("patinka").innerHTML = patikimai;
}

function countUnLike() {
    nepatikimai++;
    document.getElementById("nepatinka").innerHTML = nepatikimai;
}