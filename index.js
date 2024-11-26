var randomNumbers1=Math.floor(Math.random()*6)+1;
var randomSorceImage = "./images/dice"+ randomNumbers1+".png";
document.querySelectorAll("img")[0].setAttribute("src",randomSorceImage);

var randomNumbers2=Math.floor(Math.random()*6)+1;
var randomSorceImage2= "./images/dice"+randomNumbers2+".png";
document.querySelectorAll("img")[1].setAttribute("src",randomSorceImage2);

if(randomNumbers1>randomNumbers2){
    document.querySelector("h1").innerHTML="Player 1 is the Winner!"
}else{
    document.querySelector("h1").innerHTML="Player 2 is the Winner!" }