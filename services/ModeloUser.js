var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;


UserSchema = new Schema({
	id:Number,
	name: String,
	pass: String,

},{collection : 'users'});

 
module.exports = mongoose.model('User', UserSchema)