const axios = require('axios')

const urlPolicies = 'http://www.mocky.io/v2/580891a4100000e8242b75c5'

module.exports = () => {
	return new Promise((resolve, reject) => {
		axios.get(urlPolicies)
			.then(({data}) => {
				resolve(data.policies)
			})
			.catch(() => {
				reject('Api call failed!')
			})
	})
}