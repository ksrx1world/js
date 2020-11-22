for (i=1; i<=100; i++){
    let a= i%3 === 0;
    let b =i%5 === 0;

  console.log(b ? (a ? 'fuzzbuzz' :'buzz') : a ? 'fuzz': i);  
}