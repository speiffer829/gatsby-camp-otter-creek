import * as React from "react"
import Layout from "../components/Layout";
import { graphql, useStaticQuery, Link } from "gatsby";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import { Helmet } from "react-helmet";
// import GravityFormForm from 'gatsby-gravityforms-component'
// TODO: Figure this shit out ⬆️




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
            showOnMobile
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
  wpPage(slug: {eq: "front-page"}) {
    title
    content
    frontPage {
      fieldGroupName
      frontPageFirstSection {
        textBlock
        title
      }
      frontPageSecondSection {
        link {
          url
          title
        }
        textBlock
        title
      }
      frontPageThirdSection {
        textBlock
        title
        link {
          url
          title
        }
      }
    }
  }
}`
  )

  
  const submitForm = async (e) => {
    e.preventDefault()
    try {
      fetch('http://campottercreek.mindstaging.com/wp-json/gf/v2/forms/4',{
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(response => response.json())
      .then(json => console.log(json))
    } catch (error) {
      console.log('shits fucked bro');
    }
    
  }
  
  
  return (
    <Layout isHome={true}>
      <section className="grid-nav-bar" style={{padding: 0}}>

            <div className="grid-nav">

              <StaticImage src="../images/otter-creek-mobile-logo.png" placeholder="blurred" alt="logo" className="big-name-img" />


              <Link to="/make-a-reservation" className="big-pic-box">
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
                    <Link to={ block.link.url } className={`little-box ${block.showOnMobile == 1 ? 'stick-around' : ''}`} key={ block.text }>
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
                <StaticImage src="../images/more-mobile-link.png" alt="Explore More" placeholder="tracedSVG" />
              </a>
            </div>

      </section>

      <main className="main-content" role="main">
        <div className="below-treeline" id="below-treeline">
          <div className="wrap">
                <h1><em>{data.wpPage.frontPage.frontPageFirstSection.title}</em></h1>
                <div dangerouslySetInnerHTML={{__html: data.wpPage.frontPage.frontPageFirstSection.textBlock}}></div>

            <StaticImage src="../images/otter-tracks.png" alt="paws" placeholder="tracedSVG" className="paws" />
          </div>
        </div>
      </main>

      <section className="brown-row treetops">
        <div className="wrap">
          <div className="half-row">
            <div className="half-block">
              <StaticImage src="../images/otter-creek-creek.png" alt="otter" placeholder="tracedSVG" />
            </div>
            <div className="half-block">
                  <h1>{ data.wpPage.frontPage.frontPageSecondSection.title }</h1>
                  <div dangerouslySetInnerHTML={{__html: data.wpPage.frontPage.frontPageSecondSection.textBlock}}></div>
                  <Link to={data.wpPage.frontPage.frontPageSecondSection.link.url} className="link">{data.wpPage.frontPage.frontPageSecondSection.link.title}</Link>

            </div>
          </div>
        </div>
      </section>


      <section className="tan-row">
        <div className="wrap">
          <div className="half-row">
            <div className="half-block">
                  <h1>{ data.wpPage.frontPage.frontPageThirdSection.title }</h1>
                  <div dangerouslySetInnerHTML={{__html: data.wpPage.frontPage.frontPageThirdSection.textBlock}}></div>
                  <Link to={data.wpPage.frontPage.frontPageThirdSection.link.url} className="link">{data.wpPage.frontPage.frontPageThirdSection.link.title}</Link>
            </div>

            <div className="half-block">
              <StaticImage src="../images/otter-creek-otters.png" alt="Herons" placeholder="tracedSVG" />
            </div>
          </div>
        </div>
      </section>


      <section className="gold-row">
        <div className="wrap otter-bg center">
          <div className="smaller-wrap newsletter-grid">
            <div className="arrow-header-wrap">
              <h2>Sign-Up For Our Newsletter!</h2>
            </div>

            <p className="newsletter-text">Stay up-to-date on all the happenings and events throughout the season by signing up for our newsletter today.  We promise not to send you anything you're not expecting!</p>

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
      </section>

    </Layout>
  )
}

export default IndexPage
