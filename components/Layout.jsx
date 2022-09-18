import SideBar from './SideBar'
import Navbar from './Navbar'

const Layout = (props) => {
	return (
		<div className="min-w-screen bgGradient min-h-screen">
			<div className="container mx-auto min-h-screen px-20 2xl:px-10">
				<Navbar />
				<main className="mt-12 flex h-full w-full justify-between 2xl:mt-16">
					<SideBar />
					<div className="w-8/12">{props.children}</div>
				</main>
			</div>
		</div>
	)
}
{
	/* <div className="min-w-screen bgGradient min-h-screen">
			<div className="container mx-auto px-20 2xl:px-0">
				<Navbar />
				<main className="mt-12 flex h-full justify-between gap-[11vw] 2xl:mt-16 ">
					<SideBar />
					<div className="w-8/12">{props.children}</div>
				</main>
			</div>
		</div> */
}

export default Layout
