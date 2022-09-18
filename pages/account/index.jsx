import { useState } from 'react'
import Link from 'next/link'

import Layout from '../../components/Layout'

const Index = () => {
	const [showPools, setShowPools] = useState(false)
	const [showPods, setShowPods] = useState(false)
	const [showInfo, setShowInfo] = useState(false)

	return (
		<Layout>
			<div className="flex flex-col gap-10">
				<h2 className="title">My account</h2>
				<div className="flex w-fit flex-row rounded-lg border text-white">
					<div className={`px-5 py-1`}>
						<button>Pools</button>
					</div>
					<div className={`px-5 py-1`}>
						<button>PODs</button>
					</div>
					<div className={`px-5 py-1`}>
						<button>Personal info</button>
					</div>
				</div>
			</div>
		</Layout>
	)
}

{
	/* <div className="flex w-full flex-col gap-4">
				<h2 className="text-5xl font-semibold text-white ">
					My account
				</h2>
				<p className="text-xl text-white">ACCOUNT OVERVIEW</p>
				<div className="rounded-md bg-[#ED652B] p-12">
					<p className="text-2xl text-black">DEPOSITS</p>
					<h2 className="mt-2 text-5xl font-bold text-black">
						31,077.86 USDC
					</h2>
				</div>
				<p className="mt-8 text-3xl text-white">
					Pools I&apos;ve joined
				</p>
				<div className="flex gap-4">
					<img
						src={'/pool1.png'}
						className="h-40 rounded-xl"
						alt=""
					/>
					<div className="flex gap-20 rounded-xl bg-white px-8 py-4">
						<div>
							<p className="text-xl text-[#ED652B]">ACTIVE</p>
							<p className="text-2xl">
								Experience the World Cup 2022
							</p>
							<hr className="divide-gray my-4 divide-y" />
						</div>
						<div className="flex flex-col items-center justify-center">
							<button className="mt-4 rounded-md border-2 border-black px-8 py-2 transition-all hover:shadow-2xl lg:px-16">
								ADD MORE
							</button>
							<Link href={'/withdraw'}>
								<button className="mt-4 rounded-md px-8 py-2 lg:px-16">
									<p className="text-[#ED652B] ">Withdraw</p>
								</button>
							</Link>
						</div>
					</div>
				</div>
			</div> */
}

export default Index
