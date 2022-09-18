import Timer from '../Timer'
import PressableButton from '../Wrappers/PressableButton'

const PoolCard = ({ title, photo, isActive, enddate, isWinner }) => {
	return (
		<div className="flex h-[10rem] w-full flex-row gap-2">
			<div className=" w-[14rem]">
				<img
					className="h-full w-full rounded-xl bg-no-repeat object-cover	"
					alt="pool photo"
					src={photo}
				/>
			</div>

			<div className="flex w-full flex-row items-center justify-between rounded-2xl bg-white p-5">
				{isActive ? (
					<div className="flex w-[63%] flex-col gap-4 self-start ">
						<div className="border-b-[1.5px] border-black pb-2">
							<p className="font-bold tracking-tight text-orange1">
								ACTIVE
							</p>
							<h2 className="text-lg font-bold tracking-tight text-black">
								{title}
							</h2>
						</div>

						<div className="">
							<Timer size="small" className="w-full text-black" />
						</div>
					</div>
				) : (
					<div className="flex w-[63%] flex-col self-start border-b-[1.5px] border-black pb-2">
						<p className="font-semibold tracking-tight text-gray-500">
							CLOSED ON: {enddate}
						</p>
						<h2 className="text-lg font-bold tracking-tight text-black">
							{title}
						</h2>
					</div>
				)}

				<div className="flex w-[30%] flex-col gap-5">
					{isActive ? (
						<>
							<PressableButton
								color="orange"
								className="h-fit w-full"
								padding="py-2 px-7"
								rounded="rounded-lg"
							>
								<p className="text-sm tracking-tight text-black">
									ADD MORE
								</p>
							</PressableButton>

							<button>
								<p className="text-center text-sm font-bold tracking-tight text-orange1 underline">
									WITHDRAW
								</p>
							</button>
						</>
					) : (
						<>
							{isWinner ? (
								<>
									<PressableButton
										color="blue"
										className="h-fit w-full"
										padding="py-2 px-7"
										rounded="rounded-lg"
									>
										<p className="text-sm tracking-tight text-white">
											CLAIM POD
										</p>
									</PressableButton>{' '}
									<PressableButton
										color="green"
										className="h-fit w-full"
										padding="py-2 px-7"
										rounded="rounded-lg"
									>
										<p className="text-sm tracking-tight text-black">
											CLAIM PRIZE!!!
										</p>
									</PressableButton>
								</>
							) : (
								<></>
							)}
						</>
					)}
				</div>
			</div>
		</div>
	)
}

export default PoolCard
