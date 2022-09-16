import React from 'react'
import Link from 'next/link'

//---icons
import WavesIcon from '@mui/icons-material/Waves'
import ColorLensIcon from '@mui/icons-material/ColorLens'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import { useRouter } from 'next/router'
import BorderWrapper from './wrapers/BorderWrapper'
import Image from 'next/image'

const SideBar = () => {
	const router = useRouter()

	return (
		<div className="flex w-[17rem]">
			<div className="fixed flex h-[calc(100vh-3rem-150px-1rem)] flex-col justify-between 2xl:h-[calc(100vh-4rem-150px-1rem)]">
				<div className="flex flex-col justify-between gap-4">
					<Link href="/">
						<div
							className={`flex items-center gap-2 rounded-xl py-1.75 px-6 text-white transition-all duration-500 hover:cursor-pointer  ${
								router.pathname == '/'
									? 'bg-blue1 '
									: 'bg-transparent'
							}`}
						>
							<WavesIcon className="text-inherit" />
							<p className=" text-2xl text-inherit">Pools</p>
						</div>
					</Link>
					<Link href="/pods">
						<div
							className={`flex items-center gap-2 rounded-xl py-1.75 px-6 text-white transition-all duration-300 hover:cursor-pointer   ${
								router.pathname == '/pods'
									? 'bg-white text-black'
									: ''
							}`}
						>
							<ColorLensIcon className="text-inherit" />
							<p className=" text-2xl text-inherit">NFTs</p>
						</div>
					</Link>
					<Link href="/account">
						<div
							className={`flex items-center gap-2 rounded-xl py-1.75 px-6 text-white transition-all duration-300 hover:cursor-pointer ${
								router.pathname == '/account' ? 'bg-blue1' : ''
							}`}
						>
							<AccountCircleIcon className="text-inherit" />
							<p className=" text-2xl text-inherit">My Account</p>
						</div>
					</Link>
				</div>
				<div className="hover:img:rotate-0 flex flex-col items-start gap-6  text-white">
					<button className="flex items-center gap-2 hover-child-image:rotate-0">
						<img
							className="h-4 w-4 rotate-180 object-contain transition-all duration-300 "
							src="arrow.png"
							alt="arrow icon"
						/>
						<p className="text-2xl">Help</p>
					</button>
					<div className="flex w-full justify-between gap-4">
						<BorderWrapper
							size={'w-[60px] h-[60px]'}
							className=" text-2xl font-bold text-black "
						>
							<a
								href="https://discord.com/"
								target="_blank"
								noreferrer
								className="flex items-center justify-center"
							>
								<Image
									src="/discord.png"
									width={23}
									height={23}
								/>
							</a>
						</BorderWrapper>
						<BorderWrapper
							size={'w-[60px] h-[60px]'}
							className=" text-2xl font-bold text-black"
						>
							<a
								href="https://medium.com/"
								target="_blank"
								noreferrer
								className="flex items-center justify-center"
							>
								<Image
									src="/medium.png"
									width={23}
									height={23}
								/>
							</a>
						</BorderWrapper>
						<BorderWrapper
							size={'w-[60px] h-[60px]'}
							className="text-2xl font-bold text-black"
						>
							<a
								href="https://twitter.com/"
								target="_blank"
								noreferrer
								className="flex items-center justify-center"
							>
								<Image
									src="/twitter.png"
									width={23}
									height={23}
								/>
							</a>
						</BorderWrapper>
					</div>
				</div>
			</div>
		</div>
	)
}

export default SideBar
