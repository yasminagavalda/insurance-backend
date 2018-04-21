module.exports = (clients, name) => {
	for (let i = 0; i < clients.length; i++) {
		if (clients[i].name === name) {
			return clients[i].id
		}
	}
	return null
}