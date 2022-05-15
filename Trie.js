//                    root(50)


class Node{
  constructor(character){
    this.node={character:null};
  }
}

class Trie{
  constructor(){
    this.dictionary={};
    }

  insert(string){
    
    let dict=this.dictionary;
    for(let char of string.split('')){
      dict=this._add(char,dict);
      
    }
    dict['End']={};
    return this;
  }

  search(string){
    if (string===null){string='';}
    this.insert(string);
    let dict=this.dictionary;
    let recommended=[];
    let seachkey=string;
    for(let char of string.split('')){
      dict=this._lastDict(char,dict);
    }

    [dict,recommended]=this._findRecommended(dict,recommended,seachkey);
    
    return recommended;
  }

  _findRecommended(dict,recommended,seachkey){
    
    for (let char in dict){
      //console.log(char);
      if (char==='End'){
        recommended.push(seachkey);
      }
      else{
        //seachkey=seachkey+char;
        dict=dict[char];
        [dict,recommended]=this._findRecommended(dict,recommended,seachkey+char);
      }
    }

    return [dict,recommended];
  }
  
  _lastDict(char,dict){
    
    while(dict[char]){
      dict=dict[char];
      return dict;
      }
    
  }
  
  _add(char,dict){
    
    while(dict[char] ){
      
      dict=dict[char];
      return dict;
      }
    dict[char]={};
    dict=dict[char];
    return dict;
  }
  
}
  
trie= new Trie();
console.log(trie.search('naushad'));
console.log(trie.search('naushad is'));
//console.log(JSON.stringify(trie));
console.log(trie.search('nau'));
//console.log(JSON.stringify(trie));
console.log(trie.search('samshad'));
console.log(trie.search('sam'));
console.log(trie.search('n'));
console.log(trie.search('s'));

//console.log(trie.node);

//console.log(JSON.stringify(trie));
//console.log(JSON.parse(trie));