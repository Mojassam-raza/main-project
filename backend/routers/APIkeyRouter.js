const express = require('express');
const router = express.Router();
const Model = require('../models/emailModel');

// Crud Operations
router.post('/add', (req, res) => {
    console.log(req.body);
    new Model(req.body).save()
    .then((result) => {
        res.status(200).json(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.post('/delete/:id', (req, res) => {
    Model.findByIdAndDelete(req.params.id)
    .then((result) => {
        res.status(200).json(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.post('/update/:id', (req, res) => {
    Model.findByIdAndUpdate(req.params.id, req.body, {new:true})
    .then((result) => {
        res.status(200).json(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/getbyuser/:userId', (req, res) => {
    console.log(req.params.userId);
    Model.findOne({ User : req.params.userId})
    .then((err) => {
        res.status(200).json(err);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
})