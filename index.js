const express = require('express');
const passport=require('passport');
const GoogleStrategy=require('passport-google-oauth20').Strategy;

const app = express();

passport.use(new GoogleStrategy())


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