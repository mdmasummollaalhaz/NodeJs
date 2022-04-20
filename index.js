const express = require('express');
const cors = require('cors');
const app = express();
const port = 6001;

app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello word! ')
});

const users =[
    {id:1, name: 'Masum', email: 'masum@gmail.com', phone: '01722222'},
    {id:2, name: 'Ali', email: 'ali@gmail.com', phone: '0174322'},
    {id:3, name: 'Kalam', email: 'kalam@gmail.com', phone: '01833222'},
    {id:4, name: 'Karim', email: 'karim@gmail.com', phone: '01833222'},
    {id:5, name: 'Roni', email: 'roni@gmail.com', phone: '01833222'},
]

app.get('/user',  (req, res) =>{
    res.send(users)
});

app.get('/user/:id', (req, res) =>{
    console.log(req.params);
    const id = parseInt(req.params.id);
    // const user = users[id];
    const user = users.find(u => u.id === id);
    res.send(user)
})

app.listen(port, () =>{
    console.log('Listening to port', port);
})
