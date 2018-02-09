var express = require('express');
var router = express.Router();
var storage = require('../services/storage.js');
var User = require('../services/ModeloUser.js');



/* GET home page. */
router.get('/', function(req, res, next) {
	storage.realizarCargaDB();
  res.render('login', { title: 'Express' });
});

router.post('/login', function(req, res) {
	var respuesta = storage.validateLogin(req.body.name,req.body.password)
	if(respuesta > 0){
		console.log("Validacion Correcta");
		res.redirect('/users');
	}

	else{
		console.log("Validacion incorrecta");
		res.redirect('/')
	}
  
})




router.post('/Nuevo', function(req, res, next) {
  res.render('NuevoUsuario',{title: 'Creacion'});
});


router.post('/users',function(req, res) {

		var usuario = new User();		
		usuario.id = storage.nuevoId();
		usuario.name = req.body.name;  
		usuario.pass = req.body.pass;

		storage.AlmacenarUsuario(usuario);
		res.redirect('/users');
		
});

router.post('/users/:id',function(req, res) {
	
	storage.update(req.body.name,req.body.pass,req.params.id);
	res.redirect('/users');

	
}); 

router.post('/users/remove/:id',function(req, res){
	storage.remove(req.params.id);
	res.redirect('/users');

}); 


module.exports = router;
