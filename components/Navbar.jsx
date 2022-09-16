import Image from 'next/image'

import BorderWrapper from './wrapers/BorderWrapper'

import { ConnectButton } from '@rainbow-me/rainbowkit'

const Navbar = () => {
	return (
		<nav className="flex justify-between px-4">
			<Image src="/wooylogo.svg" width={150} height={150} />
			<div className="py-12">
				<ConnectButton.Custom>
					{({ openConnectModal }) => {
						return (
							<button onClick={openConnectModal}>
								<BorderWrapper
									size={'w-[175px] h-[40px]'}
									className={'font-bold'}
								>
									CONNECT WALLET
								</BorderWrapper>
							</button>
						)
					}}
				</ConnectButton.Custom>
			</div>
		</nav>
	)
}

export default Navbar
