const passport=require('passport');
const GoogleStrategy=require('passport-google-oauth20').Strategy;
const key=require('../config/key');



passport.use(new GoogleStrategy({
    clientID:key.GoogleClintId,
    clientSecret:key.GoogleClintSecret,
    callbackURL:'/auth/google/callback'
  },
  (accessToken, refreshToken, profile, done) =>{
    console.log('accessToken '+ accessToken);
    console.log(refreshToken);
    console.log(profile);
  }
  ))