export class mysql {
	constructor() {
		this.init()
	}
	init() {
		this.start()
	}
	start() {
		const mysql = require("mysql")
		const conn = mysql.createConnection({
			host: "localhost",
			user: "mysql",
			password: "gksrlf78",
			database: "mysql",
		})

		conn.connect()

		conn.query("SELECT * FROM member", (err, results, fields) => {
			if (err) {
				console.log(err)
			}
			console.log(results)
		})

		conn.end()
	}
}
