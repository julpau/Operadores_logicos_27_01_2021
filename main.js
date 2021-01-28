//OPERADORES AND
console.warn('EJERCICIO MIO');
console.warn('Operadores AND');
console.log(`Comparar true  && true  = ${true && true}`);
console.log(`Comparar true  && false = ${true && false}`);
console.log(`Comparar false && true  = ${false && true}`);
console.log(`Comparar false && false = ${false && false}`);

console.log(`Comparar 1 && 1 = ${1 && 1}`);
console.log(`Comparar 1 && 0 = ${1 && 0}`);
console.log(`Comparar 0 && 1 = ${0 && 1}`);
console.log(`Comparar 0 && 0 = ${0 && 0}`);

//OPERADORES OR
console.warn('Operadores OR');
console.log(`Comparar true  || true  = ${true || true}`);
console.log(`Comparar true  || false = ${true || false}`);
console.log(`Comparar false || true  = ${false || true}`);
console.log(`Comparar false || false = ${false || false}`);

console.log(`Comparar 1 || 1 = ${1 || 1}`);
console.log(`Comparar 1 || 0 = ${1 || 0}`);
console.log(`Comparar 0 || 1 = ${0 || 1}`);
console.log(`Comparar 0 || 0 = ${0 || 0}`);

//OPERADORES NOT
console.warn('Operadores OR');

console.log(`Operador NOT !false = ${!false}`);
console.log(`Operador NOT !true = ${!true}`);

console.log(`Operador NOT !0 = ${!0}`);
console.log(`Operador NOT !1 = ${!1}`);

//OPERADOR AND **$$**
console.warn('EJEMPLO DEL PROFESOR')
let afirmacion = true;
let negacion = false;
console.warn(`VARIABLES: Afirmacion = ${afirmacion}, Negación = ${negacion}`);
console.warn('OPERADOR AND');
console.log(`${negacion} && ${negacion} = ${negacion&&negacion}`);
console.log(`${negacion} && ${afirmacion} = ${negacion&&afirmacion}`);
console.log(`${afirmacion} && ${negacion} = ${afirmacion&&negacion}`);
console.log(`${afirmacion} && ${afirmacion} = ${afirmacion&&afirmacion}`);
console.warn('OPERADOR OR');
console.log(`${negacion} || ${negacion} = ${negacion||negacion}`);
console.log(`${negacion} || ${afirmacion} = ${negacion||afirmacion}`);
console.log(`${afirmacion} || ${negacion} = ${afirmacion||negacion}`);
console.log(`${afirmacion} || ${afirmacion} = ${afirmacion||afirmacion}`);

afirmacion = 1;
negacion = 0;
console.warn(`VARIABLES: Afirmacion = ${afirmacion}, Negación = ${negacion}`);
console.warn('OPERADOR AND');
console.warn(`Afirmacion = ${afirmacion}, Negación = ${negacion}`);
console.log(`${negacion} && ${negacion} = ${negacion&&negacion}`);
console.log(`${negacion} && ${afirmacion} = ${negacion&&afirmacion}`);
console.log(`${afirmacion} && ${negacion} = ${afirmacion&&negacion}`);
console.log(`${afirmacion} && ${afirmacion} = ${afirmacion&&afirmacion}`);
console.warn('OPERADOR OR');
console.log(`${negacion} || ${negacion} = ${negacion||negacion}`);
console.log(`${negacion} || ${afirmacion} = ${negacion||afirmacion}`);
console.log(`${afirmacion} || ${negacion} = ${afirmacion||negacion}`);
console.log(`${afirmacion} || ${afirmacion} = ${afirmacion||afirmacion}`);

console.log((5<3) && (!false) || (54!=9));
console.log((5<3) && (!false) || (54!=54));
console.warn(`Break = ${true}`);