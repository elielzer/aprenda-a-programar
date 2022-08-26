// Dado um número, "numero", inteiro, maior do que zero,
// esse código irá calcular se ele é um número primo

let numero = 1500450271

let resto = 0

let i = 2

let resultado = `Sim, o número ${numero} é primo!` // template padrão
// este padrão somente será modificado caso o seja divisível 


// Verificar se é divisível

while ( i < numero  ) {

    // Calcule o resto da divisão de "numero" por um possível divisor "i"
    resto = numero % i

    if (resto == 0 ) { // se resto é zero então é divisivel e
        // o número não é primo então,
        resultado = `Não, o número ${numero} não é primo!`
        // finalizar o processo
        i = numero 

    } else { // senão fazer o incremento para o próximo "i" (divisor)
        
        i += 1

    }

}



console.log (`${resultado}`)  // Saída do resultado.