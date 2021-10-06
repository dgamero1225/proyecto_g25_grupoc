const yearsSemester = {
    '20161':[{'codigo':5051, 'asignatura':'Calculo-1', 'creditos': 2, 'periodo1':4, 'periodo2':4.3, 'periodo3':3.5},
    {'codigo':5052, 'asignatura':'Fisica-1', 'creditos': 4, 'periodo1':4.3, 'periodo2':4.1, 'periodo3':3.0},
    {'codigo':5036, 'asignatura':'Geometría Analítica', 'creditos': 3, 'periodo1':4.0, 'periodo2':3.6, 'periodo3':3.8},
    {'codigo':5039, 'asignatura':'Arquitectura de Datos', 'creditos': 3, 'periodo1':4.0, 'periodo2':3.6, 'periodo3':3.8}],
    '20162':[{'codigo':6051, 'asignatura':'Cálculo-2', 'creditos': 2, 'periodo1':4, 'periodo2':4.3, 'periodo3':3.5},
    {'codigo':6052, 'asignatura':'Fisica-2', 'creditos': 4, 'periodo1':4.3, 'periodo2':4.1, 'periodo3':3.0},
    {'codigo':6036, 'asignatura':'Ecua. Diferenciales', 'creditos': 3, 'periodo1':4.0, 'periodo2':3.6, 'periodo3':3.8}],
    '20171':[{'codigo':6051, 'asignatura':'Calculo-3', 'creditos': 2, 'periodo1':4, 'periodo2':4.3, 'periodo3':3.5},
    {'codigo':6052, 'asignatura':'Fisica-3', 'creditos': 4, 'periodo1':3.4, 'periodo2':4.8, 'periodo3':3.0},
    {'codigo':6036, 'asignatura':'Fundamentos Programación', 'creditos': 4, 'periodo1':4.0, 'periodo2':3.6, 'periodo3':3.8}],
    '20172':[{'codigo':7051, 'asignatura':'Algoritmos-1', 'creditos': 2, 'periodo1':4, 'periodo2':4.3, 'periodo3':3.5},
    {'codigo':7052, 'asignatura':'Matematicas Especiales', 'creditos': 4, 'periodo1':4.3, 'periodo2':4.1, 'periodo3':3.0},
    {'codigo':7036, 'asignatura':'Programación Básica-1', 'creditos': 3, 'periodo1':4.0, 'periodo2':3.6, 'periodo3':3.8}],
    '20181':[{'codigo':8051, 'asignatura':'Algoritmos-2', 'creditos': 2, 'periodo1':4, 'periodo2':4.3, 'periodo3':3.5},
    {'codigo':8052, 'asignatura':'Ciencia de Datos-2', 'creditos': 4, 'periodo1':4.3, 'periodo2':4.1, 'periodo3':3.0},
    {'codigo':8036, 'asignatura':'Programación Básica-2', 'creditos': 3, 'periodo1':4.0, 'periodo2':3.6, 'periodo3':3.8}],
    '20182':[{'codigo':9051, 'asignatura':'Algoritmos-3', 'creditos': 2, 'periodo1':4, 'periodo2':4.3, 'periodo3':3.5},
    {'codigo':9052, 'asignatura':'Introducción DB-1', 'creditos': 4, 'periodo1':4.3, 'periodo2':4.1, 'periodo3':3.0},
    {'codigo':9036, 'asignatura':'Geometría', 'creditos': 3, 'periodo1':3.1, 'periodo2':3.3, 'periodo3':3.8}],
    '20191':[{'codigo':15051, 'asignatura':'Calculo-1', 'creditos': 2, 'periodo1':4, 'periodo2':4.3, 'periodo3':3.5},
    {'codigo':15052, 'asignatura':'Fisica-1', 'creditos': 4, 'periodo1':4.3, 'periodo2':4.1, 'periodo3':3.0},
    {'codigo':15036, 'asignatura':'Introducción DB-2', 'creditos': 2, 'periodo1':4.0, 'periodo2':3.0, 'periodo3':3.8}],
    '20192':[{'codigo':16051, 'asignatura':'Calculo-1', 'creditos': 2, 'periodo1':4, 'periodo2':4.3, 'periodo3':3.5},
    {'codigo':16052, 'asignatura':'Fisica-1', 'creditos': 4, 'periodo1':4.3, 'periodo2':4.1, 'periodo3':3.0},
    {'codigo':16036, 'asignatura':'Geometría', 'creditos': 3, 'periodo1':4.0, 'periodo2':3.6, 'periodo3':3.8}],
    '20201':[{'codigo':17051, 'asignatura':'Calculo-1', 'creditos': 2, 'periodo1':4, 'periodo2':4.3, 'periodo3':3.5},
    {'codigo':17052, 'asignatura':'Fisica-1', 'creditos': 4, 'periodo1':4.3, 'periodo2':4.1, 'periodo3':3.0},
    {'codigo':17036, 'asignatura':'Geometría', 'creditos': 3, 'periodo1':3.0, 'periodo2':3.6, 'periodo3':3.8}],
    '20202':[{'codigo':18051, 'asignatura':'Calculo-1', 'creditos': 2, 'periodo1':4, 'periodo2':4.3, 'periodo3':3.5},
    {'codigo':18052, 'asignatura':'Fisica-1', 'creditos': 4, 'periodo1':4.3, 'periodo2':4.1, 'periodo3':3.0},
    {'codigo':18036, 'asignatura':'Geometría', 'creditos': 3, 'periodo1':4.0, 'periodo2':3.6, 'periodo3':3.8}],
    '20211':[{'codigo':19051, 'asignatura':'Calculo-1', 'creditos': 2, 'periodo1':4, 'periodo2':4.3, 'periodo3':3.5},
    {'codigo':19052, 'asignatura':'Fisica-1', 'creditos': 4, 'periodo1':4.3, 'periodo2':4.1, 'periodo3':3.0},
    {'codigo':19036, 'asignatura':'Geometría', 'creditos': 3, 'periodo1':4.0, 'periodo2':3.6, 'periodo3':3.8}],
    '20212':[{'codigo':20051, 'asignatura':'Calculo-1', 'creditos': 2, 'periodo1':4, 'periodo2':4.3, 'periodo3':3.5},
    {'codigo':20052, 'asignatura':'Fisica-1', 'creditos': 4, 'periodo1':4.3, 'periodo2':4.1, 'periodo3':3.0},
    {'codigo':20036, 'asignatura':'Introducción DB-1', 'creditos': 3, 'periodo1':4.0, 'periodo2':3.6, 'periodo3':3.8}]
}

const cargarFechas = () => {
    let year = document.getElementById("select_year");
    year.innerHTML = `<option value="-1">Seleccione el Año</option> `;
    let anno = 2015;
    for (let i = 0; i <= 5; i++){
        anno += 1;
        year.innerHTML += ` <option value="${i}">
                            ${anno}</option>`
    }
};

const cargarSemestres = () => {
    let semester = document.getElementById("select_semester");
    semester.innerHTML = `<option value="-1">Seleccione el Semestre</option> `;
    let periodo = 0;
    for (let i = 0; i <= 1; i++){
        periodo = (i+1);
        semester.innerHTML += ` <option value="${i}">
                            ${periodo}</option>`
    }
};

const procesarDatos = () => {
    
    let seleccion_year = document.getElementById('select_year');
    let option_year_selected = seleccion_year.value;
    let year_selected = 0;
    switch (option_year_selected) {
        case '0':
            year_selected = '2016';
            break;
        case '1':
            year_selected = '2017';
            break;
        case '2':
            year_selected = '2018';
            break;
        case '3':
            year_selected = '2019';
            break;
        case '4':
            year_selected = '2020';
            break;
        case '5':
            year_selected = '2021';
            break;
    };
    

    let seleccion_semestre = document.getElementById('select_semester');
    let option_semester_selected = seleccion_semestre.value;
    let semester_selected = 0;
    switch (option_semester_selected) {
        case '0':
            semester_selected = '1';
            break;
        case '1':
            semester_selected = '2';
            break;
    }
    // console.log(year_selected);
    // console.log(semester_selected);

    if (year_selected === 0 || semester_selected === 0) {
        alert("Debe seleccionar un año y un semestre");
    } else {
        cargarCalificaciones(year_selected, semester_selected);
    }
};




const cargarCalificaciones = (year, semester) => {
    
    const data = year + semester;
    
    let datosTabla = document.getElementById('tabla');
        datosTabla.innerHTML = "";


    for (let lectura of yearsSemester[data]) {
        let final = (lectura.periodo1 + lectura.periodo2 + lectura.periodo3)/3;
        tabla.innerHTML += `<tr>
            <td>${lectura.codigo}</td>
            <td>${lectura.asignatura}</td>
            <td>${lectura.creditos}</td>
            <td>${lectura.periodo1}</td>
            <td>${lectura.periodo2}</td>
            <td>${lectura.periodo3}</td>
            <td>${final}</td>
        </tr> `
        
    }
    
};



cargarFechas();
cargarSemestres();



