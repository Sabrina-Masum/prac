const express = require("express");
const app = express();
const path = require('path');
const routes= require('./routes/pages')


app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.set('view-engine', 'hbs')
app.use(express.static("public"));
app.use('/css',express.static (__dirname+'public/css'));

/* FACULTY */
app.get('/', (req, res) => {
        res.render('Faculty.hbs')
    }
)
app.get('/Faculty.hbs', (req, res) => {
        res.render('Faculty.hbs')
    }
)
app.get('/Dataentry.hbs', (req, res) => {
        res.render('Dataentry.hbs')
    }
)
app.get('/studentreport.hbs', (req, res) => {
        res.render('studentreport.hbs')
    }
)
app.get('/mycourse.hbs', (req, res) => {
        res.render('mycourse.hbs')
    }
)



app.listen(3000, () => {
    console.log("Server started on http://localhost:3000");
})