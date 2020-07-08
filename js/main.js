function iniciar(){
    window.location.href="jogo.html"
}

// por algum motivo o parametro que recebe o elemento da função filter deve ser posicionado por último
function revelar(opcao, elemento){
    return elemento !== opcao; 
}

function trocarPorta(revelada, anterior,  elemento){
    return elemento !== revelada && elemento !== anterior;
}
//

function escolher(opcao){
    
    const portas = sortearPortas();
    console.log(portas.carro, portas.cabritos);

    //a porta revelada será aquela que contiver um cabrito e for diferente da opção do usuário.
    let revelada = portas.cabritos.filter(revelar.bind(this, opcao));
    if(Array.isArray(revelada) === true){
        revelada = revelada[randomIntFromInterval(0, revelada.length-1)];
    }
    console.log(revelada);

    const trocar = prompt(`Monty: Você escolheu a porta ${opcao}. 
                           Há um cabrito atrás da porta ${revelada}.
                           \nDeseja trocar ou manter sua escolha?
                           Digite 1 para trocar ou 0 para manter`);

    switch(parseInt(trocar)){
        case 0:
         
            if(portas.carro === opcao){
                alert("boa");
            } else {
                alert("perdeu"); 
            } 
            break;
            
        case 1:
            opcao = [1,2,3].filter(trocarPorta.bind(this, revelada, opcao))[0];
       
            if(portas.carro === opcao){
                alert("boa");
            } else {
                alert("perdeu"); 
            } 
            break;
    }

        
}

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function sortearPortas(){

    const portas = [1,2,3];

    let sorteadas = {
        carro: portas.splice(randomIntFromInterval(0, portas.length - 1), 1),
        cabritos: portas.splice(0, 2)
    }

    return {carro: sorteadas.carro[0], cabritos: sorteadas.cabritos}
}
