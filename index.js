const express = require('express');
const cors = require('cors');
const app = express();
const port = 6001;

app.use(cors());
app.use(express.json())

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
    // console.log('query', req.query);
    // filter by search query parameter
    if(req.query.name){
        const search = req.query.name.toLowerCase();
        const matched = users.filter(user => user.name.toLowerCase().includes(search));
        res.send(matched);
    }
    else{
        res.send(users);
    }
    res.send(users)
});

app.get('/user/:id', (req, res) =>{
    console.log(req.params);
    const id = parseInt(req.params.id);
    // const user = users[id];
    const user = users.find(u => u.id === id);
    res.send(user)
});

app.post('/user' , (req, res) =>{
    console.log('Request', req.body);
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.send(user);
})

app.listen(port, () =>{
    console.log('Listening to port', port);
})
