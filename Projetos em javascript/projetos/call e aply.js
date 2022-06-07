function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}
function anosAtras(anos) {
	return `${anos} anos atrás, ${this.nome} tinha ${
		this.idade - anos
	} anos de idade.`;
}

const pessoa1 = {
	nome: 'Vanessa',
	idade: 54,
};

const pessoa2 = {
	nome: 'Paulo',
	idade: 19,
};

const pessoa3 = {
	nome: 'João',
	idade: 35,
};

console.log(calculaIdade.call(pessoa3, 12));
console.log(calculaIdade.apply(pessoa2, [50]));
console.log(anosAtras.call(pessoa3, 15));
console.log(anosAtras.apply(pessoa2, [5]));