// Challenge: work with json and the file system

//1.load and parse the json data
//2.change the name and age property using your info
//3 stringify the changed object and overwrite the original data
//4.test 

const fs = require("fs");

const dataStr = fs.readFileSync('./1-json.json', 'utf8');

const dataObj = JSON.parse(dataStr);

// change name and age 
dataObj.name = "Kieu Phuoc Thien";
dataObj.age = 23;

const dataNew = JSON.stringify(dataObj);
// write new data 
fs.writeFileSync('./1-json.json', dataNew);
