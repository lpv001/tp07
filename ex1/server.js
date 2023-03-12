const express = require('express')
const fs = require('fs')
const app = express()

app.get('/', function (req,res) {
    fs.readFile('src/index.html', 'utf8', (err, data) => {
        if (err) {
            console.log(err)
            return
        }
        res.send(data)
    })
})

app.listen(3001, () => {
    console.log("Server is running is port 3000")
})