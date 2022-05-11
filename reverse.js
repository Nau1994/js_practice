str='my name is leo';

console.log(
  function reverse1(str){
  return (str.split('')).reverse().join('');
}(str));

const reverse2 = str =>  (str.split('')).reverse().join('');

const reverse3 = str =>  [...str].reverse().join('');

console.log(reverse3(str));