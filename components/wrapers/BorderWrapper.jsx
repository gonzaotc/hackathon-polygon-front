const borderWrapper = ({ children, size, className }) => {
	return (
		<div className="relative cursor-pointer">
			<div
				className={`z-20 flex items-center justify-center rounded-xl border-[2px] border-black bg-white ${size}`}
			>
				<p className={`${className}`}>{children}</p>
				<div
					className={`absolute left-[5px] top-[5px] z-10 rounded-xl border-[3px] border-white bg-transparent ${size}`}
				/>
			</div>
		</div>
	)
}

export default borderWrapper
