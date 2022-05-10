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

//containCommonItem(array1,array2)
console.log(containCommonItem(array1,array2));