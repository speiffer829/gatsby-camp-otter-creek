import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react'
import Layout from "../components/Layout";
import Sidebar from '../components/Sidebar'
import Map from "../components/Map";
import RatesTable from "../components/RatesTable";


export const query = graphql`
		query($slug: String){
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
				mapACF {
					map {
						link
						localFile {
							childImageSharp {
								gatsbyImageData
							}
						}
					}
				}
				feesAndRatesACF {
					ratesAndFees {
						rate
						serviceType
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

								{
									// If Map ACF
									props.data.wpPage.mapACF.map !== null &&
									<Map img={props.data.wpPage.mapACF.map.localFile.childImageSharp.gatsbyImageData} />
								}

								{
									//If Rates And Fees Table
									props.data.wpPage.feesAndRatesACF.ratesAndFees !== null &&
									<RatesTable tableData={ props.data.wpPage.feesAndRatesACF.ratesAndFees } />
								}

								



						</main>

					</div>

					<Sidebar />

					

				</div>
		</Layout>
	)
}

export default OurRatesFees
