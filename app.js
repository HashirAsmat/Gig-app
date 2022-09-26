const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const path = require('path');
const PORT = process.env.PORT || 5000;
const DB = require('./models/index');
const gigsRoute = require('./routes/gigs');
var expressLayouts = require('express-ejs-layouts');


const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'));
app.set("view engine", "ejs");
// app.use(expressLayouts);
const urlencodedParser = bodyParser.urlencoded({extended:false});

//You can use the .authenticate() function to test if the DATABASE connection is OK:
async function testConnection() {  
    try {
        await DB.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      };
    }
    testConnection();



// index page route
app.get('/', (req, res) => {
 res.render("index");
});


//Gigs routes 
app.use('/gigs', gigsRoute);

// we have used "use" method because the gigs route can recieve get , post , put , delete requests , so we are not specifying the method
// use simply mean to run on all method . REMEMBER for making routes we will apply "use" method.

app.listen(PORT,()=>{
    console.log(`listening on port ${PORT}`);
});
