import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Interface from "./pages/Interface"
import Verify from "./pages/Verify"

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Interface />} />
				<Route path="/transaction/verify" element={<Verify />} />
			</Routes>
		</Router>
	)
}
export default App
