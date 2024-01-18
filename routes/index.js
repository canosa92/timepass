const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    (res.locals.isTime)?
            res.send(`
        <h1>¡Hola!</h1><br>
        <h2>¿Crees que puedes entrar?</h2>
        <h3>son las ${req.dateTime}</h3><br>
            <button type="submit">Entrar</button>
        `):
        res.send(`
        <h1>¡Hola!</h1><br><h3>Son las ${req.dateTime}</h3><br>
             <button disabled type="submit">Entrar</button>
             <p>Aún no son las 12</p>
        `);
    })
module.exports= router;