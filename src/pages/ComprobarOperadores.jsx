function obtenerUltimoOperador(operacion) {
    // Definimos la jerarquía de los operadores
    const jerarquia = {
        '+': 3,
        '-': 4,
        '*': 1,
        '/': 2
    };

    // Eliminamos los espacios en blanco de la operación
    operacion = operacion.replace(/\s/g, '');

    // Inicializamos el número de operadores y el último operador
    let numOperadores = 0;
    let ultimoOperador = '';
    let operadoranterior = 0
    let nUO = 0
    let paso = false
    let j = 0

    // Recorremos la operación para contar los operadores y encontrar el último operador
    for (let i = 0; i < operacion.length; i++) {
        let caracter = operacion.charAt(i);
        console.log(i+ " " +jerarquia.hasOwnProperty(caracter));
        if (jerarquia.hasOwnProperty(caracter)) {
            if(!paso){
                numOperadores++;
                ultimoOperador = caracter;
                j=i;
                paso=true;
            }else {
                let caracterA= operacion.charAt(j);
                numOperadores++;
                switch(caracter){
                    case '+':
                        nUO=3;
                        break;
                    case '-':
                        nUO=4;
                        break;
                    case '/':
                        nUO=2;
                        break;
                    case '*':
                        nUO=1;
                        break;
                }
                switch(caracterA){
                    case '+':
                        operadoranterior=3;
                        break;
                    case '-':
                        operadoranterior=4;
                        break;
                    case '/':
                        operadoranterior=2;
                        break;
                    case '*':
                        operadoranterior = 1;
                        break;
                }
                ultimoOperador = caracter
                console.log(nUO > operadoranterior)
                if (nUO > operadoranterior){
                    switch(operadoranterior){
                        case 1:
                            ultimoOperador = '*';
                            break;
                        case 2:
                            ultimoOperador = '/';
                            break;
                        case 3:
                            ultimoOperador = '+';
                            break;
                        case 4:
                            ultimoOperador = '-';
                            break;
                    }
                }
                console.log(ultimoOperador)
                j=i
            }
        }
    }

    // Devolvemos el número de operadores y el último operador
    return {
        numOperadores: numOperadores,
        ultimoOperador: ultimoOperador
    };
}

export default obtenerUltimoOperador;