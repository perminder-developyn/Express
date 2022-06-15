const express = require('express');
const app = express();
const port = 3000;

app.get('/:name', (req, res) => {
    let userName = req.params.name;
    res.send(`Hello ${userName}`);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})