//normal mode
//1
let header = document.getElementById("header");
header.style.padding = "0px";
function beep() {
    var sound = new Audio("beep.wav");
    sound.play();
}
function moveSound() {
    var sound = new Audio("touch-sound.wav");
    sound.play();
}
function tada() {
    var sound = new Audio("Minions-Tada.mp3");
    sound.play();
}
function replay() { location.reload(); }
function reset() {
    let sure = prompt("Do u want to reset the game? (y/n)");
    if (sure === 'y') {
        location.reload();
    }
}
function Random(max) {
    return Math.floor(Math.random() * max);
}
let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34];
let grid = document.getElementsByClassName("grid-item");
let k = 0, j = 0, i = 0;
let m = 35, n = 0;
for (i = 0; i < 5; i++) {
    k = Random(m);
    grid[arr[k]].style.backgroundColor = "Violet";
    arr.splice(k, 1);
    --m;
}
for (i = 0; i < 5; i++) {
    k = Random(m);
    grid[arr[k]].style.backgroundColor = "Blue";
    arr.splice(k, 1);
    --m;
}
for (i = 0; i < 5; i++) {
    k = Random(m);
    grid[arr[k]].style.backgroundColor = "Green";
    arr.splice(k, 1);
    --m;
}
for (i = 0; i < 5; i++) {
    k = Random(m);
    grid[arr[k]].style.backgroundColor = "Yellow";
    arr.splice(k, 1);
    --m;
}
for (i = 0; i < 5; i++) {
    k = Random(m);
    grid[arr[k]].style.backgroundColor = "Orange";
    arr.splice(k, 1);
    --m;
}
for (i = 0; i < 5; i++) {
    k = Random(m);
    grid[arr[k]].style.backgroundColor = "Red";
    arr.splice(k, 1);
    --m;
}
for (i = 0; i < 5; i++) {
    k = Random(m);
    grid[arr[k]].style.backgroundColor = "grey";
    arr.splice(k, 1);
    --m;
}
//2
m = 35;
arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34];
for (i = 36; i < 52; i++) {
    k = Random(m);
    grid[i].style.backgroundColor = grid[arr[k]].style.backgroundColor;
    arr.splice(k, 1);
    --m;
}
//3
let count2 = 0;
m = 35;
function shift(s, t) {
    console.log(m + "," + n);
    console.log(s + "," + t);
    console.log(grid[s].style.backgroundColor + "," + grid[t].style.backgroundColor);
    grid[s].style.backgroundColor = grid[t].style.backgroundColor;
    grid[t].style.backgroundColor = "white";
    count2++;
    document.getElementById("count2").textContent = "Moves count = " + count2;
    if (count2 === 1) { interval = window.setInterval(timer2, 1000); }
    check2();
    return t;
}
document.body.addEventListener('keydown', function (event) {
    moveSound();
    const key = event.key;
    switch (key) {
        case "ArrowLeft": case "a": case "A":
            n = m + 1;
            if (!(n % 6)) { beep(); }
            else { m = shift(m, n); }
            break;
        case "ArrowRight": case "d": case "D":
            n = m - 1;
            if (!(m % 6)) { beep(); }
            else { m = shift(m, n); }
            break;
        case "ArrowUp": case "w": case "W":
            n = m + 6;
            if (n > 35) { beep(); }
            else { m = shift(m, n); }
            break;
        case "ArrowDown": case "s": case "S":
            n = m - 6;
            if (n < 0) { beep(); }
            else { m = shift(m, n); }
            break;
    }
});
//4
let sec = 0, min = 0, hr = 0;
function timer2() {
    sec++;
    if (sec > 59) {
        min++; sec = 0;
    }
    if (min > 59) {
        hr++; min = 0;
    }
    document.getElementById("timer2").innerHTML = "⏰" + hr + ":" + min + ":" + sec;
}

//5
function check2() {
    win = "unknown"
    for (i = 0; i < 16; i++) {
        ti = 36 + i
        si = (7 + i) + (2 * Math.floor(i / 4))
        if (!(grid[ti].style.backgroundColor === grid[si].style.backgroundColor)) {
            win = "NO"
            break;
        }
    }
    if (win != "NO") {
        tada();
        modal.style.display = "block";
        window.clearInterval(interval);
        displayScore();
    }
}

//6
function displayScore() {
    score = Math.floor(1000 / count2 + 1000 / (3600 * hr + 60 * min + sec));
    hs = localStorage.getItem("nmHS");    
    if (hs == Infinity) {
        hs = score;
    } else if (score > hs) {
        hs = score;
    } 
    localStorage.setItem("nmHS", hs);
    document.getElementById("score").innerHTML = "Your Score: " + score;
    document.getElementById("highscore").innerHTML = "⚡High Score:" + hs;
}