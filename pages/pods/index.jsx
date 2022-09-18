import Link from 'next/link'

import Layout from '../../components/Layout'
import PressableButton from '../../components/Wrappers/PressableButton'

const nfts = () => {
	return (
		<Layout>
			<div className="bgImage flex h-[20rem] w-full flex-col gap-3 py-8 px-6">
				<h2 className="text-5xl font-semibold tracking-tighter">
					Proof of donation
				</h2>
				<p className="text-xl font-semibold">
					We love <span className="text-blue1">digital art</span> as
					much as you do!
				</p>
				<p className="front-light mt-2 text-lg">
					Every time you participate in a pool, you will get to claim
					your Proof of Donation (aka POD), a collectible NFT that
					states{' '}
					<span className="font-bold">
						when and to whom you have donated money
					</span>
				</p>

				<p className="text-lg">
					Each season has a different guest artist that creates
					beatiful PODs for you!
				</p>
				<div className="font-blue1 mr-10 self-end">
					<Link href="#">
						<p className="cursor-pointer text-blue1 underline underline-offset-4">
							Learn more
						</p>
					</Link>
				</div>
			</div>

			<div className="mb-36 mt-24">
				<h2 className="text-4xl font-semibold tracking-tight text-white">
					Coming soon
				</h2>

				<div className="flex flex-col">
					<div className="bgCircles mt-10 h-[420px]" />
					<PressableButton
						color="blue"
						className="mt-20 w-[40%] self-center"
					>
						ARTIST IFANA
					</PressableButton>
				</div>
			</div>
		</Layout>
	)
}

export default nfts

{
	/* <div className="mb-12 flex w-full flex-col justify-center gap-8 ">
				<div className="w-full rounded-2xl bg-[#ED652B] bg-gradient-to-r p-8 shadow-2xl">
					<p className="text-2xl text-white">
						We created the Proof of Donation NFTs taking the first
						step on the road to add transparency in donations. We
						record the full cycle of the payment from user to use in
						the PoDs metadata.
					</p>
					<p className="mt-8 text-2xl text-white">
						You can also collect our PoDs and have future benefits
						and badges from the campaigns you help fund!
					</p>
				</div>
				<div className="w-[60%] rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-2 shadow-2xl">
					<p className="flex text-2xl text-white">
						You have generated in donations:{' '}
						<span className="ml-4 text-3xl font-bold text-teal-300">
							$1450
						</span>
					</p>
					<hr className="my-4  text-white" />
					<p className="flex text-2xl text-white">
						Total donations made with Wooy:{' '}
						<span className="ml-4 text-3xl font-bold text-teal-300">
							$120,000,000
						</span>
					</p>
				</div>
				<div className="grid grid-cols-3 gap-7">
					<Card
						image="/donation1.png"
						foundationName={'Impact Market'}
						donatedAmount="100 Matic"
						title={
							'Win a ticket for the worldcup final x Impact market'
						}
						desc={'This will be the best prize of the world'}
						buttonlabel={'Claim PoD'}
						path="pods/1"
					/>

					<Card
						image="/donation2.png"
						foundationName={'Camillus House'}
						donatedAmount="100 Matic"
						title={'Win this Bored Ape x Camillus House'}
						desc={'This will be the best prize of the world'}
						buttonlabel={'Claim PoD'}
						path="nfts/2"
					/>

					<Card
						image="/donation3.png"
						foundationName={'Impact Market'}
						donatedAmount="100 Matic"
						title={
							'Travel with the Rolling Stones on Tour x Ukranian Cultural Foundation'
						}
						desc={'This will be the best prize of the world'}
						buttonlabel={'Claim PoD'}
						path="nfts/3"
					/>
				</div>
			</div> */
}
