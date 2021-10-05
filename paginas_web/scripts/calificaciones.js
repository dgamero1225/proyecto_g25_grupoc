
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
            year_selected = 2016;
            break;
        case '1':
            year_selected = 2017;
            break;
        case '2':
            year_selected = 2018;
            break;
        case '3':
            year_selected = 2019;
            break;
        case '4':
            year_selected = 2020;
            break;
        case '5':
            year_selected = 2021;
            break;
    };
    

    let seleccion_semestre = document.getElementById('select_semester');
    let option_semester_selected = seleccion_semestre.value;
    let semester_selected = 0;
    switch (option_semester_selected) {
        case '0':
            semester_selected = 1;
            break;
        case '1':
            semester_selected = 2;
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

let calificaciones1 = {'year':2016, 'semester':1,'codigo':16501, 'asignatura': 'Calculo-1', 'creditos': 3, 'periodo1': 3.1, 'periodo2': 5.0, 'periodo3': 4.4, 'final': 4.2};

const cargarCalificaciones = (year, semester) => {
    
    console.log(`Año ${year} y Semestre ${semester}`);
};



cargarFechas();
cargarSemestres();
