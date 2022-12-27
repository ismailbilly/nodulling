const express = require('express')

const router = express.Router()

router.get('/profile', (req,res)=>{console.log('I am the profile route')})

module.exports = router