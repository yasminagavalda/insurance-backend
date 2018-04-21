const getClients = require('./utils/getClients')
const getPolicies = require('./utils/getPolicies')
const userAuth = require('./utils/userAuth')
const getUserIdByName = require('./utils/getUserIdByName')
const getUserPoliciesByClientId = require('./utils/getUserPoliciesByClientId')

module.exports = (req, res) => {
	const authId = req.get('authId')
	const { username } = req.query
	getClients()
		.then (clients => {
			const isAuthorized = userAuth(clients, authId, 'admin')
			if (isAuthorized) {	
				let clientId = getUserIdByName(clients, username)
				if (clientId!==null) {
					getPolicies()
						.then (policies => {
							getUserPoliciesByClientId(policies, clientId, res)							
						})
				} else {
					return res.json({msg: 'There is no user for this username'})
				}				
			} else {
				return res.json({msg: 'You are not authorized!'})
			}
		})
}
