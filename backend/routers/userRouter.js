const express = require('express');
const router = express.Router();
const Model = require('../models/userModel');
require('dotenv').config();
const jwt = require('jsonwebtoken');    //json web token (jwt)

require('dotenv').config();


router.post('/add', (req, res) => {
    console.log(req.body);

    new Model(req.body).save()
        .then((result) => {
            res.status(200).json(result);
        }).catch((err) => {
            if (err.code === 11000) {
                res.status(400).json({ message: 'Email already exists' });
            } else {
                res.status(500).json({ message: 'Somthing Went Wrong' });
            }
            console.log(err);
        });
});
router.get('/getall', (req, res) => {
    Model.find()
        .then((result) => {
            res.status(200).json(result);
        }).catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.get('/getbycity/:city', (req, res) => {
    console.log(req.params.city);

    Model.findOne({ city: req.params.city })
        .then((err) => {
            res.status(200).json(err);
        }).catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

// email
router.get('/getbyEmail/:email', (req, res) => {
    console.log(req.params.email);

    find({ email: req.params.email })
        .then((err) => {
            res.status(200).json(err);
        }).catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});


router.get('/getbyId/:id', (req, res) => {
    console.log(req.params.id);

    findById(req.params.id)
        .then((err) => {
            res.status(200).json(err);
        }).catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

// delete
router.delete('/delete/:id', (req, res) => {
    findByIdAndDelete(req.params.id)
        .then((result) => {
            res.status(200).json(result);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        })
});

router.put('/update/:id', (req, res) => {
    findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then((result) => {
            res.status(200).json(result);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        })
});


router.post('/authenticate', (req, res) => {
    console.log(req.body);
    Model.findOne(req.body)
        .then((result) => {
            if (result) {
                const { _id } = result;
                jwt.sign(
                    { _id },    //payload
                    process.env.JWT_SECRET,
                    { expiresIn: 20 },
                    (err, token) => {
                        if (err) {
                            console.log(err);
                            res.status(500).json(err);
                        } else {
                            res.status(200).json({ token });
                        }
                    }
                )
            } else {
                // if email or password is incorrect
                res.status(403).json({ message: 'Invalid Credentials' });
            }
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
})

module.exports = router;