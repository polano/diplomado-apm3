/* objetos y funciones */

var a = parseInt(elem1); 
var b= parseInt(elem2);
alert(a + b);



var my_object = new Object();

var other_object = {};


my_object = {
	a: 1,
	b: 2,	
};


console.log(my_object.firstName);

console.log(my_object['lastName']);

var key;

for(key in my_object){
	console.log(my_object[key]);
}


// Funciones

function test(){
	console.log('ejecutando una funcion');
}

test();

// usando funcion anonima

var bye_bye = function(){
	console.log('Que tengan una feliz semana santa');
}

bye_bye();