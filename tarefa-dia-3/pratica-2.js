// ----------- Fazendo uma Tabuada Matemática -----------------
//
// O número fíxo a ser multiplicador será uma entrada (input): "n"
// o multiplicando, "i" irá variar de 1 até 10
// cada linha da tabuada ser um resultado de "n" x "i"

let n = 9

let i = 1


while ( i <=10 ) { 
    if ( i == 1 ) {
        console.log ( `TABUADA DE: ${n}:` )        // Cabeçalho da Tabuada.
    }
    console.log ( `${n} \u{00D7} ${i} = ${ n * i } `) // Resultado de uma linha.

    i += 1                                         // incremento unitário
 }