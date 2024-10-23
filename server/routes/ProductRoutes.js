const express = require('express');
const db = require('../config/db');
const router = express.Router();


router.get('/products', (req, res) => {
    // Query adalah sintax untuk berinterakti dengan database relational yang kita miliki
    const query = "SELECT id, category_name, product_name, stock, price FROM products";
    db.query(query, (err, results) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.json(results);
    });
})


module.exports = router;
/*
Beberapa Method



CRUD
CREATE, READ, UPDATE, DELETE


- GET -> READ
- POST -> CREATE
- PUT -> UPDATE
- DELETE / DESTROY -> DELETE


- PATCH
- OPTION

*/