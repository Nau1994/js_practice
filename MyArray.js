class MyArray{
  constructor(){
    this.data={};
    this.length=0;
  }

  get(){
    return this
  }

  push(data){
    this.data[this.length]=data;
    this.length++;
  }

  pop(){
    const item =this.data[this.length-1];
    delete this.data[this.length-1];
    this.length--;
    return item;
  }

  insert(data,index){
    this.unshiftItem(index);
    this.data[index] =data;
    return this.data[index];
    
  }

  unshiftItem(index){
    this.push(null);
    for (let i =this.length-1;i >index;i--){
      this.data[i]=this.data[i-1];
    }
    
  }

  delete(index){
    const item =this.data[index];
    this.shiftItem(index);
    
    return item;
  }

  shiftItem(index){
    for (let i =index;i<=this.length-1;i++){
      this.data[i]=this.data[i+1];
    }
    delete this.data[this.length-1];
    this.length--;
  }
  
  
}


const array = new MyArray();
array.push('Hi');
array.push('there');
array.push('!');
array.push('How');
console.log(array.delete(1));
console.log(array.insert('all',1));
console.log(array);
