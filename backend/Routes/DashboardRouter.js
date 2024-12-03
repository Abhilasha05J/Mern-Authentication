const ensureAuthenticated = require('../Middleware/Auth')
const router = require('express').Router();

router.get('/', ensureAuthenticated, (req, res) =>{
    console.log('---logged in user details---', req.user);
    res.status(200).json([
        {
            name: "a",
            price:10000

        },
        {
            name:"b",
             price:20000
        }
    ])
});

module.exports = router;