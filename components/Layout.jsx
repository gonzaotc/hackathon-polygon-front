import React from 'react'
import SideBar from './SideBar'
import Navbar from './Navbar'

const Layout = (props) => {
	return (
		<div className="container mx-auto min-h-screen px-20 2xl:px-0">
			<Navbar />
			<main className="mt-12 2xl:mt-16 flex h-full justify-between border-2 border-blue-500">
				<SideBar />
				<div className="w-full border-2 border-red-500">
					{props.children}
				</div>
			</main>
		</div>
	)
}

export default Layout
