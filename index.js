const express = require('express')
const app = express()
const port = PROCESS.env.PORT || 5000

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/api', require('routes/api/user'))
app.use('/api', require('routes/api/profile'))
app.use('/api', require('routes/api/auth'))
app.use('/api', require('routes/api/posts'))

app.listen(port, (req,res)=>console.log(`Server is listening on port: ${port}`))