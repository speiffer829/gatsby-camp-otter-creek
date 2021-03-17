import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react'
import Layout from "../components/Layout";

const OurRatesFees = () => {

	const data = useStaticQuery(graphql`
		query{
			wpPage(slug: {eq: "our-rates-fees"}) {
				content
				slug
				id
				title
				featuredImage {
					node {
						altText
						localFile {
							childImageSharp {
								gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
							}
						}
					}
				}
			}
		}
	`)
	
	return (
		<Layout pageTitle='Our Rates & Fees'>
			

				<GatsbyImage className="child-header" image={data.wpPage.featuredImage.node.localFile.childImageSharp.gatsbyImageData} alt={data.wpPage.featuredImage.node.altText} />
				
				

				<div className="wrap main-row">
					<div className="main-block">

						<main className="main-content" role="main">


								<h1 className="entry-title">{data.wpPage.title}</h1>

								<div dangerouslySetInnerHTML={{__html: data.wpPage.content}} />

							

						</main>

					</div>

					

				</div>
		</Layout>
	)
}

export default OurRatesFees
