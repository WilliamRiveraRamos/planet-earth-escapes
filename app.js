// Dependencies
const express         = require('express'),
      request         = require('request'),
      bodyParser      = require('body-parser'),
      mongoose        = require('mongoose'),
      passport        = require('passport'),
      LocalStrategy   = require('passport-local'),
      User            = require('./models/user'),
      app             = express(),
      http            = require('http').Server(app);
      

// Require Routes
var indexRoutes       = require ('./routes/index'),
    placesRoutes      = require('./routes/places'),
    commentsRoutes    = require('./routes/comments');

// MongoDB CONNECTION //
mongoose.connect('mongodb://localhost:27017/scapesDB', {useNewUrlParser: true});

// body-parser
app.use(bodyParser.urlencoded({extended: true}))

// Public folder for assets
app.use(express.static('public'))

// Set view engine to ejs
app.set('view engine', 'ejs')

// PASSPORT CONFIG //
app.use(require('express-session')({
    secret: 'Secrets... Secrets...',
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize())
app.use(passport.session())
passport.use(new LocalStrategy(User.authenticate()))
passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())

app.use(indexRoutes);
app.use(placesRoutes);
app.use(commentsRoutes);


// Display message if page or route don't exist
app.get('*', (req, res) => res.send('Page NOT found!'))

// Start Server
http.listen(process.env.PORT || 3000, function(){
    console.log('Server running on port :', http.address().port);
  });