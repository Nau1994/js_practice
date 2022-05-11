let array=new Array(100000).fill().map(() => Math.floor(Math.random()*10000));


function mergeSort(array){
  
//divide array into array
return(divide(array));
  
  
};

function divide(array){
  let first=0;
  let array1 =[];
  let array2 =[];
  let last =array.length-1;
  let midIndex= Math.ceil((last+first)/2);
  if (array.length <= 1 ){return array ;}
  
  
  
  array1=divide(array.slice(first,midIndex));
  array2=divide(array.slice(midIndex));

 /* 
  console.log('-----------------------');
  console.log(array.length);
  console.log(array,'middle index :'+first+':'+midIndex+':'+last);
  console.log(array.slice(first,midIndex),array.slice(midIndex));
  console.log('-----------------------');
 //console.log(array.slice(first,midIndex),array.slice(midIndex,last));
  */
  //conquer back into one
  
 return conquer(array1,array2);
}

function conquer(array1,array2){
  
  let sortArray=[];
  if (!array1 || array1.length===0){ return array2; }
  if (!array2 || array2.length===0){ return array1; }
  
  while(array1.length!==0 || array2.length!==0 ){
  
    if ( array1.length===0){
      sortArray.push(array2.shift());
    }
    else if(array2.length===0){
      sortArray.push(array1.shift());
    }
    else{
    if (array1[0] >= array2[0]){
      sortArray.push(array2.shift());
      
    }
    else {
      sortArray.push(array1.shift());
    }
    }
    
  }
  return sortArray;
}

//console.log(divide([1,5,8,3]));
console.log('before--------------------',array);
array=mergeSort(array);
console.log('after--------------------',array);




let users = [
    {name: 'Scotty', age: '18'},
    {name: 'Tommy', age: '21'},
    {name: 'Sally', age: '71'},
    {name: 'Billy', age: '18'},
    {name: 'Timmy', age: '21'}
];
users.sort((a, b) => {
    let keyA = a.age + a.name;
    let keyB = b.age + b.name;
    if (keyA < keyB) return -1;
    if (keyA > keyB) return 1;
    return 0;
});