/* eslint-env node */

module.exports = {
	env: { browser: true, es2020: true, node: true },
	extends: ['eslint:recommended'],
	parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
	rules: {
		'no-unused-vars': 'warn',
		'react/prop-types': 'off',
		'no-mixed-spaces-and-tabs': 'off',
	},
}
