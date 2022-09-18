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
		photo: '/pool2.jpeg',
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
	const [showType, setShowType] = useState('pools')

	const switchHandler = (option) => {
		setShowType(option)
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
					<div className="my-10 flex w-fit flex-row rounded-lg border ">
						<div
							className={` box-content rounded-lg bg-transparent py-0.5 outline outline-transparent transition-all duration-400 ${
								showType == 'pools' &&
								'!bg-blue1 outline-[1.5px] !outline-white/70'
							}`}
						>
							<button
								onClick={() => {
									switchHandler('pools')
								}}
								className="px-5 py-0.75 font-semibold"
							>
								Pools
							</button>
						</div>
						<div
							className={` box-content rounded-lg bg-transparent py-0.5 outline outline-transparent transition-all duration-400 ${
								showType == 'pods' &&
								'!bg-blue1 outline-[1.5px] !outline-white/70'
							}`}
						>
							<button
								onClick={() => {
									switchHandler('pods')
								}}
								className="px-5 py-0.75 font-semibold"
							>
								PODs
							</button>
						</div>
						<div
							className={` box-content rounded-lg bg-transparent py-0.5 outline outline-transparent transition-all duration-400 ${
								showType == 'info' &&
								'!bg-blue1 outline-[1.5px] !outline-white/70'
							}`}
						>
							<button
								onClick={() => {
									switchHandler('info')
								}}
								className="px-5 py-0.75 font-semibold"
							>
								Personal info
							</button>
						</div>
					</div>

					{showType == 'pods' && (
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

				{showType == 'pools' && (
					<>
						<div className="flex flex-col gap-5">
							<h3 className="mb-2 text-lg font-semibold">
								ACCOUNT OVERVIEW
							</h3>
							<div className="rounded-2xl bg-blue1 p-10">
								<p className="mb-1 text-xl font-semibold tracking-tight">
									DEPOSITS
								</p>
								<h2 className=" text-5xl font-bold ">
									31,066.08 USDC
								</h2>
							</div>
						</div>

						<div className="mt-20 flex flex-col gap-3">
							<h3 className="mb-4 text-lg font-semibold">
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

				{showType == 'pods' && (
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

				{showType == 'info' && (
					<div className="flex flex-col">
						<p className="mb-6 text-xl">
							Don&apos;t worry,{' '}
							<span className="font-bold">
								we value anonymity
							</span>{' '}
							as much as you do!
						</p>
						<p className="text-xl">
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

							<div className="flex items-center gap-2.5">
								<input
									type="checkbox"
									id="checkbox"
									className="relative mt-[0.25rem] h-[0.95rem] w-[0.95rem] accent-black invert"
								/>
								<p className="text-white/70">
									Join our mailing list to receive news on
									awesome prizes
								</p>
							</div>

							<PressableButton
								color="blue"
								className="h-fit w-[30%] self-end"
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
