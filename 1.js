//Write a JavaScript program to reverse the order of the characters in the string. 

let a = "keshav";
//Method 1

// let c = "";
// for(let b of a ){
//     c = b + c;
// }
// console.log(c);

//Method 2 with built in function

// a = a.split('').reverse().join('');
// console.log(a);

//Method 3 with recurision

// function abc(str){
//     if (str == "")
//     return "";
//     else {
//         return (abc(str.substr(1)) +str.charAt(0)) 
//     }
// }
// console.log(abc("keshav"));

/* First Part of the recursion method
You need to remember that you won’t have just one call, you’ll have several nested calls

Each call: str === "?"        	                  reverseString(str.subst(1))     + str.charAt(0)
1st call – reverseString("Hello")   will return   reverseString("ello")           + "h"
2nd call – reverseString("ello")    will return   reverseString("llo")            + "e"
3rd call – reverseString("llo")     will return   reverseString("lo")             + "l"
4th call – reverseString("lo")      will return   reverseString("o")              + "l"
5th call – reverseString("o")       will return   reverseString("")               + "o"

Second part of the recursion method
The method hits the if condition and the most highly nested call returns immediately

5th call will return reverseString("") + "o" = "o"
4th call will return reverseString("o") + "l" = "o" + "l"
3rd call will return reverseString("lo") + "l" = "o" + "l" + "l"
2nd call will return reverserString("llo") + "e" = "o" + "l" + "l" + "e"
1st call will return reverserString("ello") + "h" = "o" + "l" + "l" + "e" + "h" 
*/

//method 4 using ternery operator

// function reverseString(str) {
//     return (str === '') ? '' : reverseString(str.substr(1)) + str.charAt(0);
//   }
//   reverseString("hello");
  

