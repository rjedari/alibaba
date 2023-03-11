let input = 53;
function check(){
 let sum = input % 2
 if (sum === 0){
    return "even"
 } else{
    return "odd"
 }
}
console.log(check(input));

// another way to check the properties  using  an Array
let numbers = ["10", "20", "103", "77"];
const operation = function () {
  for (let index = 0; index < numbers.length; index++) {
     let  element =  numbers[index]
    let sum = element % 2;
    if (sum === 0) {
      console.log("even"); 
    } else {
      console.log("odd"); 
    }
  }
};
  operation();
