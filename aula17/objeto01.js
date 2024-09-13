let pessoa = {nome: 'Ester',
    sexo: 'F',
    peso: 79.5,
    emagrecer(p=10) {
    this.peso -= p
    },
}

console.log(`${pessoa.nome} pesa ${pessoa.peso}`)