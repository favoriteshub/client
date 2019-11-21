module.exports = {
	root: true,
	env: {
		node: true
	},
	extends: ["plugin:vue/strongly-recommended", "@vue/prettier"],
	rules: {
		"no-console": process.env.NODE_ENV === "production" ? "error" : "off",
		"no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
		"vue/require-default-prop": "off",
		"vue/name-property-casing": ["error", "kebab-case"],
		"vue/attribute-hyphenation": "off"
	},
	parserOptions: {
		parser: "babel-eslint"
	},
	overrides: [
		{
			files: ["**/__tests__/*.{j,t}s?(x)", "**/tests/unit/**/*.spec.{j,t}s?(x)"],
			env: {
				jest: true
			}
		}
	]
};
