
//esta es la definicion de una funcion tradicional
function Saludo(name){
    return `hola ${name}, Estos son tus resultados: `;
}
//acc variable temporal para calcular promedio de una suma
//cal recorre todo el vactor

/*function Promedio(grades) {
    const suma = grades.reduce((acc,cal)=>acc+cal, 0 )
    const value = suma/grades.length;   
    return value;
} //version por defecto sin optimizar*/

function Promedio(grades) {
    const suma = grades.reduce((acc,cal)=>acc+cal, 0 )
    return suma/grades.length;   
}//Version optimizada



const ObtenerEstado = (promedio) => {
    if(promedio <=2.9) return "Reprobado"
    //else if((promedio > 3 ) && (promedio <=4)) return "Aceptable"
    else return "Excelente"
};

const mostrarReporte = (estudiante) => {
    const promedio = Promedio(estudiante.calificaciones);
    const estado = ObtenerEstado(promedio);

    console.log(Saludo(estudiante.nombre));
    console.log((`Asignatura: ${estudiante.asigantura}`));
    console.log((`Promedio: ${promedio}`));
    console.log((`Estado: ${estado}`));
    console.log((`//////////////////`));
    
}

const estudiante = [
    {nombre: "pepe", calificaciones:[1,2,3,4,5], asigantura: "calculo"},
    {nombre: "toño", calificaciones:[5,4,3,2,1], asigantura: "web"},
    {nombre: "Muñoz", calificaciones:[5,4,0,2,1], asigantura: "movil"},
    {nombre: "Michi", calificaciones:[5,4,5,3,4], asigantura: "pruebas"},
    {nombre: "Jose", calificaciones:[3,4,3,2,3], asigantura: "despliegue"}
        ];

        estudiante.forEach(mostrarReporte);