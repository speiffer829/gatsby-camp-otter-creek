import * as React from "react"
import Layout from "../components/Layout";
import { graphql, useStaticQuery, Link } from "gatsby";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";


// markup
const IndexPage = () => {

  const data = useStaticQuery(
    graphql`query {
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
}`
  )

  
  
  return (
    <Layout isHome={true}>
      <div className="grid-nav-bar">

            <div className="grid-nav">

              <StaticImage src="../images/otter-creek-mobile-logo.png" placeholder="blurred" alt="logo" className="big-name-img" />


              <Link to="/" className="big-pic-box">
                <GatsbyImage image={ data.allWp.nodes[0].baseSettings.gridNavACF.mainBlock.image.localFile.childImageSharp.gatsbyImageData } alt="Large Image" className="big-box-img" />
                <span className="big-label-box">
                  <p className="bigtext">{data.allWp.nodes[0].baseSettings.gridNavACF.mainBlock.title}</p>
                  <p className="normal-text">{ data.allWp.nodes[0].baseSettings.gridNavACF.mainBlock.description }</p>

                  <p className="schedule-link">{data.allWp.nodes[0].baseSettings.gridNavACF.mainBlock.linkText}</p>

                </span>

              </Link>





              <div className="little-boxes">
                {
                  data.allWp.nodes[0].baseSettings.gridNavACF.smallBlocks.map(block => (
                    // TODO: SHow/hide on mobile
                    <Link to={ block.link.url } className="little-box" key={ block.text }>
                      <GatsbyImage image={block.image.localFile.childImageSharp.gatsbyImageData} alt={block.image.altText} className="small-box-img" />
                      <div className="box-content">
                        <div className="box-label">

                          <p>{ block.text }</p>

                        </div>
                      </div>
                    </Link>
                  ))
                }

              
              </div>
            </div>


            <div className="explore-more-row">
              <a href="#below-treeline" className="explore-more-btn smooth-scroll">
                <StaticImage src="../images/more-mobile-link.png" alt="Explore More" />
              </a>
            </div>

      </div>

    </Layout>
  )
}

export default IndexPage
