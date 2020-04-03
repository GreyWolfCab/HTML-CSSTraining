const fs = require('fs');
const path = require('path');

//create folder
fs.mkdir(path.join(__dirname, '/test'), {},
    (err) => {
        if(err) throw err;
        console.log('Folder created...');
    });//mkdir is async

//create and write to file
fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'Hello World!', 
    (err) => {
        if(err) throw err;
        console.log('File written to...');

        //add to the file without overwriting
        fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), 'I love this', 
            (err) => {
                if(err) throw err;
                console.log('File written to...');
            });
        //append inside the creation of the file since it is an async process
    }
);//writeFile is async

// read file
fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', 
    (err, data) => {
        if (err) throw err;
        console.log(data);
    });//readfile is async

// rename file
fs.rename(path.join(__dirname, '/test', 'hello.txt'), 
    path.join(__dirname, '/test', 'helloworld.txt'), 
    (err) => {
        if (err) throw err;
        console.log('File renamed...');
    });//rename is async