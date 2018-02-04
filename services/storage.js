var users = [
	{
		id: 1,
		name: 'Guy',
		pass: '1234'
	},
	{
		id: 2,
		name: 'Winston',
		pass: '1234'
	},
	{
		id: 3,
		name: 'Helmholtz',
		pass: '1234'
	},
	{
		id: 4,
		name: 'Spencer',
		pass: '1234'
	},
];

function getAll() {
	return users;
}

function getOne(id) {
	return users.find(function(e){
		return e.id == id;
	});
}

function remove(id) {
	var index = users.map(function(e){
		return e.id;
	}).indexOf(id);
	if (index == -1) return false;

	return (users.splice(index,1) != []);
}

function update(user) {
	var index = users.map(function(e){
		return e.id;
	}).indexOf(user.id);
	if (index == -1) return false;
	users[index] = user;
	return true;
}

module.exports = { getAll, getOne, remove, update };