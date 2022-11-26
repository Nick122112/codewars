// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

// The input will be a lowercase string with no spaces.

// Good luck!

function capitalize(s) {
  const arr = s.split("");
  const arr1 = [];
  const arr2 = [];
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      arr1.push(arr[i].toUpperCase());
      arr2.push(arr[i]);
    } else {
      arr1.push(arr[i]);
      arr2.push(arr[i].toUpperCase());
    }
  }
  return [arr1.join(""), arr2.join("")];
}
