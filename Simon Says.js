let gameSeq = [];
let userSeq = [];
let started = false;
let level = 0;

let btns=["yellow","red","blue","green"];

let h2=document.querySelector("h2");

document.addEventListener("keypress", function(){
    if(started==false){
        started=true;
        levelUp();
    }
})

function btnFlash(randBtn){
    randBtn.classList.add("flash");
    setTimeout(function(){
        randBtn.classList.remove("flash");
    },200)
}

function userFlash(randBtn){
    randBtn.classList.add("userflash");
    setTimeout(function(){
        randBtn.classList.remove("userflash");
    },200)
}

function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;
    let randIdx = Math.floor(Math.random()*4);
    let randClr = btns[randIdx];
    let randBtn = document.querySelector(`.${randClr}`);
    gameSeq.push(randClr);
    console.log(gameSeq);
    btnFlash(randBtn);
}

function checkAns(idx){
    if(userSeq[idx]===gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelUp,500);
        }
    }else{
        h2.innerHTML=`Game over ! Your Score is <b>${level}<b> -- Press any Key to Restart !`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function (){
            document.querySelector("body").style.backgroundColor="peachpuff"
        },100)
        reset();
    }
}

function btnPress(){
    let btn = this;
    userFlash(btn);
    userClr = btn.getAttribute("id");
    userSeq.push(userClr);
    checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
    gameSeq = [];
    userSeq = [];
    level = 0;
    started = false;
}