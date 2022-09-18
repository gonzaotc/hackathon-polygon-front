import SideBar from './SideBar'
import Navbar from './Navbar'

const Layout = (props) => {
	return (
		<div className="container mx-auto min-h-screen px-20 2xl:px-0">
			<Navbar />
			<main className="mt-12 flex h-full justify-between gap-[11vw] 2xl:mt-16 ">
				<SideBar />
				<div className="w-full">{props.children}</div>
			</main>
		</div>
	)
}

export default Layout
