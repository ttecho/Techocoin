const express = require('express');
const router = express.Router();
const { check } = require('express-validator/check');

const Techocoin = require('../middleware/techocoin');

const responseMiddleware = (req, res, next) => {
    return res.json(req.responseValue)
};
/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', { title: 'Techo Coin' })
});

router.post('/transactions/new', [
    check('sender', 'Sender must be a String').exists(),
    check('recipient', 'Sender must be a String').exists(),
    check('amount', 'Sender must be a Int Value').isInt().exists()
], Techocoin.newTransaction, responseMiddleware);

router.get('/mine', Techocoin.mine, responseMiddleware);

router.get('/chain', Techocoin.getChain, responseMiddleware);

module.exports = router;