const express = require('express');
const passport=require('passport');
const GoogleStrategy=require('passport-google-oauth20').Strategy;
const key=require('./config/key');

// var knex = require('knex')({
//   client: 'mysql',
//   connection: {
//     host : '127.0.0.1',
//     user : 'root',
//     password : '',
//     database : 'full_stack'
//   }
// });


// knex.from('noname').select().then((res)=>{
 
//   console.log(res)
// })


const app = express();

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


app.get('/auth/google/', passport.authenticate('google',{
  scope:['profile','email']
}));

app.get('/auth/google/callback',passport.authenticate('google'));


app.get('/', (req, res) => {
    res.send({
        'info': 'seting up my node runtime and server '
    })
});
app.get("/2nd", (req, res) => {
  res.send({
    "2nd route ": "seting up my node runtime and route "
  });
});


const PORT=process.env.PORT || 4000;
app.listen(PORT);
console.log('its working on port : 4000');