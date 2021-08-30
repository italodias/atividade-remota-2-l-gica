var alunos = 10

for (let contador = 0; contador <= alunos; contador++) {
    if (contador == 0) {
        console.log("Zero")
    }else if (contador % 2 == 0) {
        console.log(`o ${contador} é par`)
    }else{
        console.log(`o ${contador} é impar`)
    } 
}