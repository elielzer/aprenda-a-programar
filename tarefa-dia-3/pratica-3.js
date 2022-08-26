// ---- Listar os números ímpares menores do que um número "n". 
// 

let n = 17

let nIntermediario =  n

let relatorio = `Lista de números ímpares menos do que ${n}`

let restoDaDivisao

let i = 1

restoDaDivisao = nIntermediario % 2
    
// Se "nIntermediario" for ímpar
    if ( restoDaDivisao > 0 ) {

        relatorio = `${ relatorio }
                ${ nIntermediario }`  // cria a  template de ímpares para relatório.

        if ( nIntermediario > 1) { // anexa os demais números caso "nIntermediario" seja >  1

            while (i < n ) {
         
                nIntermediario = nIntermediario - 2   // calcula um numero antedente a "n"
                
                relatorio = `${ relatorio } 
                ${ nIntermediario }`  // anexa o valor ímpar calculado no template.
                
                i += 2  // incremento de dois em dois
            }
        }   
       
        
    } else { // se "nIntermediario" NÃO for ímpar, e nessa condiçaõ fazer:

        nIntermediario = nIntermediario - 1 // calcula o número impar imediatamente menor 

        relatorio = `${ relatorio }
            ${ nIntermediario }`  // cria a template de ímpares para relatório para a condição

        while (i <= (n-2) ) {
 
        
            nIntermediario = nIntermediario - 2   // calcula um numero ímpar antecedente
            
            relatorio =  `${ relatorio } 
            ${ nIntermediario }`  // anexa o valor ímpar calculado no rel.

            i += 2  // incremento de dois em dois
            
        } 

    }

    console.log ( `${relatorio}` ) // Saida final

    //Fim