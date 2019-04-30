
const express = require('express')
const router = express.Router()
const Place = require('../models/place')

// show all places
router.get('/places', function(req, res){
    
    Place.find({}, function(err, allPlaces){
        if(err){
            console.log(err);
        } else {
            res.render('places.ejs', { places: allPlaces, pageTitle: 'View All Escapes' });
        }
    });
});

// add new place form
router.get('/add_new_place', isLoggedIn, function(req, res){
    res.render('add_new_place.ejs')
});

// POST the new place
router.post('/places', isLoggedIn, function(req, res){

    var name = req.body.name;
    var country = req.body.country;
    var image = req.body.image;
    var desc = req.body.desc;
    var newPlace = {name: name, country: country, image: image, desc: desc};
    
    // Create new place and save it to DB
    Place.create(newPlace, function(err, newCreatePlace){
        if(err){
            console.log(err)
        } else {
            res.redirect('places');
        }
    }); 
});

// SHOW MORE INFO ABOUT THE PLACE
router.get('/places/:id', function(req, res){
    //find places by id
    Place.findById(req.params.id).populate('comments').exec(function(err, foundPlaceId){
        if(err){
            console.log(err);
        } else {
            res.render('show', {place: foundPlaceId});
        }
    });   
});

function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect('/login');
}

module.exports = router;