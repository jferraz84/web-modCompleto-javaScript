let stringPontuacao = "30, 45, 55, 65, 25, 85, 16, 49, 15, 54, 71"

function avaliaResultados(stringPontuacao) {
    let pontuacoes = stringPontuacao.split(", ")
    let qntQuebraRecordes  = 0
    let piorJogo = 1
    let maiorPontuacao = pontuacoes[0]
    let menorPontuacao = pontuacoes[0]

    for (let i = 1; i < pontuacoes.length; i++){
        if (pontuacoes[i] > maiorPontuacao) {
            maiorPontuacao = pontuacoes[i]
            qntQuebraRecordes++
        }else if (pontuacoes[i] < menorPontuacao) {
            menorPontuacao = pontuacoes[i]
            piorJogo = i+1
        }
        
    }
    return [`Foram ${qntQuebraRecordes} vezes de record batido, e o n° do Jogo de seu pior resultado foi o jogo ${piorJogo} com ${menorPontuacao} pontos`]
}

console.log("Resultados Obtidos dos jogos !!")
console.log("Resultados: " +avaliaResultados(stringPontuacao))