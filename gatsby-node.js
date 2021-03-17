const path = require('path');

module.exports.createPages = async ({ graphql, actions }) => {
	const { createPage } = actions
	const pageTemplate = path.resolve( './src/templates/DefaultPage.js' )

	const res = await graphql(`
		query{
			allWpPage {
				edges {
					node {
						slug
						isFrontPage
					}
				}
			}
		}
	`)

	res.data.allWpPage.edges.forEach(edge => {
		if(!edge.node.isFrontPage){
			createPage({
				component: pageTemplate,
				path: `/${edge.node.slug}`,
				context: {
					slug: edge.node.slug
				}
			})
		}
	})
}