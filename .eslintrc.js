module.exports = {
	'env': {
		'browser': true,
		'es6': true
	},
	'extends': ['eslint:recommended', 'plugin:react/recommended'],
	'parserOptions': {
		'ecmaVersion': 7,
		'ecmaFeatures': {
			'experimentalObjectRestSpread': true,
			'jsx': true
		},
		'sourceType': 'module'
	},
	'plugins': [
		'react'
	],
	'rules': {
		'indent': [
			'error',
			'tab',
			{'SwitchCase': 1}
		],
		'linebreak-style': [
			'error',
			'unix'
		],
		'quotes': [
			'error',
			'single'
		],
		'semi': [
			'error',
			'always'
		]
	}
};