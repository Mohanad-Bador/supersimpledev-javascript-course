// 12a
let add = function (){
  console.log(2+3);
};
add()

// 12b
function runTwice(fun){
  fun();
  fun();
}
runTwice(add);
runTwice(function(){console.log('12b')});

// 12c
function click12c(){
  const buttonElement = document.querySelector('.js-12c');
  buttonElement.innerHTML = 'Loading!'
  setTimeout(function () {
    buttonElement.innerHTML = 'Finished!';
  },1000)
}

// 12e
let id;
function addToCart(){
  addElement = document.querySelector('.add-message');
  addElement.innerHTML = "Added";
  clearTimeout(id);
  id = setTimeout(function () {
    addElement.innerHTML = ''
  }, 2000);
}

// 12g
// 12h
// 12i
let messages = 2;
function changeTitle() {
  if(messages){
    if(document.title === 'Advanced Functions Exercise') {
        document.title = `(${messages}) New messages`;
      } else {
        document.title = 'Advanced Functions Exercise';
      }
  } else {
    document.title = 'Advanced Functions Exercise';
  }
}
setInterval(changeTitle, 1000);

