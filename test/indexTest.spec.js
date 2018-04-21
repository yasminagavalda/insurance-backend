const userAuth = require('../src/handlers/utils/userAuth')
const getUserIdByName = require('../src/handlers/utils/getUserIdByName')

const assert = require('assert')

suite('userAuth', () => {

	const clients = [
		{
			'id': 'a0ece5db-cd14-4f21-812f-966633e7be86',
			'name': 'Britney',
			'email': 'britneyblankenship@quotezart.com',
			'role': 'user'
		},
		{
			'id': 'e8fd159b-57c4-4d36-9bd7-a59ca13057bb',
			'name': 'Manning',
			'email': 'manningblankenship@quotezart.com',
			'role': 'admin'
		}
	]

	test('Should return false if user is not found', () => {
		assert.equal(false, userAuth(clients, '12345'))
	})
	
	test('Should return true if user is found', () => {
		assert.equal(true, userAuth(clients, 'e8fd159b-57c4-4d36-9bd7-a59ca13057bb'))
	})

	test('Should return false if user is found but does not have the admin role', () => {
		assert.equal(false, userAuth(clients, 'a0ece5db-cd14-4f21-812f-966633e7be86', 'admin'))
	})
	
	test('Should return true if user is found and have the admin role', () => {
		assert.equal(true, userAuth(clients, 'e8fd159b-57c4-4d36-9bd7-a59ca13057bb', 'admin'))
	})
})

suite('getUserIdByName', () => {

	const clients = [
		{
			'id': 'a0ece5db-cd14-4f21-812f-966633e7be86',
			'name': 'Britney',
			'email': 'britneyblankenship@quotezart.com',
			'role': 'user'
		},
		{
			'id': 'e8fd159b-57c4-4d36-9bd7-a59ca13057bb',
			'name': 'Manning',
			'email': 'manningblankenship@quotezart.com',
			'role': 'admin'
		}
	]

	test('Should return null if username is not found', () => {
		assert.equal(null, getUserIdByName(clients, 'Cox'))
	})

	test('Should return id if it is found by username', () => {
		assert.equal('a0ece5db-cd14-4f21-812f-966633e7be86', getUserIdByName(clients, 'Britney'))
	})
})