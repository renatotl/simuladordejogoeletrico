const elementos = document.querySelectorAll("[id]");



let corFio ;
let  ligacaoPonto;
let preimeiraLigacao;
let segundaLigacao;
 let pontoSelecionado1;
 let pontoSelecionado2;




//conectando os fios a os quadrados


// pegando os fios do menu
elementos.forEach(elemento => {
    elemento.addEventListener("click", function(){
        const id = elemento.id;
        
        if(id== "fio1"){
            corFio = "pretoFase"
            console.log(corFio);
        } else if(id=="fio2"){
            corFio = "verdeTerra"
            console.log(corFio);
        } else if(id=="fio3"){
            corFio = "brancoRetorno"
            console.log(corFio);
        } else if(id=="fio4"){
            corFio = "azulNeltro"
            console.log(corFio);
        }else if(id=="fio5"){
            corFio = "marromRetorno"
            console.log(corFio);
        }


        if(id== "MAIN1"){
            pontoSelecionado1 = "MAIN1"
            console.log(pontoSelecionado1);
        } else if(id=="MAIN2"){
            pontoSelecionado1 = "MAIN2"
            console.log(pontoSelecionado1);
        } else if(id=="MAIN3"){
            pontoSelecionado1 = "MAIN3"
            console.log(pontoSelecionado1);
        } else if(id=="MAIN4"){
            pontoSelecionado1 = "MAIN4"
            console.log(pontoSelecionado1);
        } 
        
        if(id== "MAIN1" && pontoSelecionado1 == true){
            pontoSelecionado2 = "MAIN1"
            console.log(pontoSelecionado2);
        } else if(id=="MAIN2"){
            pontoSelecionado2 = "MAIN2"
            console.log(pontoSelecionado2);
        } else if(id=="MAIN3"){
            pontoSelecionado2 = "MAIN3"
            console.log(pontoSelecionado2);
        } else if(id=="MAIN4"){
            pontoSelecionado2 = "MAIN4"
            console.log(pontoSelecionado2);
        };;
    });
}


);


function fioConectado(){
    console.log(ligacaoPonto);
    if(corFio == "pretoFase"){
        ligacaoPonto = "pretoFase";
        console.log(ligacaoPonto);
    }else if(corFio == "verdeTerra"){
        ligacaoPonto = "verdeTerra";
        console.log(ligacaoPonto);
    }else if(corFio == "brancoRetorno"){
        ligacaoPonto = "brancoRetorno";
        console.log(ligacaoPonto);
    }else if(corFio == "azulNeltro"){
        ligacaoPonto = "azulNeltro";
        console.log(ligacaoPonto);
    }else if(corFio == "marromRetorno"){
        ligacaoPonto = "marromRetorno";
        console.log(ligacaoPonto);
    }
 
 };




//conectando os fios a os quadrados
function fioConectadoParte1(){

    if(pontoSelecionado1 == "MAIN1" && corFio == "pretoFase"){
        preimeiraLigacao  = "pretoFase"
        console.log(preimeiraLigacao);
    }else if(pontoSelecionado1 == "MAIN2" && corFio == "pretoFase"){
        preimeiraLigacao  = "pretoFase"
        console.log(preimeiraLigacao);
    }else if(pontoSelecionado1 == "MAIN3" && corFio == "pretoFase"){
        preimeiraLigacao  = "pretoFase"
        console.log(preimeiraLigacao);
    }else if(pontoSelecionado1 == "MAIN4" && corFio == "pretoFase"){
        preimeiraLigacao  = "pretoFase"
        console.log(preimeiraLigacao);
    }
    
    else if(pontoSelecionado1 == "MAIN1" && corFio == "verdeTerra"){
        preimeiraLigacao  = "verdeTerra"
        console.log(preimeiraLigacao);
    }else if(pontoSelecionado1 == "MAIN2" && corFio == "verdeTerra"){
        preimeiraLigacao  = "verdeTerra"
        console.log(preimeiraLigacao);
    }else if(pontoSelecionado1 == "MAIN3" && corFio == "verdeTerra"){
        preimeiraLigacao  = "verdeTerra"
        console.log(preimeiraLigacao);
    }else if(pontoSelecionado1 == "MAIN4" && corFio == "verdeTerra"){
        preimeiraLigacao  = "verdeTerra"
        console.log(preimeiraLigacao);
    }

    else if(pontoSelecionado1 == "MAIN1" && corFio == "brancoRetorno"){
        preimeiraLigacao  = "brancoRetorno"
        console.log(preimeiraLigacao);
    }else if(pontoSelecionado1 == "MAIN2" && corFio == "brancoRetorno"){
        preimeiraLigacao  = "brancoRetorno"
        console.log(preimeiraLigacao);
    }else if(pontoSelecionado1 == "MAIN3" && corFio == "brancoRetorno"){
        preimeiraLigacao  = "brancoRetorno"
        console.log(preimeiraLigacao);
    }else if(pontoSelecionado1 == "MAIN4" && corFio == "brancoRetorno"){
        preimeiraLigacao  = "brancoRetorno"
        console.log(preimeiraLigacao);
    }

    else if(pontoSelecionado1 == "MAIN1" && corFio == "azulNeltro"){
        preimeiraLigacao  = "azulNeltro"
        console.log(preimeiraLigacao);
    }else if(pontoSelecionado1 == "MAIN2" && corFio == "azulNeltro"){
        preimeiraLigacao  = "azulNeltro"
        console.log(preimeiraLigacao);
    }else if(pontoSelecionado1 == "MAIN3" && corFio == "azulNeltro"){
        preimeiraLigacao  = "azulNeltro"
        console.log(preimeiraLigacao);
    }else if(pontoSelecionado1 == "MAIN4" && corFio == "azulNeltro"){
        preimeiraLigacao  = "azulNeltro"
        console.log(preimeiraLigacao);
    }

    else if(pontoSelecionado1 == "MAIN1" && corFio == "marromRetorno"){
        preimeiraLigacao  = "marromRetorno"
        console.log(preimeiraLigacao);
    }else if(pontoSelecionado1 == "MAIN2" && corFio == "marromRetorno"){
        preimeiraLigacao  = "marromRetorno"
        console.log(preimeiraLigacao);
    }else if(pontoSelecionado1 == "MAIN3" && corFio == "marromRetorno"){
        preimeiraLigacao  = "marromRetorno"
        console.log(preimeiraLigacao);
    }else if(pontoSelecionado1 == "MAIN4" && corFio == "marromRetorno"){
        preimeiraLigacao  = "marromRetorno"
        console.log(preimeiraLigacao);
    }

 
 };


function fioConectadoParte2(){

    if(pontoSelecionado2 != pontoSelecionado1 && ligacaoPonto == "pretoFase"){
        segundaLigacao  = "pretoFase"
        console.log(segundaLigacao);
    }else 

    if(pontoSelecionado2 != pontoSelecionado1 && ligacaoPonto == "verdeTerra"){
        segundaLigacao  = "verdeTerra"
        console.log(segundaLigacao);
    }else 

    if(pontoSelecionado2 != pontoSelecionado1 && ligacaoPonto == "brancoRetorno"){
        segundaLigacao  = "brancoRetorno"
        console.log(segundaLigacao);
    }else 

    if(pontoSelecionado2 != pontoSelecionado1 && ligacaoPonto == "azulNeltro"){
        segundaLigacao  = "azulNeltro"
        console.log(segundaLigacao);
    }else 

    if(pontoSelecionado2 != pontoSelecionado1 && ligacaoPonto == "marromRetorno"){
        segundaLigacao  = "marromRetorno"
        console.log(segundaLigacao);
    }

 
 };

 function fioConectadoParte3(){


    if(ligacaoPonto == "pretoFase" && preimeiraLigacao =="pretoFase" && segundaLigacao == "pretoFase" ){
        let elementosCss = document.getElementById("MAIN1");
         // elementosCss.querySelector("MAIN1 ");
         console.log(elementosCss);
         elementosCss.id = "MAIN10"

    console.log("fundionou");
    }
    console.log(ligacaoPonto);
    console.log(preimeiraLigacao);
    console.log(segundaLigacao);
 
 
 };

//chamando a funcao
fioConectado();
fioConectadoParte1();
fioConectadoParte2();
fioConectadoParte3();

setInterval(fioConectado, 1000);
setInterval(fioConectadoParte1, 1000);
setInterval(fioConectadoParte2, 1000);
setInterval(fioConectadoParte3, 1000);