var randomNumber1=Math.floor(Math.random()*6)  + 1;
var randomNumber2=Math.floor(Math.random()*6)  + 1;
var str1="images/dice"+randomNumber1+".png";
var str2="images/dice"+randomNumber2+".png";
document.querySelectorAll("img")[0].setAttribute("src",str1);
document.querySelectorAll("img")[1].setAttribute("src",str2);
if(randomNumber1 >  randomNumber2)
document.querySelector("h1").textContent ="Player1 Wins";
else if(randomNumber2 > randomNumber1)
document.querySelector("h1").textContent ="Player2 Wins";
else
document.querySelector("h1").textContent ="Draw";
function refresh(){
    window.location.reload("Refresh")
  }