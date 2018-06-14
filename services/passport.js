const passport=require('passport');
const GoogleStrategy=require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const key=require('../config/key');

const User=mongoose.model('user');

passport.serializeUser((user,done)=>{
  done(null,user.id);
});

passport.deserializeUser((id,done)=>{
    User.findById(id).then(user=>{
      done(null,user);
    })
})

passport.use(new GoogleStrategy({
    clientID:key.GoogleClintId,
    clientSecret:key.GoogleClintSecret,
    callbackURL:'/auth/google/callback'
  },
  (accessToken, refreshToken, profile, done) =>{
    User.findOne({googleId:profile.id}).then((existingUser)=>{
      if(existingUser){
        console.log('user is already there ');
        done(null,existingUser)
      }
      else{
          new User({
            googleId: profile.id,
            name: profile.displayName,
          }).save().then(user=> done(null,user));
          
      }
    })
    
  }
  ))