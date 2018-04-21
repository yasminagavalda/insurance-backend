module.exports = (clients, name, res) => {
	for (let i = 0; i < clients.length; i++) {
		if (clients[i].name === name) {
			return res.json({user: clients[i]})
		}
	}
	return res.json({msg: 'There is no user for this name'})
}
