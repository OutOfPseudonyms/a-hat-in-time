// Business Logic

function numberCounter() {
  let x = 20;
  for (let i = 0; i <= x; i++) {
    if ((i % 3 === 0) && (i % 5 === 0)) {
      console.log("I'm sorry Dave!");
    } else if ((i % 3 === 0) && (i % 5 !== 0)) {
      console.log("Ppft!");
    } else if ((i % 5 === 0) && (i % 3 !== 0)) {
      console.log("Zzzt!");
    } else {
      console.log(i);
    }
  }
};

numberCounter();

// 1. put this loop into a function
// 2. call that function in your code
// 3. call brian to show him


// later - that function will take an argument called x