/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import axios from "axios"

function Verify() {
	const location = useLocation()
	const ref = new URLSearchParams(location.search).get("reference")

	const [status, setStatus] = useState(false)

	if (ref === null) window.location.href = "/"
	const verifyTransaction = async () => {
		try {
			const verifyUrl = `${import.meta.env.VITE_API_URL}/paystack/verify?ref=${ref}`
			const verify = await axios.get(verifyUrl)
			if (!verify.data.success) setStatus(false)
			setStatus(true)
		} catch (error) {
			console.log(error)
			console.log("Verification not successful")
		}
	}
	useEffect(() => {
		verifyTransaction()
	}, [])
	return (
		<section className=" md:px-12 p-4 pt-16 my-8 mb-0 bg-gray-200">
			<div className="container max-w-screen-2xl mx-auto">
				{status ? (
					<>
						<h1 className="text-4xl font-bold text-blue-700">
							Payment verified. I will eat your money jsyk
						</h1>
						<div className="bg-blue-500 font-bold text-2xl text-white w-fit p-2 rounded-xl mt-4">
							<a href="https://zingitalmedia.com">Proceed to home</a>
						</div>
					</>
				) : (
					<>
						<h1 className="text-4xl font-bold text-blue-700">
							Payment not verified, check again.
						</h1>
						<div className="bg-blue-500 font-bold text-2xl text-white w-fit p-2 rounded-xl mt-4">
							<a href="https://zingitalmedia.com">Proceed to home</a>
						</div>
					</>
				)}
			</div>
		</section>
	)
}

export default Verify
