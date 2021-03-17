import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react'
import Layout from "../components/Layout";


export const query = graphql`
		query($slug: String!){
			wpPage(slug: {eq: $slug}) {
				content
				slug
				id
				title
				featuredImage {
					node {
						altText
						localFile {
							childImageSharp {
								gatsbyImageData( layout: FULL_WIDTH, placeholder: BLURRED)
							}
						}
					}
				}
			}
		}
	`


const OurRatesFees = (props) => {

	
	return (
		<Layout pageTitle={props.data.wpPage.title}>
			

				<GatsbyImage className="child-header" image={ props.data.wpPage.featuredImage.node.localFile.childImageSharp.gatsbyImageData } alt={ props.data.wpPage.featuredImage.node.altText } />
				
				

				<div className="wrap main-row">
					<div className="main-block">

						<main className="main-content" role="main">


								<section>
									<h1 className="entry-title">{props.data.wpPage.title}</h1>
									<article dangerouslySetInnerHTML={{__html: props.data.wpPage.content}} />
								</section>



						</main>

					</div>

					

				</div>
		</Layout>
	)
}

export default OurRatesFees
