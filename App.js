// Accessing inner function 

function outer() {
  console.log("outer function");
  const inner = () => {
    console.log("Inner function");
  }
}
