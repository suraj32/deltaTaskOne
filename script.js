let arr=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23];
tdGroup = document.getElementsByTagName("td");
function reset() {
    let sure=prompt("Do u want to reset the game? (y/n)");
    if(sure ==='y'){
    location.reload(); }
}
function Random(max) {
    return Math.floor(Math.random() * max);
}
function colorReplaceAndCount(ini,fin){
    tdGroup[ini].style.backgroundColor = tdGroup[fin].style.backgroundColor;
    tdGroup[fin].style.backgroundColor = null;
    count++;
    document.getElementById("count").textContent="Moves count = "+count;
    if(count===1){window.setInterval(timer,1000);}
    check();
    x=y;
}
//1
let i,k=0,x=24;
for(i=0;i<4;i++) {
    k= Random(x);
    tdGroup[arr[k]].style.backgroundColor = "Violet";
    arr.splice(k,1);
    --x;
}
for(i=0;i<4;i++) {
    k= Random(x);
    tdGroup[arr[k]].style.backgroundColor = "Blue";
    arr.splice(k,1);
    --x;
}
for(i=0;i<4;i++) {
    k= Random(x);
    tdGroup[arr[k]].style.backgroundColor = "Green";
    arr.splice(k,1);
    --x;
}
for(i=0;i<4;i++) {
    k= Random(x);
    tdGroup[arr[k]].style.backgroundColor = "Yellow";
    arr.splice(k,1);
    --x;
}
for(i=0;i<4;i++) {
    k= Random(x);
    tdGroup[arr[k]].style.backgroundColor = "Orange";
    arr.splice(k,1);
    --x;
}
for(i=0;i<4;i++) {
    k= Random(x);
    tdGroup[arr[k]].style.backgroundColor = "Red";
    arr.splice(k,1);
    --x;
}
x=24;
arr=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]
//2
for(i=25;i<34;i++){
    k=Random(x);
    tdGroup[i].style.backgroundColor = tdGroup[arr[k]].style.backgroundColor;
    arr.splice(k,1);
    --x;
}
//3
x=24;
let y=0,count=0;
document.body.addEventListener('keydown', function(event)
{
    const key = event.key;
    switch (key) {
        case "ArrowLeft":
            y=x+1;
            if(!(y%5)){
                alert("Oops!! Invalid Move");
            }
            else { colorReplaceAndCount(x,y); }
            break;
        case "ArrowRight":
            y=x-1;
            if(!(x%5)){
                alert("Oops!! Invalid Move");
            }
            else {colorReplaceAndCount(x,y); }
            break;
        case "ArrowUp":
            y=x+5;
            if(y>24){
                alert("Oops!! Invalid Move");
            }
            else { colorReplaceAndCount(x,y); }
            break;
        case "ArrowDown":
            y=x-5;
            if(y<0){
                alert("Oops!! Invalid Move");
            }
            else { colorReplaceAndCount(x,y); }
            break;
        }
});
//4
function check(){
if(tdGroup[25].style.backgroundColor===tdGroup[6].style.backgroundColor){
    if(tdGroup[26].style.backgroundColor===tdGroup[7].style.backgroundColor){
        if(tdGroup[27].style.backgroundColor===tdGroup[8].style.backgroundColor){
            if(tdGroup[28].style.backgroundColor===tdGroup[11].style.backgroundColor){
                if(tdGroup[29].style.backgroundColor===tdGroup[12].style.backgroundColor){
                    if(tdGroup[30].style.backgroundColor===tdGroup[13].style.backgroundColor){
                        if(tdGroup[31].style.backgroundColor===tdGroup[16].style.backgroundColor){
                            if(tdGroup[32].style.backgroundColor===tdGroup[17].style.backgroundColor){
                                if(tdGroup[33].style.backgroundColor===tdGroup[18].style.backgroundColor){
                                    alert("Congratulations! You won\nMoves taken:"+count+
                                    "\nTime taken"+hr+":"+min+":"+sec+"\nWanna try again?");
                                    location.reload();
                                }
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
let sec=0,min=0,hr=0;
function timer(){
    sec++;
    if(sec>59){
        min++;sec=0;
    }
    if(min>59){
        hr++;min=0;
    }
    document.getElementById("timer").textContent="Timer>>> "+hr+":"+min+":"+sec;
}
