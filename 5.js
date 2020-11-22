let a = "abcabcabclalalala";
var obj= {};

// for (let b of a) {
//     if (b in obj){
//         obj[b] += 1;  
//     }
//     else{
//     obj[b] = 1;
//     }
// }
// console.log(obj);


//Method 2

// let a = "my name is";
// var obj= {};

// for (let i=0; i<a.length; i++){
//     if (a[i] in obj){
//         obj[a[i]] += 1;
//     }
//     else {
//         obj[a[i]] = 1;
//     }
// }
// console.log(obj);

//method 3

a.map((item,index)=> {
    if (item in obj){
        obj[item] += 1;
    } 
})

