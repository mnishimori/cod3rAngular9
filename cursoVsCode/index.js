function helloWorld(){
    console.log('Hello World');
}

const saudacao = () => {
    var dia = new Date();
    return dia.getHours <= 12 ? 'Bom dia' : (dia.getHours <= 18 ? 'Boa tarde' : 'Boa noite');
}

helloWorld();

// chamada da função saudacao no formato ECS6
console.log('A saudação do momento é ' + saudacao());