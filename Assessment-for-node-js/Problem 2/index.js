const express = require('express');
const app = express();

app.use(express.json());

const port = process.env.PORT || 8000;

app.get('/', (req, res) => {
    res.send('haha')
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})