//                    root(50)
//                /              \
//         left(40)             right(60)
//          /    \             /        \
//   left(35)    right(45)  left(55)    right(65)

class Node{
  constructor(value){
    this.value=value;
    
  }
}

class Heap{
  constructor(){
    this.length=0;
    this.queue=[]
    }

  insert(value){
    this.queue.push(new Node(value));
    this.length++;
    this._FixHeap();
    return this;
  }

  remove(){

    if (this.length===1){this.length--;
                         return this.queue.pop().value; }
    let removed=this.queue[0].value;
    this.queue[0]=this.queue.pop();
    this.length--;
    this._MaxHeapify();
    return removed;
    
  }

  sort(){
    let sorted =[];
    
    let len=this.length;
    for (let i=0;i<len;i++){
      
      sorted.push(this.remove());
    
    }
    for (let item of sorted){
      
      this.insert(item);
    
    }
    return sorted;
  }
  

  _MaxHeapify(){
    let max=0;
    let first =2*max+1;
    let second =2*max+2;
    while(max<this.length-1 && first<this.length-1 && second<this.length-1){
      
      let temp_max=0;
      
      if(first===this.length-1){
        
        temp_max=this._twoCompare(max,first);
        
      }
      else{
        
        temp_max=this._threeCompare(max,first,second);
      }

      
      if (temp_max===max){
          return;
        }
        else{
          max=temp_max;
        }
      
      first =2*max+1;
      second =2*max+2;
      
      
    }
  }

  _twoCompare(max,first){
    if(this.queue[max].value < this.queue[first].value){
          [this.queue[max],this.queue[first]]=this._swap(this.queue[max],this.queue[first]);
          return first;
        }
    return max;
  }

  _threeCompare(max,first,second){
    

    

    let m= this.queue[max].value;
    let f= this.queue[first].value;
    let s= this.queue[second].value;
    
    if (s > f && s > m){
      
      [this.queue[max],this.queue[second]]=this._swap(this.queue[max],this.queue[second]);
      
      return second;
      
    }
    else if( f> m && f > s){
      
      [this.queue[max],this.queue[first]]=this._swap(this.queue[max],this.queue[first]);
      
      return first;
    }
    else{
      return max;
    }
    
  }
  
  _swap(max,first){
    
          let temp =max;
          max=first;
          first=temp;
    
    return [max,first];
  }
  
  _FixHeap(){
    let child =this.length-1;
    let parents= Math.floor((child-1)/2);
    while(parents>=0)
    if (this.queue[child].value>this.queue[parents].value){
      [this.queue[child],this.queue[parents]]=this._swap(this.queue[child],this.queue[parents]);
      child=parents;
      parents= Math.floor((child-1)/2);
    }
    else{
      return ;
    }
  }
  
  
}
  
heap= new Heap();

(heap.insert(50));
(heap.insert(60));
(heap.insert(40));
(heap.insert(35));
(heap.insert(33));
(heap.insert(32));
(heap.insert(34));
(heap.insert(37));
(heap.insert(36));
(heap.insert(39));
(heap.insert(45));
(heap.insert(55));
(heap.insert(41));
//console.log(heap.lookup(40));
//console.log(heap.lookup(50));
//console.log(heap.lookup(36));
console.log((heap));
console.log(heap.sort());
console.log(heap);