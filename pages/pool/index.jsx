import React, { useState } from 'react'
import Layout from '../../components/Layout'
import Link from 'next/link'
import Timer from '../../components/Timer'
import PressableButton from '../../components/Wrappers/PressableButton'

const pool = () => {
	const [prizeDesc, setPrizeDesc] = useState(true)
	const [dropdown, setDropwdown] = useState({ open: false, number: null })

	const handleDropdownInteraction = (open, number) => {
		if (number === dropdown.number){
			setDropwdown({ false, null})
		}
		setDropwdown({ open, number })
	}

	return (
		<Layout>
			<div className="mb-16">
				<div className="mb-4 text-white">🏠/ Worldcup final</div>
				<div className="flex w-full gap-8 border-2 border-red-500">
					<div className="flex w-1/2 flex-col gap-16 border-2 border-green-500">
						<div>
							<img
								src={'/poollarge.png'}
								className="w-full"
								alt=""
							/>
						</div>

						<div className="border-2 border-purple-500">
							<h3 className="mb-8 text-2xl font-semibold text-orange1">
								Prize Information
							</h3>
							<div className="border-2 border-red-500">
								<div className="flex w-full items-center justify-between text-white border-b-[1px] text-lg border-white pb-2 cursor-pointer" onClick={() => { handleDropdownInteraction(true, 0)}}>
									<h3>What to expect?</h3>
									<div className="text-4xl text-white font-thin mr-2">+</div>
								</div>
								<div className="flex w-full items-center justify-between text-white border-b-[1px] text-lg border-white pb-2 cursor-pointer" onClick={() => { handleDropdownInteraction(true, 1)}}>
									<h3>What to expect?</h3>
									<div className="text-4xl text-white font-thin mr-2">+</div>
								</div>
								<div className="flex w-full items-center justify-between text-white border-b-[1px] text-lg border-white pb-2 cursor-pointer" onClick={() => { handleDropdownInteraction(true, 2)}}>
									<h3>What to expect?</h3>
									<div className="text-4xl text-white font-thin mr-2">+</div>
								</div>
							</div>
						</div>
					</div>

					<div className="flex w-1/2 flex-col  border-2 border-purple-500">
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
				{/* <div className="my-8 flex w-40 items-center justify-center gap-6 rounded-2xl bg-white">
					<button
						className={`flex items-center justify-center rounded-2xl p-3 ${
							prizeDesc ? 'bg-[#ED652B]' : ''
						}`}
						onClick={() => setPrizeDesc(true)}
					>
						Prize
					</button>
					<button
						className={`flex items-center justify-center rounded-2xl p-3 ${
							prizeDesc ? '' : 'bg-[#ED652B]'
						}`}
						onClick={() => setPrizeDesc(false)}
					>
						NGO
					</button>
				</div> */}
				{/* <div className="flex flex-col">
					{prizeDesc ? (
						<>
							<h3 className="text-2xl text-[#ED652B]">
								What to expect ?
							</h3>
							<p className="py-4 text-white">
								<b>Ready to be parte of the most</b> prestigious
								tournament in the world?
							</p>
							<p className="text-white">
								Taking place quadrennially, the FIFA Men's World
								Cup T sees 32 nations compete against each other
								for the prize. With continental qualification
								pathways leading to an exciting finals event, it
								brings fans together around the passion and love
								for the game. The best part? you could be one of
								them! On top of this, you will have the
								opportunity to live a 7 day-long experience at
								Qatar! Seize the trip with Desert Safari
								excursion with Camel Ride, Sand Boarding &
								Inland Sea Tour in Doha! You will be picked up
								from the 5 star hotel in a cozy 4WD vehicle for
								the Doha Desert Safari. Our guide will drive you
								towards the desert terrain of Qatar. You will be
								having an incredible photo-stop at the coastal
								route adjacent to the Sealine Beach. Once you
								have enjoyed the photo session, hop onto a camel
								for experiencing a mesmerizing ride. The guide
								will adjust the tyre pressure in order to make
								your off-roading smooth. Feel the thrills of a
								rollercoaster ride as the vehicle conquers the
								huge sand dunes while dune bashing. Try out
								sandboarding by gliding across the sea of sand
								with a surfboard provided. After the desert
								adventures, move on to the scenic region of the
								Inland Sea at Khor Al Adaid. Have a photo-stop
								here at the shores of the Inland Sea and enjoy
								the breathtaking sights. You can see the border
								region of Saudi Arabia and behold the rare
								sceneries of land and sea. You will then be
								dropped off at the hotel. Sound crazy, right?
								And the craziest part: No donation or payment is
								necessary to enter or win this sweepstakes. Only
								by the stake of your tokens!
							</p>
						</>
					) : (
						<>
							<h3 className="pb-4 text-2xl text-[#ED652B]">
								Who you'll help ?
							</h3>
							<p className="text-white">
								This experience raises funds for We forest, a
								non-profit established in 2010. WeForest
								develops holistic and multi- stakeholder
								reforestation projects through a Forest and
								Landscape Restoration approach. Their vision: a
								world where communities and nature sustainably
								thrive to gether to stop global warming "in our
								lifetime'. Their mission: focused on conserving
								and restoring the ecological integrity of forest
								landscapes with local communities to deliver
								lasting solutions for climate, nature, and
								people. Today they have over 40 000ha
								(400million m2) and 47 million trees under
								restoration across 3 continents; and aim by 2025
								to reach a total of 100,000 ha (100 million
								trees). WeForest, backed by a scientific
								network, is growing a movement of responsible
								companies, large and small, that are committed
								to having a positive impact for people and our
								planet. WeForest works with communities, local
								organizations and NGOs to develop scalable
								reforestation projects, demonstrating that
								restoring our degraded landscapes is possible
								"if we all work together"
							</p>
						</>
					)}
				</div> */}
			</div>
		</Layout>
	)
}

export default pool
