const express = require('express');
const router = express.Router();
const Gig = require('../models/Gigs');
const DB = require('../models/index');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

// Get gig lists 
router.get('/', async  (req, res) => {
       try{
        const gigs = await Gig.findAll();
        console.log(gigs);
        res.render('gigs',{
            gigs:gigs
        });
    }
catch(err){ console.error(err.message) }
});

//rendering Gig_add page
router.get('/add',(req, res) => {
    res.render("add");
});

// Add a Gig into DataBase
router.post('/add', async (req, res) => {

let {title ,technologies ,budget,description,contact_email} = req.body;
try{
let error =[];
if (!title){
    error.push({message:'please add a title'})
}
if (!technologies){
    error.push({message:'please technologies'})
}
if (!budget){
    error.push({message:'please add budget'})
}
if (!description){
    error.push({message:'please add description'})
}
if (!contact_email){
    error.push({message:'please add an Email'})
}

if (error.length > 0){
console.log("required fields cant be empty");
}
else{
    const gigCreated=await Gig.create({
        title,
        technologies,
        budget,
        description,
        email:contact_email}); 
        console.log(gigCreated);
}
res.redirect('/gigs');
}
catch(err){
    console.error(err.message);
}

}) 

////search a Gig
router.get('/search', async (req, res) => {
    let {term} = req.query;
    try{
        let gigs = await Gig.findAll({ where: {technologies:{
            [Op.like]: '%' + term + '%'
        }}})
        res.render('gigs',{
            gigs:gigs
        })
    }
    catch(err){ 
        console.log(err.message);
    }

})
module.exports = router;