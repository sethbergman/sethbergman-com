var fs = require('fs');

module.exports = function ( configFile, options ) {
	configFile = configFile || './.env.sh';
	try {
		var file = fs.readFileSync(configFile);
		var variables = JSON.parse(file);
		registerEnv(variables)
	} catch ( err ) {
		if ( err.errno === -2 ) {
			console.log('File not found: ', err.path);
		}
	}
};

function registerEnv ( obj, prefix ) {
	prefix = (prefix || '').toUpperCase();
	Object.keys(obj).forEach(function ( key ) {
		var keyToCheck = prefix + key.toUpperCase();
		if ( !process.env.hasOwnProperty(keyToCheck) ) {
			if ( !Array.isArray(obj[key]) && typeof obj[key] === 'object' ) {
				registerEnv(obj[key], prefix + key + '_');
			}
			else {
				process.env[prefix + key.toUpperCase()] = obj[key]
			}
		}
	})
}
