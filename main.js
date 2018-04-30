//set variable for dice
var dice1 = 6;
var dice2 = 6;
const diceroll = 1000;
function roll(){
    for (i = 1; i <= diceroll; i++){
dice1 = Math.floor(Math.random()*6 + 1);
dice2 = Math.floor(Math.random()*6 + 1);
    }


//set answer for the combined dice.
answer = dice1 + dice2;
//container for dice 1.
var container1 = document.getElementById("container1");
//container for dice 2. 
var container2 = document.getElementById("container2");
//div for the result of both dice rolled.
var rolls = document.getElementById("rolls");
//div for the count.
var count1 = document.getElementById("count");
//append roll of dice 1.
var one = document.createTextNode(dice1);
container1.appendChild(one);
//append roll of dice 2.
var two = document.createTextNode(dice2);
container2.appendChild(two);
//append roll of both dice.
var element = document.createTextNode(answer);
rolls.appendChild(element);
//set the count to zero
let count = 0;
//calculate the count
count[i] = count[i] + 1;
//append the count
var total_count = document.createTextNode(count);
count1.appendChild(total_count);



}
   roll()
    
    






