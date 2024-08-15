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

console.log(sumOfAllNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); //Output : 55

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

console.log(countVowels("nisha")); // Output: 2
console.log(countVowels("AIZA")); // Output: 3

//-------------------Question: 03----------------------------------
// Question: Write a function in TypeScript that takes two numbers as input and returns their sum.

function sum(a: number, b: number) {
  return a + b;
}

console.log(sum(20, 30));  // Output: 50

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
console.log(numberIfEvenOrOdd(20));  // Output: true
