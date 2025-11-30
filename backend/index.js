const express = require('express');
const UserRouter = require('./routers/userRouter.js');
const EmailRouter = require('./routers/emailRouter.js');
const cors = require('cors');

const app = express();
const PORT = 5000;

// middlewares
app.use(cors({
    origin: ['http://localhost:3000']
}))

app.use(express.json());
app.use('/user', UserRouter);
app.use('/product', EmailRouter);

// Endpoint or rout
app.get('/', (req, res) => {
    res.send('response from express')
});

// Add
app.post('/add', (req, res) => {
    res.send('add response from express')
});

// Getall
app.get('/getall', (req, res) => {
    res.send('getall response from express')
});

// Delete
app.get('/delete', (req, res) => {
    res.send('delete response from express')
});

// getbyid
app.get('/getbyid', (req, res) => {
    res.send('getbyid response from express')
});

// update
app.get('/update', (req, res) => {
    res.send('update response from express')
});

app.listen(PORT, () => {
    console.log('server started');
});