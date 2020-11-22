//Given two strings, return true if they are anagrams of one another

let a= 'Mary';
let b = 'Army';

a = a.toLowerCase();
b= b.toLowerCase();

if(a.split('').sort().join('') === b.split('').sort().join('')){
    console.log(true);
}