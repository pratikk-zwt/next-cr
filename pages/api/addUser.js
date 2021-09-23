const axios = require('axios');

export default function handler(req, res) {
	const rq = JSON.parse(req.body);
	console.log(rq);
	axios.post('http://siteproofs.net/nextjs-crud-api/api/create.php',rq)
	  .then(function (response) {
		res.status(200).json({ message: response.data.message })
	  })
	  .catch(function (error) {
		res.status(500).json({ message: response.data.message })
	  });
}

