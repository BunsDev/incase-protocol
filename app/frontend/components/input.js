import React from 'react'

const input = () => {
	return (
		<div class="shadow-xl py-10 px-20 bg-white max-w-xl rounded">
			<div class="mb-4 relative">
				<input class="input border border-gray-400 appearance-none rounded w-full px-3 py-3 pt-3 pb-2 focus focus:border-indigo-600 focus:outline-none active:outline-none active:border-indigo-600" id="email" type="text" autofocus />
				<label for="token" class="label absolute mb-0 -mt-2 pt-4 pl-3 leading-tighter text-gray-400 cursor-text text-sm">Token Address</label>
			</div>
			<div class="mb-4 relative">
				<input class="input border border-gray-400 appearance-none rounded w-full px-3 py-3 pt-3 pb-2 focus focus:border-indigo-600 focus:outline-none active:outline-none active:border-indigo-600" id="password" type="password" autofocus />
				<label for="beneficiary" class="label absolute mb-0 -mt-2 pt-4 pl-3 leading-tighter text-gray-400 text-sm cursor-text">Beneficiary</label>
			</div>
			<div class="mb-4 relative">
				<input class="input border border-gray-400 appearance-none rounded w-full px-3 py-3 pt-3 pb-2 focus focus:border-indigo-600 focus:outline-none active:outline-none active:border-indigo-600" id="password" type="password" autofocus />
				<label for="amount" class="label absolute mb-0 -mt-2 pt-4 pl-3 leading-tighter text-gray-400 text-sm cursor-text">Amount</label>
			</div>
			<div class="mb-4 relative">
				<input class="input border border-gray-400 appearance-none rounded w-full px-3 py-3 pt-3 pb-2 focus focus:border-indigo-600 focus:outline-none active:outline-none active:border-indigo-600" id="password" type="password" autofocus />
				<label for="tokenID" class="label absolute mb-0 -mt-2 pt-4 pl-3 leading-tighter text-gray-400 text-sm cursor-text">TokenID</label>
			</div>
			<button class="bg-indigo-600 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded">Submit</button>
		</div>
	)
}

export default input