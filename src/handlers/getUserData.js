const getClients = require('./utils/getClients')
const getPolicies = require('./utils/getPolicies')
const userAuth = require('./utils/userAuth')
const getUserById = require('./utils/getUserById')
const getUserByName = require('./utils/getUserByName')
const getUserByPolicie = require('./utils/getUserByPolicie')

module.exports = (req, res) => {
	const authId = req.get('authId')
	const { id, name, policie } = req.query
	getClients()
		.then (clients => {
			if (id || name) {
				const isAuthorized = userAuth(clients, authId)
				if (isAuthorized) {	
					if (id) {
						getUserById(clients, id, res)
					} else if (name) {
						getUserByName(clients, name, res)
					}
				} else {
					return res.json({msg: 'You are not authorized!'})
				}
			} else if (policie) {
				const isAuthorized = userAuth(clients, authId, 'admin')
				if (isAuthorized) {	
					getPolicies()
						.then (policies => {
							getUserByPolicie(policies, clients, policie, res)	
						})
				} else {
					return res.json({msg: 'You are not authorized!'})
				}
			} 
		})
}
