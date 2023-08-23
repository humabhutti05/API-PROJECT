// const express = require('express')
// const app = express()
// require('dotenv').config()
// const CategoryRouter = require('./API/Category/Router')


// const port = process.env.SERVER_PORT || 3200


// app.use(express.json())
// app.use('/api', CategoryRouter)


// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })

const express = require('express')
const app = express()
require('dotenv').config()
const port = process.env.SERVER_PORT
const cors = require('cors')
const path = require('path')

app.use(express.json())
app.use('/', express.static(path.join(__dirname, './client/dist')))
app.use(cors())
app.use('/api', require('./api/quote/Router'))
app.use('/api', require('./api/category/router'))
app.use('/api', require('./api/authors/router'))
app.use('/api', require('./api/user/Router'))





app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})