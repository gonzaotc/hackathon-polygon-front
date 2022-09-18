import Image from 'next/image'

import BorderWrapper from './Wrappers/BorderWrapper'

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
									className={'h-[45px] w-[175px] font-bold'}
									rounded="rounded-xl"
									position="bottom-1.25 right-1.25"
									contraPosition="top-1.25 left-1.25"
									outline="outline outline-[3px] outline-black"
								>
									<div className="flex h-full w-full items-center justify-center rounded-2lg bg-white">
										CONNECT WALLET
									</div>
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
