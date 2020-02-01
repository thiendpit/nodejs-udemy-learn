const chalk = require('chalk');
const yargs = require('yargs');
const greenMsg = chalk.green('Success!');

// const greenBoldInverseMsg = chalk.green.bold.inverse('InverseBold');

// console.log(greenMsg);
// console.log(greenBoldInverseMsg);

// console.log(process.argv)

//customize yargs version
yargs.version('1.1.0')

//create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note Body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv) {
        console.log('Title: ' + argv.title);
        console.log('Body: ' + argv.body);
    }
});

// create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function() {
        console.log('Removing the note!');
    }
});

// Challenge: add two new command

// 1. setup command to support "list" command (print placeholder message for now )
// 2. setup command to support "read" command (print placeholder message for now )
// 3. Test 

// create list command
yargs.command({
    command: 'list',
    describe: 'List your note',
    
    handler: function(argv) {
        console.log('Listing out all note', argv);
    }
})

//create read command
yargs.command({
    command: 'read',
    describe: 'Read your note',
    handler: function() {
        console.log('Reading the note');
    }
});


//

// console.log(yargs.argv);
yargs.parse();
