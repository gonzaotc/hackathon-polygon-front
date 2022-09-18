const BorderWrapper = ({
	children,
	className,
	rounded = 'rounded-xl',
	outline,
	position,
	contraPosition,
}) => {
	return (
		<div
			className={`relative w-full border-[1.5px] border-white ${contraPosition} ${rounded} ${className} `}
		>
			<div
				className={`relative overflow-hidden ${position} ${rounded}  h-full w-full ${
					outline ? outline : ''
				} `}
			>
				{children}
			</div>
		</div>
	)
}

export default BorderWrapper
