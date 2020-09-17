const express = require('express')
const db = require("../data/dbConfig")
const router = express.Router();

router.get('/', (req, res) => {
     // Get a list of posts from the db
    //  SELECT * FROM ACCOUNTS
     db.select('*').from('accounts')
     .then(accounts => {
         res.status(200).json({data: accounts})
     })
     .catch(handleError)
})
router.post('/:id', (req, res) => {
    // INSERT INTO ACCOUNTS - need name and budget
    db.insert().into('accounts').values(name = "Kyle", budget = 100)
    .then(message => {
        res.status(201).json()
    })
})
router.delete('/:id', (req, res) => {
    
})
router.put('/:id', (req, res) => {
})

function handleError(){
    console.log("error")
    res.status(500).json(({message: "Did not work"}))
}
module.exports = router;