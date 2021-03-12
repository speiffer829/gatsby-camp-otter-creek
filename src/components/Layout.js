import React from 'react'
import "../styles/base.scss"
import NavBar from "./NavBar";

const Layout = (props) => {
	return (
		<div className="layout">
			<NavBar isHome={props.isHome} />
			{ props.children }
		</div>
	)
}

export default Layout
