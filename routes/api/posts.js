const express = require('express')

const router = express.Router()

router.get('/posts', (req,res)=>{console.log('I am the posts route')})

module.exports = router