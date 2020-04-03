const url = require('url');

const myUrl = new URL('http://mywebsite.com/hello.html?id=100&status=active');

//get serialized url
console.log(myUrl.href);
console.log(myUrl.toString());

//get host (root domain), includes port
console.log(myUrl.host);

//get hostname
console.log(myUrl.hostname);

//get pathname
console.log(myUrl.pathname);

//get serialized query
console.log(myUrl.search);

//params object
console.log(myUrl.searchParams);

//add param
myUrl.searchParams.append('abc', '123');
console.log(myUrl.searchParams);

//loop through params
myUrl.searchParams.forEach((value, name) => {
    console.log(`${name}: ${value}`);
});