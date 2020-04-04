const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const logger = require('./middleware/logger');
const members = require('./Members');

const app = express();

//init middleware
//app.use(logger);

//handlebars middleware
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//body parser middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//homepage route
app.get('/', (req, res) => {
    res.render('index', {
        title: 'Member App',
        members
    })
});

//set a static folder
app.use(express.static(path.join(__dirname, 'public')));//use function is to include middleware

//members api routes
app.use('/api/members', require('./routes/api/members'));

const PORT = process.env.PORT || 5000;//check which port to use, based on server suggestion

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});