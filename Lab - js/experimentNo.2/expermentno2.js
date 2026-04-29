// array declearation'

const arr = [1,2,3,4,5];
for(let i = 0;i<arr.length;i++){
    console.log(arr[i]);
}

//function declearation
function Myname(name){
    console.log(`My name is ${name}`);
}
Myname("Aditya");

//object decleartion
const person = {
    firstName : "Aditya",
    lastName : "Shintre",
    age : 21
}
console.log(person);
console.log(person.firstName);
console.log(person.lastName);
console.log(person.age);

//reverse a number
let a = 12345 ;
let rev = 0;
while(a>0){
    let digit = a % 10;
    rev = rev * 10 + digit;
    a = Math.floor(a/10);
}
console.log(`Reversed Number is : ${rev}`);

//check palindrome

let palindrome = 121;
let reverse = 0;
while(palindrome >0){
    let no = palindrome % 10 ;
    reverse = reverse * 10 + no;
    palindrome = Math.floor(palindrome/10);
}

if(reverse == 121){
    console.log(`${reverse} is a Palindrome number`);
}

//fabinocci series



//largest element in array

let array =[10,90,23,23,56];
let sorted = array.sort();
console.log(sorted);
console.log(sorted[sorted.length-1])

// duplicate elements in array

let array1 = [10,3,52,3,5,10];
for(let i =0;i<array1.length;i++){
   

}

//function even odd

function iseven(num){
    if(num%2 == 0){
        console.log("even number")
    }
    else{
        console.log("non even")
    }
}

iseven(6);

// function for sum of array elements

function arraysum(x){
    let sum = 0
    for(let i = 0 ; i< x.length;i++){
        sum += arr[i]; 
    }
    console.log(sum);
}
let arrays = [1,2,3,4,5];
arraysum(arrays)