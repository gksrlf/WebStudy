document.querySelector("#login").addEventListener("click", () => {
	console.log("asdfasdf")
	const id = document.querySelector("#id").value
	const pw = document.querySelector("#pw").value
	axios.get("/member").then((res) => {
		for (let i in res.data) {
			let dbId = res.data[i].id
			let dbPw = res.data[i].pw
			if (id === dbId && pw === dbPw) {
				alert("로그인 성공")
			} else {
				alert("로그인 실패")
			}
		}
	})
})
