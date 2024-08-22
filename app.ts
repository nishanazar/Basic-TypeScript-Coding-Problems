//-------------------Question: 01----------------------------------
// Question: Write a function in TypeScript that takes an array of numbers as input and returns the
//  sum of all the numbers in the array.

// Hint: Use a loop to iterate through the array and keep adding each number to a sum variable.

function sumOfAllNumbers(arr: number[]): number {
  let sum = 0;

  for (const num of arr) {
    sum += num;
  }
  return sum;
}

// console.log(sumOfAllNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); //Output : 55

//-------------------Question: 02----------------------------------
// Question: Write a function in TypeScript that takes a string as input and returns the number
//  of vowels (a, e, i, o, u) in the string.

// Hint: You can loop through each character in the string and check if it's a vowel by comparing
//  it against a list of vowels.

function countVowels(str: string) {
  const vowels = "aeiou";
  let count = 0;

  const lowerCaseStr = str.toLowerCase();
  for (const char of lowerCaseStr) {
    if (vowels.includes(char)) count++;
  }
  return count;
}

// console.log(countVowels("nisha")); // Output: 2
// console.log(countVowels("AIZA")); // Output: 3

//-------------------Question: 03----------------------------------
// Question: Write a function in TypeScript that takes two numbers as input and returns their sum.

function sum(a: number, b: number) {
  return a + b;
}

// console.log(sum(20, 30));  // Output: 50

//-------------------Question: 04----------------------------------
// Question: Write a function in TypeScript that takes a number as input and returns true if
// the number is even, and false if the number is odd.

// Hint: Use the modulus operator (%) to check if the number is divisible by 2.

function numberIfEvenOrOdd(num: number): boolean {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
// console.log(numberIfEvenOrOdd(20));  // Output: true

//-------------------Question: 05----------------------------------
// Question: Tumhain aik array numbers diya gaya hai jo ke kuch positive integers par mushtamil hai.
//  Tumhain aik function likhna hai jo iss array mein se sirf odd numbers ko filter kare aur unn ka
//   sum return kare.

// let numbers = [1, 2, 3, 4, 5];
// console.log(sumOfOddNumbers(numbers)); // Output: 9
// Hint: Array ka loop use karo aur har number ko check karo ke wo odd hai ya nahi, aur agar hai toh
//  usay sum mein add karo.

function sumOfOddNumbers(num: number[]): number {
  let oddSum: number = 0;
  for (let i = 0; i < num.length; i++) {
    if (num[i] % 2 !== 0) {
      oddSum += num[i];
    }
  }
  return oddSum;
}

let numbers = [1, 2, 3, 4, 5];
// console.log(sumOfOddNumbers(numbers)); // Output: 9

//-------------------Question: 06----------------------------------
// Task: You are given an array of numbers that consists of some positive integers. You need to
// write a function that filters out only the even numbers from this array and returns a new array
//  containing those even numbers.
//  Example: numbers = [1, 2, 3, 4, 5, 6];
//  console.log(filterEvenNumbers(numbers)); // Output: [2, 4, 6]
// Hint: Use a loop to iterate through the array, check each element to see if it's even
//  (using the modulus operator), and if it is, add it to the new array.

function filterEvenNumbers(num1: number[]): number[] {
  let newArray: number[] = [];
  for (let i = 0; i < num1.length; i++) {
    if (num1[i] % 2 === 0) {
      newArray.push(num1[i]);
    }
  }
  return newArray;
}
let number = [1, 2, 3, 4, 5, 6];
// console.log(filterEvenNumbers(number));  // Outout: [ 2, 4, 6 ]

//-------------------Question: 07----------------------------------
// Write a function that takes a parameter which can either be a string or a number and returns
//  its length (for string) or the number itself (for number).

function eitherStringOrNumber(para: string | number) {
  if (typeof para === "string") {
    return para.length;
  } else {
    return para;
  }
}

// console.log(eitherStringOrNumber("hello"));

//-------------------Question: 08-------------------------------

//Write a function that takes three numbers as input and returns the smallest one.

function findSmallest(a: number, b: number, c: number): number {
  let smallest = a;

  if (b < smallest) {
    smallest = b;
  }
  if (c < smallest) {
    smallest = c;
  }
  return smallest;
}

// console.log(findSmallest(3, 5, 2)); // Output: 2

//-----------------Question: 09---------------------------------
// Write a TypeScript function called findLargest that takes an array of numbers as input and
//  returns the largest number in the array.

function findLargest(arr: number[]) {
  let largestNumber = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largestNumber) {
      largestNumber = arr[i];
    }
  }
  return largestNumber;
}

// console.log(findLargest([4, 80, 9, 37, 10, 55])); // Output: 80

//-----------------Question: 10--------------------------------
// Write a TypeScript function called doubleNumber that takes a number as input and returns
// double its value.

function doubleNumber(num: number): number {
  return num + num;
}
// console.log(doubleNumber(5));
// console.log(doubleNumber(15));

//-----------------Question: 11--------------------------------
// Write a TypeScript function called square that takes a number as input and returns its square
//  (the number multiplied by itself).

function square(num: number): number {
  return num * num;
}

// console.log(square(4)); // 16
// console.log(square(7)); // 49

//-----------------Question: 12--------------------------------

//write a program to take a string as input from the user and print its length.

function stringLength(str: string): number {
  return str.length;
}

// console.log(stringLength("hello"));

//-----------------Question: 13--------------------------------

// write a program to print numbers from 1 to 10 in reverse order

for (let i = 10; i >= 1; i--) {
  // console.log(i);
}
//-----------------Question: 14--------------------------------
//write a program to print the elements of an array in reverse order

let elements = ["world", "Hello"];
//let elements = [9,8,7,5,4,3,2] //[2, 3, 4, 5,7, 8, 9]
elements.reverse();
// console.log(elements); //['Hello', 'world']

//-----------------Question: 15-------------------------------
// write a function in TypeScript that takes an array of numbers as input and returns the largest
//  number in the array.

function largestNumber(num: number[]) {
  let largest = num[0];
  for (let i = 0; i < num.length; i++) {
    if (num[i] > largest) {
      largest = num[i];
    }
  }
  return largest;
}

// console.log(largestNumber([1, 3, 4, 5, 7, 9]));
// console.log(largestNumber([20, 39, 88]));

//-----------------Question: 16-------------------------------
// Write a function in TypeScript that takes an array of numbers as input and returns a new array
//  with the elements in reverse order.

function reverseArray(num: number[]) {
  return num.reverse();
}
let output = reverseArray([9, 8, 7, 6, 5]);
// console.log(output);

//-----------------Question: 17-------------------------------
// Write a function called fetchData that simulates fetching data with a promise. The function
// should return a promise that resolves with an object containing a data key after 2 seconds.

// Instructions:
// The function should return a promise that resolves after 2 seconds.
// The resolved value should be an object with a data key, and its value should be "Hello, world!".

function fetchData() {
  let promise = new Promise<{ data: string }>((resolve, rejct) => {
    setTimeout(() => {
      resolve({
        data: "Hello, world!",
      });
    }, 2000);
  });
  return promise;
}

// fetchData().then((vale) => console.log(vale));

//-----------------Question: 18-------------------------------
// Write a function called delayedMessage that takes a message (string) and a delay time (number)
// in milliseconds as parameters. The function should return a promise that resolves after the
//  specified delay with the provided message.

//  Instructions:
// The function should take two parameters: message (string) and delay (number).
// It should return a promise that resolves with the provided message after the specified delay.

function delayedMessage(message: string, delay: number) {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(message);
    }, delay);
  });
  return promise;
}

// delayedMessage("This is delayed", 3000).then((item) => console.log(item));

//-----------------Question: 19-------------------------------
// Function with Rest Parameters: Write a function that takes a rest parameter representing
// multiple hobbies. It should log each hobby with a statement saying you enjoy that hobby.

function multipleHobbies(...params: string[]) {
  params.forEach((item) => {
    console.log(`I enjoy ${item}.`);
  });
}

// multipleHobbies("writing", "reading", "travelling", "coding");

//-----------------Question: 20-------------------------------

// Construct an object for a laptop including properties make, model, year, and a method describe()
// that logs a sentence about the laptop.

let laptop = {
  make: "Dell",
  model: "New Elite Series",
  year: 2023,
  describe() {
    console.log(`This laptop is a ${this.year} ${this.make} ${this.model} `);
  },
};
laptop.describe();
console.log(laptop);

//-----------------Question: 21-------------------------------
// Given an array of objects representing different laptops, each with properties `make`, `model`,
// and `year`, use array destructuring to assign the first and second laptops to variables. Then,
// log these variables.

//-----------------Question: 22-------------------------------
// Combining Arrays with Spread Operator: Suppose you are comparing prices of two different sets
//  of laptops. Use the spread operator to combine these arrays into a single array sorted in
//  ascending order, then log the result.
