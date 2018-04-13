const express = require('express');
const app = express();


app.get('/', (req, res) => {
    res.send({
        'info': 'seting up my node runtime and server '
    })
});

const PORT=process.env.PORT || 4000;
app.listen(PORT);
console.log('its working on port : 4000')