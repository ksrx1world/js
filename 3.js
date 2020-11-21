let a = [1,2,3,4,5,6];
rotations = 2;
while(rotations--){
temp = a[0];
for(let i= 0; i< a.length-1; i++){
a[i] =a[i+1]
}
a[a.length-1]= temp;

console.log(a);
}