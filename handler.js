const rp = require('request-promise')
const _config = require('./config')

module.exports.getAccessTokens = async (event, context) => {
	let options = {
	  method: 'POST',
	  uri: _config.uri,
	  auth: {
	    user: _config.clientid,
	    pass: _config.clientsecret
	  },
	  json: {
	    grant_type: 'client_credentials'
	  }
	}

	let data = {}

	const response = await rp(options, (err, res, body) => {
		if(err) return {
		    statusCode: 500,
		    body: JSON.stringify(err),
  		};
  		data = body
  		console.log("Data", data)

  		accessToken = data.access_token
	})
  	const rz = Promise.resolve(response)
  	console.log("Aha", rz)

  	return {
	    statusCode: 200,
	    headers: {
           "Access-Control-Allow-Origin": "*"
        },
	    body: JSON.stringify(data),
  	};

  
};
