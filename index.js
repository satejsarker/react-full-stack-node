const express = require('express');
var mongoose = require('mongoose');
const cookiesSession=require('cookie-session');
const passport=require('passport');

var keys=require('./config/key');
require('./modals/User');
require('./services/passport');



mongoose.connect(keys.mongoURI);

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

app.use(
cookiesSession({
  maxAge:30*24*60*60*1000,
  keys:[keys.cookiesKey]
})
);

app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);





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