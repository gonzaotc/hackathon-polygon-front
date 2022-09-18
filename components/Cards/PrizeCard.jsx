import Link from 'next/link'
import React from 'react'
import Timer from '../Timer'
import PressableButton from '../Wrappers/PressableButton'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

const SwipeableImages = ({ images }) => {
	return (
		// <div className="h-full w-4/12 border-2 border-purple-500">
		// 	<Swiper
		// 		spaceBetween={0}
		// 		slidesPerView={1}
		// 		className="h-full w-full border-2 border-red-500"
		// 	>
		// 		{images.map((image, index) => (
		// 			<SwiperSlide key={index} className="h-full w-full ">
		<img
			src={images[0]}
			alt="prize image"
			className="h-full w-full object-cover"
		/>
		// 			</SwiperSlide>
		// 		))}
		// 	</Swiper>
		// </div>
	)
}

const PrizeCard = ({ prizeData }) => {
	return (
		<div className="flex h-[20rem] justify-center overflow-hidden rounded-xl bg-white shadow-lg transition-all hover:cursor-pointer hover:shadow-2xl">
			<SwipeableImages images={prizeData.images} />

			<div className="flex h-full flex-col justify-between gap-8  p-10 font-semibold 2xl:px-24 ">
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
