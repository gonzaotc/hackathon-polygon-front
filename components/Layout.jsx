import React from 'react'
import SideBar from './SideBar'
import Navbar from './Navbar'

const Layout = (props) => {
	return (
		<div className="container mx-auto min-h-screen px-20 2xl:px-10">
			<Navbar />
			<main className="mt-12 w-full flex h-full justify-between 2xl:mt-16">
				<SideBar />
				<div className="w-8/12">
					{props.children}
				</div>
			</main>
		</div>
	)
}

export default Layout
