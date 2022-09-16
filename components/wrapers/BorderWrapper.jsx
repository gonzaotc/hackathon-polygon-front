const borderWrapper = ({ children, width, height, className }) => {
	return (
		<div className="relative">
            <div className={`z-20 flex w-${width} h-${height} border-[2px] border-black bg-white rounded-xl justify-center items-center`}>
                <p className={`${className}`}>{children}</p>
			    <div className={`z-10 absolute bg-transparent border-[3px] border-white w-${width} h-${height} left-[0.2rem] top-[0.2rem] rounded-xl`} />
            </div>

		</div>
	)
}

export default borderWrapper
