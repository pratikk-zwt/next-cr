const axios = require('axios');

export default function handler(req, res) {
	
	axios.get('http://siteproofs.net/nextjs-crud-api/api/read.php')
	  .then(function (response) {
		// handle success
		//console.log(response.data.body);
		res.status(200).json({ body: response.data.body })
	  })
	  .catch(function (error) {
		// handle error
		res.status(404).json({ body: response.data.message })
	  });
}

