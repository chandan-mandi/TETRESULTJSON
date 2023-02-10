const express = require('express')
const cors = require('cors')

const app = express();
const port = process.env.PORT || 5010;
app.use(cors());

const hotel = require('./data/hotels.json')

app.get('/', (req, res) => {
    res.send('travel guru server is running')
})

app.get('/hotels', (req, res) => {
    res.send(hotel)
})



app.listen(port, () => {
    console.log(`Travel guru running on ${port}`);
})