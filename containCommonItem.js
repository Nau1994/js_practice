array1 = ['a','b','c','x'];
array2 = ['y','z','w'];

const containCommonItem = (item1,item2) => {
let map = {};
  for(let item of item1){
    map[item]=true;
  };

  for(let match of item2){
    if (map[match]){
      
      return true;
      
  }}; 
  
  
  return false;
    
  //console.log(map);
}



const containCommonItem3 = (item1,item2) => {
let map2 = new Set(item2);
  
  let match = item1.filter(item => map2.has(item));  //[...a].filter(x => !b.has(x)));
  if(match.length){
    return true;
  }
  return false;
    
  //console.log(map);
}

const containCommonItem4 = (item1,item2) => {

  return item1.some(item => item2.includes(item));
  //console.log(map);
}

//containCommonItem(array1,array2)
console.log(containCommonItem4(array1,array2));

