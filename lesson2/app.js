
// const fi = require('./utils');
// const ok = require('./utils');

// console.log(fi);
// console.log(ok);

// const sum = require('./utils');

// let total= sum(3,4);

// console.log(total);


// challenge: define and use a function in a new file 
// 1. Create a new file called notes.js
// 2. Create getNotes function that returns "Your notes..."
// 3. Export getNotes function 
// 4. From app.js, load in and call the function printing message to console

const getNotes = require('./notes');

const msg = getNotes();

console.log(msg);


