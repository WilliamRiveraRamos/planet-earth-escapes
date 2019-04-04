const express = require('express')
const router = express.Router()
const Place = require('../models/place')
const Comment = require('../models/comment')

//  COMMENTS
router.get('/places/:id/comments/new', isLoggedIn, function(req, res){
    // find place by id
    Place.findById(req.params.id, function(err, place){
        if(err){
            console.log(err);
        } else {
            res.render('comments/new', {place: place});
        }
    });
});

router.post('/places/:id/comments', isLoggedIn, function(req, res){
    // lookup place using id
    Place.findById(req.params.id, function(err, place){
        if(err) {
            console.log(err);
            res.redirect('/places')
        } else {
            Comment.create(req.body.comment, function(err, comment){
                if(err){
                    console.log(err);
                } else {
                    comment.author.id = req.user._id;
                    comment.author.username = req.user.username;
                    comment.save();
                    
                    place.comments.push(comment);
                    place.save();
                    res.redirect('/places/' + place._id);
                }
            });
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