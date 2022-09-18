import React from 'react'

const PressableButton = ({ children, color = 'orange', className }) => {
	let colorClass
	switch (color) {
		case 'orange':
			colorClass = 'bg-orange1 hover:bg-orange2'
			break
		case 'blue':
			colorClass = 'bg-blue1 hover:bg-blue2'
			break
		case 'green':
			colorClass = 'bg-green1 hover:bg-green2'
			break
		default:
			break
	}
	return (
		<button
			className={`relative top-[3px] left-[3px] h-full w-full rounded-md bg-black ${className} `}
		>
			<div
				className={`relative bottom-[3px] right-[3px] h-full w-full rounded-md border-2 border-black ${colorClass} px-8 py-2 font-semibold shadow-lg transition-all hover:bottom-0 hover:right-0  hover:shadow-none lg:px-16`}
			>
				{children}
			</div>
		</button>
	)
}

export default PressableButton
