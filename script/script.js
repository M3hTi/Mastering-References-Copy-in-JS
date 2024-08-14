
//for centering elements in js

const heading = document.querySelector('.js-heading')
const paragraph = document.querySelector('.js-p')

// console.dir(heading)
// console.dir(paragraph)
// console.dir(window)


// console.log(heading.clientHeight);
// console.log(window.innerHeight);
// console.log(paragraph.clientHeight);


heading.style.top = `${(window.innerHeight - heading.clientHeight) / 2}px`;
paragraph.style.top = `${(window.innerHeight - paragraph.clientHeight) / 2 + heading.clientHeight}px`;


//-----------------------------------------------------------------------------------------------------

//---------------------------------primitive Types------------------------------
//number
let num1 = 10
let num2 = num1
console.log(num2,num1);
num1 = 20
console.log(num2,num1);


let str1 = 'John'
let str2 = str1
console.log(str2,str1);
str1 = 'karl'
console.log(str2,str1);



//---------------------------------reference Types------------------------------
//objects   
let obj1 = {name:'john',age:30 , tel : { mobile1: '0912456', mobile2: '0919954'}}
let obj2 = obj1
console.log(obj2,obj1);

obj2.name = 'judy'
console.log(obj2,obj1);


//for copy objects ======> shallow copy
let obj3 = Object.assign({},obj1)
obj3.name = 'karl'
obj3.age = 16
obj3.tel.mobile1 = '071200000'
console.log(obj3,obj1);


let obj4 = {...obj1}
obj4.name = 'johnson'
obj4.age = 10
console.log(obj4,obj1);


// deep copy
let obj5 = JSON.parse(JSON.stringify(obj1))
obj5.name = 'Rira'
obj5.age = 15
obj5.tel.mobile1 = '8123456'
console.log(obj5,obj1);




// Arrays
let arr1 = [1,2,3,4,[5,6,7]]
let arr2 = arr1
console.log(arr2,arr1);

arr1[0] = 10
console.log(arr2,arr1);




// for copy arrays ======> shallow copy
let arr3 = arr1.slice()
arr3[0] = 100
arr3[4][0] = 1000
console.log(arr3,arr1);

let arr4 = [...arr1]
arr4[0] = 1000
console.log(arr4,arr1);

let arr5 = [].concat(arr1)
arr5[0] = 25
console.log(arr5,arr1)



let arr6 = Array.from(arr1)
arr6[0] = 2500
console.log(arr6,arr1)




// deep copy
let arr7 = JSON.parse(JSON.stringify(arr1))
arr7[4][0] = 2600
console.log(arr7,arr1)


function deepCopy (arr){
    return arr.map(item => Array.isArray(item) ? deepCopy(item) : item)
}
let arr8 = deepCopy(arr1)
arr8[4][0] = 270000
console.log(arr8,arr1)


