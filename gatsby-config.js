module.exports = {
	plugins: [
		// Tell gatsby which theme you will be using.
		{
			resolve: "gatsby-wordpress-theme-phoenix",
			options: {
				wordPressUrl: 'https://codeytek.com/headless-cms'
			}
		}
		]
};
