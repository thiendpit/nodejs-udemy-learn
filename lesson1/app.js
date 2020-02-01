const fs = require('fs');

// fs.writeFileSync('notes.txt', 'This is notes created by nodejs');

// challenge: append a message to notes.txt

// 1. use appendFileSync to append to the file
// 2. run the script
// 3. check your work by opening the file and viewing the appened text

fs.appendFileSync('notes.txt', 'This is appened');

