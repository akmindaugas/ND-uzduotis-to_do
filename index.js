console.log('veikia')

const button = document.getElementById('buttonId');
const input = document.getElementById('inputId');

const objCard = document.createElement('div');
// objCard.classList.add('card');
// const objCard = document.getElementById('card');
objCard.setAttribute('id', 'card');
objCard.setAttribute('style', 'border: 2px solid black');

button.addEventListener('click', ()=>{
    const inputValue = document.getElementById('inputId').value;
    console.log(inputValue);

const title = document.createElement('div');
title.innerText = inputValue;
console.log(title);

const isDone = document.createElement('div');
const creationDate = document.createElement('div');

document.objCard.append(title, isDone, creationDate);



});