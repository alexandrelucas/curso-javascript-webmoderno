// operador ... rest (juntar) / spread (espalhar)
// usar rest com parâmetro de função

// usar spread com objeto
const funcionario = {nome: 'Maria', salario: 12348.99};
const clone = {ativo: true, ...funcionario}; // copiando os atributos de funcionario // nao gera impacto no objeto funcionarios
console.log(clone);

// spread com array

const grupoA = ['Joao', 'Pedro', 'Gloria'];
const grupoFinal = ['Maria', ...grupoA, 'Rafaela'];

console.log(grupoFinal);