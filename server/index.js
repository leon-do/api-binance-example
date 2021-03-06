const express = require('express')
const cors = require('cors')
const bodyParser=require('body-parser')
const app = express()

app.use(cors())
app.use(bodyParser.json())

app.use('/', require('./api/createStuff'))
app.use('/', require('./api/readStuff'))
app.use('/', require('./api/updateStuff'))
app.use('/', require('./api/deleteStuff'))


app.listen(process.env.PORT || 5000, () => console.log(`listening on port ${process.env.PORT || 5000}`))