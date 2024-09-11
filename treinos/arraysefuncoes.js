let pala = ['oi', 'tchau', 'tudo bem?']

console.log(pala)

pala[3] = 'como vai?'
// a posiçao [] recebe o valor = 

pala.push('oie')

// adiciona algum valor na ultima posiçao

console.log(pala)
console.log(pala.length + 'length')

console.log(pala.indexOf('tchau') + 'indexOf')


let num = [3, 7, 9, 5, 1]

num.sort()
console.log(num)
console.log(num.length)
console.log(num.indexOf(5))

for ( pos in num ){
    console.log(num[pos])

}