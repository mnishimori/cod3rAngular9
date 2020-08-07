function helloWorld(){
    console.log('Hello World');
}

// TODO teste de to do
const saudacao = () => {
    var dia = new Date();
    return dia.getHours <= 12 ? 'Bom dia' : (dia.getHours <= 18 ? 'Boa tarde' : 'Boa noite');
}

// FIXME teste do fix me
helloWorld();

// chamada da função saudacao no formato ECS6
console.log('A saudação do momento é ' + saudacao());