/**
 * To run this file in Gitpod, use the 
 * command node the-spread-operator.js in the terminal
 */

// No spread operator
const numbers = [1, 2, 3];
const copy = numbers; // This does not create a copy; it creates a reference to the original array
console.log('No spread operator:', copy === numbers); // Output: true

// Copying an array
const originalArray = [4, 5, 6];
const copiedArray = [...originalArray]; // This creates a shallow copy of the original array
console.log('Copying an array:', copiedArray); // Output: [4, 5, 6]

// Copying an object
const originalObject = { a: 1, b: 2, c: 3 };
const copiedObject = { ...originalObject }; // This creates a shallow copy of the original object
console.log('Copying an object:', copiedObject); // Output: { a: 1, b: 2, c: 3 }

// Copying only part of an array/object
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const mergedArray = [...array1, ...array2]; // Merge two arrays
console.log('Copying only part of an array:', mergedArray); // Output: [1, 2, 3, 4, 5, 6]

const object1 = { x: 1, y: 2 };
const object2 = { z: 3 };
const mergedObject = { ...object1, ...object2 }; // Merge two objects
console.log('Copying only part of an object:', mergedObject); // Output: { x: 1, y: 2, z: 3 }

