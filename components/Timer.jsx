import React from 'react'

const Timer = ({ time, className }) => {
	return (
		<div
			className={`flex w-full items-center justify-center gap-2  ${className}`}
		>
			<div className="flex flex-col items-center justify-center">
				<div className="flex gap-1.5 text-2xl">
					<p className="rounded bg-black/6.25 py-1.5 px-3 font-bold">
						0
					</p>
					<p className="rounded bg-black/6.25 py-1.5 px-3 font-bold">
						3
					</p>
				</div>
				<p className="text-sm font-bold text-black">DAY</p>
			</div>
			<div className="relative bottom-[0.75rem]">
				<span>:</span>
			</div>
			<div className="flex flex-col items-center justify-center">
				<div className="flex gap-1.5 text-2xl">
					<p className="rounded bg-black/6.25 py-1.5 px-3 font-bold">
						1
					</p>
					<p className="rounded bg-black/6.25 py-1.5 px-3 font-bold">
						2
					</p>
				</div>
				<p className="text-sm font-bold text-black">HR</p>
			</div>
			<div className="relative bottom-[0.75rem]">
				<span>:</span>
			</div>
			<div className="flex flex-col items-center justify-center">
				<div className="flex gap-1.5 text-2xl">
					<p className="rounded bg-black/6.25 py-1.5 px-3 font-bold">
						0
					</p>
					<p className="rounded bg-black/6.25 py-1.5 px-3 font-bold">
						9
					</p>
				</div>
				<p className="text-sm font-bold text-black">MIN</p>
			</div>
			<div className="relative bottom-[0.75rem]">
				<span>:</span>
			</div>
			<div className="flex flex-col items-center justify-center">
				<div className="flex gap-1.5 text-2xl">
					<p className="rounded bg-black/6.25 py-1.5 px-3 font-bold">
						0
					</p>
					<p className="rounded bg-black/6.25 py-1.5 px-3 font-bold">
						4
					</p>
				</div>
				<p className="text-sm font-bold text-black">SEC</p>
			</div>
		</div>
	)
}

export default Timer
