import Link from 'next/link'
import React from 'react'
import Timer from '../Timer'
import PressableButton from '../Wrappers/PressableButton'

const PrizeCard = ({ prizeData }) => {
	return (
		<div className="flex w-full overflow-hidden rounded-xl bg-white shadow-lg transition-all hover:cursor-pointer hover:shadow-2xl">
			<div className="">
				<img
					src={prizeData.image}
					alt="prize image"
					className="h-full"
				/>
			</div>

			<div className="flex h-full w-full flex-col justify-between gap-8 p-10 font-semibold 2xl:px-24 ">
				<div className="border-b-[2px] border-black pb-6 tracking-tighter">
					<h2 className="mb-0.25 text-2xl font-medium text-black">
						{prizeData.name}
					</h2>
					<p className="font-semibold text-orange1">
						{prizeData.company}
					</p>
				</div>
				<Timer className="2xl:mt-4" />
				<Link href={'/pool'}>
					<PressableButton color="orange" className="2xl:mt-8">
						JOIN POOL
					</PressableButton>
				</Link>
			</div>
		</div>
	)
}

export default PrizeCard
