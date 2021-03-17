import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'

const Sidebar = () => {

const sidedata = useStaticQuery(graphql`
	query{
		allWp {
			nodes {
				baseSettings {
					gridNavACF {
						smallBlocks {
							text
							showOnSidebar
							link {
								url
							}
							image {
								localFile {
									url
								}
							}
						}
					}
				}
			}
		}
	}
`)

const submitForm = (e) => {
	e.preventDefault();
	console.log('submitted');
}

	
	return (
		<aside className="sidebar">

			<div class="gold-block">
    <div class="wrap smaller-wrap otter-bg">
  		<div class="arrow-header-wrap">
  			<h2>Sign-Up For Our Newsletter!</h2>
  		</div>

  		<p>Stay up-to-date on all the happenings and events throughout the season by signing up for our newsletter today.  We promise not to send you anything you're not expecting!</p>

			<div className="newsletter-contain">

					<div id="gform_wrapper_4" className="gf_browser_gecko gform_wrapper">
						<form id="gform_4" onSubmit={submitForm}>
							<div className="gform_body">
								<ul id="gform_fields_4" className="gform_fields top_label form_sublabel_below description_belowl">
									<li className="newsletter-input">
										<div className="ginput_container ginput_container_text">
											<input type="text" name="first_name" placeholder="First Name" className="medium" />
										</div>
									</li>
									<li className="newsletter-input">
										<div className="ginput_container ginput_container_text">
											<input type="text" name="last_name" placeholder="Last Name" className="medium" />
										</div>
									</li>
									<li className="newsletter-input">
										<div className="ginput_container ginput_container_email">
											<input type="email" name="email" placeholder="Email" className="medium" />
										</div>
									</li>
								</ul>
							</div>

							<div className="gform_footer top_label">
								<input type="submit" id="gform_submit_button_4" className="gform_button button" value="SUBSCRIBE" />
							</div>

						</form>
					</div>
					

				</div>
				</div>
				</div>
			
			<div className="grid-nav-bar">
				<div className="grid-nav">
					<div className="little-boxes">

						{
							sidedata.allWp.nodes[0].baseSettings.gridNavACF.smallBlocks.map(block => {
								if(block.showOnSidebar){
									return (
										<Link 
											to={ block.link.url } 
											className="little-box" 
											style={{backgroundImage: `url(${block.image.localFile.url})`}}
											key={block.text}>
											<div className="box-content">
												<div className="box-label">

													<p>{ block.text }</p>

												</div>
											</div>
										</Link>
									)
								}
							})
						}
						
						
					</div>
				</div>
			</div>

			
		</aside>
	)
}

export default Sidebar
