//Initialize and require express and declare port

const express = require('express')
const app = express()
const port = 3000

//Modules
const home = require('./home')

app.get('/', home)

app.listen(port, () => console.log(`Rental site running on port ${port}!`)) 