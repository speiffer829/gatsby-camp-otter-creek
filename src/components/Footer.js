import React from 'react'
import { Link, graphql, useStaticQuery } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const Footer = ( props ) => {

	const data = useStaticQuery(
		graphql`query{
			allWp {
				nodes {
					baseSettings {
						options {
							generalInformation {
								address1
								address2
								city
								directionsLink
								email
								fax
								fieldGroupName
								name
								phone
								state
								zip
							}
						}
						socialLinks {
							facebookLink
							fieldGroupName
							youtubeLink
						}
					}
				}
			}
		}`
	)

	const settings = data.allWp.nodes[0].baseSettings.options.generalInformation[0]

	
	return (
		<div>
			<footer className={`colophon ${ props.isHome ? '':'trees' }`} role="contentinfo">
				<div className="wrap">
					<div className="footer-grid">
						
						<div className="footer-logo">
							<Link to="/">
								<StaticImage src="../images/otter-creek-footer-logo.png" alt="Logo" placeholder="tracedSVG" />
							</Link>
						</div>

						<div className="footer-info-box">
							<h3>Camp Address</h3>

							<div className="address-bar">
								<p className="address">{ settings.address1 } </p>
								<p className="address">{ settings.city } { settings.state } {settings.zip} </p>
							</div>


							<a href={`tel:${settings.phone}`} className="phone-num">{ settings.phone }</a>

							<div className="sub-box">
								<h4>Directors</h4>
								<p>John &amp; Lori Keohane</p>
							</div>

							<div className="sub-box">
								<h4>Managers On Duty</h4>
								<p>Scott &amp; Mandy Welch</p>
							</div>

						</div>

						<div className="store-hours-box">
							<h3 className="stay">Camp Office Open Daily <span className="little-h3">(April - October)</span></h3>

							<a href="#" className="click-for-hours" data-status="closed">Click Here For Store Hours</a>


							<div className="hours-row">
								<div className="sub-box">
									<h4>Spring Store hours:</h4>
									<p>Fri/Sat (Noon-8pm), Sun (9am-2pm)</p>
								</div>
								<div className="sub-box">
									<h4>Summer Store Hours:</h4>
									<p>Fri (Noon-9pm), Sat (10am-9pm), Sun (9am-2pm)</p>
								</div>
								<div className="sub-box">
									<h4>Fall Store Hours:</h4>
									<p>Fri (Noon-8pm), Sat (10am-8pm), Sun (9am-2pm)</p>
								</div>
								<div className="sub-box">
									<h4>Winter Store Hours:</h4>
									<p>Reservations and inquiries can be made by phone or email.</p>
								</div>
							</div>

							<div className="hours-box">

							</div>
						</div>

						<div className="footer-social-links">
							<a href={data.allWp.nodes[0].baseSettings.socialLinks.facebookLink} className="social-link" target="_blank"><StaticImage src="../images/facebook.png" placeholder="tracedSVG" alt="Facebook" /></a>

							<a href={data.allWp.nodes[0].baseSettings.socialLinks.facebookLink} className="social-link" target="_blank"><StaticImage src="../images/youtube.png" placeholder="tracedSVG" alt="Facebook" /></a>
						</div>

						<div className="footer-copywright">
							<p>No parts of this website may be duplicated without the express written permission of Pequea Creek Campground. Any information shared by our clients is kept private unless they have given permission to be shared (testimonials, images, etc).</p>

							<p>&copy;{ new Date().getFullYear() } { settings.name }  All Rights Reserved.</p>
						</div>
					</div>

				</div>
			</footer>
		</div>
	)
}

export default Footer
