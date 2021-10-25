let character=document.getElementById("character");
let block=document.getElementById("block");
let scoreDisplay=document.getElementById("scoreDisplay");
let gameover_scr=document.querySelector(".gameOver_screen");
let startGame_scr=document.querySelector(".startGame_scr");
let score_ind=document.getElementById("score_ind");
let playerStatus=1;
let score=0;
console.log(playerStatus);
document.addEventListener("keydown", keyDown);
function keyDown(e){
    e.preventDefault();
    console.log(e.key);
    if(e.key=="Enter"){
        jumpability();
    }
}

function startGame(){
    block.classList.add("animate_block");
    startGame_scr.classList.add("hide");
}

function gameOver(){
    gameover_scr.classList.remove("hide");
}


function jumpability(){
    character.classList.add("animate_character");
    setTimeout(function(){
        character.classList.remove("animate_character");
    },500)
}

function start(){
    block.classList.add("animate_block");
}


var scoreUpdate=setInterval(function(){
    var characterTop=parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var blockLeft=parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if(blockLeft<40 && blockLeft>0 && characterTop<50){
        score++;
        console.log(score);
        scoreDisplay.innerHTML="Score: "+Math.floor(score/3);
        score_ind.innerHTML="Score: "+Math.floor(score/3);
    }
},10)


var checkDead=setInterval(function(){
    var characterTop=parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var blockLeft=parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if(blockLeft<40 && blockLeft>0 && characterTop>=50){
        block.style.animation="none";
        block.style.display="none";
        playerStatus=0;
        console.log(playerStatus);
        gameOver();
        
    }
},10)