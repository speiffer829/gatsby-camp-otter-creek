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

	
	return (
		<aside className="sidebar">
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
