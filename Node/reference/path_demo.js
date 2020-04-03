const path = require('path');//core modules do not need a file path

// base file name
console.log(path.basename(__filename));

// directory name
console.log(path.dirname(__filename));

// file extension
console.log(path.extname(__filename));

// create path object
console.log(path.parse(__filename));
console.log(path.parse(__filename).root);

// concatenate paths useful for delimiters
console.log(path.join(__dirname, 'test', 'hello.html'));