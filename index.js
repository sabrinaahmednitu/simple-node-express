const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const port = 5000;

//normal way
app.get('/', (req, res) => {
    res.send('wow,seriously!i am really exited learning node and express with nodemon');
})

const users = [
    { id: 0,
     name: 'rohan',
     username: 'Bret',
     email: 'rohan@april.biz', },
    { id: 1,
     name: 'Leanne Graham',
     username: 'Bret',
     email: 'Sincere @april.biz', },
    { id: 2,
     name: 'nitu',
     username: 'Bret',
     email: 'nitu@april.biz', },
    { id: 3,
     name: 'sabrina',
     username: 'Bret',
     email: 'sabrina@april.biz', },
    { id: 4,
     name: 'adam',
     username: 'Bret',
     email: 'sabrina@april.biz', },
]

//query parameter .ja khusi search dela e result dakhay"localhost:5000/users?search=anything alphabet or word"
app.get('/users', (req, res) => {
    // console.log(req.query.search);
     const search=req.query.search;
    if (search) {
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult);
    }
    else {
       res.send(users) 
    }
    
});

//post app.METHODE
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('hitting the post',req.body)
    // res.send(JSON.stringify(newUser))
    res.json(newUser)
})

//dynamic route
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id]
    res.send(user);
})

//another way
// sudhu "fruits" likhle e result chole asbe
app.get('/fruits', (req, res) => {
    res.send(['mango','oranges','banana','apple']);
})

//"fruits/mangoes/fazli"puro line ta likhle oi send line ta localhost a show korbe
app.get('/fruits/mangoes/fazli', (req, res) => {
    res.send('yummy yummy tok marka fozli');
})

//user load
app.get('/users', (req, res) => {
    res.send(users);
})

//ja pathai tai show kore localhost a
app.listen(port, () => {
    console.log('listening to port', port);
})