function foo() {

  console.log(1);
  setTimeout(() => {
    console.log(2);
  }, 200);

  console.log(3);
  setTimeout(() => {
    console.log(4);
  }, 20);

} 
foo();


//call stack

//web API

//callback queue

//event loop