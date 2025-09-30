let calculation = localStorage.getItem('calc') || '';
// Display calculation on first load
displayCalculation();

function updateCalculation(value){
  calculation += value;
  displayCalculation();
  localStorage.setItem('calc', calculation);
}

function displayCalculation(){
  document.querySelector('.js-calculation').innerHTML = calculation
}

function equal() {
  calculation = eval(calculation);
  displayCalculation();
  localStorage.setItem('calc', calculation);
}

function clearCalculation() {
  calculation = '';
  displayCalculation();
  localStorage.removeItem('calc');
}