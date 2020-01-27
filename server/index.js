const express = require('express')
const cors = require('cors')
const bodyParser=require('body-parser')
const app = express()

app.use(cors())
app.use(bodyParser.json())

app.use('/', require('./api/getStuff'))
app.use('/', require('./api/postStuff'))
app.use('/', require('./api/deleteStuff'))

app.listen(process.env.PORT || 5000, () => console.log(`listening on port ${process.env.PORT || 5000}`))