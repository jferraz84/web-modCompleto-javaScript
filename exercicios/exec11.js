function anoBisexto(ano) {
    if (ano % 4 == 0 || ano % 400 == 0) {
        console.log(`O ano ${ano} é SIM um ano bisexto`)
    } else {
        console.log(`O ano ${ano} NÃO é um ano bisexto`)
    }
}

anoBisexto(122)
anoBisexto(400)
anoBisexto(800)
anoBisexto(1921)
anoBisexto(1945)
anoBisexto(1996)
anoBisexto(2016)
anoBisexto(1506)
