const express = require('express')

const router = express.Router()

router.get('/user', (req,res)=>{console.log('I am the user route')})

module.exports = router