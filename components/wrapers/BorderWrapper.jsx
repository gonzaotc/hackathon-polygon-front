const borderWrapper = ({ children, size, className }) => {

	return (
		<div className="relative cursor-pointer">
            <div className={`z-20 flex border-[2px] border-black bg-white rounded-xl justify-center items-center ${size}`}>
                <p className={`${className}`}>{children}</p>
			    <div className={`z-10 absolute bg-transparent border-[3px] border-white left-[5px] top-[5px] rounded-xl ${size}`} />
            </div>

		</div>
	)
}

export default borderWrapper
