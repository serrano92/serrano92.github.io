import { Game } from "/scripts/game.js";

const canvasTetris = document.getElementById("canvas-tetris");
const canvasNext = document.getElementById("canvas-next");
const canvasHold = document.getElementById("canvas-hold");
const score = document.getElementById("score");
const menu = document.getElementById("menu");
const btnMenu = document.getElementById("btn-start");

let sound = new Audio('tono.mp3');
playBtn.addEventListener('click', ()=>{
    sound.play();
});
pauseBtn.addEventListener('click', ()=>{
    sound.pause();
});

const rows = 20;
const cols = 10;
const cellSize = 26;
const space = 2;

const game = new Game(canvasTetris,rows,cols,cellSize,space,canvasNext,canvasHold);

function update(){
    if(game.gameOver){
        menu.style.display = "flex";
    }else{
        game.update();
        score.innerHTML = game.score;
    }
    requestAnimationFrame(update);
}
btnMenu.addEventListener("click",()=>{
    setTimeout(() => {
        menu.style.display = "none";
        game.reset();
    },200);
});

update();
