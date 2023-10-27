/*
  Write a program that takes a user’s input and prints the numbers from one 
  to the number the user entered. However, for multiples of three print Fizz 
  instead of the number and for the multiples of five print Buzz. For numbers 
  which are multiples of both three and five print FizzBuzz.
*/

userInput = prompt("Write any number: ");

function fizzBuzz(input) {
  let a = 1; // Numbers shown start at 1
  
  // The 'FizzBuzz if' is at the top, because if a number is divisible by 
  // three and 5 but passes through one of the other 'ifs' first it will 
  // return just "Fizz" or "Buzz".
  while (a <= input) {
    if ((a % 3 === 0) && (a % 5 === 0)) {
      console.log("FizzBuzz");
    } else if (a % 3 === 0) {
      console.log("Fizz");
    } else if (a % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(a);
    };

    a++;
  };
  
  console.log("End");
}

// If the input is not a number or is 0 or less:
if (isNaN(userInput) || userInput <= 0) {
  console.log("NOT ON MY WATCH!")
  fizzBuzz(15); // To always get an answer and see the first FizzBuzz :)
} else {
  fizzBuzz(userInput);
};

