import React, { useState } from 'react'

import Image from 'next/image'
import Link from 'next/link'

import Layout from '../../components/Layout'
import Timer from '../../components/Timer'
import PressableButton from '../../components/Wrappers/PressableButton'
import ComboPrize from '../../components/DropdownCombos/ComboPrize'
import ComboNGO from '../../components/DropdownCombos/ComboNGO'
import ComboLegal from '../../components/DropdownCombos/ComboLegal'

const Index = () => {
	const [prizeDesc, setPrizeDesc] = useState(true)

	return (
		<Layout>
			<div className="mb-40">
				<div className="mb-4 flex flex-row text-white/80">
					<span className="mr-1.5 flex items-center">
						<Link href="/">
							<Image
								width="18"
								height="18"
								alt="homeIcon"
								src="/iconWhite-home.svg"
							/>
						</Link>
					</span>
					/
					<span className="mx-1.5 flex items-center">
						<Link href="/pool">Worldcup final</Link>
					</span>
				</div>
				<div className="flex w-full gap-8 ">
					<div className="flex w-1/2 flex-col gap-16 ">
						<div>
							<img
								src={'/poollarge.png'}
								className="w-full"
								alt=""
							/>
						</div>

						<ComboPrize />
						<ComboNGO />
						<ComboLegal />
					</div>

					<div className="flex w-1/2 flex-col  ">
						<div className="mb-6 border-b-2 border-white/50 pb-8">
							<h2 className="mb-1.5 mt-[-0.4rem] text-2xl font-medium text-white">
								Experience the world cup in Qatar
							</h2>
							<p className="font-semibold text-orange1">
								Helps Weforest
							</p>
							<ul className="my-4 ml-4 list-disc">
								<li className="leading-5 text-white">
									Travel to Qatar and attend the World Cup
									2022
								</li>
								<li className="leading-5 text-white">
									Spend a week at Qatar and have an unique
									experience
								</li>
								<li className="leading-5 text-white">
									Be part of the positive global impact by
									helping We forest
								</li>
							</ul>
							<p className="mb-4 leading-5 text-white">
								Win this once in a life time experience and be
								part of the world changing!
							</p>
							<Link href={'/deposit'}>
								<PressableButton className="h-[2.75rem]">
									JOIN POOL
								</PressableButton>
							</Link>
						</div>

						<div className="">
							<p className="mb-4 text-xl text-white">
								This pool ends in:
							</p>
							<Timer theme="light" />
							<div className="mt-6 flex flex-col gap-2">
								<div className="h-6/12 flex w-full gap-2">
									<span className="h-10 w-6/12 rounded-sm bg-red-500"></span>
									<span className="h-10 w-6/12 rounded-sm bg-blue-500"></span>
								</div>
								<div className="h-6/12 flex w-full gap-1">
									<span className="h-10 w-3/12 rounded-sm bg-purple-500"></span>
									<span className="h-10 w-3/12 rounded-sm bg-green-500"></span>
									<span className="h-10 w-3/12 rounded-sm bg-cyan-500"></span>
									<span className="h-10 w-3/12 rounded-sm bg-orange-500"></span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	)
}

export default Index
