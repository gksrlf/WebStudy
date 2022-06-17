const http = require("http")
const querystring = require("querystring")

const server = http.createServer(function (request, response) {
	let postdata = ""

	request.on("data", function (data) {
		postdata = postdata + data
	})

	request.on("end", function () {
		let parsedQuery = querystring.parse(postdata)

		console.log(parsedQuery)

		response.writeHead(200, { "Content-Type": "text/html" })
		response.end(`var1의 값 = ` + result)
	})
})

server.listen(8082, function () {
	console.log("Server is running...")
})
