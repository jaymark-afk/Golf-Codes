const click = document.getElementById("clickMe").onclick = golfScore;

function golfScore(par, strokes){
    par = Math.floor(Math.random()*10);
    document.getElementById("par").innerHTML = par;
    strokes = Math.floor(Math.random()*10);
    document.getElementById("strokes").innerHTML = strokes;

    return (strokes == 1)? document.getElementById("myreturn").innerText = "Hole-in-one!":
    (strokes <= par -2)? document.getElementById("myreturn").innerText = "Eagle":
    (strokes == par -1)? document.getElementById("myreturn").innerText = "Birdie":
    (strokes == 0 || par == 0)? document.getElementById("myreturn").innerText = "":
    (strokes == par)? document.getElementById("myreturn").innerText = "Par":
    (strokes == par +1)? document.getElementById("myreturn").innerText = "Bogey":
    (strokes == par +2)? document.getElementById("myreturn").innerText = " Double Bogey":
    document.getElementById("myreturn").innerHTML = "Go Home!";   
}