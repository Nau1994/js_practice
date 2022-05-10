array1 = [4,9,23,21,45];
sum = 68;

    
  //console.log(map);

const hasPairWithSum1 = (items,sum) => {
const ItemSet = new Set();
for (let item of items){
  if(ItemSet.has(item)){
    return true;
  }
  ItemSet.add(sum-item);
}
  return false;
}

const hasPairWithSum2 = (items,sum) => {
const ItemSet = new Set(items);
for (let item of items){
  if(ItemSet.has(sum-item)){
  return true;
  } 
}
  return false;
}

const hasPairWithSum3 = (items,sum) => {
const ItemSet = new Set(items);

  if((items.filter(item=>ItemSet.has(sum-item))).length){
  return true;
  } 

  return false;
}

const hasPairWithSum4 = (items,sum) => {
return items.some(item => items.includes(sum-item))
}



console.log(hasPairWithSum4(array1,sum))

