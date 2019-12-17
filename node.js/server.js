const express = require('express');
const app = express();
const fs = require('fs');
const PORT = 3212;
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());
app.use(bodyParser.json())

app.get('/', (reg, res) => {
    
    res.render('index')
    
})

app.post('/feedbacks', (req, res) => {
    let feedback = req.body.newData;
 
    let openDB = fs.readFileSync(__dirname + '/model/feedback.json');
    let textDB = JSON.parse(openDB);

    textDB.push(feedback);
    fs.writeFileSync(__dirname + '/model/feedback.json', JSON.stringify(textDB));
    res.json({status:'OK'})

});

app.get('/feedbacks', (req, res) => {

    let openDB = fs.readFileSync(__dirname + '/model/feedback.json');
    let textDB = JSON.parse(openDB)

    res.json(textDB)
});


app.listen(PORT, () => console.log(`Server app listening on port ${PORT}!`));
