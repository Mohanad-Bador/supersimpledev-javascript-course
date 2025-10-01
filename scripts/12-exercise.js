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
  setTimeout(() => {
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
let messages = 0;

setInterval(() => {
  if(messages){
    if(document.title === 'Advanced Functions Exercise') {
        document.title = `(${messages}) New messages`;
      } else {
        document.title = 'Advanced Functions Exercise';
      }
  } else {
    document.title = 'Advanced Functions Exercise';
  }
}, 1000);

// 12j
const multiply =  (num1, num2) => {
  return num1 * num2;
}
console.log('12j');
console.log(multiply(2,3));
console.log(multiply(7,10));

// 12k
const multiply2 =  (num1, num2) =>  num1 * num2;
console.log('12k');
console.log(multiply(2,3));
console.log(multiply(7,10));

// 12l
const countPositive =  (array) => {
  let count = 0;
  array.forEach(element => {
    if (element > 0) count++;
  });
  return count;
}
console.log('12l');
console.log(countPositive([1, -3,5]));
console.log(countPositive([-2, 3, -5, 7, 10]));

// 12m
const addNum = (array, num) => {
  return array.map(element => (element + num));
}
console.log('12m');
console.log(addNum([1, 2, 3], 2));
console.log(addNum([-2, -1, 0, 99, 10], 2));

// 12n
const removeEgg = (array) => {
  return array.filter(element => element !='egg');
}
console.log('12n');
console.log(removeEgg(['egg', 'apple', 'egg', 'egg', 'ham']));

// 12o
const removeEgg2 = (array) => {
  count = 2;
  return array.filter(element => {
    if(count > 0 && element === 'egg'){
      count--;
      return false
    }
    else return true;
  });
}
console.log('12o');
console.log(removeEgg2(['egg', 'apple', 'egg', 'egg', 'ham']));

// 12q
document.querySelector('.js-12c').addEventListener('click', click12c);
document.querySelector('.js-add').addEventListener('click', () => messages++);
document.querySelector('.js-remove').addEventListener('click', () => {if(messages>0) messages--});
