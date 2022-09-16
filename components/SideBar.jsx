import React from 'react'
import Link from 'next/link'

//---icons
import WavesIcon from '@mui/icons-material/Waves'
import ColorLensIcon from '@mui/icons-material/ColorLens'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import { useRouter } from 'next/router'
import BorderWrapper from './wrapers/BorderWrapper'

const SideBar = () => {
	const router = useRouter()

	// 12 => 3rem, 16 => 4rem

	return (
		<div className="flex w-[17rem] border-2 border-yellow-500">
			<div className="fixed flex h-[calc(100vh-3rem-160px-1rem)] flex-col justify-between border-purple-500 2xl:h-[calc(100vh-4rem-160px-1rem)]">
				<div className="flex flex-col justify-between gap-4">
					<Link href="/">
						<div
							className={`flex items-center gap-2 rounded-lg py-1.25 px-6 text-xs  text-white transition-all duration-500 hover:cursor-pointer  ${
								router.pathname == '/'
									? 'bg-blue1 '
									: 'bg-transparent'
							}`}
						>
							<WavesIcon className="text-inherit" />
							<p className="my-1 text-2xl text-inherit">Pools</p>
						</div>
					</Link>
					<Link href="/pods">
						<div
							className={`flex items-center gap-2 rounded-lg py-1.25 px-6 text-white transition-all duration-300 hover:cursor-pointer   ${
								router.pathname == '/pods'
									? 'bg-white text-black'
									: ''
							}`}
						>
							<ColorLensIcon className="text-inherit" />
							<p className="my-1 text-2xl text-inherit">NFTs</p>
						</div>
					</Link>
					<Link href="/account">
						<div
							className={`flex items-center gap-2 rounded-lg py-1.25 px-6 text-white transition-all duration-300 hover:cursor-pointer  ${
								router.pathname == '/account' ? 'bg-blue1' : ''
							}`}
						>
							<AccountCircleIcon className="text-inherit" />
							<p className="my-1 text-2xl text-inherit">
								My Account
							</p>
						</div>
					</Link>
				</div>
				<div className="hover:img:rotate-0 flex gap-6 flex-col items-start  text-white">
					<button className="flex items-center gap-2 hover-child-image:rotate-0">
						<img
							className="h-4 w-4 rotate-180 object-contain transition-all duration-300 "
							src="arrow.png"
							alt="arrow icon"
						/>
						<p className="text-2xl">Help</p>
					</button>
					<div className="flex w-full justify-between ">
						<BorderWrapper
							size={"w-[60px] h-[60px]"}
							className="text-black "
						>
							A
						</BorderWrapper>
						<BorderWrapper
							size={"w-[60px] h-[60px]"}
							className="text-black "
						>
							B
						</BorderWrapper>
						<BorderWrapper
							size={"w-[60px] h-[60px]"}
							className="text-black "
						>
							C
						</BorderWrapper>
					</div>
				</div>
			</div>
		</div>
	)
}

export default SideBar
