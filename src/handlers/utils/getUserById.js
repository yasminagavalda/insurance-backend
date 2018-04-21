module.exports = (clients, id, res) => {
	console.log(res)
	for (let i = 0; i < clients.length; i++) {
		if (clients[i].id === id) {
			return res.json({user: clients[i]})
		}
	}
	return res.json({msg: 'There is no user for this id'})
}
