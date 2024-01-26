let array = []; 
const button = document.getElementById('buttonId');
const cardWrapper = document.getElementById('cardWrapper');

const input = document.getElementById('inputId');
const input1 = document.getElementById('inputId_1');
const input2 = document.getElementById('inputId_2');

// kreipiames i local storage duomenu--ir juos parsiname atgal i objeta-----------
const localStorageTasks = JSON.parse(localStorage.getItem("element"));
// -----isikeliame reiksmes kadangi  array (po refresho) yra tuscias (null)------
// let tasks = localStorageTasks;


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
//  - pridedame taska i local storage, o kadangi objekto masyvo negalima prideti, dedame JASON----------tikrinti--NEVEIKIA-----------------------------------------------------------
localStorage.setItem('dataFromInput', JSON.stringify(input));
// ---NUNULINAME INPUT VERTES -----------
input.value =""; 
input1.value = "";  
input2.value = ""; 
// --------NUNULINAME PACIA KORTELE---po ko visos korteles sugeneruojamos is naujo-------
cardWrapper.innerHTML = "";
// --------APDIRBAME DUOMENIS FOREACH CIKLU-------
// --------11uzduotis, apsukame masyva----(galima ta pati atlikti flex.revers csse arba ne pushinant, o unshiftinti---------
[...array].reverse().forEach((element) => {
// --------KIEKVIENAM ELEMENTUI SUKURIAME KORTELE---
const inputCard = document.createElement('div');
inputCard.classList.add("class", "inputCardClass");
console.log(inputCard);

// -------FOREACHO METU KIEKVIENAM DIVUI PRISKIRIAME EVENTLISTNERI---
inputCard.addEventListener('click', ()=> {
const index = array.findIndex((inputElement)=>{
return inputElement.title === input.title;
// --10 uzduotis, tikrinti___________________________
console.log(input.title);
//------------tikriname statusa---------------
dataFromInput[index].isDone = !dataFromInput[index].isDone;

// /---istriname kortele is ekrano------
inputCards.innerHTML= "";
// iskvieciame funkcija, kur is naujo sugeneruoja korteles (kreipinys i esame funkcija---)
// generateCards()
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
// --------tenerio operatoriaus pagalba priskiriame viena arba kita klase!!!!!!!--------
signal.setAttribute('class', input.isDone ? 'task-completed': 'task-not-completed');

///--------PASITIKRINTI VEIKIMA?????????????????????????
// if(dataFromInput.isDone ==='false'){
//     signal.setAttribute("style", "background-color: red");
// }else{
//     signal.setAttribute("style", "background-color: green");
// };
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