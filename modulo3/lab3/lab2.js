/* objetos y funciones */

var my_object = new Object();

var other_object = {};


my_object = {
	firstName: 'Pedro',
	lastName: 'Olano',
	number:  '32323',
	adress:  'calle 12',
	phone: 2222
};


console.log(my_object.firstName);
console.log(my_object['lastName']);
var key;

for(key in my_object){
	console.log(my_object[key]);
	document.write(my_object[key]);
}


// Funciones

function test(){
	console.log('ejecutando una funcion');
}

test();

// usando funcion anonima

var bye_bye = function(){
	console.log('prueba2');
	

}

bye_bye();