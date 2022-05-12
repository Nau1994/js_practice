
const array1=new Array(10000000).fill().map(() => Math.floor(Math.random()*100000000));
const array2=[];

const recurring1 = (item1,item2) => {
for (let item of item1){
  if (item2.includes(item)){
    return item;
  }
  else
  {
    item2.push(item);
  }
  
}
  return ;
}

const recurring2 = (item1) => {
for (let index=0;index<item1.length;index++){
  if (item1.slice(0,index).includes(item1[index])){
    return (item1[index]+' at Index :'+index);
  }
  
  
}
  return ;
}




//console.log(array1);
console.log(recurring1(array1,array2));
console.log(recurring2(array1));
//console.log(array1,array2);