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

// a.split('').map((item)=> {
//     if (item in obj){
//         obj[item] += 1;
//     } 
//     else{
//         obj[item] = 1;
//     }
// })
// console.log(obj);


//method 4


a.split('').map((item,index)=> {
    if (item in obj){
        obj[item] += 1;
    }
    else {
        obj[item] = 1;
    } 
})
console.log(obj);



// for(let [index , item] of a.split('').entries()){
//     if(a.indexOf(item) === index){
//         obj[item] = 1;
//     }
//     else{
//         obj[item] += 1;
//     }
// }
// console.log(obj);
