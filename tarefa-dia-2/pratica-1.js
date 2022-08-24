// Declarando variáveis para mensagem de turismo

let meuNome //Nome 
let meuEmail //email
let minhaProfissao //Profissão
let minhaIdade // Idade
let minhaPreferencia //o lugar que você sonha um dia conhecer (pode ser um país, cidade ou um local mesmo)

// Atribuições

meuNome = "Elon Musk"
meuEmail =  "tesla@gmail.com"
minhaProfissao = "CEO"
minhaIdade = 30 
minhaPreferencia = "Califórnia"

// Processamento para saída de dados check list

console.log("------Dados do cliente de turismo--------")
console.log("Nome-> " + meuNome)
console.log("Idade-> " + minhaIdade + " anos")
console.log("email-> " + meuEmail)
console.log("Profissão-> " + minhaProfissao)
console.log("Lugar de preferência para conhecer-> " + minhaPreferencia)

// Processamento para mala direta

console.log(`Olá ${meuNome}! Somos aqui da agência de turismo Viagem dos Sonhos.
Estamos te escrevendo este email, pois acabamos de confirmar as compras das passagens aéreas para ${minhaPreferencia}.
Confirma pra gente alguns dados? A sua idade é ${minhaIdade}, você é ${minhaProfissao} e o seu email é ${meuEmail}? Ficamos no aguardo.
Muito obrigado e boa viagem! :D`)