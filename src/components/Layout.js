import React from 'react'
import "../styles/base.scss"
import NavBar from "./NavBar";
import Footer from "./Footer";

const Layout = (props) => {
	return (
		<div className="layout">
			<NavBar isHome={props.isHome} pageTitle={props.pageTitle} />
			{ props.children }
			<Footer isHome={props.isHome} />
		</div>
	)
}

export default Layout
