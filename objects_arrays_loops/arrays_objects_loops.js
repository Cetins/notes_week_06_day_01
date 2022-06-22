//arrays

var sports = ['football', 'tennis', 'rugby'];

var numOfElements = sports.length;
console.log('num of elements:', numOfElements);

console.log('first sport:', sports[0]); // prints football

sports.push('curling'); // adds something to the end of the array
console.log('sports:', sports);

sports.pop() // removes the last one from the array
console.log('sports:', sports);

var removedSport = sports.pop();
console.log('removed sport:', removedSport);

sports.unshift('basketball'); // adds something to the beginning of the array
console.log('sports:', sports);

sports.shift('basketball'); // removes something to the beginning of the array
console.log('sports:', sports);

sports.unshift('basketball'); 
var remSport = sports.splice(1, 1); // removes something from the middle of the array, the place I want to 
console.log('removed sport:', remSport);
console.log('sports:', sports);
// splice gives back the array with objects
// splice(what to remove, how many things to remove)
// there can be also the third thing added - what I want to replace it with: sports.splice(1, 1, 'basketball') - that's how we add things in the middle of the strings



//loops
var mySports = ['football', 'tennis', 'rugby'];

// for item in list - Python for loop

for (var currentSport of mySports) {
    var uppercasedSport = currentSport.toUpperCase();
    console.log(uppercasedSport);
}

// older way of writing loops
// for (inatialiseCounter; true/false condition; incrementCounter)

for (var i = 0; i < mySports.length; i++) { //increase i by one, as i = i + 1
    var currentSport = mySports[i];
    var uppercasedSport = currentSport.toUpperCase();
    console.log(uppercasedSport);
}
// start counter at 0  -arrays start with index position at 0
// if i < mySports.length is true, I will action the below lines of the loop (set to uppercase and log out)
// i++ - to be able to move to another value, and so on, until the loop finishes
// it allows to skip over some values, for example to start from index 1 (var i = 1) or to uppercase only for evens (i++ 2) - check this!!




//objects
var movie = {
    title: `It's a wonderful life`,
    year: 1946,
    language: 'Spanish'
};

movie.cast = ['James Stewart', 'Donna Reed']; // will create it or replace it if it doesn't exist
movie.language = 'English'; // replacing the value of the key

console.log('movie:', movie);
// as the keys have to be strings, we don't have to use quotes

//accessing
var title = movie.title; // just line accessing instance variable in Python!
console.log('movie title: ', title);

movie['language'] = 'Danish'; //alternative way to access
movie['subtitle-language'] = 'Polish'; // that allows using '-' in the key, 
console.log('movie:', movie);

// to remove a key value pair
delete movie.year; // delete is one of the keywords - or delete movie ['year];
console.log('movie:', movie);

//
movie.ratings = {
    critic: 94,
    audience: 95
};
console.log('movie:', movie);
console.log(movie.ratings.critic); // accessing the critic key

//you can loop over an object
for (var key in movie) {
    console.log('current key:', key); // gives back a string of keys only
}
for (var key in movie) {
    console.log('current key value:', movie[key]); // gives back a string of keys and its values
}

//another way - build in object in Js returns the keys for us, but not really a good practice!
var keys = Object.keys(movie);
console.log('keys:', keys);


// if in used, it will give just the index position!! be aware of it!!
var sports = ['one', 'two']
for (var sport in sports) {
    console.log(sport)
}

