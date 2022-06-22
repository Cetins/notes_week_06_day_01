// Variables

var myFunction = function () {
    var message = 'Hello';
    console.log(message);
};
// var message exists only inside the function
myFunction();


//var - old way of creating varoiable, do not use! (Js update from 2015)
var filterNamesByFirstLetter = function (names, letter) {
    var filteredNames = [];
    for (var name of names) {
      if (name[0] === letter) {
        filteredNames.push(name);
      }
    }

    console.log('The name outside of the loop:', name); // if we use var, it will be possible to print out this variable outsife of the loop

    return filteredNames
  }
  
  var students = ['Alice', 'Bob', 'Alyssia', 'Artem', 'Babs'];
  var filteredStudents = filterNamesByFirstLetter(students, 'A');
  console.log('filteredStudents:', filteredStudents);

  //let variable does not allow it, it's good practive to keep as tight as possible
  // let allows to reasing this variable
  var filterNamesByFirstLetter = function (names, letter) {
    var filteredNames = [];
    for (let name of names) {
      if (name[0] === letter) {
        filteredNames.push(name);
      }
    }

    return filteredNames
  }
  
  var students = ['Alice', 'Bob', 'Alyssia', 'Artem', 'Babs'];
  var filteredStudents = filterNamesByFirstLetter(students, 'A');
  console.log('filteredStudents:', filteredStudents);



  //const - the variable is constant, cannot be reasigned // probably 90% of variables will be const
  const filterNamesByFirstLetter = function (names, letter) {
    const filteredNames = [];
    for (const name of names) {
      if (name[0] === letter) {
        filteredNames.push(name);
      }
    }

    return filteredNames
  }
  
  var students = ['Alice', 'Bob', 'Alyssia', 'Artem', 'Babs'];
  var filteredStudents = filterNamesByFirstLetter(students, 'A');
  console.log('filteredStudents:', filteredStudents);

  // we may need to create a let variable within a loop that uses a const variable


  // creating a variable with no keyword (the worst!)
  // message = 'This is a message'
  // this would create a global variable, this is a very bad practice