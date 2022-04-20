const express = require('express');
const app = express();
const port = 6001;

app.get('/', (req, res) => {
    res.send('Hello word! ')
});


app.listen(port, () =>{
    console.log('Listening to port', port);
})
