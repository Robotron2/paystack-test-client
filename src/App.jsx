import { BrowserRouter as Routes, Route } from "react-router-dom"

import Interface from "./pages/Interface"
import Verify from "./pages/Verify"

function App() {
	return (
		<Routes>
			<Route path="/" element={<Interface />} />
			<Route path="/transaction/verify" element={<Verify />} />
		</Routes>
	)
}
export default App
