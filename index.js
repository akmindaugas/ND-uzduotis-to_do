let array = []; 
const button = document.getElementById('buttonId');
const cardWrapper = document.getElementById('cardWrapper');

const input = document.getElementById('inputId');
const input1 = document.getElementById('inputId_1');
const input2 = document.getElementById('inputId_2');

// const objCard = document.createElement('div');

// --------GAUNAME DUOMENIS I MASYVA--------
button.addEventListener('click', ()=>{

const dataFromInput = {
    inputValue: input.value,  
    inputValue1: input1.value,  
    inputValue2: input2.value,  
    isDone: false,
}; 
console.log(dataFromInput);
// --------DUOMENU VALIDACIJA-------
if(dataFromInput.inputValue.length <3){
    console.log('enter valid data')
    return;
}
// ----DUOMENYS KAUPIAMI ARCHYVE-----------
    array.push(dataFromInput);
console.log(array);
// ---NUNULINAME INPUT VERTES -----------
input.value =""; 
input1.value = "";  
input2.value = ""; 
// --------NUNULINAME PACIA KORTELE----------
cardWrapper.innerHTML = "";
// --------APDIRBAME DUOMENIS FOREACH CIKLU-------
array.forEach((element) => {
// --------KIEKVIENAM ELEMENTUI SUKURIAME KORTELE---
const inputCard = document.createElement('div');
inputCard.classList.add("class", "inputCardClass");
console.log(inputCard);

// -------FOREACHO METU KIEKVIENAM DIVUI PRISKIRIAME EVENTLISTNERI---
inputCard.addEventListener('click', ()=> {
const index = array.findIndex((inputElement)=>{
return inputElement.title === input.title;

//------------tikriname statusa---------------
dataFromInput[index].isDone = !dataFromInput[index].isDone;
});});

// ------ KORTELE UZPILDOME DUOMENIMIS--------
//--------"element" NURODANT KELIA IKI DUOMENU, LEIDZIA PASIEKTI DUOMENYS UZ CIKLO RIBU!-----------------------------------------
const inputContent = document.createElement('div');
inputContent.innerText = element.inputValue;
const inputContent1 = document.createElement('div');
inputContent1.innerText = element.inputValue1;
const inputContent2 = document.createElement('div');
inputContent2.innerText = element.inputValue2;
const statusOfTask = document.createElement('div');
statusOfTask.innerText = element.isDone ? "Done" : "in Progress";
// ---------SIGNALINE LEMPUTE STATUSUI----------
const signal = document.createElement('div');
signal.setAttribute("id", "circle");

if(dataFromInput.isDone ==='false'){
    signal.setAttribute("style", "background-color: red");
}else{
    signal.setAttribute("style", "background-color: green");
};



// ----------DUOMENIS SUDEDAME I KORTELE--------
inputCard.append(inputContent);
inputCard.append(inputContent1);
inputCard.append(inputContent2);
inputCard.append(statusOfTask);
inputCard.append(signal);
///----------ISVEDAME I EKRANA(PRISKIRIAME HTML DIV'UI-------)
cardWrapper.append(inputCard);
// cardWrapper.append(inputCard);

    });
});