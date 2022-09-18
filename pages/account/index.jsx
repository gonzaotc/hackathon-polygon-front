import { useState } from 'react'

import Layout from '../../components/Layout'
import PoolCard from '../../components/Cards/PoolCard'
import BorderWrapper from '../../components/Wrappers/BorderWrapper'
import PressableButton from '../../components/Wrappers/PressableButton'

const pools = [
	{
		title: 'Experience the World Cup in Qatar',
		photo: '/pool1.png',
		isActive: true,
		enddate: '',
		isWinner: false,
	},
	{
		title: 'Viví un recital único con Javier Calamaro',
		photo: '/pool2.png',
		isActive: false,
		enddate: '09/06',
		isWinner: true,
	},
]

const badges = [
	{ image: '/pool1.png', data: {} },
	{ image: '/pool1.png', data: {} },
	{ image: '/pool1.png', data: {} },
	{ image: '/pool1.png', data: {} },
	{ image: '/pool1.png', data: {} },
	{ image: '/pool1.png', data: {} },
]

const Index = () => {
	const [showPools, setShowPools] = useState(true)
	const [showPods, setShowPods] = useState(false)
	const [showInfo, setShowInfo] = useState(false)

	const switchHandler = (option) => {
		switch (option) {
			case 'pools':
				setShowPools(true)
				setShowPods(false)
				setShowInfo(false)
				break
			case 'pods':
				setShowPools(false)
				setShowPods(true)
				setShowInfo(false)
				break
			case 'info':
				setShowPools(false)
				setShowPods(false)
				setShowInfo(true)
				break
			default:
				break
		}
	}

	const formHandler = (event) => {
		event.preventDefault()

		console.log(event.target.name.value)

		console.log(event.target.email.value)

		console.log(event.target.checkbox.checked)
	}

	return (
		<Layout>
			<div className="mb-20 flex min-h-full flex-col text-white">
				<h2 className="title">My account</h2>

				<div className="flex flex-row items-center justify-between">
					<div className="my-10 flex w-fit flex-row rounded-lg border">
						<div
							className={`rounded-lg ${
								showPools && 'border bg-blue1'
							}`}
						>
							<button
								onClick={() => {
									switchHandler('pools')
								}}
								className="px-5 py-1"
							>
								Pools
							</button>
						</div>
						<div
							className={`rounded-lg ${
								showPods && 'border bg-blue1'
							}`}
						>
							<button
								onClick={() => {
									switchHandler('pods')
								}}
								className="px-5 py-1"
							>
								PODs
							</button>
						</div>
						<div
							className={`rounded-lg ${
								showInfo && 'border bg-blue1'
							}`}
						>
							<button
								onClick={() => {
									switchHandler('info')
								}}
								className="px-5 py-1"
							>
								Personal info
							</button>
						</div>
					</div>

					{showPods && (
						<BorderWrapper
							className={'h-fit w-fit font-bold'}
							rounded="rounded-lg"
							position="bottom-1.25 right-1.25"
							contraPosition="top-1.25 left-1.25"
							outline="outline outline-[3px] outline-black"
						>
							<button className="flex h-full w-full flex-row items-center justify-center gap-2 rounded-lg bg-white py-2 px-4">
								<img
									className="w-4"
									src="/shareIcon.svg"
									alt="share icon"
								/>
								<p className=" text-sm tracking-tight text-black">
									SHARE MY COLLECTION
								</p>
							</button>
						</BorderWrapper>
					)}
				</div>

				{showPools && (
					<>
						<div className="flex flex-col gap-5">
							<h3 className="text-lg font-normal">
								ACCOUNT OVERVIEW
							</h3>
							<div className="rounded-lg bg-blue1 p-12">
								<p className="text-2xl tracking-tight">
									DEPOSITS
								</p>
								<h2 className="mt-2 text-5xl font-bold ">
									31,066.08 USDC
								</h2>
							</div>
						</div>

						<div className="mt-20 flex flex-col gap-3">
							<h3 className="mb-2 text-lg font-normal">
								POOLS I&apos;VE JOINED
							</h3>

							{pools.map((pool, index) => {
								return (
									<PoolCard
										key={index}
										title={pool.title}
										photo={pool.photo}
										isActive={pool.isActive}
										enddate={pool.enddate}
										isWinner={pool.isWinner}
									/>
								)
							})}
						</div>
					</>
				)}

				{showPods && (
					<div className="mt-5 mb-20 flex flex-col">
						<h3 className="mb-16 text-3xl font-semibold tracking-tight">
							My collection
						</h3>

						<div className="grid grid-cols-4 gap-10">
							{badges.map((badge, index) => {
								return (
									<div key={index} className="rounded-full">
										<img
											src={badge.image}
											className="rounded-full border-[2px] border-white bg-cover bg-center bg-no-repeat"
											alt="badge photo"
										/>
									</div>
								)
							})}
						</div>
					</div>
				)}

				{showInfo && (
					<div className="flex flex-col">
						<p className="text-xl">
							Don&apos;t worry,{' '}
							<span className="font-bold">
								we value anonymity
							</span>{' '}
							as much as you do!
						</p>
						<p className="mt-10 text-xl">
							We don&apos;t need your personal info, but iw would
							be much easier to contact you by email{' '}
							<span className="font-bold">
								in case you win a prize.
							</span>
						</p>

						<form
							onSubmit={formHandler}
							className="mt-20 flex flex-col gap-12"
						>
							<div className="flex flex-row gap-10">
								<input
									type="text"
									id="name"
									className="w-1/2 rounded-sm bg-white py-2 px-3 text-black"
									placeholder="Alias"
								/>
								<input
									type="email"
									id="email"
									className="w-1/2 rounded-sm bg-white py-2 px-3 text-black"
									placeholder="Email"
								/>
							</div>

							<div className="flex flex-row items-center gap-3">
								<input type="checkbox" id="checkbox" />
								<p className="text-gray-400">
									Join our mailing list to receive news on
									awesome prizes
								</p>
							</div>

							<PressableButton
								color="blue"
								className="h-fit w-[40%] self-end"
								padding="py-2 px-7"
							>
								<p className="font-semibold text-white">SAVE</p>
							</PressableButton>
						</form>
					</div>
				)}
			</div>
		</Layout>
	)
}

export default Index
