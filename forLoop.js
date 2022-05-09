 const nemo= new Array(10).fill('neemo');

function findNeemo(array){
  for (let i =0;i< array.length;i++){
    if (array[i]==='neemo'){
      console.log('found Neemo !');
    }
  }
}

const findNeemo2 = array =>{
  array.forEach(fish => {
    if (fish === 'neemo'){
      console.log('found Neemo !');
    }
  })
}

const findNeemo3 = array =>{
  for (let fish of array ){
    if (fish === 'neemo'){
      console.log('found Neemo !');
    }
  }
}


findNeemo(nemo);
findNeemo2(nemo);
findNeemo3(nemo);