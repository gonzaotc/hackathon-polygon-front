import Image from 'next/image'

import BorderWrapper from './wrapers/BorderWrapper'

import { ConnectButton } from '@rainbow-me/rainbowkit'

const Navbar = () => {
	return (
		<nav className="px-4 flex justify-between">
			<Image src="/wooylogo.svg" width={150} height={150} />
			<div className="py-12">
				<BorderWrapper />
				
			</div>
		</nav>
	)
}

export default Navbar
													{/* <ConnectButton /> */}
					{/* <div className="top-[0.5rem] left-[0.5rem] absolute w-[175px] h-[45px] bg-white rounded-lg text-black flex items-center justify-center font-semibold shadow-[5px_5px_1px_rgba(0,0,0,1)] "></div>
					CONNECT WALLET */}
				{/* <div className=" w-[175px] h-[45px] bg-white rounded-lg text-black flex items-center justify-center font-semibold shadow-[5px_5px_1px_rgba(255,0,0,1)] "></div> */}