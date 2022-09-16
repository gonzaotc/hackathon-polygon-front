const BorderWrapper = ({ children, size, className }) => {

	return (
		<div className="relative cursor-pointer borderWrapper">
            <div className={`relative flex border-[3px] border-black bg-white rounded-xl justify-center items-center ${size}`}>
                <div className={`${className}`}>{children}</div>
			    <div className={`z-[-1] absolute bg-transparent border-[3px] border-white left-[2px] top-[2px] rounded-xl ${size}`} />
            </div>

		</div>
	)
}

export default BorderWrapper
