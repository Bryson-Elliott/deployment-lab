const express = require('express')
const path = require('path')

const app = express()

app.use(express.static("client"))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/index.html'))
})

const port = process.env.PORT || 4000
app.listen(port , () => {
    console.log(`Let's get ready to rumble port: ${port}`)
})
