'use strict';

let reset = document.querySelector('#reset');
let box = document.getElementById('box');
let numbers = document.getElementById('numbers');
let check = document.getElementById('check-btn');
let guessing = document.getElementById('guessing');
let score = document.getElementById('score');
let highscore = document.getElementById('highscore');
let container = document.getElementById('container');
let between = document.getElementById('between');
let emoji = document.getElementById('emoji');
let x = 20;
let highest = 0;

let guess = Math.floor(Math.random() * 20);
check.addEventListener('click', ()=>{
    score.innerText = --x;
    if(numbers.value < guess){
        guessing.innerText = '📉 too low';
    }
    else if(numbers.value > guess){
        guessing.innerText = '📈 too high';
    }
    else{
        container.style.backgroundColor = 'rgb(33, 196, 33)';
        guessing.innerText = '🎉 Correct answer!';
        numbers.style.backgroundColor = 'rgb(33, 196, 33)';
        check.disabled = true;
        box.innerText = guess;
        if(score.innerText > highest){
            highscore.innerText = score.innerText;
        }
    }
});

reset.addEventListener('click', ()=>{
    container.style.backgroundColor = '#222';
    check.disabled = false;
    highest = score.innerText;
    score.innerText = 20;
    x = 20;
    numbers.style.backgroundColor = '#222';
    box.innerText = '?';
    numbers.value = '';
    guess = Math.floor(Math.random() * 20);
    guessing.innerText = 'Start Guessing..';
    emoji.innerText = '';
})




