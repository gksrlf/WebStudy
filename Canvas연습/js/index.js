import { Mysql } from "./mysql"

$(() => {
	new Index()
})

export class Index {
	constructor() {
		this.init()
	}
	init() {
		this.event()
		this.mysqlConn = new Mysql()
	}
	event() {
		$("#login").on("click", () => {
			const id = document.querySelector("#id").value
			const pw = document.querySelector("#pw").value
			this.mysqlConn()
		})
	}
}
