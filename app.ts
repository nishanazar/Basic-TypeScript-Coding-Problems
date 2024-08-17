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

console.log(findSmallest(3, 5, 2)); // Output: 2
