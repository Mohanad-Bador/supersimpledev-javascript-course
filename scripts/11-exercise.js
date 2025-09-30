const nums1 = [1,20,30];
const nums2 = [1,20,22,24,5];
const words1 = ['hi','hello','egg','search','good','search','egg','egg'];
const words2 = ['apple', 'grape','egg' ,'apple', 'apple'];
nums1[2] = 99;
console.log(nums1);

// 11b
function getLastValue(array){
  const val = array[array.length - 1];
  console.log(val);
  return val;
}

getLastValue(nums1);
getLastValue(nums2);
getLastValue(words1);

// 11c
function arraySwap(array){
  const first = array[0];
  const last = array[array.length-1];
  
  array[0] = last;
  array[array.length-1] = first;
}

arraySwap(nums1);
console.log(nums1)
arraySwap(nums2);
console.log(nums2)
arraySwap(words1);
console.log(words1)

// 11d
for(let i = 0; i < 11; i += 2){
  console.log(i);
}

// 11e
for(let i = 5; i >= 0; i--){
  console.log(i);
}

// 11h
function addOne(array){
  const copy = [];
  for(let i = 0; i < array.length; i++){
    copy[i] = array[i] + 1;
  }
  return copy;
}

console.log(addOne(nums1));
console.log(addOne(nums2));
console.log(addOne(words1));

// 11i
function addNum(array, num){
  const copy = [];
  for(let i = 0; i < array.length; i++){
    copy[i] = array[i] + num;
  }
  return copy;
}

console.log(addNum(nums1,2));
console.log(addNum(nums2,3));
console.log(addNum(words1,'m'));

// 11j
function addArrays(array1, array2){
  const copy = [];
  for(let i = 0; i < array1.length; i++){
    copy[i] = array1[i] + array2[i];
  }
  return copy;
}

console.log(addArrays(nums1,nums2));
console.log(addArrays([1,1,2],[1,1,3]));
console.log(addArrays([1,2,3],[4,5,6]));

// 11k
function countPositive(array){
  let count = 0;
  for(let i = 0; i < array.length; i++){
    if(array[i] > 0) count++;
  }
  return count;
}

console.log(countPositive(nums1));
console.log(countPositive(nums2));
console.log(countPositive([1,-3,5]));
console.log(countPositive([-2,3,-5,7,10]));

// 11l
function minMax(array){
  let min = Number.MAX_SAFE_INTEGER;
  let max = Number.MIN_SAFE_INTEGER;
  for(let i = 0; i < array.length; i++){
    if(array[i] > max) max = array[i];
    if(array[i] < min) min = array[i];
  }
  return [min, max];
}
console.log('11L');
console.log(minMax(nums1));
console.log(minMax(nums2));
console.log(minMax([1,-3,5]));
console.log(minMax([-2,3,-5,7,10]));

// 11n
function countWords(array){
  const result = {};
  for(let i = 0; i < array.length; i++){
    const word = array[i];
    if(result[word]){
      result[word]++;
    }
    else result[word] = 1;
  }
  return result;
}
console.log('11n');
console.log(countWords(words1));
console.log(countWords(words2));
console.log(countWords([5,-3,5]));
console.log(countWords([-2,3,-5,7,10]));

// 11o
function findSearch(array){
  for(let i = 0; i < array.length; i++){
    if(array[i] === 'search'){
      return i;
    }
  }
  return -1;
}
console.log('11o');
console.log(findSearch(words1));
console.log(findSearch(words2));
console.log(findSearch([5,-3,5,'search']));
console.log(findSearch([-2,3,-5,7,10]));

// 11q
function findIndex(array, word){
  for(let i = 0; i < array.length; i++){
    if(array[i] === word){
      return i;
    }
  }
  return -1;
}
console.log('11q');
console.log(findIndex(words1,'good'));
console.log(findIndex(words2,'apple'));
console.log(findIndex(['green','red','blue','red'], 'red'));
console.log(findIndex(['green','red','blue','red'], 'yellow'));

// 11r
function removeEgg(array){
  const result = [];
  for(let i = 0; i < array.length; i++){
    if(array[i] === 'egg'){
      continue;
    }
    else result.push(array[i]);
  }
  return result;
}
console.log('11r');
console.log(removeEgg(words1,));
console.log(removeEgg(words2,));
console.log(removeEgg(['egg','apple','egg','egg', 'burger']));
console.log(removeEgg(['green','red','blue','red']));

// 11s
function removeEgg2(array){
  let count = 0;
  const result = [];
  for(let i = 0; i < array.length; i++){
    if(array[i] === 'egg' && count < 2){
      count++;
      continue;
    }
    else result.push(array[i]);
  }
  return result;
}
console.log('11s');
console.log(removeEgg2(words1));
console.log(removeEgg2(words2));
console.log(removeEgg2(['egg','apple','egg','egg', 'burger']));
console.log(removeEgg2(['green','red','blue','red']));

// 11t
function removeEgg3(array){
  let count = 0;
  array.reverse();;
  const result = [];
  for(let i = 0; i < array.length; i++){
    if(array[i] === 'egg' && count < 2){
      count++;
      continue;
    }
    else result.push(array[i]);
  }
  return result.reverse();
}
console.log('11t');
console.log(removeEgg3(words1));
console.log(removeEgg3(words2));
console.log(removeEgg3(['egg','apple','egg','egg', 'burger']));
console.log(removeEgg3(['green','red','blue','red']));

// 11u
function removeEgg4(array){
  let count = 0;
  const copy = array.slice()
  copy.reverse();;
  const result = [];
  for(let i = 0; i < copy.length; i++){
    if(copy[i] === 'egg' && count < 2){
      count++;
      continue;
    }
    else result.push(copy[i]);
  }
  return result.reverse();
}
console.log('11u');
console.log(removeEgg4(words1));
console.log(removeEgg4(words2));
console.log(removeEgg4(['egg','apple','egg','egg', 'burger']));
console.log(removeEgg4(['green','red','blue','red']));

// 11v
for(let i = 1; i <= 20; i++){
  let str = i;
  if(i % 3 === 0) str += 'Fizz';
  if(i % 5 === 0) str += 'Buzz';
  console.log(str);
}

// 11w
function findIndex(array, word){
  for(let i = 0; i < array.length; i++){
    if(array[i] === word){
      return i;
    }
  }
  return -1;
}
function unique(array){
  const result = [];
  for(let i = 0; i < array.length; i++){
    if(findIndex(result, array[i]) === -1) result.push(array[i]);
  }
  return result;
}
console.log('11w');
console.log(unique(words1));
console.log(unique(words2));
console.log(unique(['green','red','blue','red']));
console.log(unique(['green','red','blue','red','green']));