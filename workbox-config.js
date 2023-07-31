module.exports = {
	globDirectory: './',
	globPatterns: [
		'**/*.{png,ico,txt,webp,css,html,js,json}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};