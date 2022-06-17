const express = require("express")
const http = require("http")
const fs = require("fs")
const mysql = require("mysql")
const dbconfig = require("./config/database.js")
const connection = mysql.createConnection(dbconfig)
const WEBPATH = "./html"
const app = express()
const server = http.createServer(app)
const PORT = 3001

// configuration =========================
app.set("port", process.env.PORT || 3000)
server.listen(PORT, () => {
	console.log(`Server running on ${PORT}`)
})

app.get("/", (req, res) => {
	res.send("root")
})

app.get("/index", (error, res) => {
	fs.readFile(`${WEBPATH}/login.html`, (error, data) => {
		if (error) {
			console.log(error)
			return res.status(500).send("<h1>500 Error</h1>")
		}
		res.writeHead(200, { "Content-Type": "text/html" })
		res.end(data)
	})
})

app.use("/index/login", express.static((__dirname = "./html/js")))

app.get("/member", (req, res) => {
	connection.query("SELECT * from member", (error, rows) => {
		if (error) throw error
		console.log("member info is: ", rows)
		res.send(rows)
	})
})

app.listen(app.get("port"), () => {
	console.log("Express server listening on port " + app.get("port"))
})
