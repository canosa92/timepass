const express = require('express');
const router = express.Router();

router.get('/endrouter', (req, res) => {
    res.send(`<h1>Enhorabuena has llegado a EndRouter</h1>
    <h3> Son las ${req.dateTime}</h3>
     `)
})
module.exports = router;