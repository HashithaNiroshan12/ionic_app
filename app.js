const inputfname = document.querySelector('#input-fname');
const inputamount = document.querySelector('#input-Amount');
const cancelbtn = document.querySelector('#btn-cancel');
const submitbtn = document.querySelector('#btn-submit');
const expenseList = document.querySelector('#expenses-list');
const totalamount = document.querySelector('#total-expenses')
const alert = document.createElement('ion-alert');

let totalExpenses = 0;

const clear = () =>{
    inputfname.value = '';
    inputamount.value = '';
}

submitbtn.addEventListener('click', () =>{
 const enteredFname = inputfname.value;
 const entredAmount = inputamount.value;

 if(
    enteredFname.trim().length <=0 ||
    entredAmount<=0 ||
    entredAmount.trim().length <= 0
 ) {
   
   
     return;
 }
 
 const newItem = document.createElement('ion-item');
 newItem.textContent = enteredFname + ': $' + entredAmount;
 
 expenseList.appendChild(newItem);

totalExpenses += +entredAmount;
totalamount.textContent = totalExpenses;

 clear();
});

cancelbtn.addEventListener('click', clear);