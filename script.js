function EnviarFormulario() {
    // Pegar os valores digitados no input
    const nome = document.getElementById("nome").value;
    const sobrenome = document.getElementById("sobrenome").value;
    const nascimento = document.getElementById("nascimento").value;
    const rg = document.getElementById("rg").value;
    const cpf = document.getElementById("cpf").value;
    const nacionalidade = document.getElementById("nacionalidade").value;
    const naturalidade = document.getElementById("naturalidade").value;
    const altura = document.getElementById("altura").value;
    const peso = document.getElementById("peso").value;
    const assinatura = document.getElementById("assinatura").value;

    // Mostrar no console
    console.log("Nome:", nome);
    console.log("Sobrenome:", sobrenome);
    console.log("Nascimento:", nascimento);
    console.log("RG:", rg);
    console.log("CPF:", cpf);
    console.log("Nacionalidade:", nacionalidade);
    console.log("Naturalidade:", naturalidade);
    console.log("Altura:", altura);
    console.log("Peso:", peso);
    console.log("Assinatura Clube Leitura:", assinatura);
}

    // Banco de dados
const bancoJson = `{
    "Tereza": {
        "nome": "Tereza",
        "sobrenome": "Cristina",
        "nascimento": "16/08/2023",
        "rg": "36040081",
        "cpf": "50822931323",
        "nacionalidade": "Brasileiro",
        "naturalidade": "Mogiano",
        "altura": "15cm",
        "peso": "1k",
        "assinatura": "Sim"
    },
    "Davi": {
        "nome": "Davi",
        "sobrenome": "Lucas",
        "nascimento": "03/28/2020",
        "rg": "59641027",
        "cpf": "50339848611",
        "nacionalidade": "Brasileiro",
        "naturalidade": "Mogiano",
        "altura": "1.15",
        "peso": "20k",
        "assinatura": "Não"
    }
}`;

const bancoDeDados = JSON.parse(bancoJson);

// Buscar os dados pelo nome digitado
function BuscarDadosPorNome() {
    const nomeDigitado = document.getElementById("nome").value;

    if (bancoDeDados[nomeDigitado]) {
        const dados = bancoDeDados[nomeDigitado];

        document.getElementById("sobrenome").value = dados.sobrenome;
        document.getElementById("nascimento").value = dados.nascimento;
        document.getElementById("rg").value = dados.rg;
        document.getElementById("cpf").value = dados.cpf;
        document.getElementById("nacionalidade").value = dados.nacionalidade;
        document.getElementById("naturalidade").value = dados.naturalidade;
        document.getElementById("altura").value = dados.altura;
        document.getElementById("peso").value = dados.peso;
        document.getElementById("assinatura").value = dados.assinatura;

        // Mostrar no console
        console.log("Nome:", dados.nome);
        console.log("Sobrenome:", dados.sobrenome);
        console.log("Nascimento:", dados.nascimento);
        console.log("RG:", dados.rg);
        console.log("CPF:", dados.cpf);
        console.log("Nacionalidade:", dados.nacionalidade);
        console.log("Naturalidade:", dados.naturalidade);
        console.log("Altura:", dados.altura);
        console.log("Peso:", dados.peso);
        console.log("Assinatura Clube Leitura:", dados.assinatura);

    } else {
        alert("Usuário não cadastrado");
    }
}
