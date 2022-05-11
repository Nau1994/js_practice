const x = [1, 2, 3, 4, 5];
const [y, z,...p] = x;
console.log(y); // 1
console.log(z); // 2
console.log(p); // 2
q='abcdef';
console.log([...q]); 

const u = [1, 2, 3, 4, 5];
const [...v] = u;
console.log(v); 