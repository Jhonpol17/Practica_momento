function student(nombre,correo,promedio){
    this.nombre = nombre;
    this.correo = correo;
    this.promedio = promedio;
    
    this.validaPromedio = function(){
        if (this.promedio > 70) {return "Aprobado"
        }
        else {return "Reprobado"}
    }
    let studentOne = new student("John","jppatino.2@sudamericano.edu.ec", 95)
studentOne();
}

