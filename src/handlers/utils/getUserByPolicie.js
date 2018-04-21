const getUserById = require('./getUserById')

module.exports = (policies, clients, policieId, res) => {
	for (let j=0; j<policies.length; j++) {
		if (policies[j].id===policieId) {
			const userId = policies[j].clientId
			return getUserById(clients, userId, res)
			
		}
	}
	return res.json({msg: 'There is no policie for this id'})
}
