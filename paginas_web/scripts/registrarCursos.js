const cursos = {
    '20212': [{ 'codigo': 202101, 'asignatura': 'Calculo I', 'creditos': 2, 'docente': 'Néstor García' },
    { 'codigo': 202106, 'asignatura': 'Geometría Analítica', 'creditos': 3, 'docente': 'Diana Gamero' },
    { 'codigo': 202111, 'asignatura': 'Arquitectura de Datos', 'creditos': 3, 'docente': 'Néstor García' },
    { 'codigo': 202115, 'asignatura': 'Matematicas Especiales', 'creditos': 4, 'docente': 'Néstor García' },
    { 'codigo': 202103, 'asignatura': 'Programación Básica I', 'creditos': 3, 'docente': 'Diana Gamero' },
    { 'codigo': 202105, 'asignatura': 'Algoritmos I', 'creditos': 2, 'docente': 'Diana Gamero' },
    { 'codigo': 202110, 'asignatura': 'Introducción DB I', 'creditos': 4, 'docente': 'Néstor García' }]
}

var dict = {}; // Diccionario para el estado de los checkbox
let num_cursos = 0;
let year = '20212'; //Periodo actual

var creditosTotales = 0; //Total inscritos en el periodo
const maxCreditos = 9; //Maximo de créditos

var materiasInscritas = []; //Para no mostrar materias ya vistas o inscritas

for (let lec of cursos[year]) {
    num_cursos++;
    dict[num_cursos+''] = false;
}

const cargarCursos = () => { //Cargar tabla
    
    let datosTabla = document.getElementById('tabla_cursos');
    datosTabla.innerHTML = "";

    num_cursos = 0;

    for (let lectura of cursos[year]) { //Recorremos todos los cursos que se encuentran disp.
        num_cursos++;
        let boolC = dict[num_cursos+'']; //Estado del checkbox para esa fila
        let boolE = true; //Comprobar si ya se vió la materia para no imprimirla
        var str = '';
        //console.log("guardado " + boolC);
        
        for(let lct of materiasInscritas){
            if(lct === lectura.codigo){
                boolE = false; //Ya se vió/inscribió la materia
            }
        }

        if(boolE){ //No se ha visto
            if(boolC){
                str = `<td><p>
                <input type="checkbox" id="${num_cursos}"  value="a" checked=true onclick="cambiarEstado(this)">
                </p></td> ` 
            }else{
                str = `<td><p>
                <input type="checkbox" id="${num_cursos}" value="a" defaultChecked=false onclick="cambiarEstado(this)">
                </p></td> ` 
            }

            datosTabla.innerHTML += `<tr>
                <td><p>${lectura.codigo}</p></td>
                <td><p>${lectura.asignatura}</p></td>
                <td><p>${lectura.docente}</p></td>
                <td><p>${lectura.creditos}</p></td>`+
                str + `
            </tr> `  
        
        //document.getElementById(num_cursos+'').checked = boolC;
        }
    }

    /*num_cursos = 0;
    for (let lectura of cursos[year]){
        num_cursos++;
        let boolC = dict[num_cursos+''];

        if(!boolC){
            document.getElementById(num_cursos+'').checked = false;
        }
    }*/

};

const cambiarEstado = (comp) => { //Cambiar estado de los checkbox
    
    let idB = comp.id;
    //console.log(idB);
    //console.log("a " + idB + " " + dict[idB+'']);
    dict[idB+''] = comp.checked;
    //console.log("d " + dict[idB+'']);
    //event.preventDefault();
    cargarCursos();
}

const limpiarBuscar = () =>{ //Limpiar buscador e imprimir de nuevo todos los cursos
    var inputT = document.getElementById('buscar');
    inputT.value = '';
    cargarCursos();
}

const buscarCurso = () =>{ //Buscador de curso

    var tableReg = document.getElementById('tabla_cursos');
    var searchText = document.getElementById('buscar').value.toLowerCase();
    event.preventDefault(); //Evita que se recargue y no muestre solo las busquedas que nos interesa

    for (var i = 0; i < tableReg.rows.length; i++) {
        var cellsOfRow = tableReg.rows[i].getElementsByTagName('td');
        var found = false;
        for (var j = 0; j < cellsOfRow.length && !found; j++) {
            var compareWith = cellsOfRow[j].innerHTML.toLowerCase();
            if (searchText.length == 0 || (compareWith.indexOf(searchText) > -1)) {
                found = true;
                break;
            }
        }
        if (found) {
            tableReg.rows[i].style.display = '';
        } else {
            tableReg.rows[i].style.display = 'none';
        }
    }

}

const matricular = () =>{
    num_cursos = 0;
    var compCreditos = creditosTotales; //Inicial es 0, pero después por los que ya tengamos
    var materiasTemp = [];

    for (let lct of cursos[year]) { //Miramos cuáles checkbox se marcaron
        num_cursos++;
        var boolTemp = document.getElementById(num_cursos+'');
        

        if(boolTemp != null && boolTemp.checked){ //Si está marcado, registramos la materia
            console.log(num_cursos + " " + boolTemp.checked);
            compCreditos += lct.creditos;
            materiasTemp.push(lct.codigo);
        }
    }

    if(compCreditos <= maxCreditos && compCreditos > 0){ //Agregar materias

        //Agregamos al array de cursos ya registrados
        for(let jlct of materiasTemp){
            materiasInscritas.push(jlct); //Agregamos el código de la materia a la lista de cursos vistos
            console.log(jlct);
        }

        //Cambiamos el total de creditos inscritos
        creditosTotales = compCreditos;

        //Reset de los checkbox a sin marcar
        num_cursos = 0;
        for (let lec of cursos[year]) {
            num_cursos++;
            dict[num_cursos+''] = false;
        }

        let credDisp = maxCreditos-creditosTotales;

        alert("Materias inscritas satisfactoriamente. \nTotal créditos inscritos: " + creditosTotales + "\nCréditos disponibles: " + credDisp);
    }else if(compCreditos === 0){
        alert("Aún no ha seleccionado materias...\nTiene disponible " + credDisp + " créditos." );
    }
    else{
        alert("Usted excede el número máximo de créditos permitidos. " + compCreditos + " de " + maxCreditos + ". \nActualmente tiene inscritos " + creditosTotales + " créditos.");
    }

    cargarCursos(); //
}


//cargarCursos(); //Arrojamos la tabla en primera instancia
