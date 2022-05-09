 const nemo= new Array(10).fill('neemo');

function findNeemo(array){
  for (let i =0;i< array.length;i++){
    if (array[i]==='neemo'){
      console.log('found Neemo !');
    }
  }
}



findNeemo(nemo);