// varaibles String,number,bool,nullabd undefine
const age = 21;
const name = "shakib";
const icCool = true;
const rating = 4.5;
const x = null;
const y = undefined;
console.log(typeof y);

// concatenation
console.log("my name is " + name + " and i am " + age);
// temlate string concatenation
console.log(`my name  is ${name} and  i am ${age}`);

// ==============lenth=================//
const s = " Hello shakib";
console.log(s.length);
// =============upper Case==============//
console.log(s.toUpperCase());
// =================to lower case======================//
console.log(s.toLowerCase());
// ===============taking a part of the string====================//
console.log(s.substring(0, 10).toUpperCase());
// ==================spleting the  string===================//
const a = "shakib,mahamud,rafi";
console.log(a.split(","));
// ====================Arrys===================///
const numbers = new Array(1, 2, 3, 45, 6, 7, 9, 10);
const number = ["sam", "ss", "mh", "sk"];
console.log(numbers);
console.log(number);
// ===================pushing some thing into lists  =======================//
number[4] = "shakib";
// add to end not that great way
console.log(number);
// adding to end
number.push("mahamud");
console.log(number);
// adding to first
number.unshift("mahamud");
console.log(number);

//pop korlw last theke bahir hobe
number.pop();

// ==============object in arry========///
const todos = [
  {
    id: 1,
    text: "take out trash ",
    isCompleted: true,
  },
  {
    id: 2,
    text: "Hi  Boss",
    isCompleted: true,
  },
  {
    id: 3,
    text: "Delete All ",
    isCompleted: false,
  },
];
console.log(todos);
console.log(todos[1].text);
// =============for server site we have to convert it into jesson file
// converting into json
const todoJSON = JSON.stringify(todos);
console.log(todoJSON);

// ====================loops==============//

// for loop
for (let i = 0; i < 10; i++) {
  console.log(`For loop  Number: ${i}`);
}
//  foreach loop  map and  filter

todos.forEach(function (todo) {
  console.log(todo.text);
});

// map

const todotext = todos.map(function (todo) {
  return todo.text;
});
console.log(todotext);
// map  amar value gulo ke arry hisabe  output de same fro filter

// filter
const todocomleted = todos.filter(function (todo) {
  return todo.isCompleted === true;
});
console.log(todocomleted);

// if else as same as other language
// here are some advance for if  else
const k = 11;
const color = k > 8 ? "red" : "blue";
console.log(color);

//   ? is then if that's true  then
//  : works  as else

// ==========functions=======///////
function addNumbers(num1, num2) {
  return num1 + num2;
}
console.log(addNumbers(5, 6));

// Other Way of writhing function

const addNumber = (num1, num2) => num1 + num2;
console.log(addNumber(5, 6));

// constructor  function
function Person(firstname, lastName, dob) {
  this.firstname = firstname;
  this.lastName = lastName;
  this.dob = dob;
}
// Instantiate object
const person1 = new Person("Shakib", "mahamud", "15-9-1998");
const person2 = new Person("Mahamud", "sam", "15-9-1998");
console.log(person1);
console.log(person2);
