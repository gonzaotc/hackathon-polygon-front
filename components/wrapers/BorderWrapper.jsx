const BorderWrapper = ({ children, width, height, className }) => {
	return (
		<div className="relative">
			<div
				className={`z-20 flex w-${width} h-${height} items-center justify-center rounded-xl border-[2px] border-black bg-white`}
			>
				<div className={`${className}`}>{children}</div>
				<div
					className={`absolute z-10 border-[3px] border-white bg-transparent w-${width} h-${height} left-[0.2rem] top-[0.2rem] rounded-xl`}
				/>
			</div>
		</div>
	)
}

export default BorderWrapper
