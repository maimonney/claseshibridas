class Alumno  {
    //Atributos
nombre = '';
apellido = '';
edad = 0;
carrera = '';
materia = [];

    //Constructor
constructor (nombre, apellido, edad,carrera,materia){
    this.nombre = nombre;
    this.apellido = apellido; 
    this.edad = edad;
    this.carrera = carrera;
    this.materia= materia;
}

    //Metodos
mostrarCarrera (){
    console.log (this.carrera);
}
Nombre( ){
    console.log (`${this.nombre} ${this.apellido}`)
}
modificarEdad(edad ){
this.edad = edad 
}
agregarMateria(materia ){
    this.materia += materia
}
mostrarMaterias(){
    console.log(this.materia)
}
retornarEdad(){
    return this.edad 
}
}

    //Crear una instacia a objeto
const p1 = new Alumno ('Bebe', 'Reno', 25, 'Diseño', ['Ingles', 'Matematica', 'Lengua']);

p1.agregarMateria([`,fisica`])
p1.modificarEdad(24)
console.log({p1})
