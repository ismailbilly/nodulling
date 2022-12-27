const express = require('express')

const router = express.Router()

router.get('/auth', (req,res)=>{console.log('I am the auth route')})

module.exports = router