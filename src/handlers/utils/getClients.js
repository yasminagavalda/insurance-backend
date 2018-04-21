const axios = require('axios')

const urlClients = 'http://www.mocky.io/v2/5808862710000087232b75ac'

module.exports = () => {
	return new Promise((resolve, reject) => {
		axios.get(urlClients)
			.then(({data}) => {
				resolve(data.clients)
			})
			.catch(() => {
				reject('Api call failed!')
			})
	})
}