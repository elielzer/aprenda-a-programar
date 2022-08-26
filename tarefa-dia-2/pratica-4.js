// Revisando as faturas de mercadorias - ITuring Trade International S/A
//
let relatorio // string com Saida de console apresentando a valores corrigidos


// Aqui o mapa bruto é entrado para processamento

let produtoA = {"nome": "camiseta", "valor": 100.00, "internacional": true};
let produtoB = {"nome": "perfume", "valor": 200.00, "internacional": true};
let produtoC = {"nome": "sandália", "valor": 120.00, "internacional": false};


// ------------------------ Produto A 

if ( produtoA.internacional == true ) {
    produtoA.valor = "Produto A ->" +  produtoA.valor * 1.20
} else {
    produtoA.valor = "Produto A ->" + produtoA.valor * 1.12
}

relatorio = `${produtoA.valor}`


// ----------------------- Produto B

if ( produtoB.internacional == true ) {
    produtoB.valor = "Produto B ->" +  produtoB.valor * 1.20
} else {
    produtoB.valor = "Produto B ->" + produtoB.valor * 1.12
}

relatorio = `${relatorio}
${produtoB.valor}`   


// ----------------------- Produto C

if ( produtoC.internacional == true ) {
    produtoC.valor = "Produto C ->" +  produtoC.valor * 1.20
} else {
    produtoC.valor = "Produto C ->" +  produtoC.valor * 1.12
}

relatorio = `${relatorio}
${produtoC.valor}`

// -------------------------- Saida de relatório
console.log (relatorio)

// Fim