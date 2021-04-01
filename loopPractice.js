// Business Logic

// function numberCounter(x) {
//   for (let i = 0; i <= x; i++) {
//     if ((i % 3 === 0) && (i % 5 === 0)) {
//       console.log("I'm sorry Dave!");
//     } else if ((i % 3 === 0) && (i % 5 !== 0)) {
//       console.log("Ppft!");
//     } else if ((i % 5 === 0) && (i % 3 !== 0)) {
//       console.log("Zzzt!");
//     } else {
//       console.log(i);
//     }
//   }
// };

// numberCounter(20);

// 1. put this loop into a function
// 2. call that function in your code
// 3. call brian to show him


// later - that function will take an argument called x

// function numberDoubler(x) {
//   x = x * 2
//   return x;
// };
// console.log(numberDoubler(20));

// function returnHalf(x) {
//   x = x / 2;
//   return x;
// };
// console.log(returnHalf(10));

// function numberMultiplier(x, y) {
//   let z;
//   z = x * y;
//   return z;
// };
// console.log(numberMultiplier(10, 60));

// function greeting(x) {
//   return `Hello, ${x}.`;
// }
// console.log(greeting("Maiq"));

// function age(x, y) {
//   return `${x} is ${y} years old.`;
// }
// console.log(age("Maiq", "19"));

// function farewell(x, y) {
//   return `Goodbye, ${x}, I will see you ${y}.`;
// }
// console.log(farewell("Maiq".charAt(0), "in 3 years"));

// function counting(x) {
//   for (i = 0; i <= x; i += 1) {
//     console.log(i);
//   }
// }
// counting(20);

let array = ["hello", "goodbye", "nein"];

for (let i = 0; i < array.length; i += 1) {
  if (i < 2) {
    console.log(array[i].toUpperCase());
  } else {
    console.log(`${array[i].toUpperCase()}!!!`)
  }
  // console.log(array[i].charAt(i));
  if (i < 2) {
    console.log(`${array[i].charAt(0).toUpperCase()}${array[i].slice(1)}, Maiq.`)
  } else {
    console.log(`${array[i].charAt(0).toUpperCase()}${array[i].slice(1)}, Maiq!`)
  }
}