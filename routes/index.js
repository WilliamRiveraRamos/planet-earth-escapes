const express = require('express')
const passport = require('passport')
const router = express.Router()

var User = require('../models/user')

// Show username on every page
router.use(function(req, res, next){
    res.locals.currentUser = req.user;
    next();
});


/// main route
router.get('/', function(req, res){

    res.render('landing');
});

// AUTH ROUTES ///
router.get('/register', function(req, res){
    res.render('register')
});
// Sign Up logic
router.post('/register', function(req, res){
    var newUser = new User({username: req.body.username});
    User.register(newUser, req.body.password, function(err, user){
        if(err){
            console.log(err);
            return res.render('register');
        }
            passport.authenticate('local')(req, res, function(){
            res.redirect('/places');
        });
    });
});

// SHOW LOGIN FORM //
router.get('/login', function(req, res){
    res.render('login');
});

// Login logic
router.post('/login', passport.authenticate('local',
{
    successRedirect: '/places',
    failureRedirect: '/login'
    
    }), function(req, res){
});

// LOGOUT ROUTE
router.get('/logout', function(req, res){
    req.logout();
    res.redirect('/places');
})

function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect('/login');
}

module.exports = router;