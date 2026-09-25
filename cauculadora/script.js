const visor = document.getElementById("visor");

// Adiciona números e operadores ao visor
function adicionar(valor) {
    visor.value += valor;
}

// Limpa todo o visor
function apagar() {
    visor.value = "";
}

// Apaga o último caractere
function excluir() {
    visor.value = visor.value.slice(0, -1);
}

// Realiza o cálculo
function caucular() {
    try {
        let expressao = visor.value;

        // Troca "x" por "*" para o JavaScript entender multiplicação
        expressao = expressao.replace(/x/g, "*");

        // Verifica se o visor está vazio
        if (expressao === "") {
            return;
        }

        // Calcula a expressão
        visor.value = eval(expressao);
    } catch (erro) {
        visor.value = "Erro";
    }
}
