//set variable for dice
let count= ['','',0,0,0,0,0,0,0,0,0,0,0];

function roll(){
    for (let i = 1; i <= 1000; i++){
       let sum = diceRoll() + diceRoll();
       count[sum] += 1;
       
    }
    displayCount();
}
function displayCount(){ 
    let mainDiv = document.getElementById("mainDiv")
    for (let i = 2; i < count.length; i++){
        let div2 = document.createElement("div");
        //Creating the p element
        var p1 = document.createElement("p");
        let textnode= document.createTextNode(i + ": " + count[i]);
        p1.appendChild(textnode);
        //Creating a div element to display a graph
        let div3 = document.createElement("div");
        div3.className = "graph";
        div3.style.width=count[i]+"px";
        div2.appendChild(p1);
        div2.appendChild(div3)

        mainDiv.appendChild(div2)
        // numberoutput.appendChild(p1);
        console.log(p1);       
    }
   

}
function diceRoll(){
    let dice = Math.floor(Math.random()*6 + 1);
    return dice;
}

roll();









