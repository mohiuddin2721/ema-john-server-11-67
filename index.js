const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('John are waiting for ema')
});

app.listen(port, () => {
    console.log('John is running on port', port);
})