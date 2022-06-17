import React from "react"
import "./App.css"
import "bootstrap/dist/css/bootstrap.css"
import Intro from "./intro"
class App extends React.Component {
	render() {
		return (
			// <div className="content">
			// 	<Intro />
			// </div>
			<div class="col col-md-8" id="container">
				<div className="row text-center">
					<Intro />
				</div>
				<div className="row" style={{ background: "blue" }}>
					<span>asdfasdfasdf</span>
				</div>
			</div>
		)
	}
}

export default App
