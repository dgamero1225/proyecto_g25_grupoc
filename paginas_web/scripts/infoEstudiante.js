
let entradaNom = document.querySelector('#entradaNombre div'); //https://developer.mozilla.org/es/docs/Web/API/Document_object_model/Locating_DOM_elements_using_selectors
let entradaApe = document.querySelector('#entradaApellidos div');
let docTP = document.getElementById('datWrapperTD');
let docID = document.getElementById('datWrapperND');
let fechaNac = document.querySelector('#fechaNacimiento div');
let ed = document.querySelector('#edad div');
let sex = document.querySelector('#sexo div');
let est = document.querySelector('#estado div');
let dir = document.querySelector('#direccion div');
let mun = document.querySelector('#municipio div');
let bar = document.querySelector('#barrio div');
let tel = document.querySelector('#telefono div');
let email = document.querySelector('#entradaEmail div');
let prog = document.querySelector('#programa div');
let sem = document.querySelector('#semestre div');
let modInfo = document.getElementById('modificarInfo'); //Boton de modificacion de informacion personal
let actInfo = document.getElementById('actualizarInfo'); //Boton de actualizacion de informacion personal

let tKey = '1254726212'; //Asignacion temporal a la llave para determinar la informacion del ususario que consulte a la pagina

let listUsuarios = {//funcion constructora de objeto... no es un diccionario en si https://www.youtube.com/watch?v=25ftPb33DSQ || https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Working_with_Objects
	'1241654276':{'nombres':'Ana Milena', 'apellidos':'Guzman Arrieta', 'tdocumento':'CC', 'documento':'1241654276', 'fechaNacimiento':'08/09/1995', 'edad':26, 'sexo':'Femenino', 'estado':'Activo', 'direccion':'Dg. 21 ##49-112', 'municipio':'Cartagena', 'barrio':'Alto Bosque', 'telefono':'3147821341', 'email':'Ana.Guzman@MTic.edu.co', 'programa':'Ing. Industrial', 'semestre':3},
	'1567543288':{'nombres':'Luis Eduardo', 'apellidos':'Rivas Correa', 'tdocumento':'CC', 'documento':'1567543288', 'fechaNacimiento':'01/05/1998', 'edad':23, 'sexo':'Masculino', 'estado':'Activo', 'direccion':'Cl. 43', 'municipio':'Medellin', 'barrio':'San Joaquin', 'telefono':'3104727297', 'email':'Luis.Rivas@MTic.edu.co', 'programa':'Ing. Ambiental', 'semestre':4},
	'1623902127':{'nombres':'Camilo Jesus', 'apellidos':'Lara Ayala', 'tdocumento':'CC', 'documento':'1623902127', 'fechaNacimiento':'06/11/2000', 'edad':21, 'sexo':'Masculino', 'estado':'Activo', 'direccion':'Cra. 52 #67-2 a 67-80', 'municipio':'Bogotá', 'barrio':'San Miguel', 'telefono':'3118374290', 'email':'Camilo.Lara@MTic.edu.co', 'programa':'Ing. Alimentos', 'semestre':2},
	'1254726212':{'nombres':'Tatiana Camila', 'apellidos':'Osorio Garcia', 'tdocumento':'CC', 'documento':'1254726212', 'fechaNacimiento':'17/03/1995', 'edad':26, 'sexo':'Femenino', 'estado':'Activo', 'direccion':'Cl. 5a #10-86 a 10-130', 'municipio':'Cúcuta', 'barrio':'Loma Bolivar', 'telefono':'3106836294', 'email':'Tatiana.Osorio@MTic.edu.co', 'programa':'Ing. Sistemas', 'semestre':3}
}

const cargarInfoEstudiante = (key) => {	
    entradaNom.innerHTML = `<p>${listUsuarios[key].nombres}</p>`;
	entradaApe.innerHTML = `<p>${listUsuarios[key].apellidos}</p>`;
	docTP.innerHTML = `<p>${listUsuarios[key].tdocumento}</p>`;
	docID.innerHTML = `<p>${listUsuarios[key].documento}</p>`;
	fechaNac.innerHTML = `<p>${listUsuarios[key].fechaNacimiento}</p>`;
	ed.innerHTML = `<p>${listUsuarios[key].edad}</p>`;
	sex.innerHTML = `<p>${listUsuarios[key].sexo}</p>`;
	est.innerHTML = `<p>${listUsuarios[key].estado}</p>`;
	dir.innerHTML = `<p>${listUsuarios[key].direccion}</p>`;
	mun.innerHTML = `<p>${listUsuarios[key].municipio}</p>`;
	bar.innerHTML = `<p>${listUsuarios[key].barrio}</p>`;
	tel.innerHTML = `<p>${listUsuarios[key].telefono}</p>`;
	email.innerHTML = `<p>${listUsuarios[key].email}</p>`;
	prog.innerHTML = `<p>${listUsuarios[key].programa}</p>`;
	sem.innerHTML = `<p>${listUsuarios[key].semestre}</p>`;
	
	actInfo.style.display = 'none'; //intercambio de botones
	modInfo.style.display = 'block';
};

cargarInfoEstudiante(tKey);

const modificarInfoEstudiante = () => {//Activado por listener
	dir.innerHTML = `<input type="text" maxlength="30" id="inDireccion" size="30">`;
	mun.innerHTML = `<input type="text" maxlength="16" id="inMunicipio" size="14">`;
	bar.innerHTML = `<input type="text" maxlength="16" id="inBarrio" size="14">`;
	tel.innerHTML = `<input type="text" maxlength="10" id="inTelefono" size="11">`;
	email.innerHTML = `<input type="text" maxlength="25" id="inEmail" size="24">`;	
	
	actInfo.style.display = 'block';//intercambio de botones
	modInfo.style.display = 'none';
};

const actualizarInfoEstudiante = (key) => {//Operadores logicos https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Expressions_and_Operators
	
	if(dir.querySelector('input').value != ""){
		listUsuarios[key].direccion = dir.querySelector('input').value;
	}
	
	if(mun.querySelector('input').value != ""){
		listUsuarios[key].municipio = mun.querySelector('input').value;
	}
	
	if(bar.querySelector('input').value != ""){
		listUsuarios[key].barrio = bar.querySelector('input').value;
	}
	
	if(tel.querySelector('input').value != ""){
		listUsuarios[key].telefono = tel.querySelector('input').value;
	}
	
	if(email.querySelector('input').value != ""){
		listUsuarios[key].email = email.querySelector('input').value;
	}
	
	cargarInfoEstudiante(tKey);
};



//infoIndi.style.display = 'none';

//modInfo.textContent = 'Guardar'; //Para cambiar el contenido textual dentro de la etiqueta, no es lo mismo que .setAtributte('value','texto')

/*Bloque de prueba set y get en Objetos
	
	console.log(key);
	console.log(tKey);
	console.log("efectivamente la variable no debe llevar mayuscula al inicio... No probablemente fue un error con el case de k, no se nota la diferencia entre ambas");
	const a = listUsuarios;
	console.log(listUsuarios);
	console.log(listUsuarios[key].nombres);
	console.log(a);
	//console.log(a.1567543288);
	console.log(listUsuarios.get(key));*/