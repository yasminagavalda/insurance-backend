module.exports = (policies, clientId, res) => {
	const userPolicies = []
	for (let j=0; j<policies.length; j++) {
		if (policies[j].clientId===clientId) {
			userPolicies.push(policies[j])
		}
	}
	return res.json({policies: userPolicies})
}