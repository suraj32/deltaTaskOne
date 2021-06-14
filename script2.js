//normal mode
//1
let header = document.getElementById("header");
header.style.padding = "0px";
function beep(){
    var sound= new Audio("beep.wav");
    sound.play();
}
function moveSound(){
    var sound= new Audio("touch-sound.wav");
    sound.play();
}
function tada(){
    var sound= new Audio("Minions-Tada.mp3");
    sound.play();
}
function replay(){ location.reload();}
function reset() {
    let sure=prompt("Do u want to reset the game? (y/n)");
    if(sure ==='y'){
    location.reload(); }
}
function Random(max) {
    return Math.floor(Math.random() * max);
}
let arr=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34];
let grid=document.getElementsByClassName("grid-item");
let k=0,j=0,i=0;
let m=35,n=0;
for(i=0;i<5;i++) {
    k= Random(m);
    grid[arr[k]].style.backgroundColor = "Violet";
    arr.splice(k,1);
    --m;
}
for(i=0;i<5;i++) {
    k= Random(m);
    grid[arr[k]].style.backgroundColor = "Blue";
    arr.splice(k,1);
    --m;
}
for(i=0;i<5;i++) {
    k= Random(m);
    grid[arr[k]].style.backgroundColor = "Green";
    arr.splice(k,1);
    --m;
}
for(i=0;i<5;i++) {
    k= Random(m);
    grid[arr[k]].style.backgroundColor = "Yellow";
    arr.splice(k,1);
    --m;
}
for(i=0;i<5;i++) {
    k= Random(m);
    grid[arr[k]].style.backgroundColor = "Orange";
    arr.splice(k,1);
    --m;
}
for(i=0;i<5;i++) {
    k= Random(m);
    grid[arr[k]].style.backgroundColor = "Red";
    arr.splice(k,1);
    --m;
}
for(i=0;i<5;i++) {
    k= Random(m);
    grid[arr[k]].style.backgroundColor = "grey";
    arr.splice(k,1);
    --m;
}
//2
m=35;
arr=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34];
for(i=36;i<52;i++){
    k=Random(m);
    grid[i].style.backgroundColor = grid[arr[k]].style.backgroundColor;
    arr.splice(k,1);
    --m;
}
//3
function swap(){
    console.log(m+","+n);
    console.log(grid[m].style.backgroundColor+","+grid[n].style.backgroundColor);
    grid[m].style.backgroundColor=grid[n].style.backgroundColor;
    grid[n].style.backgroundColor= null;
    m=n;
}
m=35,n=0;
let count2=0;
document.body.addEventListener('keydown', function(event)
{
    moveSound();
    const key = event.key;
    switch (key) {
        case "ArrowLeft": case "a": case "A":
            n=m+1;
            if(!(n%6)){beep();}
            else { swap(); }
            break;
        case "ArrowRight": case "d": case "D":
            n=m-1;
            if(!(m%6)){beep();}
            else { swap(); }
            break;
        case "ArrowUp": case "w": case "W":
            n=m+6;
            if(n>35){beep();}
            else { swap(); }
            break;
        case "ArrowDown": case "s": case "S":
            n=m-6;
            if(n<0){beep();}
            else { swap(); }
            break;
        }
});
//4
let sec=0,min=0,hr=0;
function timer2(){
    sec++;
    if(sec>59){
        min++;sec=0;
    }
    if(min>59){
        hr++;min=0;
    }
    document.getElementById("timer2").innerHTML="⏰"+hr+":"+min+":"+sec;
}

//5
function check2(){
    n=1;
    for(i=36,j=7;i<40,j<11;i++,j++){
        if(!(grid[i].style.backgroundColor===grid[j].style.backgroundColor)){
            n*=-1;
        }
        if(n===-1){ break; }
        else {
            for(i=40,j=13;i<44,j<17;i++,j++){
                if(!(grid[i].style.backgroundColor===grid[j].style.backgroundColor)){
                    n*=-1;
                }
                if(n===-1){ break; }
                else {
                    for(i=44,j=19;i<48,j<23;i++,j++){
                        if(!(grid[i].style.backgroundColor===grid[j].style.backgroundColor)){
                            n*=-1;
                        }
                        if(n===-1){ break; }
                        else {
                            for(i=48,j=25;i<52,j<29;i++,j++){
                                if(!(grid[i].style.backgroundColor===grid[j].style.backgroundColor)){
                                    n*=-1;
                                }
                                if(n===-1){ break; }
                                else {
                                    tada();
                                    modal.style.display="block";
                                    window.clearInterval(interval);
                                }
                                
                            }
                        }
                        
                    }
                }
                
            }
        }
        
    }
}
//5
let score=Math.floor(100/count1 + 1000/(3600*hr + 60*min + sec));
let score = count1;
let hiscore= document.getElementById("highscore");
if(localStorage.getItem("big") == null){
    localStorage.setItem("big",score);
    console.log('hi1');
    hiscore.innerText = "⚡High Score:" + localStorage.getItem("big");
}
else if(score > localStorage.getItem("big")){
    localStorage.setItem("hiscore",score)
    console.log('hi2');
    hiscore.innerText ="⚡High Score:" +  localStorage.getItem("big");
}
else{
    console.log('hi3');
    hiscore.innerText ="⚡High Score:" +  localStorage.getItem("big");
}