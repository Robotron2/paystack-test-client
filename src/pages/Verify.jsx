/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { axios } from "axios"

function Verify() {
	const { reference } = useParams()
	if (!reference) window.location.href = "/"
	const verifyTransaction = async () => {
		const verify = await axios.get(`http://localhost:4000/paystack/verify?ref=${reference}`)
		console.log(verify)
	}
	useEffect(() => {
		verifyTransaction()
	}, [])
	return (
		<section className=" md:px-12 p-4 pt-16 my-8 mb-0 bg-gray-200">
			<div className="container max-w-screen-2xl mx-auto">
				<h1 className="text-4xl font-bold text-blue-700">
					Payment verified. I will eat your money jsyk
				</h1>
				<a href="https://zingitalmedia.com" className="bg-blue-500 font-bold text-2xl">
					Proceed to home
				</a>
			</div>
		</section>
	)
}

export default Verify
