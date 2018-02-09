var DB = require('../services/ModeloUser.js');


var usuarios = [
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
	return usuarios;
}

function getOne(id) {
	return usuarios.find(function(e){
		return e.id == id;
	});
}

function remove(id) {
	
	var num = parseInt(id.toString());
	DB.collection.remove({"id":num},function(err,res){
		if(err){throw err}
		console.log("Removido con exito")
	});
	var index = usuarios.map(function(e){
		return e.id.toString();
	}).indexOf(id.toString());
	if (index == -1) return false; 
	usuarios.splice(index,1);	
}

function update(name,pass,id) {
	var index = usuarios.map(function(e){
		return e.id.toString();
	}).indexOf(id.toString());
	if (index == -1) return false;
	usuarios[index].name = name;
	usuarios[index].pass = pass;
	var num = parseInt(id.toString());
	var newvalues = { $set: {name: name, pass: pass } };
	DB.collection.updateOne({"id": num},newvalues,function(err,res){
		if(err){
			throw err
		}
		console.log("Actualizado con exito")

	});
}

function AlmacenarUsuario(user){
	DB.collection.insert(user)
	usuarios.push(user)
}

function nuevoId(){ 
	return usuarios.length + 1;
}

function realizarCargaDB(){

	DB.collection.count({}, function(err, count) {
            if (err) throw err;                                     
            if (count == 0) {
            	console.log("Insercion realizada de manera correcta")
               DB.collection.insert(usuarios)
            }     
        
	
	})
}

function validateLogin(name,pass){
	
	var nombre = name.toString();
	var contra = pass.toString();
	var respuesta = 1;

	DB.collection.count({"name": nombre, "pass": contra}, function(err, count) {
		if(err) throw err;
		
		if(count > 0){
			console.log("usuario,password correctos")
			respuesta = 1;
			
		}
		else{

			respuesta = 0;
			console.log("usuario,password incorrectos")
		} 
		

	});
	
	return respuesta;
}


module.exports = { getAll, getOne,update, remove,AlmacenarUsuario,nuevoId,realizarCargaDB,validateLogin };
