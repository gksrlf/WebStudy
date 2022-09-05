const express = require("express")
const path = require("path")
const app = express()

app.listen(8001, function () {
	console.log("listening on 8080")
})

app.use(express.static(path.join(__dirname, "test/build")))

app.get("/", (req, res) => {
	res.sendFile(path.join(__dirname, "/test/build/index.html"))
})
