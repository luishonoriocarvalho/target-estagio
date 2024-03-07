function inverterString(str) {
    let novaString = ''
    for (let i = str.length - 1; i >= 0; i--) {
        novaString += str[i]
    }
    return novaString
}


const minhaString = "testando"
const stringInvertida = inverterString(minhaString)
console.log("String original:", minhaString)
console.log("String invertida:", stringInvertida)
