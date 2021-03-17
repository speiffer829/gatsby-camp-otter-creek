import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'

const Sidebar = () => {

	const data = useStaticQuery(graphql`
	query{
		allWp {
			nodes {
				baseSettings {
					gridNavACF {
						mainBlock {
							linkText
							title
							description
							image {
								localFile {
									childImageSharp {
										gatsbyImageData(placeholder: BLURRED)
									}
								}
							}
						}
						smallBlocks {
							text
							image {
								altText
								localFile {
									childImageSharp {
										gatsbyImageData(placeholder: BLURRED)
									}
								}
							}
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
		<aside className="sidebar">
			
		</aside>
	)
}

export default Sidebar
