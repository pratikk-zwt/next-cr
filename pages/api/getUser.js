const axios = require('axios');

export default function handler(req, res) {
	const id = req.query.id;
	axios.get("http://siteproofs.net/nextjs-crud-api/api/read_single.php?id="+id)
	  .then(function (response) {
		// handle success
		//console.log(response.data.body);
		res.status(200).json(response.data)
	  })
	  .catch(function (error) {
		// handle error
		res.status(404).json(response.data)
	  });
}

