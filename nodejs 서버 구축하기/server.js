const http = require("http")
const url = require("url")
const querystring = require("querystring")

const server = http.createServer(function (request, response) {
	console.log("--- log start ---")
	let parsedUrl = url.parse(request.url)
	console.log(parsedUrl)
	let parsedQuery = querystring.parse(parsedUrl.query, "&", "=")
	console.log(parsedQuery)

	console.log("--- log end ---")

	response.writeHead(200, { "Content-Type": "text/html" })
	response.end("Hello node.js!!")
})

server.listen(8082, function () {
	console.log("Server is running...")
})
