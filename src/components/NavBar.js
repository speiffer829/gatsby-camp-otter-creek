import React from 'react'
import { Link, useStaticQuery, graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import Helmet from "react-helmet";
import { useState } from 'react'


const NavBar = (props) => {

	const [menu, setMenu] = useState(false)

	const data = useStaticQuery(graphql`
		query{
			allWp {
				nodes {
					baseSettings {
						gridNavACF {
							smallBlocks {
								text
								link {
									url
								}
							}
						}
					}
				}
			}
		}
	`)
	
	return (
<header className="site-header" role="banner">
	<Helmet title={`${props.pageTitle ? `${props.pageTitle} | ` : ''}Otter Creek Campground`} />



	<div className="top-row">
		<div className="row">
			<div className="ghost-image">
				<Link to="/"><StaticImage placeholder="blurred" src="../images/otter-creek-home-link2.png" alt="Logo" /></Link>
			</div>
			<div className="big-name">
				<Link to="/"><StaticImage placeholder="blurred" src="../images/otter-creek-dt-logo.png" alt="" className="big-name-img desk-show" /></Link>
			</div>
			<div className="desk-nav">
				<div className="desk-nav-row">
					<Link to="/directions" className="desk-nav-link mobile-move">
						<StaticImage placeholder="blurred" src="../images/directions-icon.png" alt="directions" />
						Directions
					</Link>
					<Link to="/boat-ramp" className="desk-nav-link mobile-move">
						<StaticImage placeholder="blurred" src="../images/boat-launch-icon.png" alt="Boat Ramp" />
						Boat Ramp
					</Link>
					<Link to="/campground-map/" className="desk-nav-link order order-3">
						<StaticImage placeholder="blurred" src="../images/camp-map-icon.png" alt="Map" />
						<span className="desk-hide">Campground </span>Map
					</Link>
					<Link to="/make-a-reservation" className="desk-nav-link order-1">
						<StaticImage placeholder="blurred" src="../images/reservation-icon.png" alt="Reservations" />
						Reservations<span className="desk-hide"> inquiry</span>
					</Link>
					<button 
						onClick={ e=>{ e.preventDefault(); setMenu(true) } } 
						className={`desk-nav-link menu-btn order-2 ${props.isHome ? 'hide-on-home' : ''}`}>
							<StaticImage placeholder="tracedSVG" src="../images/desk-open.png" alt="Menu" className="desk-show" />
							<StaticImage placeholder="tracedSVG" src="../images/open.png" alt="Menu" className="desk-hide" />
							<span className="desk-show">Menu</span>
						</button>
				</div>
			</div>
		</div>
	</div>


	<div onClick={ e => { e.preventDefault(); setMenu(false) } } className={`overlay ${ menu===true ? `active` : `` }`} />


	<div className={`nav ${menu===true ? `active` : ``}`}>
		<div className="top-nav-row">
			<Link to="/make-a-reservation" className="top-nav-row-link">
				<p>Reservation inquiry</p>
			</Link>
			<button onClick={e => { e.preventDefault(); setMenu(false) }} className="top-nav-row-link close-btn">
				<StaticImage placeholder="blurred" src="../images/close.png" alt="close" />
				<p>Close</p>
			</button>
			<Link to="/campground-map" className="top-nav-row-link">
				<p>Campground Map</p>
			</Link>
		</div>

		<div className="brown-trees">
			<nav>
				<ul>
					<li>
						<Link to="/" className="nav-link">Home</Link>
					</li>
					<li>
						<Link to="/boat-ramp" className="nav-link">Boat Ramp</Link>
					</li>

					{data.allWp.nodes[0].baseSettings.gridNavACF.smallBlocks.map((block, index) => (
							<li key={index}>
								<Link to={ block.link.url } className="nav-link" >{ block.text }</Link>
							</li>
					))}

						

				</ul>
			</nav>
		</div>

	</div>





	</header>
	)
}


export default NavBar
