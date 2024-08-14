# JavaScript Reference vs Copy Guide

## Introduction

In JavaScript, understanding the difference between reference and copy is crucial for effective programming. This guide covers the basics of reference vs copy for both primitive types and objects, as well as various methods for creating copies of arrays.

## Primitive Types vs Objects

### Primitive Types (Copy)

Primitive types in JavaScript include String, Number, Boolean, null, undefined, and Symbol. When these are assigned or passed, a copy of the value is created.

```javascript
let a = 5;
let b = a; // 'b' gets a copy of the value in 'a'
b = 10;
console.log(a); // Still 5
console.log(b); // 10
```

### Objects (Reference)

Objects in JavaScript (including arrays and functions) are passed by reference. This means that when assigned or passed, a reference to the object is created, not a copy.

```javascript
let obj1 = {x: 1};
let obj2 = obj1; // 'obj2' references the same object as 'obj1'
obj2.x = 2;
console.log(obj1.x); // 2
console.log(obj2.x); // 2
```

## Extended Examples

```javascript
// Primitive Types (Copy)
let num1 = 10;
let num2 = num1;
num2 += 5;
console.log(num1); // 10
console.log(num2); // 15

let str1 = "hello";
let str2 = str1;
str2 += " world";
console.log(str1); // "hello"
console.log(str2); // "hello world"

// Objects (Reference)
let obj1 = { name: "Alice", age: 30 };
let obj2 = obj1;
obj2.age = 31;
console.log(obj1.age); // 31
console.log(obj2.age); // 31

// Arrays (Reference)
let arr1 = [1, 2, 3];
let arr2 = arr1;
arr2.push(4);
console.log(arr1); // [1, 2, 3, 4]
console.log(arr2); // [1, 2, 3, 4]

// Shallow Copy of Objects
let original = { a: 1, b: { c: 2 } };
let shallowCopy1 = Object.assign({}, original);
let shallowCopy2 = { ...original };

shallowCopy1.a = 10;
shallowCopy2.b.c = 20;

console.log(original.a);    // 1
console.log(original.b.c);  // 20
console.log(shallowCopy1.a); // 10
console.log(shallowCopy2.b.c); // 20

// Deep Copy
let deepOriginal = { a: 1, b: { c: 2 } };
let deepCopy = JSON.parse(JSON.stringify(deepOriginal));

deepCopy.b.c = 30;

console.log(deepOriginal.b.c); // 2
console.log(deepCopy.b.c);     // 30

// Function arguments
function modifyPrimitive(x) {
    x = x * 2;
}

function modifyObject(obj) {
    obj.value *= 2;
}

let num = 5;
modifyPrimitive(num);
console.log(num); // Still 5

let obj = { value: 5 };
modifyObject(obj);
console.log(obj.value); // 10
```

## Copying Arrays

There are several methods to create copies of arrays in JavaScript:

```javascript
// Original array
const originalArray = [1, 2, 3, [4, 5]];

// 1. Spread operator (shallow copy)
const spreadCopy = [...originalArray];

// 2. Array.from() method (shallow copy)
const fromCopy = Array.from(originalArray);

// 3. slice() method (shallow copy)
const sliceCopy = originalArray.slice();

// 4. concat() method (shallow copy)
const concatCopy = [].concat(originalArray);

// 5. Deep copy using JSON methods
const deepCopy = JSON.parse(JSON.stringify(originalArray));

// 6. Custom deep copy function
function deepCopyArray(arr) {
    return arr.map(item => Array.isArray(item) ? deepCopyArray(item) : item);
}
const customDeepCopy = deepCopyArray(originalArray);

// Testing the copies
originalArray[0] = 100;
originalArray[3][0] = 400;

console.log("Original:", originalArray);
console.log("Spread copy:", spreadCopy);
console.log("Array.from copy:", fromCopy);
console.log("Slice copy:", sliceCopy);
console.log("Concat copy:", concatCopy);
console.log("Deep copy:", deepCopy);
console.log("Custom deep copy:", customDeepCopy);
```

### Explanation of Deep Copy Function

The `deepCopyArray` function creates a deep copy of an array:

```javascript
function deepCopyArray(arr) {
    return arr.map(item => Array.isArray(item) ? deepCopyArray(item) : item);
}
```

This function works as follows:
1. It takes an array `arr` as input.
2. It uses `map` to iterate over each item in the array.
3. For each item, it checks if it's an array using `Array.isArray(item)`.
4. If the item is an array, it recursively calls `deepCopyArray` on that item.
5. If the item is not an array, it returns the item as is.
6. The `map` method creates a new array with the results of these operations.

This approach ensures a completely new array structure, with all nested arrays also being new copies, not references to the original nested arrays.

## Conclusion

Understanding the difference between reference and copy in JavaScript is essential for avoiding unexpected behavior in your code. When working with objects and arrays, be mindful of whether you're creating a new copy or just a new reference to the same data. Choose the appropriate copying method based on your specific needs, considering factors like nested structures and performance requirements.