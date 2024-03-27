import axios from "axios"
import { useEffect, useState } from "react"

function Interface() {
	const [amount, setAmount] = useState("")
	const [email, setEmail] = useState("")
	const [workingServer, setWorkingServer] = useState("")

	const handleSubmit = async (e) => {
		e.preventDefault()
		try {
			console.log("Clicked")
			const initUrl = `${import.meta.env.VITE_API_URL}/paystack?amount=${amount}&email=${email}`
			const response = await axios.get(initUrl)
			if (response.data.success) window.location.href = response.data.authUrl
			return null
		} catch (error) {
			console.log(error)
		}
	}
	const checkStats = async () => {
		const baseUrl = `${import.meta.env.VITE_API_URL}`
		try {
			const response = await axios.get(baseUrl)
			response.data.success && setWorkingServer(true)
		} catch (error) {
			console.log(error)
		}
	}

	useEffect(() => {
		checkStats()
	}, [])

	return (
		<section className=" md:px-12 p-4 pt-16 my-8 mb-0 bg-gray-200" name="contact" id="contact">
			<div className="container max-w-screen-2xl mx-auto">
				{/* Form */}
				<h1 className="text-3xl font-bold text-center text-gray-800">Pay fake money</h1>
				<div className="col-span-12 md:col-span-7 w-full">
					<div>
						<form className="grid grid-cols-12 gap-4 p-4" onSubmit={handleSubmit}>
							<div className="col-span-12 md:col-span-6">
								<label>Amount</label>
								<input
									type="number"
									placeholder="Amount"
									name="name"
									className="w-full p-2 focus:outline-none border border-gray-300 focus:border-gray-500 "
									required
									autoComplete="off"
									value={amount}
									onChange={(e) => setAmount(e.target.value)}
								/>
							</div>

							<div className="col-span-12 md:col-span-6">
								<label>Email</label>
								<input
									type="email"
									placeholder="Your email"
									name="email"
									className="w-full p-2 focus:outline-none border border-gray-300 focus:border-gray-500 "
									required
									autoComplete="off"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
								/>
							</div>

							<div className="col-span-12 text-center">
								{workingServer ? (
									<button className="p-3 px-8 bg-gray-700 rounded-md text-white w-44 font-semibold ">
										Pay
									</button>
								) : (
									<button className="p-3 px-8 bg-gray-700 rounded-md text-white w-44 font-semibold ">
										Hold on
									</button>
								)}
							</div>
							{/* <div className="col-span-12 text-center">
								<button className="p-3 px-8 bg-primary hover:bg-primaryHover rounded-md text-white w-44 font-semibold " disabled={isSending}>
									{isSending ? "Sending..." : "Send Message"}
								</button>
							</div> */}
						</form>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Interface
