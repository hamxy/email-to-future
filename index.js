const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));
app.use(express.static(path.join(__dirname, '/public')));
app.use(express.urlencoded({extended: true}));

// Routes
app.get('/', (req, res) => {
    res.render('index');
})

app.post('/send', (req, res) => {
    console.log(req.body)
    res.send("/send POST")
})


// App listen
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })