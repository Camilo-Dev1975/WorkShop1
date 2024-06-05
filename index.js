function point1_A () {
        const operatorSalary = +prompt("¿Cual es el sueldo del operario?", 0);
        const yearsOfAntiguaty = +prompt("¿Cuantos Años de antiguedad tiene el operario?", 0);

        console.log(`1. El sueldo del operario es inferior a 2000 USD?: ${operatorSalary < 2000}. La antiguedad de operario es igual o superior a 10 años?: ${yearsOfAntiguaty >= 10}`);
        console.log(`2. El sueldo del operario es inferior a 2000 USD?: ${operatorSalary < 2000}. La antiguedad del operario es menor a 10 años?: ${yearsOfAntiguaty < 10}`)
        console.log(`3. El sueldo del operario es mayor o igual a 2000 USD?: ${operatorSalary >= 2000}`);
}


function point1_B () {
    alert("Para que el programa funcione correctamente debes poner un valor sin puntos");
    const TOTAL_PURCHASE = +prompt("Ingresa el valor total de lo que compraste", 0);

    console.log(`Valor: ${TOTAL_PURCHASE}COP ¿Este valor aplica descuento? ${TOTAL_PURCHASE > 100000}`);
}

function point1_C () {
    let numberMultiple = +prompt("Ingresa un numero para saber si es multiplo de 2", 0);

    console.log(`Valor: ${numberMultiple} Este valor es multiplo? ${numberMultiple % 2 === 0}`);
} 

function point1_D () {
    const employeeName = prompt("Ingresa el nombre del empleado", "");
    const salaryPerHours = +prompt("Ingresa Tu salario basico por horas", 5416);;
    const numberOfHoursPerMonth = +prompt("Ingresa el numero de horas que trabajas al mes", 9);

    let salaryPerMonth = (salaryPerHours * numberOfHoursPerMonth) * 30;
    console.log(`Su salario basico mensual serian aproximadamente: ${salaryPerMonth}`);
    console.log(`Recibes subsidio de transporte: ${salaryPerMonth <= 700000}`);

    console.log(`Nombre del empleado: ${employeeName}, Su salario basico mensual es de: ${salaryPerMonth}, Es apto para recibir subsidio de transporte: ${salaryPerMonth <= 700000}`);
}

function point1_E () {
    const a = "a";
    const e = "e";
    const i = "i";
    const o = "o";
    const u = "u";

    const value = prompt("Ingrese una letra del abecedario para determinar si es vocal o no", "");

    console.log(`El Valor ingresado: ${value}, Es vocal?: ${value === a || value === e || value === i || value === o || value === u}`);

}

function point1_F () {
    let passportInitialChar = prompt("Por favor ingresa el primer caracter de tu pasaporte", );

    console.log(`Tu pasaporte es extranjero?: ${ passportInitialChar !== "A" && passportInitialChar !== "a"}. Tu pasaporte es nacional?: ${passportInitialChar === "A" || passportInitialChar === "a"}`);

}

function point2 () {

    a = 4;
    b = 7;
    c = 2 * b;
    x = a;
    y = 3 * x;
    u = 6;
    w = 10;
    z = 2 * w;

    console.log(`Resultado A: ${a / (b * c) }`);
    console.log(`Resultado B: ${ Math.pow(a,2) + Math.pow(b,92) }`);
    console.log(`Resultado C: ${ (x + y) / (u + (w / a)) }`);
    console.log(`Resultado D: ${ x / y / (z + w) }`);
}
// Apartir de aqui inicia el Punto Numero 3

const P_TRUE = true;
const P_FALSE = false;
const Q_TRUE = true;
const Q_FALSE = false;

function point3_A () {

    console.log(`Punto A - Primera Casilla: ${ !P_TRUE && Q_TRUE}`);
    console.log(`Punto A - Segunda Casilla: ${ !P_TRUE && Q_FALSE}`);
    console.log(`Punto A - Tercera Casilla: ${ !P_FALSE && Q_TRUE}`);
    console.log(`Punto A - Cuarta Casilla: ${ !P_FALSE && Q_FALSE}`);

}

function point3_B () {

    console.log(`Punto B - Primera Casilla: ${ !P_TRUE && !Q_TRUE}`);
    console.log(`Punto B - Segunda Casilla: ${ !P_TRUE && !Q_FALSE}`);
    console.log(`Punto B - Tercera Casilla: ${ !P_FALSE && !Q_TRUE}`);
    console.log(`Punto B - Cuarta Casilla: ${ !P_FALSE && !Q_FALSE}`);

}
