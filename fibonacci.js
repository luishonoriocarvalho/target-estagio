function belongsToFibonacciSequence(number) {
    
    let anterior = 0
    let atual = 1

    
    while (atual <= number) {
        
        if (number === atual) {
            return true
        }

        let proximo = anterior + atual
        anterior = atual
        atual = proximo
    }

    return false
}

function testFibonacciSequence(number) {
    if (belongsToFibonacciSequence(number)) {
        console.log(number + ' pertence à sequência de Fibonacci.')
    } else {
        console.log(number + ' não pertence à sequência de Fibonacci.')
    }
}

testFibonacciSequence(5)
testFibonacciSequence(7)
testFibonacciSequence(13)
