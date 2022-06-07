const alunos = [
    {
        nome: 'João',
        nota: 5,
        turma: '1B',
    },
    {
        nome:'sofia',
        nota: 9,
        turma: '1B',
    },
    {
        nome:'Paulo',
        nota:6,
        turma:'2C',
    },
    {
        nome:'Luiz',
        nota:'4',
        turma:'2C',
    },
];

function alunosAprovados (arr,mediaf ) {
    let aprovados=[];

    for (let i = 0; i < arr.length; i++) {

       const { nota,nome } = arr[i];

        if(nota >= mediaf) {
            aprovados.push(nome);
        }
    }
    return aprovados;
} 
function alunosReprovados (arr,mediaf ) {
    let reprovados=[];

    for (let i = 0; i < arr.length; i++) {

       const { nota,nome } = arr[i];

        if(nota < mediaf) {
            reprovados.push(nome);
        }
    }
    return reprovados;
}
   
console.log (alunosAprovados(alunos,5))
console.log (alunosReprovados(alunos,5))