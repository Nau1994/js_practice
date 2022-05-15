const items = {
  'first': new Date(),
  'second': 2,
  'third': 'test'
};

for (const item in items) {
  console.log(item)
};
Object.entries(items).map(item => {
  console.log(item)
});

Object.entries(items).forEach(item => {
  console.log(item)
});

for (const item of Object.entries(items)) {
  console.log(item)
};