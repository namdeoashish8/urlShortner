// //First program
// console.log('Hello World through separate file')

// /**
//  * Multi line comment
//  */

// //variable in js
// var pen=10;

// /**Casing in js
// smartPhone - Camel casing
// smart_phone - snake_casing
// smart-phone - kebab-casing
// SmartPhone - PascalCase
// */

// //Data types
// var price=10;
// console.log(price)


// //having no var
// price='Now made string';
// console.log(price)


// //having no ;
// price=90
// console.log(price)

// //String
// var str='Single quotes';
// var str="doublke quotes";
// var str='single"Double"single';
// console.log(str)

// //Nums
// var num=10
// var num=10.0
// var num=100000000000

// //Boolean
// var isMale=true
// var isMale=false

// //Undefined vs Null
// var clock;
// console.log(clock)

// var clock=null
// console.log(clock)


// //Object Creation
// var lamp = {
//     //properties
//     heightInMtr : 1,
//     color: 'black',
//     operatesOn : 'plug',

//     //methods
//     brightening : function () {
//         //code
//     },

//     videoStream : function(){
//         //code
//         console.log('Video streaming function')
//     }
// }

// console.log(lamp.color)
// lamp.videoStream()

// /**Conditional statement
//  * if(){
//  * }
//  * else if(){
//  * }
//  * else {
//  * }
//  */

// /** Functions
//  */

// function greet(){
//     console.log('Welcome');
// }
// greet();

// function myName(name) {
//     console.log('Welcome '+ name);
// }
// myName('Ashish');

// //default parameter
// function myName(name="Sir/Mam") {
//     console.log('Welcome '+ name);
// }
// myName();

// //Assigning funtion to variable
// var random;
// random=myName;

// random('KK');

// //Anonymous Function (no function name)
// var greet= function (name="Sir/Mam") {
//     console.log('Welcome '+ name);
// }
// greet('Anonymous');

//Function inside funtion
// var a=10
// var b=20
// var c=30

// function add(x,y){
//     return x+y;
// }

// function calc(op, d, e, f){
//     opoutput = op(d,f);
//     result = opoutput / e;
//     console.log(result);
// }
// calc(add, a,b,c);

//Callback function
// var a=10
// var b=20
// var c=30

// function calc(op , d, e, f){
//     var opoutput = op(d,f);
//     var result = opoutput / e;
//     console.log(result);
// }
// calc( function (x, y) { return x+y; }, a, b, c);


//Immediately invoked function expression

// (function() {
//     console.log('IIFE')
// })();


//Arrow Function
// var greet= (name) =>{
//     return 'Welcome '+name;
// }
// console.log(greet('Ash'));

//Array
// var names=['Ashish', 'KK', 'Ash', 'Kavya'];
// console.log(names);

// var names2=['Ashish', 'KK', {name : 'Ash', place: 'JBP'}, true, false, 10];
// console.log(names2[2]);
// console.log(names2[2].place);

// console.log(typeof(names));

// var matrix=[
//     [1,2,3],
//     [4,5,6]
// ];
// console.log(matrix[1][2]);

var nums=[1,3,4,5]
nums.push(8);
nums.push(80);
nums.push(85);
// console.log(nums);

// nums.pop();
// nums.pop();
// console.log(nums);

// nums.unshift(7);
// nums.unshift(13);
// nums.unshift(19);
// nums.unshift(14);
// nums.unshift(15);
// nums.unshift(16);
// nums.shift();
// nums.shift();
// console.log(nums);

// //Splice
// var deletedElements = nums.splice(1,2)
// console.log(nums);
// console.log(deletedElements);

// //Slice
// var sliceOfArr= nums.slice(2,4);
// console.log('original : ' + nums);
// console.log(sliceOfArr);

//Join
// var arr = ['Ashish', 'kavya', 'KK', 'Ash', 'John'];
// arr.join();
// console.log(arr.join())
// console.log(arr.join('##'))


// //Reverse
// console.log(nums)
// nums.reverse();
// console.log(nums)

// //Sorting
// nums.sort((a,b) => a-b)
// console.log(nums)

// //Filter function
// var filteredArr = nums.filter(n => {
//     return n%2;
// })
// console.log('original: '+nums)
// console.log(filteredArr)
// //Shorthand of above function
// var filteredArr = nums.filter(n =>n%2)


// //Map function
// var mappedArr = nums.map(n => {
//     return n+2;
// })
// console.log('original: '+nums)
// console.log(mappedArr)
// //Shorthand of Map
// var mappedArr = nums.map(n =>n+2)

// //CubeArray
// var cubeArr = nums.map(n =>n**3)
// console.log(cubeArr)


//DOM
// console.log(window.document);
// console.log(document.head);
// console.log(document.body);

// //Accessing elements in CSS
// document.getElementById('heading1').innerText='Updated in Console through CSS file';
// //console.log(document.getElementsByTagName('p'));
// console.log(document.getElementsByClassName('p-class'));

// //By Querry selector
// console.log(document.querySelector('heading1'));
// console.log(document.querySelectorAll('.p-class'));
// console.log(document.querySelectorAll('p'));

// //Manipulate DOM Elements in JAVASCRIPT
// const listItems = document.getElementsByTagName('li')

// console.log(listItems[0].innerText)
// listItems[2].innerText="Updated through JS";

// const itemFour = listItems[4]
// const itemThree = listItems[3]
// itemFour.innerText='<span style="color: red"> Ashish</span> is added through JS with html update'
// itemThree.innerHTML='<span style="color: red"> Ashish</span> is added through JS with html update'

//STYLING THROUGH JS
// itemFour.style.color="Green"
// itemThree.style.color="Blue"
// itemThree.style.fontSize='30px'
// itemThree.style.border = '2px solid blue'


//ATTRIBUTES
// const listItems = document.getElementsByTagName('li')
// const firstItem = listItems[0];
// //firstItem.innerHTML = 'attributes'

// console.log(firstItem.classList)
// firstItem.classList.add('new-class')
// console.log(firstItem.classList)
// firstItem.classList.remove('new-class')
// console.log(firstItem.classList)

// firstItem.setAttribute('id', 'first-id')
// firstItem.setAttribute('style', 'color : red')
// console.log(firstItem.classList)



//All core concepts of java


//1.Lexical scoping


//Call back functions
//  function greetSquare(sqofNum, num){
//     var sq = sqofNum(num);
//     console.log('Hello Mr. :' + sq)
//  }

//  greetSquare( (number)=>{
//     return number**2;
//  }, 10);



//  setInterval( ()=>{
//     console.log('Inside function')
//  }, 1000);

//Promises

// const myPromise = new Promise((resolve, reject)=>{

// } );

// console.log(myPromise)

// const myPromise = new Promise((resolve, reject)=>{
    
//     //api call replication
//     // setTimeout(()=>{
//     //   resolve(10)  
//     // }, 2000)


//     //api call replication
//     setTimeout(()=>{
//         reject(new Error('Error : Api calll rejected'))  
//       }, 2000) 

// } );

// console.log(myPromise)

//this object

//Arrow function
// const smartTablet = {
//   company: 'apple',
//   color: 'grey',
//   getColor : ()=>{
//     console.log('I am color: ', this.color)
//   }
// }

// smartTablet.getColor();

//Using normal function
const smartTablet = {
  company: 'apple',
  color: 'grey',
  getColor : function (){
    console.log('I am color: ', this.color)
  }
}

smartTablet.getColor();