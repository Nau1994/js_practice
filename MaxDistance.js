const array1=[5,4,2,6,8,3,2,1,1,1, 1, 1, 1]

// 
//            8
//
//          6
//   5
//   |   4
//   |          3
//   |     2          2
//   |                  1  1  1  1  1  1
//   |

const array3=[0,1,2,3,4,5,6,7,8,9,10,11,12]
const array2=[3,4,2,6,8,3,2,1,1,1, 1, 1, 1]

function check(arr1,arr2,sum){
  console.log(arr2[0]-arr1[0]+arr1[1]+arr2[1],sum);
 if (arr2[0]-arr1[0]+arr1[1]+arr2[1]>=sum)
 {
   return [true,arr2[0]-arr1[0]+arr1[1]+arr2[1]];
 }
  return [false,sum];
  
}

function MaxDistance(array){
  let second=[0,array[0]];
  let first=[1,array[1]];
  let temp=[];
  let max=1+array[0]+array[1];
  for (let i =2;i<array.length;i++){
    //first check
    console.log(first,[i,array[i]]);
    if (check(first,[i,array[i]],max)[0]){
      max=check(first,[i,array[i]],max)[1];
      temp=second;
      second=[i,array[i]];
    //second check
      console.log(temp,[i,array[i]]);
      
      if(check(second,[i,array[i]],max)[0]){
        max=check(second,[i,array[i]],max)[1];
        first=temp;
        second=[i,array[i]];
      }
      
    }
  
  }

  return [first,second,max] ;
  
}

console.log(MaxDistance(array1));