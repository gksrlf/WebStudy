import React, { Fragment, StrictMode } from "react"
import { createRoot } from "react-dom/client"
import App from "./App"
import Intro from "./intro"

const rootElement = document.getElementById("root")
const root = createRoot(rootElement)

root.render(
	<Fragment>
		<App />
	</Fragment>
)
