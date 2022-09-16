import Image from 'next/image'

import BorderWrapper from './wrapers/BorderWrapper'

import { ConnectButton } from '@rainbow-me/rainbowkit'

const Navbar = () => {
	return (
		<nav className="flex justify-between px-4 ">
			<Image src="/wooylogo.svg" width={150} height={150} />
			<div className="py-12">
				<BorderWrapper />
			</div>
		</nav>
	)
}

export default Navbar
