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


//before
const vehicleOne = {
  brand: 'Ford',
  model: 'Mustang',
  type: 'car',
  year: 2021, 
  color: 'red'
}

myVehicle(vehicleOne);

// old way
function myVehicle(vehicle) {
  const message = 'My ' + vehicle.type + ' is a ' + vehicle.color + ' ' + vehicle.brand + ' ' + vehicle.model + '.';
}

//new way destructing 
function myVehicle({type, color, brand, model}) {
  const message = 'My ' + type + ' is a ' + color + ' ' + brand + ' ' + model + '.';
}