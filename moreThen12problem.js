// function myFunction(str) {
//   let sum = 0;
//   for (const num of str) {
//     if (num.includes(0)) {
//       sum++;
//     }
//   }
//   return sum;
// }

// const rsult = myFunction('101000001');
// console.log(rsult);

// function finalScore(scores) {
//   //Write your code here
//   //Don't forget to return
//   let sum = 0;
//   for (const num of scores) {
//     sum = sum + num;
//   }
//   return sum;
// }
// console.log(finalScore([20, 13, 37]));

// function subtraction(num1, num2) {
//   //write your code here
//   //don't forget to write return
//   const price = num1 - num2;
//   return price;
// }
// console.log(subtraction(1000, 700));

// function JimOr(marksOfJim, marksOfDela, marksOfChinku) {
//   let valus = [];
//   valus.push(marksOfJim);
//   valus.push(marksOfDela);
//   valus.push(marksOfChinku);
//   const valuse = valus[0];
//   for (const num of valus) {
//     if (num > valuse) {
//       return 'dela';
//     }
//   }
//   return valus;
// }
// console.log(JimO(84, 99, 77));

// function JimOrDelaOrChinku(marksOfJim, marksOfDela, marksOfChinku) {
//   if (marksOfJim > marksOfDela && marksOfJim > marksOfChinku) {
//     return 'Jim';
//   } else if (marksOfDela > marksOfJim && marksOfDela > marksOfChinku) {
//     return 'dela';
//   } else if (marksOfChinku > marksOfJim && marksOfChinku > marksOfDela) {
//     return 'chinku';
//   }
// }

// console.log(JimOrDelaOrChinku(40, 80, 100));

// const findNames = arrOfObj => {
//   //write your code here
//   //don't forget to return
//   let sum = [];
//   for (let num of arrOfObj) {
//     sum.push(num.name);
//   }
//   return sum;
// };
// const names = [
//   { name: 'John', age: 20 },
//   { name: 'Mary', age: 25 },
//   { name: 'Peter', age: 30 },
// ];

// console.log(findNames(names));
// function findMax(arr) {
//   //write your code here
//   //don't forget to write return
//   let largest = arr[0];
//   for (let num of arr) {
//     if (num > largest) {
//       largest = num;
//     }
//   }
//   return largest;
// }

// const calculate = arrOfNumbers => {
//   let sum = 0;
//   for (const num of arrOfNumbers) {
//     const valus = Math.pow(num, 2);
//     sum = sum + valus / arrOfNumbers.length;
//   }
//   return sum;
// };
// console.log(calculate([4, 6, 10, 12]));

// const totalCost = products => {
//   let sum = 0;
//   for (const num of products) {
//     sum = sum + num.price;
//   }
//   return sum;
// };
// console.log(
//   totalCost([
//     { name: 'Samsung M33', price: 10000 },
//     { name: 'Samsung Charger', price: 500 },
//     { name: 'Haveit Speakers', price: 2500 },
//   ])
// );

// function getLetter(s) {
//   let vowel = ['A', 'E', 'I', 'O', 'U'];

//   let notVowel = ['B', 'C', 'D', 'E', 'G'];
//   let natingVowel = ['H', 'J', 'K', 'L', 'M'];
//   let natingforVoloeul = [
//     'N',
//     'P',
//     'Q',
//     'R',
//     'S',
//     'T',
//     'V',
//     'W',
//     'X',
//     'Y',
//     'Z',
//   ];

//   const str = s.toUpperCase().split('');
//   for (const num of str) {
//     if (vowel.includes(num.toUpperCase())) {
//       return 'A';
//     } else if (notVowel.includes(num.toUpperCase())) {
//       return 'B';
//     } else if (natingVowel.includes(num.toUpperCase())) {
//       return 'C';
//     } else if (natingforVoloeul.includes(num)) {
//       return 'D';
//     }
//   }
// }
// console.log(getLetter('adfgtbbbb'));

// const checkEvenLength = arrOfFriends => {
//   //write your code here
//   let sum = [];
//   for (const num of arrOfFriends) {
//     if (num.length % 2 === 0) {
//       sum.push(num);
//     }
//   }
//   return sum;
// };
// console.log(checkEvenLength(['John', 'James', 'Jane', 'Ratul']));
const arry = [
  {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    year: 1960,
  },

  {
    title: 'Harry Potter and the Philosopher Stone',
    author: 'J.K. Rowling',
    year: 20010,
  },

  {
    title: 'The Hunger Games',
    author: 'Suzanne Collins',
    year: 2008,
  },
];

const findBooks = arrOfBooks => {
  let sum = [];
  for (const num of arrOfBooks) {
    if (num.year > 2000) {
      sum.push(num);
    }
  }
  return sum;
};
console.log(findBooks(arry));
