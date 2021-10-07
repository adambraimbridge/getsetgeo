const Chat = () => {
	return (
		<>
			<section>
				<div className="p-5 max-w-sm mx-auto my-3 bg-white rounded-xl shadow-md flex items-center space-x-4">
					<div className="flex-shrink-0">
						<img className="h-12 w-12" src="/img/letter.svg" alt="Avatar" />
					</div>
					<div>
						<div className="text-xl font-medium text-black">Salter</div>
						<p className="text-gray-500">Hello traveller!</p>
					</div>
				</div>
			</section>

			<div className="p-5 max-w-sm mx-auto my-3 bg-white rounded-xl shadow-md flex items-center space-x-4">
				<div className="flex-shrink-0">
					<img className="h-12 w-12" src="/img/letter.svg" alt="Avatar" />
				</div>
				<div>
					<div className="text-xl font-medium text-black">Salter</div>
					<p className="text-gray-500">We need to start at the Fremantle Maritime Museum.</p>
				</div>
			</div>

			<div className="p-5 max-w-sm mx-auto my-3 bg-white rounded-xl shadow-md flex items-center space-x-4">
				<div className="flex-shrink-0">
					<img className="h-12 w-12" src="/img/letter.svg" alt="Avatar" />
				</div>
				<div>
					<div className="text-xl font-medium text-black">Salter</div>
					<p className="text-gray-500">Are you there?</p>
				</div>
			</div>

			<section>
				<form className="flex w-full max-w-sm mx-auto my-3 space-x-3">
					<input className="flex-1 appearance-none border-solid border-2 border-gray-100 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent" type="text" placeholder="_" />
					<button className="flex-shrink-0 bg-yellow-200 text-white text-base font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-yellow-100 focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:ring-offset-2 focus:ring-offset-yellow-200" type="button">
						<img className="h-12 w-12" src="/img/send.svg" alt="Send" />
					</button>
				</form>
			</section>
		</>
	)
}

export default Chat
