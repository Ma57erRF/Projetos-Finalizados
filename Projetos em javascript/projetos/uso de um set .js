const meuArray =[30,30,40,5,5,60,75,80,80,95,9,1,4,4,7,5,3,8,3,77,58,43,4,5,77,33,45,33,5,556,1000]

function achaValoresUnicos(arr) {
    const novoSet = new Set(arr);

    return [...novoSet];
}



console.log(achaValoresUnicos(meuArray))