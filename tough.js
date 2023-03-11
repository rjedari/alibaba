let students = [
  { name: "razi", id: 1 },
  { name: "hadi", id: 2 },
  { name: "mehdi", id: 3 },
  { name: "zahra", id: 4 },
];
function allUsers(a) {
  return a;
}
let show = allUsers(students);
console.log(show);


// end of getting all users


function getUser(id) {
  const person = students.find((item) => item.id === id);
  if (person) {
    console.log(person.name);
  } else {
    console.log("Person not found.");
  }
}


// enf of getting user by id



function addUser(name, id) {
  for (var i = 0; i < students.length; i++) {
    if (students[i].id !== id) {
      let obj = { name: name, id: id };
      students.push(obj);
      console.log("User is aded successfully!");
      return;
    }
  }
  console.log("User already exists!");
}


// end of adding users 



function editUser(name, id) {
  for (var i = 0; i < students.length; i++) {
    if (students[i].id === id) {
      students[i].name = name;
      console.log("User name updated successfully!");
      return;
    }
  }
  console.log("User not found!");
}


// end of editting 



getUser(1);
addUser("sara", 5);
editUser("mehdi", 1);
