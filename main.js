//set variable for dice
let count= ['','',0,0,0,0,0,0,0,0,0,0,0];


let numberoutput= document.createElement("div");



function roll(){
    for (let i = 1; i <= 1000; i++){
       let sum = diceroll() + diceroll();
       count[sum] += 1;
       
    }
    displayCount();
}
function displayCount(){ 
    for (let i = 2; i < count.length; i++){
        var p1 = document.createElement("p");
        let textnode= document.createTextNode(i+ ": " + count[i]);
        p1.appendChild(textnode);
        numberoutput.appendChild(p1);
        console.log(p1);
        
    }
    document.body.appendChild(numberoutput);
}
function diceroll(){
    let dice = Math.floor(Math.random()*6 + 1);
    return dice;
}
roll()









