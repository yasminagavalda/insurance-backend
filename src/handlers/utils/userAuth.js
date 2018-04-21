module.exports = (clients, authId, role='all') => {
	for (let i =0; i<clients.length; i++) {
		if (clients[i].id === authId) {
			if (role==='all'){
				return true
			} else {
				if (clients[i].role===role) {
					return true
				}
			}
		}
	}
	return false
}