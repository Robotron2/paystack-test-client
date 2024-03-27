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
// Network Error
// axios.get('yourEndpoint').then(response => {
// 	console.log(response.data);
//   }).catch(error => {
// 	if (!error.response) {
// 	  // network error
// 	  console.error('Network Error', error.message);
// 	} else {
// 	  // http status code
// 	  const code = error.response.status;
// 	  // response data
// 	  const response = error.response.data;
// 	  console.error('Error Code:', code, 'Response:', response);
// 	}
//   });
