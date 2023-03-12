const express = require('express')
const fs = require('fs')
const app = express()
const dirname = "/Users/pozzvenh/Documents/java/html/tpclass7/ex4"

app.use(express.static(dirname + "/public"));

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