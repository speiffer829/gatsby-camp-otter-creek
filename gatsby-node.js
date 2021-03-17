const path = require('path');

module.exports.createPages = async ({ graphql, actions }) => {
	const { createPage } = actions
	const pageTemplate = path.resolve( './src/templates/DefaultPage.js' )

	const res = await graphql(`
		
	`)
}