function classificacaoTriangulo(a, b, c) {
    if (a == b && b == c) {
        console.log("Esse Triângulo é 'Equilátero'")
    } else if (a == b || b == c || a == c) {
        console.log("Esse Triângulo é 'Isósceles'")
    } else {
        console.log("Esse Triângulo é 'Escaleno")
    }

}

classificacaoTriangulo(5, 5, 5)
classificacaoTriangulo(2, 3, 3)
classificacaoTriangulo(4, 8, 6)