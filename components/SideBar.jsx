import React from 'react'
import Link from 'next/link'

//---icons
import WavesIcon from '@mui/icons-material/Waves'
import ColorLensIcon from '@mui/icons-material/ColorLens'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import { useRouter } from 'next/router'

const SideBar = () => {
	const router = useRouter()

	// 12 => 3rem, 16 => 4rem

	return (
		<div className="flex w-[17rem] border-2 border-yellow-500">
			<div className="fixed flex h-[calc(100vh-3rem-150px)] flex-col justify-between border-2 border-purple-500 2xl:h-[calc(100vh-4rem-150px)]">
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
				<div className="flex flex-col items-start border-2 text-white ">
					<button className="flex gap-2 border-2">
						<img className="w-6 h-6" src="arrow.png" alt="arrow icon" /> 

					</button>
					<div className="flex w-full justify-between border-2 border-red-500">
						<div className="rounded-lg bg-white py-4 px-6 font-semibold text-black">
							A
						</div>
						<div className="rounded-lg bg-white py-4 px-6 font-semibold text-black">
							B
						</div>
						<div className="rounded-lg bg-white py-4 px-6 font-semibold text-black">
							C
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default SideBar
