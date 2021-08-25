function first() {
  // DO SOMETSING

}

function learnJS(leng, callback) {
  console.log(`Я учу: ${leng}`);
  callback();
}

function done() {
  console.log('Я прошел этот урок');
}

learnJS('JavaScript', done); 

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function() {
        console.log("Test");
    }
};
options.makeTest();

const {border, bg} = options.colors;
console.log(border);


// console.log(Object.keys(options).length);


// console.log(options['colors']['border']);

// delete options.name;
// console.log(options);
// let counter = 0;
// for (let key in options) {
//     if (typeof(options[key]) === 'object') {
//         for (let i in options[key]) {
//             console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
//         }
//     } else {
//         console.log(`Свойство ${key} имеет значение ${options[key]}`);
//         counter++;
//     }
// }
// console.log(counter);


const arr = [2, 13, 26, 8, 10];
arr.sort(comppareNum);
console.log(arr);

function comppareNum(a, b) {
    return a - b;
}

// arr.forEach(function(item, i, arr) {
//     console.log(`${i}: ${item} внутри массива ${arr}`);
// });

// const str = prompt("", "");
// const products = str.split(", ");
// products.sort();
// console.log(products.join(";"));


// arr[99] = 0;
// console.log(arr.length);
// console.log(arr);

// // arr.pop();
// arr.push(10);
// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// for (let velue of arr) {
//     console.log(velue);

// }
// }
// }
// }

// let a = 5,
//     b = a;

// b = b + 5;
// console.log(b);
// console.log(a);

// const obj = {
//     a: 5,
//     b: 1
// };

// const copy = obj;  // ссылку
// copy.a = 10;

// console.log(copy);
// console.log(obj);

function copy(mainObj) {
  let objCopy = {};

  let key;
  for (key in mainObj) {
      objCopy[key] = mainObj[key];
  }

  return objCopy;
}

const numbers = {
  a: 2,
  b: 5,
  c: {
      x: 7,
      y: 4
  }
};

const newNumbers = copy(numbers);
newNumbers.a = 10;
newNumbers.c.x = 10;


console.log(newNumbers);
console.log(numbers);


const add = {
  d: 17,
  e: 20
};
const clone = Object.assign({}, add);
clone.d = 20;

console.log(add);
console.log(clone);


const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();

newArray[1] = 'asdasd';

console.log(newArray);
console.log(oldArray);


const video = ['youtube', 'vimeo', 'rutube'],
    blogs = ['wordpress', 'lifejournal', 'blogger'],
    internet = [...video, ...blogs, 'vk', 'facebook'];
console.log(internet);


function log(a, b, c) {
  console.log(a);
  console.log(b);
  console.log(c);
}

const num = [2, 5, 7];

log(...num);

const array = ["a", "b"];
const newAarray = [...array];


const q = {
  one: 1,
  two: 2
};

const newObj = {...q};