function myFunction(a) {
  let split = a.split("");
  
  let first = split.shift(0).toUpperCase();
  // first.toUpperCase()
  let second = split.unshift(first);
  split = split.join("");
  console.log(split);
}

myFunction("hello");

