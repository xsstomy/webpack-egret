const config = {
	development: {
		Debug: true
	},
	production: {
		Debug: false
	}
}

export default config[BUILD_MODE];