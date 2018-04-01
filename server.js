const express = require('express')
const app = express()
const port = 80;

app.use(express.static('app'));
app.use(express.static('node_modules'));

app.get('*', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.listen(port, () => console.log('Example app listening on port ' + port + '!'))