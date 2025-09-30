console.log(document.querySelector('.js-button').classList.contains('js-button'));

let toggle = false;
function toggleButton(name){
  gamingElement = document.querySelector(name);
  const isToggled = gamingElement.classList.contains('is-toggled');
  if(isToggled && !toggle){
    gamingElement.classList.remove('is-toggled');
    toggle = true;
  }
  else if(!isToggled && toggle) {
    gamingElement.classList.add('is-toggled');
    toggle = false;
  }
}