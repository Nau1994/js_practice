let users = [
    {name: 'Scotty', age: '18'},
    {name: 'Tommy', age: '21'},
    {name: 'Sally', age: '71'},
    {name: 'Billy', age: '18'},
    {name: 'Timmy', age: '21'}
];
users.sort((a, b) => {
    let keyA = a.age + a.name;
    let keyB = b.age + b.name;
    if (keyA < keyB) return -1;
    if (keyA > keyB) return 1;
    return 0;
});