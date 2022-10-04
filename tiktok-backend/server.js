require('./db');
const express = require('express')
const mongoose = require('mongoose');
const Data = require('./data.js');
const Videos = require('./model')

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());
app.use((req,res,next) => {
    res.setHeader("Access-Control-Allow-Origin", "*"),
    res.setHeader("Access-Control-Allow-Headers", "*"),
    next()
})

app.get('/', (req,res) => {
    res.status(200).send("testing")
})

// --------v2------------

app.get('/v2/posts', (req,res) => {
    Videos.find({},(err,data) => {
        if (err) {
            res.status(500).send(err)            
        }else {
            res.status(201).send(data)
        }
    });
});

app.post('/v2/posts', (req,res) => {
    const dbVideos = req.body;
    Videos.create(dbVideos, (err, data) => {
        if (err) {
            res.status(500).send(err)            
        }else {
            res.status(201).send(data)
        }
    })
})

// -------------------------
app.listen(port, () => {
    console.log('running...')
})