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
// Checked!
router.post('/', (req, res) => {
    const newPost = req.body
    // INSERT INTO ACCOUNTS - need name and budget
    if(!newPost.name || !newPost.budget){
        res.status(404).json({message: "Please include both name and budget"})
    }else{
        db('accounts').insert(newPost, "id")
        .then(message => {
            res.status(201).json({message: "Post has been created"})
        })
        .catch(handleError)
    }
})

router.delete('/:id', (req, res) => {
    // find by ID
    const {id} = req.params
    
      db('accounts')
      .where({id})
      .del() // Will return the number of records deleted
      .then(count => {
        if(count > 0){
            res.status(200).json({data: count})
        }else{
            res.status(404).json({message: "There was no record to delete"})
        }
       
    })
    .catch(error => {
        res.status(500).json({message: "There was an error deleted the account"})
    })  
})

router.put('/:id', (req, res) => {
    const {id} = req.params
    const accountUpdate = req.body

    db('accounts')
    .where({id})
    .update(accountUpdate)
    .then(count => {
        if(count > 0){
            res.status(200).json({data: count})
        }else{
            res.status(404).json({message: "That account does not exist"})
        }
    })
    .catch(error => {
        res.status(500).json({message: "There was an error updating the record"})
    })
}) // Checked!


function handleError(){
    console.log("error")
    res.status(500).json(({message: "Did not work"}))
}
module.exports = router;