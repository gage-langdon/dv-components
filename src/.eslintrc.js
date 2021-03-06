module.exports = {
	"env": {
		"browser": true,
		"commonjs": true,
		"es6": true,
		"node": true,
		"jest": true
	},
	"globals": {
		"Stripe": true,
		"VERSION": true
	},
	"extends": [
		"eslint:recommended",
		"plugin:react/recommended"
	],
	"parser": "babel-eslint",
	"plugins": [
		"react",
		"filenames",
		"eslint-plugin-react"
	],
	"rules": {
		"indent": [
			"error",
			"tab",
			{ "SwitchCase": 1 }
		],
		"no-unused-vars": ["error", { "ignoreRestSiblings": true }],
		"linebreak-style": [
			"error",
			"unix"
		],
		"quotes": [
			"error",
			"single"
		],
		"semi": [
			"error",
			"always"
		],
		"filenames/match-regex": [2, "^[a-z_-]+", "(\\.test)?$",true],
		"react/jsx-uses-vars": 1
	}
};
