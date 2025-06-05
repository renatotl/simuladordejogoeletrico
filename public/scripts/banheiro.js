
//=========PRIMEIRO FIO======
// pegando os ids e separando em duas variaveis para melhor manipulacao
const elementos = document.querySelectorAll("[id]");
const elementos2 = document.querySelectorAll("[id]");
//=========PRIMEIRO FIO======




// ===========SEGUNDO FIO==========
const elementos3 = document.querySelectorAll("[id]");
const elementos4 = document.querySelectorAll("[id]");
// ===========SEGUNDO FIO==========


// ===========TERCEIRO FIO==========
const elementos5 = document.querySelectorAll("[id]");
const elementos6 = document.querySelectorAll("[id]");
// ===========TERCEIRO FIO==========




//=========PRIMEIRO FIO======
// declarando variaveis
let corFio ;// a cor do fio selecionado
let ligacaoPonto;
let preimeiraLigacao;
let segundaLigacao;
let pontoSelecionado1;
let pontoSelecionado2;
let verificador;
let filtro;
//=========PRIMEIRO FIO======





// ===========SEGUNDO FIO==========
// declarando variaveis
let corFio2 ;// a cor do fio selecionado
let ligacaoPonto2;
let preimeiraLigacao2;
let segundaLigacao2;
let pontoSelecionado3;
let pontoSelecionado4;
let verificador2;
let parte2 = false;
let filtro2;
// ===========SEGUNDO FIO==========


// ===========TERCEIRO FIO==========
// declarando variaveis
let corFio3 ;// a cor do fio selecionado
let ligacaoPonto3;
let preimeiraLigacao3;
let segundaLigacao3;
let pontoSelecionado5;
let pontoSelecionado6;
let verificador3;
let parte3 = false;
let filtro3;
// ===========TERCEIRO FIO==========



// VARIAVEIS AUXILIARES
let resetId = false;
let resetId2 = false;
let resetId3 = false;
let bug = false;
 let idioma = "portugues"
let id2;
let conexao;
let conexacaoL11Alto;
let conexacaoL12Alto;
let conexacaoL11Baixo;
let conexacaoL12Baixo;
let conexacaoL11BaixoBaixo;
let conexacaoL12BaixoBaixo;

// VARIAVEIS AUXILIARES





//=========PRIMEIRO FIO============
//conectando os fios a os quadrados
// pegando os click com os ids e validando
//primeiro o codigo le o segundo click e depois o primeiro
// 
elementos2.forEach(elemento2 => {
   // depois de varrer a variavel elemntos2 add um evento
    elemento2.addEventListener("click", function(){
        const id = elemento2.id;

        // valida se o pontoSelecionado1 for diferente de  undefined E pontoSelecionado1 
        // for diferente do id selecionado  se as duas for diferente e TRUE
        // com isso ele primeiro grava a primeira informacao na pontoSelecionado1 e so depois na 2
        // evita o erro de gravar o primeiro click em ambar as variaveis ao mesmo tempo
    if( pontoSelecionado1 != undefined && pontoSelecionado1 != id && pontoSelecionado2 != "MAIN1" &&
      pontoSelecionado2 != "MAIN2" && pontoSelecionado2 != "MAIN3" && pontoSelecionado2 != "MAIN4"&&
       pontoSelecionado2 != "MAIN5" && pontoSelecionado2 != "MAIN6"&&pontoSelecionado2 == undefined
    ){
       
 
console.log(" id do elementos2",id);
// se o id selecionado for diferente os valres abaixo se TRUE e ele grava a variavel
            if( id != "MAIN2" && id != "MAIN3" && id != "MAIN4" && id != "MAIN5"&& id != "MAIN6" && id != "fio1" 
               && id != "fio2" && id != "fio3" && id != "fio4" && id != "fio5"&& id !="menu" && id !="resetar"){
           
           return  pontoSelecionado2 = "MAIN1", console.log( "pontoSelecionado2",pontoSelecionado2);
            
         } else if(id != "MAIN1" && id != "MAIN3" && id != "MAIN4"&& id != "MAIN5"&& id != "MAIN6" && id != "fio1" 
               && id != "fio2" && id != "fio3" && id != "fio4" && id != "fio5"&& id !="menu"&& id !="resetar"){
            
           return  pontoSelecionado2 = "MAIN2", console.log("pontoSelecionado2",pontoSelecionado2);
             
         } else if(id != "MAIN1" && id != "MAIN2" && id != "MAIN4"&& id != "MAIN5"&& id != "MAIN6" && id != "fio1" 
               && id != "fio2" && id != "fio3" && id != "fio4" && id != "fio5"&& id !="menu"&& id !="resetar"){
            
           return  pontoSelecionado2 = "MAIN3", console.log("pontoSelecionado2",pontoSelecionado2);
             
         } else if(id != "MAIN1" && id != "MAIN2" && id != "MAIN3"&& id != "MAIN5"&& id != "MAIN6" && id != "fio1" 
               && id != "fio2" && id != "fio3" && id != "fio4" && id != "fio5"&& id !="menu"&& id !="resetar"){
            
          return  pontoSelecionado2 = "MAIN4", console.log("pontoSelecionado2",pontoSelecionado2);
            
         } 
         else if(id != "MAIN1" && id != "MAIN2" && id != "MAIN3"&& id != "MAIN4"&& id != "MAIN6" && id != "fio1" 
               && id != "fio2" && id != "fio3" && id != "fio4" && id != "fio5"&& id !="menu"&& id !="resetar"){
            
          return  pontoSelecionado2 = "MAIN5", console.log("pontoSelecionado2",pontoSelecionado2);
            
         } 

         else if(id != "MAIN1" && id != "MAIN2" && id != "MAIN3"&& id != "MAIN4"&& id != "MAIN5" && id != "fio1" 
               && id != "fio2" && id != "fio3" && id != "fio4" && id != "fio5"&& id !="menu"&& id !="resetar"){
            
          return  pontoSelecionado2 = "MAIN6", console.log("pontoSelecionado2",pontoSelecionado2);
            
         } 
}


    });
}


);





// pegando os fios do menu
// estesegundo forEach varre as variaveis do fio selecionado e o primeiro click do ponto de conexao do fio da rede
elementos.forEach(elemento => {
    elemento.addEventListener("click", function(){
        const id = elemento.id;
        
         console.log( "fio chato",id);
        console.log( "fio chato",corFio);

     

        if( corFio != "fio1"&& corFio != "fio2" && corFio != "fio3"&& corFio != "fio4" && corFio != "fio5"  && corFio != "pretoFase"&& corFio != "verdeTerra"
         && corFio != "brancoRetorno"&& corFio != "azulNeltro" && corFio != "marromRetorno"&& corFio == undefined
        ) {  

        if(id== "fio1"){
            
          return  corFio = "pretoFase" ,console.log("corFio",corFio);
         
        } else if(id=="fio2"){
              
          return  corFio = "verdeTerra",console.log("corFio",corFio);
        } else if(id=="fio3"){
            
          return  corFio = "brancoRetorno",console.log("corFio",corFio);
           
        } else if(id=="fio4"){
            
           return corFio = "azulNeltro",console.log("corFio",corFio);
            
        }else if(id=="fio5"){
            
         return   corFio = "marromRetorno",console.log("corFio",corFio);
            
        }
      }
        
        if(pontoSelecionado2 == undefined &&pontoSelecionado3 == undefined &&
         pontoSelecionado4 == undefined &&pontoSelecionado5 == undefined &&
         pontoSelecionado6 == undefined
       ){ 

// ele grava o valor do primeiro click na variavel pontoSelecionado1 SO SE a pontoSelecionado2 for undefined
        if((id== "MAIN1" )&& (pontoSelecionado2 == undefined)){
         verificador = "MAIN1";
          return  pontoSelecionado1 = "MAIN1" ,console.log("pontoSelecionado1",pontoSelecionado1),verificador = "MAIN1";
            
        } else if((id=="MAIN2") && (pontoSelecionado2 == undefined)){
         verificador = "MAIN2";
          return  pontoSelecionado1 = "MAIN2",console.log("pontoSelecionado1",pontoSelecionado1),verificador = "MAIN2",console.log( "verificador",verificador);

        } else if((id=="MAIN3") &&( pontoSelecionado2 == undefined)){
         verificador = "MAIN3";
          return  pontoSelecionado1 = "MAIN3",console.log("pontoSelecionado1",pontoSelecionado1),verificador = "MAIN3";

        } else if((id=="MAIN4") && (pontoSelecionado2 == undefined)){
         verificador = "MAIN4";
          return  pontoSelecionado1 = "MAIN4",console.log("pontoSelecionado1",pontoSelecionado1),verificador = "MAIN4";

        } 
        else if((id=="MAIN5") && (pontoSelecionado2 == undefined)){
         verificador = "MAIN5";
          return  pontoSelecionado1 = "MAIN5",console.log("pontoSelecionado1",pontoSelecionado1),verificador = "MAIN5";

        }
        else if((id=="MAIN6") && (pontoSelecionado2 == undefined)){
         verificador = "MAIN6";
          return  pontoSelecionado1 = "MAIN6",console.log("pontoSelecionado1",pontoSelecionado1),verificador = "MAIN6";

        }
        
        
        
// ate esse ponto as validacoes estao corrende bem
// a  pontoSelecionado1 so recebe valor se  pontoSelecionado2 for undefined
// e foi veio uma validacao que nao deixa a  pontoSelecionado1 receber o mesmo valor 
// ate esse ponto o corFio ja pode ter valor ou nao 
// as variaveis  pontoSelecionado1 e  pontoSelecionado2 ja terao valor
        
        
 } });
}


);
//=========PRIMEIRO FIO===========







// ===========SEGUNDO FIO==============
elementos4.forEach(elemento4 => {
   // depois de varrer a variavel elemntos2 add um evento
    elemento4.addEventListener("click", function(){
        const id = elemento4.id;

        // valida se o pontoSelecionado1 for diferente de  undefined E pontoSelecionado1 
        // for diferente do id selecionado  se as duas for diferente e TRUE
        // com isso ele primeiro grava a primeira informacao na pontoSelecionado1 e so depois na 2
        // evita o erro de gravar o primeiro click em ambar as variaveis ao mesmo tempo
    if( pontoSelecionado3 != undefined && pontoSelecionado3 != id && pontoSelecionado4 != "MAIN1" &&
      pontoSelecionado4 != "MAIN2" && pontoSelecionado4 != "MAIN3" && pontoSelecionado4 != "MAIN4"&&
       pontoSelecionado4 != "MAIN5"&& pontoSelecionado4 != "MAIN6"&& pontoSelecionado4 == undefined
    ){
       
console.log("id chato", id)

// se o id selecionado for diferente os valres abaixo se TRUE e ele grava a variavel
            if( id != "MAIN2" && id != "MAIN3" && id != "MAIN4" && id != "MAIN5" && id != "MAIN6" && id != "pretoFase" 
               && id != "verdeTerra" && id != "brancoRetorno" && id != "azulNeltro" && id != "marromRetorno"&& id != "resetar" && id != "menu"
               && id != "fio1"&& id != "fio2"&& id != "fio3"&& id != "fio4"&& id != "fio5"){
           
           return  pontoSelecionado4 = "MAIN1", console.log("pontoSelecionado4",pontoSelecionado4);
            
         } else if(id != "MAIN1" && id != "MAIN3" && id != "MAIN4" && id != "MAIN5"&& id != "MAIN6"&& id != "pretoFase" 
            && id != "verdeTerra" && id != "brancoRetorno" && id != "azulNeltro" && id != "marromRetorno" && id != "resetar" && id != "menu"
            && id != "fio1"&& id != "fio2"&& id != "fio3"&& id != "fio4"&& id != "fio5"){
            
           return  pontoSelecionado4 = "MAIN2", console.log("pontoSelecionado4",pontoSelecionado4);
             
         } else if(id != "MAIN1" && id != "MAIN2" && id != "MAIN4"&& id != "MAIN5"&& id != "MAIN6" && id != "pretoFase" 
            && id != "verdeTerra" && id != "brancoRetorno" && id != "azulNeltro" && id != "marromRetorno" && id != "resetar" && id != "menu"
            && id != "fio1"&& id != "fio2"&& id != "fio3"&& id != "fio4"&& id != "fio5"){
            
           return  pontoSelecionado4 = "MAIN3", console.log("pontoSelecionado4",pontoSelecionado4);
             
         } else if(id != "MAIN1" && id != "MAIN2" && id != "MAIN3"&& id != "MAIN5"&& id != "MAIN6" && id != "pretoFase" 
            && id != "verdeTerra" && id != "brancoRetorno" && id != "azulNeltro" && id != "marromRetorno" && id != "resetar" && id != "menu"
            && id != "fio1"&& id != "fio2"&& id != "fio3"&& id != "fio4"&& id != "fio5"){
            
          return  pontoSelecionado4 = "MAIN4", console.log("pontoSelecionado4",pontoSelecionado4);
            
         } 

         else if(id != "MAIN1" && id != "MAIN2" && id != "MAIN3"&& id != "MAIN4"&& id != "MAIN6" && id != "pretoFase" 
            && id != "verdeTerra" && id != "brancoRetorno" && id != "azulNeltro" && id != "marromRetorno" && id != "resetar" && id != "menu"
            && id != "fio1"&& id != "fio2"&& id != "fio3"&& id != "fio4"&& id != "fio5"){
            
          return  pontoSelecionado4 = "MAIN5", console.log("pontoSelecionado4",pontoSelecionado4);
            
         } 

         else if(id != "MAIN1" && id != "MAIN2" && id != "MAIN3"&& id != "MAIN4"&& id != "MAIN5" && id != "pretoFase" 
            && id != "verdeTerra" && id != "brancoRetorno" && id != "azulNeltro" && id != "marromRetorno" && id != "resetar" && id != "menu"
            && id != "fio1"&& id != "fio2"&& id != "fio3"&& id != "fio4"&& id != "fio5"){
            
          return  pontoSelecionado4 = "MAIN6", console.log("pontoSelecionado4",pontoSelecionado4);
            
         } 
}


    });
}


);



// pegando os fios do menu
// estesegundo forEach varre as variaveis do fio selecionado e o primeiro click do ponto de conexao do fio da rede
elementos3.forEach(elemento3 => {
    elemento3.addEventListener("click", function(){
        const id = elemento3.id;
         
        if(parte2 == true && corFio2 == undefined){




        
        if(id== "fio1" && corFio != undefined && corFio3 == undefined  ){
            
          return  corFio2 = "pretoFase" ,console.log("corFio2",corFio2);
         
        } else if(id=="fio2"&& corFio != undefined && corFio3 == undefined  ){
              
          return  corFio2 = "verdeTerra",console.log("corFio2",corFio2);
        } else if(id=="fio3"&& corFio != undefined && corFio3 == undefined ){
            
          return  corFio2 = "brancoRetorno",console.log("corFio2",corFio2);
           
        } else if(id=="fio4"&& corFio != undefined && corFio3 == undefined ){
            
           return corFio2 = "azulNeltro",console.log("corFio2",corFio2);
            
        }else if(id=="fio5"&& corFio != undefined && corFio3 == undefined ){
            
         return   corFio2 = "marromRetorno",console.log("corFio2",corFio2);
            
        }

// ele grava o valor do primeiro click na variavel pontoSelecionado1 SO SE a pontoSelecionado2 for undefined
        if((id== "MAIN1" )&& (pontoSelecionado4 == undefined)){
         verificador2 = "MAIN1";
          return  pontoSelecionado3 = "MAIN1" ,console.log("pontoSelecionado3",pontoSelecionado3),verificador2 = "MAIN1";
            
        } else if((id=="MAIN2") && (pontoSelecionado4 == undefined)){
         verificador2 = "MAIN2";
          return  pontoSelecionado3 = "MAIN2",console.log("pontoSelecionado3",pontoSelecionado3),verificador2 = "MAIN2",console.log( "verificador2",verificador2);

        } else if((id=="MAIN3") &&( pontoSelecionado4 == undefined)){
         verificador2 = "MAIN3";
          return  pontoSelecionado3 = "MAIN3",console.log("pontoSelecionado3",pontoSelecionado3),verificador2 = "MAIN3";

        } else if((id=="MAIN4") && (pontoSelecionado4 == undefined)){
         verificador2 = "MAIN4";
          return  pontoSelecionado3 = "MAIN4",console.log("pontoSelecionado3",pontoSelecionado3),verificador2 = "MAIN4";

        } 

        else if((id=="MAIN5") && (pontoSelecionado4 == undefined)){
         verificador2 = "MAIN5";
          return  pontoSelecionado3 = "MAIN5",console.log("pontoSelecionado3",pontoSelecionado3),verificador2 = "MAIN5";

        }

        else if((id=="MAIN6") && (pontoSelecionado4 == undefined)){
         verificador2 = "MAIN6";
          return  pontoSelecionado3 = "MAIN6",console.log("pontoSelecionado3",pontoSelecionado3),verificador2 = "MAIN6";

        }
        
        
        
// ate esse ponto as validacoes estao corrende bem
// a  pontoSelecionado1 so recebe valor se  pontoSelecionado2 for undefined
// e foi veio uma validacao que nao deixa a  pontoSelecionado1 receber o mesmo valor 
// ate esse ponto o corFio ja pode ter valor ou nao 
// as variaveis  pontoSelecionado1 e  pontoSelecionado2 ja terao valor
        
        
 } });
}


);
// ===========SEGUNDO FIO===============




// ===========TERCEIRO FIO==============
elementos6.forEach(elemento6 => {
   // depois de varrer a variavel elemntos2 add um evento
    elemento6.addEventListener("click", function(){
        const id = elemento6.id;

        // valida se o pontoSelecionado1 for diferente de  undefined E pontoSelecionado1 
        // for diferente do id selecionado  se as duas for diferente e TRUE
        // com isso ele primeiro grava a primeira informacao na pontoSelecionado1 e so depois na 2
        // evita o erro de gravar o primeiro click em ambar as variaveis ao mesmo tempo
    if( pontoSelecionado5 != undefined && pontoSelecionado5 != id && pontoSelecionado6 != "MAIN1" &&
      pontoSelecionado6 != "MAIN2" && pontoSelecionado6 != "MAIN3" && pontoSelecionado6 != "MAIN4"&&
       pontoSelecionado6 != "MAIN5"&& pontoSelecionado6 != "MAIN6"&& pontoSelecionado6 == undefined&&
       pontoSelecionado1 != undefined&&pontoSelecionado2 != undefined
    ){
       
console.log("id chato", id)

// se o id selecionado for diferente os valres abaixo se TRUE e ele grava a variavel
            if( id != "MAIN2" && id != "MAIN3" && id != "MAIN4" && id != "MAIN5" && id != "MAIN6" && id != "pretoFase" 
               && id != "verdeTerra" && id != "brancoRetorno" && id != "azulNeltro" && id != "marromRetorno"&& id != "resetar" && id != "menu"
               && id != "fio1"&& id != "fio2"&& id != "fio3"&& id != "fio4"&& id != "fio5"){
           
           return  pontoSelecionado6 = "MAIN1", console.log("pontoSelecionado6",pontoSelecionado6);
            
         } else if(id != "MAIN1" && id != "MAIN3" && id != "MAIN4" && id != "MAIN5"&& id != "MAIN6"&& id != "pretoFase" 
            && id != "verdeTerra" && id != "brancoRetorno" && id != "azulNeltro" && id != "marromRetorno" && id != "resetar" && id != "menu"
            && id != "fio1"&& id != "fio2"&& id != "fio3"&& id != "fio4"&& id != "fio5"){
            
           return  pontoSelecionado6 = "MAIN2", console.log("pontoSelecionado6",pontoSelecionado6);
             
         } else if(id != "MAIN1" && id != "MAIN2" && id != "MAIN4"&& id != "MAIN5"&& id != "MAIN6" && id != "pretoFase" 
            && id != "verdeTerra" && id != "brancoRetorno" && id != "azulNeltro" && id != "marromRetorno" && id != "resetar" && id != "menu"
            && id != "fio1"&& id != "fio2"&& id != "fio3"&& id != "fio4"&& id != "fio5"){
            
           return  pontoSelecionado6 = "MAIN3", console.log("pontoSelecionado6",pontoSelecionado6);
             
         } else if(id != "MAIN1" && id != "MAIN2" && id != "MAIN3"&& id != "MAIN5"&& id != "MAIN6" && id != "pretoFase" 
            && id != "verdeTerra" && id != "brancoRetorno" && id != "azulNeltro" && id != "marromRetorno" && id != "resetar" && id != "menu"
            && id != "fio1"&& id != "fio2"&& id != "fio3"&& id != "fio4"&& id != "fio5"){
            
          return  pontoSelecionado6 = "MAIN4", console.log("pontoSelecionado6",pontoSelecionado6);
            
         } 

         else if(id != "MAIN1" && id != "MAIN2" && id != "MAIN3"&& id != "MAIN4"&& id != "MAIN6" && id != "pretoFase" 
            && id != "verdeTerra" && id != "brancoRetorno" && id != "azulNeltro" && id != "marromRetorno" && id != "resetar" && id != "menu"
            && id != "fio1"&& id != "fio2"&& id != "fio3"&& id != "fio4"&& id != "fio5"){
            
          return  pontoSelecionado6 = "MAIN5", console.log("pontoSelecionado6",pontoSelecionado6);
            
         } 

         else if(id != "MAIN1" && id != "MAIN2" && id != "MAIN3"&& id != "MAIN4"&& id != "MAIN5" && id != "pretoFase" 
            && id != "verdeTerra" && id != "brancoRetorno" && id != "azulNeltro" && id != "marromRetorno" && id != "resetar" && id != "menu"
            && id != "fio1"&& id != "fio2"&& id != "fio3"&& id != "fio4"&& id != "fio5"){
            
          return  pontoSelecionado6 = "MAIN6", console.log("pontoSelecionado6",pontoSelecionado6);
            
         } 
}


    });
}


);




//
// pegando os fios do menu
// estesegundo forEach varre as variaveis do fio selecionado e o primeiro click do ponto de conexao do fio da rede
elementos5.forEach(elemento5 => {
    elemento5.addEventListener("click", function(){
        const id = elemento5.id;
         
        if(parte3 == true && corFio != undefined && corFio2 != undefined ){

console.log("corFio",corFio)
console.log("corFio2",corFio2)

        
        if(id== "fio1" && corFio != undefined&& corFio2 != undefined  ){
            
          return  corFio3 = "pretoFase" ,console.log("corFio3",corFio3);
         
        } else if(id=="fio2"&& corFio != undefined && corFio2 != undefined){
              
          return  corFio3 = "verdeTerra",console.log("corFio3",corFio3);
        } else if(id=="fio3"&& corFio != undefined&& corFio2 != undefined ){
            
          return  corFio3 = "brancoRetorno",console.log("corFio3",corFio3);
           
        } else if(id=="fio4"&& corFio != undefined && corFio2 != undefined){
            
           return corFio3 = "azulNeltro",console.log("corFio3",corFio3);
            
        }else if(id=="fio5"&& corFio != undefined && corFio2 != undefined){
            
         return   corFio3 = "marromRetorno",console.log("corFio3",corFio3);
            
        }

// ele grava o valor do primeiro click na variavel pontoSelecionado1 SO SE a pontoSelecionado2 for undefined
        if((id== "MAIN1" )&& (pontoSelecionado6 == undefined)){
         verificador3 = "MAIN1";
          return  pontoSelecionado5 = "MAIN1" ,console.log("pontoSelecionado5",pontoSelecionado5),verificador3 = "MAIN1";
            
        } else if((id=="MAIN2") && (pontoSelecionado6 == undefined)){
         verificador3 = "MAIN2";
          return  pontoSelecionado5 = "MAIN2",console.log("pontoSelecionado5",pontoSelecionado5),verificador3 = "MAIN2",console.log( "verificador3",verificador3);

        } else if((id=="MAIN3") &&( pontoSelecionado6 == undefined)){
         verificador3 = "MAIN3";
          return  pontoSelecionado5 = "MAIN3",console.log("pontoSelecionado5",pontoSelecionado5),verificador3 = "MAIN3";

        } else if((id=="MAIN4") && (pontoSelecionado6 == undefined)){
         verificador3 = "MAIN4";
          return  pontoSelecionado5 = "MAIN4",console.log("pontoSelecionado5",pontoSelecionado5),verificador3 = "MAIN4";

        } 

        else if((id=="MAIN5") && (pontoSelecionado6 == undefined)){
         verificador3 = "MAIN5";
          return  pontoSelecionado5 = "MAIN5",console.log("pontoSelecionado5",pontoSelecionado5),verificador3 = "MAIN5";

        }

        else if((id=="MAIN6") && (pontoSelecionado6 == undefined)){
         verificador3 = "MAIN6";
          return  pontoSelecionado5 = "MAIN6",console.log("pontoSelecionado5",pontoSelecionado5),verificador3 = "MAIN6";

        }
        
        
        
// ate esse ponto as validacoes estao corrende bem
// a  pontoSelecionado1 so recebe valor se  pontoSelecionado2 for undefined
// e foi veio uma validacao que nao deixa a  pontoSelecionado1 receber o mesmo valor 
// ate esse ponto o corFio ja pode ter valor ou nao 
// as variaveis  pontoSelecionado1 e  pontoSelecionado2 ja terao valor
        
        
 } });
}


);






//=========PRIMEIRO FIO===========
console.log(ligacaoPonto);

// se ja temos a cor do fio a gora passaresmos esse valor para outra variavel
// que e a   ligacaoPonto
function fioConectado(){
    

   if( parte2 == false  ){  



    if(corFio == "pretoFase"){

      return  ligacaoPonto = "pretoFase",console.log("ligacaoPonto",ligacaoPonto);
        
    }else if(corFio == "verdeTerra"){

       return ligacaoPonto = "verdeTerra",console.log("ligacaoPonto",ligacaoPonto);
        
    }else if(corFio == "brancoRetorno"){

       return ligacaoPonto = "brancoRetorno",console.log("ligacaoPonto",ligacaoPonto);
        
    }else if(corFio == "azulNeltro"){

       return ligacaoPonto = "azulNeltro",console.log("ligacaoPonto",ligacaoPonto);
       
    }else if(corFio == "marromRetorno"){

       return ligacaoPonto = "marromRetorno",console.log("ligacaoPonto",ligacaoPonto);
        
    }
 // funcionando ok
 // ate esse ponto ja temos os variaveis com valores 
 // corFio   
 //ligacaoPonto  
 //pontoSelecionado1  
 //pontoSelecionado2  
   }
 };
//=========PRIMEIRO FIO===========








 // ===========SEGUNDO FIO===============
 function fioConectado2(){
    

   if(parte2 == true){  


   if(corFio2 == "pretoFase"){

     return  ligacaoPonto2 = "pretoFase",console.log("ligacaoPonto2",ligacaoPonto2);
       
   }else if(corFio2 == "verdeTerra"){

      return ligacaoPonto2 = "verdeTerra",console.log("ligacaoPonto2",ligacaoPonto2);
       
   }else if(corFio2 == "brancoRetorno"){

      return ligacaoPonto2 = "brancoRetorno",console.log("ligacaoPonto2",ligacaoPonto2);
       
   }else if(corFio2 == "azulNeltro"){

      return ligacaoPonto2 = "azulNeltro",console.log("ligacaoPonto2",ligacaoPonto2);
      
   }else if(corFio2 == "marromRetorno"){

      return ligacaoPonto2 = "marromRetorno",console.log("ligacaoPonto2",ligacaoPonto2);
       
   }
// funcionando ok
// ate esse ponto ja temos os variaveis com valores 
// corFio   
//ligacaoPonto  
//pontoSelecionado1  
//pontoSelecionado2  

   }
};
// ===========SEGUNDO FIO===============







// ===========TERCEIRO FIO===============
 function fioConectado3(){
    

   if(parte3 == true){  


   if(corFio3 == "pretoFase"){

     return  ligacaoPonto3 = "pretoFase",console.log("ligacaoPonto3",ligacaoPonto3);
       
   }else if(corFio3 == "verdeTerra"){

      return ligacaoPonto3 = "verdeTerra",console.log("ligacaoPonto3",ligacaoPonto3);
       
   }else if(corFio3 == "brancoRetorno"){

      return ligacaoPonto3 = "brancoRetorno",console.log("ligacaoPonto3",ligacaoPonto3);
       
   }else if(corFio3 == "azulNeltro"){

      return ligacaoPonto3 = "azulNeltro",console.log("ligacaoPonto3",ligacaoPonto3);
      
   }else if(corFio3 == "marromRetorno"){

      return ligacaoPonto3 = "marromRetorno",console.log("ligacaoPonto3",ligacaoPonto3);
       
   }
// funcionando ok
// ate esse ponto ja temos os variaveis com valores 
// corFio   
//ligacaoPonto  
//pontoSelecionado1  
//pontoSelecionado2  

   }
};
// ===========TERCEIRO FIO===============







//=========PRIMEIRO FIO===========
//conectando os fios a os quadrados
function fioConectadoParte1(){

    if(pontoSelecionado1 == "MAIN1" && corFio == "pretoFase"){
      
       return preimeiraLigacao  = "pretoFase",console.log("preimeiraLigacao",preimeiraLigacao),console.log(corFio);
        
    }else if(pontoSelecionado1 == "MAIN2" && corFio == "pretoFase"){
      return  preimeiraLigacao  = "pretoFase",console.log("preimeiraLigacao",preimeiraLigacao),console.log(corFio);
       
    }else if(pontoSelecionado1 == "MAIN3" && corFio == "pretoFase"){
       return preimeiraLigacao  = "pretoFase",console.log("preimeiraLigacao",preimeiraLigacao),console.log(corFio);
        
    }else if(pontoSelecionado1 == "MAIN4" && corFio == "pretoFase"){
       return preimeiraLigacao  = "pretoFase",console.log("preimeiraLigacao",preimeiraLigacao),console.log(corFio);
       
    }else if(pontoSelecionado1 == "MAIN5" && corFio == "pretoFase"){
       return preimeiraLigacao  = "pretoFase",console.log("preimeiraLigacao",preimeiraLigacao),console.log(corFio);
       
    }else if(pontoSelecionado1 == "MAIN6" && corFio == "pretoFase"){
       return preimeiraLigacao  = "pretoFase",console.log("preimeiraLigacao",preimeiraLigacao),console.log(corFio);
       
    }
    
    else if(pontoSelecionado1 == "MAIN1" && corFio == "verdeTerra"){
       return preimeiraLigacao  = "verdeTerra",console.log("preimeiraLigacao",preimeiraLigacao),console.log(corFio);
        
    }else if(pontoSelecionado1 == "MAIN2" && corFio == "verdeTerra"){
       return preimeiraLigacao  = "verdeTerra",console.log("preimeiraLigacao",preimeiraLigacao),console.log(corFio);
        
    }else if(pontoSelecionado1 == "MAIN3" && corFio == "verdeTerra"){
       return preimeiraLigacao  = "verdeTerra",console.log("preimeiraLigacao",preimeiraLigacao),console.log(corFio);
        
    }else if(pontoSelecionado1 == "MAIN4" && corFio == "verdeTerra"){
       return preimeiraLigacao  = "verdeTerra",console.log("preimeiraLigacao",preimeiraLigacao),console.log(corFio);
        
    }else if(pontoSelecionado1 == "MAIN5" && corFio == "verdeTerra"){
       return preimeiraLigacao  = "verdeTerra",console.log("preimeiraLigacao",preimeiraLigacao),console.log(corFio);
       
    }else if(pontoSelecionado1 == "MAIN6" && corFio == "verdeTerra"){
       return preimeiraLigacao  = "verdeTerra",console.log("preimeiraLigacao",preimeiraLigacao),console.log(corFio);
       
    }

    else if(pontoSelecionado1 == "MAIN1" && corFio == "brancoRetorno"){
       return preimeiraLigacao  = "brancoRetorno",console.log("preimeiraLigacao",preimeiraLigacao),console.log(corFio);
        
    }else if(pontoSelecionado1 == "MAIN2" && corFio == "brancoRetorno"){
       return preimeiraLigacao  = "brancoRetorno",console.log("preimeiraLigacao",preimeiraLigacao),console.log(corFio);
        
    }else if(pontoSelecionado1 == "MAIN3" && corFio == "brancoRetorno"){
       return preimeiraLigacao  = "brancoRetorno",console.log("preimeiraLigacao",preimeiraLigacao),console.log(corFio);
      
    }else if(pontoSelecionado1 == "MAIN4" && corFio == "brancoRetorno"){
       return preimeiraLigacao  = "brancoRetorno",console.log("preimeiraLigacao",preimeiraLigacao),console.log(corFio);
        
    }else if(pontoSelecionado1 == "MAIN5" && corFio == "brancoRetorno"){
       return preimeiraLigacao  = "brancoRetorno",console.log("preimeiraLigacao",preimeiraLigacao),console.log(corFio);
       
    }else if(pontoSelecionado1 == "MAIN6" && corFio == "brancoRetorno"){
       return preimeiraLigacao  = "brancoRetorno",console.log("preimeiraLigacao",preimeiraLigacao),console.log(corFio);
       
    }

    else if(pontoSelecionado1 == "MAIN1" && corFio == "azulNeltro"){
       return preimeiraLigacao  = "azulNeltro",console.log("preimeiraLigacao",preimeiraLigacao),console.log(corFio);
        
    }else if(pontoSelecionado1 == "MAIN2" && corFio == "azulNeltro"){
       return preimeiraLigacao  = "azulNeltro",console.log("preimeiraLigacao",preimeiraLigacao),console.log(corFio);
       
    }else if(pontoSelecionado1 == "MAIN3" && corFio == "azulNeltro"){
       return preimeiraLigacao  = "azulNeltro",console.log("preimeiraLigacao",preimeiraLigacao),console.log(corFio);
       
    }else if(pontoSelecionado1 == "MAIN4" && corFio == "azulNeltro"){
       return preimeiraLigacao  = "azulNeltro",console.log("preimeiraLigacao",preimeiraLigacao),console.log(corFio);
        
    }else if(pontoSelecionado1 == "MAIN5" && corFio == "azulNeltro"){
       return preimeiraLigacao  = "azulNeltro",console.log("preimeiraLigacao",preimeiraLigacao),console.log(corFio);
       
    }else if(pontoSelecionado1 == "MAIN6" && corFio == "azulNeltro"){
       return preimeiraLigacao  = "azulNeltro",console.log("preimeiraLigacao",preimeiraLigacao),console.log(corFio);
       
    }

    else if(pontoSelecionado1 == "MAIN1" && corFio == "marromRetorno"){
       return preimeiraLigacao  = "marromRetorno",console.log("preimeiraLigacao",preimeiraLigacao),console.log(corFio);
     
    }else if(pontoSelecionado1 == "MAIN2" && corFio == "marromRetorno"){
       return preimeiraLigacao  = "marromRetorno",console.log("preimeiraLigacao",preimeiraLigacao),console.log(corFio);
        
    }else if(pontoSelecionado1 == "MAIN3" && corFio == "marromRetorno"){
       return preimeiraLigacao  = "marromRetorno",console.log("preimeiraLigacao",preimeiraLigacao),console.log(corFio);
      
    }else if(pontoSelecionado1 == "MAIN4" && corFio == "marromRetorno"){
       return preimeiraLigacao  = "marromRetorno",console.log("preimeiraLigacao",preimeiraLigacao),console.log(corFio);
        
    }else if(pontoSelecionado1 == "MAIN5" && corFio == "marromRetorno"){
       return preimeiraLigacao  = "marromRetorno",console.log("preimeiraLigacao",preimeiraLigacao),console.log(corFio);
       
    }else if(pontoSelecionado1 == "MAIN6" && corFio == "marromRetorno"){
       return preimeiraLigacao  = "marromRetorno",console.log("preimeiraLigacao",preimeiraLigacao),console.log(corFio);
       
    }

 
 };
//=========PRIMEIRO FIO===========






//===========SEGUNDO FIO==========
//conectando os fios a os quadrados
function fioConectadoParte12(){

   if(pontoSelecionado3 == "MAIN1" && corFio2 == "pretoFase"){
     
      return preimeiraLigacao2  = "pretoFase",console.log("preimeiraLigacao2",preimeiraLigacao2),console.log(corFio2);
       
   }else if(pontoSelecionado3 == "MAIN2" && corFio2 == "pretoFase"){
     return  preimeiraLigacao2  = "pretoFase",console.log("preimeiraLigacao2",preimeiraLigacao2),console.log(corFio2);
      
   }else if(pontoSelecionado3 == "MAIN3" && corFio2 == "pretoFase"){
      return preimeiraLigacao2  = "pretoFase",console.log("preimeiraLigacao2",preimeiraLigacao2),console.log(corFio2);
       
   }else if(pontoSelecionado3 == "MAIN4" && corFio2 == "pretoFase"){
      return preimeiraLigacao2  = "pretoFase",console.log("preimeiraLigacao2",preimeiraLigacao2),console.log(corFio2);
      
   }else if(pontoSelecionado3 == "MAIN5" && corFio2 == "pretoFase"){
      return preimeiraLigacao2  = "pretoFase",console.log("preimeiraLigacao2",preimeiraLigacao2),console.log(corFio2);
      
   }else if(pontoSelecionado3 == "MAIN6" && corFio2 == "pretoFase"){
      return preimeiraLigacao2  = "pretoFase",console.log("preimeiraLigacao2",preimeiraLigacao2),console.log(corFio2);
      
   }
   
   else if(pontoSelecionado3 == "MAIN1" && corFio2 == "verdeTerra"){
      return preimeiraLigacao2  = "verdeTerra",console.log("preimeiraLigacao2",preimeiraLigacao2),console.log(corFio2);
       
   }else if(pontoSelecionado3 == "MAIN2" && corFio2 == "verdeTerra"){
      return preimeiraLigacao2  = "verdeTerra",console.log("preimeiraLigacao2",preimeiraLigacao2),console.log(corFio2);
       
   }else if(pontoSelecionado3 == "MAIN3" && corFio2 == "verdeTerra"){
      return preimeiraLigacao2  = "verdeTerra",console.log("preimeiraLigacao2",preimeiraLigacao2),console.log(corFio2);
       
   }else if(pontoSelecionado3 == "MAIN4" && corFio2 == "verdeTerra"){
      return preimeiraLigacao2  = "verdeTerra",console.log("preimeiraLigacao2",preimeiraLigacao2),console.log(corFio2);
       
   }else if(pontoSelecionado3 == "MAIN5" && corFio2 == "verdeTerra"){
      return preimeiraLigacao2  = "verdeTerra",console.log("preimeiraLigacao2",preimeiraLigacao2),console.log(corFio2);
      
   }else if(pontoSelecionado3 == "MAIN6" && corFio2 == "verdeTerra"){
      return preimeiraLigacao2  = "verdeTerra",console.log("preimeiraLigacao2",preimeiraLigacao2),console.log(corFio2);
      
   }

   else if(pontoSelecionado3 == "MAIN1" && corFio2 == "brancoRetorno"){
      return preimeiraLigacao2  = "brancoRetorno",console.log("preimeiraLigacao2",preimeiraLigacao2),console.log(corFio2);
       
   }else if(pontoSelecionado3 == "MAIN2" && corFio2 == "brancoRetorno"){
      return preimeiraLigacao2  = "brancoRetorno",console.log("preimeiraLigacao2",preimeiraLigacao2),console.log(corFio2);
       
   }else if(pontoSelecionado3 == "MAIN3" && corFio2 == "brancoRetorno"){
      return preimeiraLigacao2  = "brancoRetorno",console.log("preimeiraLigacao2",preimeiraLigacao2),console.log(corFio2);
     
   }else if(pontoSelecionado3 == "MAIN4" && corFio2 == "brancoRetorno"){
      return preimeiraLigacao2  = "brancoRetorno",console.log("preimeiraLigacao2",preimeiraLigacao2),console.log(corFio2);
       
   }else if(pontoSelecionado3 == "MAIN5" && corFio2 == "brancoRetorno"){
      return preimeiraLigacao2  = "brancoRetorno",console.log("preimeiraLigacao2",preimeiraLigacao2),console.log(corFio2);
       
   }else if(pontoSelecionado3 == "MAIN6" && corFio2 == "brancoRetorno"){
      return preimeiraLigacao2  = "brancoRetorno",console.log("preimeiraLigacao2",preimeiraLigacao2),console.log(corFio2);
       
   }

   else if(pontoSelecionado3 == "MAIN1" && corFio2 == "azulNeltro"){
      return preimeiraLigacao2  = "azulNeltro",console.log("preimeiraLigacao2",preimeiraLigacao2),console.log(corFio2);
       
   }else if(pontoSelecionado3 == "MAIN2" && corFio2 == "azulNeltro"){
      return preimeiraLigacao2  = "azulNeltro",console.log("preimeiraLigacao2",preimeiraLigacao2),console.log(corFio2);
      
   }else if(pontoSelecionado3 == "MAIN3" && corFio2 == "azulNeltro"){
      return preimeiraLigacao2 = "azulNeltro",console.log("preimeiraLigacao2",preimeiraLigacao2),console.log(corFio2);
      
   }else if(pontoSelecionado3 == "MAIN4" && corFio2 == "azulNeltro"){
      return preimeiraLigacao2  = "azulNeltro",console.log("preimeiraLigacao2",preimeiraLigacao2),console.log(corFio2);
       
   }else if(pontoSelecionado3 == "MAIN5" && corFio2 == "azulNeltro"){
      return preimeiraLigacao2  = "azulNeltro",console.log("preimeiraLigacao2",preimeiraLigacao2),console.log(corFio2);
       
   }else if(pontoSelecionado3 == "MAIN6" && corFio2 == "azulNeltro"){
      return preimeiraLigacao2  = "azulNeltro",console.log("preimeiraLigacao2",preimeiraLigacao2),console.log(corFio2);
       
   }

   else if(pontoSelecionado3 == "MAIN1" && corFio2 == "marromRetorno"){
      return preimeiraLigacao2  = "marromRetorno",console.log("preimeiraLigacao2",preimeiraLigacao2),console.log(corFio2);
    
   }else if(pontoSelecionado3 == "MAIN2" && corFio2 == "marromRetorno"){
      return preimeiraLigacao2  = "marromRetorno",console.log("preimeiraLigacao2",preimeiraLigacao2),console.log(corFio2);
       
   }else if(pontoSelecionado3 == "MAIN3" && corFio2 == "marromRetorno"){
      return preimeiraLigacao2  = "marromRetorno",console.log("preimeiraLigacao2",preimeiraLigacao2),console.log(corFio2);
     
   }else if(pontoSelecionado3 == "MAIN4" && corFio2 == "marromRetorno"){
      return preimeiraLigacao2  = "marromRetorno",console.log("preimeiraLigacao2",preimeiraLigacao2),console.log(corFio2);
       
   }else if(pontoSelecionado3 == "MAIN5" && corFio2 == "marromRetorno"){
      return preimeiraLigacao2  = "marromRetorno",console.log("preimeiraLigacao2",preimeiraLigacao2),console.log(corFio2);
       
   }else if(pontoSelecionado3 == "MAIN6" && corFio2 == "marromRetorno"){
      return preimeiraLigacao2  = "marromRetorno",console.log("preimeiraLigacao2",preimeiraLigacao2),console.log(corFio2);
       
   }


};
//===========SEGUNDO FIO==========






//===========TERCEIRO FIO==========
//conectando os fios a os quadrados
function fioConectadoParte123(){

   if(pontoSelecionado5 == "MAIN1" && corFio3 == "pretoFase"){
     
      return preimeiraLigacao3  = "pretoFase",console.log("preimeiraLigacao3",preimeiraLigacao3),console.log(corFio3);
       
   }else if(pontoSelecionado5 == "MAIN2" && corFio3 == "pretoFase"){
     return  preimeiraLigacao3  = "pretoFase",console.log("preimeiraLigacao3",preimeiraLigacao3),console.log(corFio3);
      
   }else if(pontoSelecionado5 == "MAIN3" && corFio3 == "pretoFase"){
      return preimeiraLigacao3  = "pretoFase",console.log("preimeiraLigacao3",preimeiraLigacao3),console.log(corFio3);
       
   }else if(pontoSelecionado5 == "MAIN4" && corFio3 == "pretoFase"){
      return preimeiraLigacao3  = "pretoFase",console.log("preimeiraLigacao3",preimeiraLigacao3),console.log(corFio3);
      
   }else if(pontoSelecionado5 == "MAIN5" && corFio3 == "pretoFase"){
      return preimeiraLigacao3  = "pretoFase",console.log("preimeiraLigacao3",preimeiraLigacao3),console.log(corFio3);
      
   }else if(pontoSelecionado5 == "MAIN6" && corFio3 == "pretoFase"){
      return preimeiraLigacao3  = "pretoFase",console.log("preimeiraLigacao3",preimeiraLigacao3),console.log(corFio3);
      
   }
   
   else if(pontoSelecionado5 == "MAIN1" && corFio3 == "verdeTerra"){
      return preimeiraLigacao3  = "verdeTerra",console.log("preimeiraLigacao3",preimeiraLigacao3),console.log(corFio3);
       
   }else if(pontoSelecionado5 == "MAIN2" && corFio3 == "verdeTerra"){
      return preimeiraLigacao3  = "verdeTerra",console.log("preimeiraLigacao3",preimeiraLigacao3),console.log(corFio3);
       
   }else if(pontoSelecionado5 == "MAIN3" && corFio3 == "verdeTerra"){
      return preimeiraLigacao3  = "verdeTerra",console.log("preimeiraLigacao3",preimeiraLigacao3),console.log(corFio3);
       
   }else if(pontoSelecionado5 == "MAIN4" && corFio3 == "verdeTerra"){
      return preimeiraLigacao3  = "verdeTerra",console.log("preimeiraLigacao3",preimeiraLigacao3),console.log(corFio3);
       
   }else if(pontoSelecionado5 == "MAIN5" && corFio3 == "verdeTerra"){
      return preimeiraLigacao3  = "verdeTerra",console.log("preimeiraLigacao3",preimeiraLigacao3),console.log(corFio3);
       
   }else if(pontoSelecionado5 == "MAIN6" && corFio3 == "verdeTerra"){
      return preimeiraLigacao3  = "verdeTerra",console.log("preimeiraLigacao3",preimeiraLigacao3),console.log(corFio3);
       
   }

   else if(pontoSelecionado5 == "MAIN1" && corFio3 == "brancoRetorno"){
      return preimeiraLigacao3  = "brancoRetorno",console.log("preimeiraLigacao3",preimeiraLigacao3),console.log(corFio3);
       
   }else if(pontoSelecionado5 == "MAIN2" && corFio3 == "brancoRetorno"){
      return preimeiraLigacao3  = "brancoRetorno",console.log("preimeiraLigacao3",preimeiraLigacao3),console.log(corFio3);
       
   }else if(pontoSelecionado5 == "MAIN3" && corFio3 == "brancoRetorno"){
      return preimeiraLigacao3  = "brancoRetorno",console.log("preimeiraLigacao3",preimeiraLigacao3),console.log(corFio3);
     
   }else if(pontoSelecionado5 == "MAIN4" && corFio3 == "brancoRetorno"){
      return preimeiraLigacao3  = "brancoRetorno",console.log("preimeiraLigacao3",preimeiraLigacao3),console.log(corFio3);
       
   }else if(pontoSelecionado5 == "MAIN5" && corFio3 == "brancoRetorno"){
      return preimeiraLigacao3  = "brancoRetorno",console.log("preimeiraLigacao3",preimeiraLigacao3),console.log(corFio3);
       
   }else if(pontoSelecionado5 == "MAIN6" && corFio3 == "brancoRetorno"){
      return preimeiraLigacao3  = "brancoRetorno",console.log("preimeiraLigacao3",preimeiraLigacao3),console.log(corFio3);
       
   }

   else if(pontoSelecionado5 == "MAIN1" && corFio3 == "azulNeltro"){
      return preimeiraLigacao3  = "azulNeltro",console.log("preimeiraLigacao3",preimeiraLigacao3),console.log(corFio3);
       
   }else if(pontoSelecionado5 == "MAIN2" && corFio3 == "azulNeltro"){
      return preimeiraLigacao3  = "azulNeltro",console.log("preimeiraLigacao3",preimeiraLigacao3),console.log(corFio3);
      
   }else if(pontoSelecionado5 == "MAIN3" && corFio3 == "azulNeltro"){
      return preimeiraLigacao3 = "azulNeltro",console.log("preimeiraLigacao3",preimeiraLigacao3),console.log(corFio3);
      
   }else if(pontoSelecionado5 == "MAIN4" && corFio3 == "azulNeltro"){
      return preimeiraLigacao3  = "azulNeltro",console.log("preimeiraLigacao3",preimeiraLigacao3),console.log(corFio3);
       
   }else if(pontoSelecionado5 == "MAIN5" && corFio3 == "azulNeltro"){
      return preimeiraLigacao3  = "azulNeltro",console.log("preimeiraLigacao3",preimeiraLigacao3),console.log(corFio3);
       
   }else if(pontoSelecionado5 == "MAIN6" && corFio3 == "azulNeltro"){
      return preimeiraLigacao3  = "azulNeltro",console.log("preimeiraLigacao3",preimeiraLigacao3),console.log(corFio3);
       
   }

   else if(pontoSelecionado5 == "MAIN1" && corFio3 == "marromRetorno"){
      return preimeiraLigacao3  = "marromRetorno",console.log("preimeiraLigacao3",preimeiraLigacao3),console.log(corFio3);
    
   }else if(pontoSelecionado5 == "MAIN2" && corFio3 == "marromRetorno"){
      return preimeiraLigacao3  = "marromRetorno",console.log("preimeiraLigacao3",preimeiraLigacao3),console.log(corFio3);
       
   }else if(pontoSelecionado5 == "MAIN3" && corFio3 == "marromRetorno"){
      return preimeiraLigacao3  = "marromRetorno",console.log("preimeiraLigacao3",preimeiraLigacao3),console.log(corFio3);
     
   }else if(pontoSelecionado5 == "MAIN4" && corFio3 == "marromRetorno"){
      return preimeiraLigacao3  = "marromRetorno",console.log("preimeiraLigacao3",preimeiraLigacao3),console.log(corFio3);
       
   }else if(pontoSelecionado5 == "MAIN5" && corFio3 == "marromRetorno"){
      return preimeiraLigacao3  = "marromRetorno",console.log("preimeiraLigacao3",preimeiraLigacao3),console.log(corFio3);
       
   }else if(pontoSelecionado5 == "MAIN6" && corFio3 == "marromRetorno"){
      return preimeiraLigacao3  = "marromRetorno",console.log("preimeiraLigacao3",preimeiraLigacao3),console.log(corFio3);
       
   }


};
//===========TERCEIRO FIO==========







//=========PRIMEIRO FIO===========
// neste ponto se pontoSelecionado2 for diferente de pontoSelecionado1 
// exemplo eles nao podem ter o mesmo valor "main1" E ligacaoPonto FOR IGUAL A pretoFase
// segundaLigacao ligacao recebe pretoFase
function fioConectadoParte2(){

    if(pontoSelecionado2 != pontoSelecionado1 && pontoSelecionado2 != undefined  && ligacaoPonto == "pretoFase"){

      return  segundaLigacao  = "pretoFase",console.log("segundaLigacao",segundaLigacao);
        
    }else 

    if(pontoSelecionado2 != pontoSelecionado1 && pontoSelecionado2 != undefined &&  ligacaoPonto == "verdeTerra"){

       return segundaLigacao  = "verdeTerra",console.log("segundaLigacao",segundaLigacao);
        
    }else 

    if(pontoSelecionado2 != pontoSelecionado1 && pontoSelecionado2 != undefined && ligacaoPonto == "brancoRetorno"){

       return segundaLigacao  = "brancoRetorno",console.log("segundaLigacao",segundaLigacao);
        
    }else 

    if(pontoSelecionado2 != pontoSelecionado1 && pontoSelecionado2 != undefined && ligacaoPonto == "azulNeltro"){

       return segundaLigacao  = "azulNeltro",console.log("segundaLigacao",segundaLigacao);
        
    }else 

    if(pontoSelecionado2 != pontoSelecionado1 && pontoSelecionado2 != undefined && ligacaoPonto == "marromRetorno"){

       return segundaLigacao  = "marromRetorno",console.log("segundaLigacao",segundaLigacao);
       
    }

 
 };
//=========PRIMEIRO FIO===========







// neste ponto se pontoSelecionado2 for diferente de pontoSelecionado1 
// exemplo eles nao podem ter o mesmo valor "main1" E ligacaoPonto FOR IGUAL A pretoFase
// segundaLigacao ligacao recebe pretoFase
function fioConectadoParte22(){

   if(pontoSelecionado4 != pontoSelecionado3 && pontoSelecionado4 != undefined  && ligacaoPonto2 == "pretoFase"){

     return  segundaLigacao2  = "pretoFase",console.log("segundaLigacao2",segundaLigacao2);
       
   }else 

   if(pontoSelecionado4 != pontoSelecionado3 && pontoSelecionado4 != undefined &&  ligacaoPonto2 == "verdeTerra"){

      return segundaLigacao2  = "verdeTerra",console.log("segundaLigacao2",segundaLigacao2);
       
   }else 

   if(pontoSelecionado4 != pontoSelecionado3 && pontoSelecionado4 != undefined && ligacaoPonto2 == "brancoRetorno"){

      return segundaLigacao2  = "brancoRetorno",console.log("segundaLigacao2",segundaLigacao2);
       
   }else 

   if(pontoSelecionado4 != pontoSelecionado3 && pontoSelecionado4 != undefined && ligacaoPonto2 == "azulNeltro"){

      return segundaLigacao2  = "azulNeltro",console.log("segundaLigacao2",segundaLigacao2);
       
   }else 

   if(pontoSelecionado4 != pontoSelecionado3 && pontoSelecionado4 != undefined && ligacaoPonto2 == "marromRetorno"){

      return segundaLigacao2  = "marromRetorno",console.log("segundaLigacao2",segundaLigacao2);
      
   }


};




///////////TERCEIRO FIO/////////
// neste ponto se pontoSelecionado2 for diferente de pontoSelecionado1 
// exemplo eles nao podem ter o mesmo valor "main1" E ligacaoPonto FOR IGUAL A pretoFase
// segundaLigacao ligacao recebe pretoFase
function fioConectadoParte222(){

   if(pontoSelecionado6 != pontoSelecionado5 && pontoSelecionado6 != undefined  && ligacaoPonto3 == "pretoFase"){

     return  segundaLigacao3  = "pretoFase",console.log("segundaLigacao3",segundaLigacao3);
       
   }else 

   if(pontoSelecionado6 != pontoSelecionado5 && pontoSelecionado6 != undefined &&  ligacaoPonto3 == "verdeTerra"){

      return segundaLigacao3  = "verdeTerra",console.log("segundaLigacao3",segundaLigacao3);
       
   }else 

   if(pontoSelecionado6 != pontoSelecionado5 && pontoSelecionado6 != undefined && ligacaoPonto3 == "brancoRetorno"){

      return segundaLigacao3  = "brancoRetorno",console.log("segundaLigacao3",segundaLigacao3);
       
   }else 

   if(pontoSelecionado6 != pontoSelecionado5 && pontoSelecionado6 != undefined && ligacaoPonto3 == "azulNeltro"){

      return segundaLigacao3  = "azulNeltro",console.log("segundaLigacao3",segundaLigacao3);
       
   }else 

   if(pontoSelecionado6 != pontoSelecionado5 && pontoSelecionado6 != undefined && ligacaoPonto3 == "marromRetorno"){

      return segundaLigacao3  = "marromRetorno",console.log("segundaLigacao3",segundaLigacao3);
      
   }


};
///////////TERCEIRO FIO/////////    




 function mostrar(){   

console.log("corFio;",corFio);
console.log("ligacaoPonto;",ligacaoPonto);
console.log("preimeiraLigacao;",preimeiraLigacao);
console.log("segundaLigacao;",segundaLigacao);
console.log("pontoSelecionado1;",pontoSelecionado1);
console.log("pontoSelecionado2;",pontoSelecionado2);
console.log("verificador;",verificador);

console.log("corFio2;",corFio2);
console.log("ligacaoPonto2;",ligacaoPonto2);
console.log("preimeiraLigacao2;",preimeiraLigacao2);
console.log("segundaLigacao2;",segundaLigacao2);
console.log("pontoSelecionado3;",pontoSelecionado3);
console.log("pontoSelecionado4;",pontoSelecionado4);
console.log("verificador2;",verificador2);
console.log("parte2;",parte2)
console.log("seretId;",resetId)
console.log("seretId;",resetId2)
console.log("idioma;",idioma)

console.log("corFio3;",corFio3);
console.log("ligacaoPonto3;",ligacaoPonto3);
console.log("preimeiraLigacao3;",preimeiraLigacao3);
console.log("segundaLigacao3;",segundaLigacao3);
console.log("pontoSelecionado5;",pontoSelecionado5);
console.log("pontoSelecionado6;",pontoSelecionado6);
console.log("verificador3;",verificador3);
console.log("parte3;",parte3)
console.log("seretId;",resetId3)
 }

//=========PRIMEIRO FIO===========
 function fioConectadoParte3(){


    console.log( " e true ou false",resetId);
 if(resetId == true ){

   //MAIN1
   let elementosCss = this.document.getElementById("MAIN10")
   let elementosCss2 = this.document.getElementById("MAIN11")
   let elementosCss3 = this.document.getElementById("MAIN12")
   let elementosCss4 = this.document.getElementById("MAIN13")
   let elementosCss5 = this.document.getElementById("MAIN14")

//MAIN2
   let elementosCss6 = this.document.getElementById("MAIN15")
   let elementosCss7 = this.document.getElementById("MAIN16")
   let elementosCss8 = this.document.getElementById("MAIN17")
   let elementosCss9 = this.document.getElementById("MAIN18")
   let elementosCss10 = this.document.getElementById("MAIN19")


       //MAIN5
   let elementosCss16 = this.document.getElementById("MAIN30")
   let elementosCss17 = this.document.getElementById("MAIN31")
   let elementosCss18 = this.document.getElementById("MAIN32")
   let elementosCss19 = this.document.getElementById("MAIN33")
   let elementosCss20 = this.document.getElementById("MAIN34")



// tratar bug
   let elementosCss11 = this.document.getElementById("MAIN20")
   let elementosCss12 = this.document.getElementById("MAIN21")
   let elementosCss13 = this.document.getElementById("MAIN22")
   let elementosCss14 = this.document.getElementById("MAIN23")
   let elementosCss15 = this.document.getElementById("MAIN24")



   console.log(elementosCss)
   if( elementosCss != null || elementosCss != undefined ){ 
   elementosCss.id = "MAIN1"
   


   console.log(elementosCss)
   
   }
   if( elementosCss2 != null || elementosCss2 != undefined ){ 
       
      elementosCss2.id= "MAIN1"
      
   
   
      console.log(elementosCss)
      
   }

   if( elementosCss3 != null || elementosCss3 != undefined ){ 
      
         
         elementosCss3.id= "MAIN1"
         
      
      
         console.log(elementosCss)
         
   }
   if( elementosCss4 != null || elementosCss4 != undefined ){ 
      
         
           
            elementosCss4.id= "MAIN1"
          
         
         
            console.log(elementosCss)
            
   }
   if( elementosCss5 != null || elementosCss5 != undefined ){ 
      
         
           
               
               elementosCss5.id= "MAIN1"
            
            
               console.log(elementosCss)
               
   }        
   if( elementosCss6 != null || elementosCss6 != undefined ){ 
      elementosCss6.id = "MAIN2"
      
   
   
      console.log(elementosCss)
      
   }
   if( elementosCss7 != null || elementosCss7 != undefined ){ 
          
         elementosCss7.id= "MAIN2"
         
      
      
         console.log(elementosCss)
         
   }
   
   if( elementosCss8 != null || elementosCss8 != undefined ){ 
         
            
            elementosCss8.id= "MAIN2"
            
         
         
            console.log(elementosCss)
            
   }
      if( elementosCss9 != null || elementosCss9 != undefined ){ 
         
            
              
               elementosCss9.id= "MAIN2"
             
            
            
               console.log(elementosCss)
               
   }
      if( elementosCss10 != null || elementosCss10 != undefined ){ 
         
            
              
                  
                  elementosCss10.id= "MAIN2"
               
               
                  console.log(elementosCss)
                  
      } else

          if( elementosCss16 != null || elementosCss16 != undefined ){ 
      elementosCss16.id = "MAIN5"
      
   
   
      console.log(elementosCss)
      
   }
   if( elementosCss17 != null || elementosCss17 != undefined ){ 
          
         elementosCss17.id= "MAIN5"
         
      
      
         console.log(elementosCss)
         
   }
   
   if( elementosCss18 != null || elementosCss18 != undefined ){ 
         
            
            elementosCss18.id= "MAIN5"
            
         
         
            console.log(elementosCss)
            
   }
      if( elementosCss19 != null || elementosCss19 != undefined ){ 
         
            
              
               elementosCss19.id= "MAIN5"
             
            
            
               console.log(elementosCss)
               
   }
      if( elementosCss20 != null || elementosCss20 != undefined ){ 
         
            
              
                  
                  elementosCss20.id= "MAIN5"
               
               
                  console.log(elementosCss)
                  
      } else
      console.log(bug)
console.log(elementosCss11)
      // BUG      
      if( elementosCss11 != null || elementosCss11 != undefined && bug == true ){ 
        

         console.log(bug)

         elementosCss11.id = "MAIN1"
         
      
      
         console.log(elementosCss11)
         
         }else
      
      if( elementosCss12 != null || elementosCss12 != undefined && bug == true ){ 
        

         console.log(bug)

         elementosCss12.id = "MAIN1"
         
      
      
         console.log(elementosCss12)
         
         }
         else
      
      if( elementosCss13 != null || elementosCss13 != undefined && bug == true ){ 
        

         console.log(bug)

         elementosCss13.id = "MAIN1"
         
      
      
         console.log(elementosCss13)
         
         }
         else
      
         if( elementosCss14 != null || elementosCss14 != undefined && bug == true ){ 
           
   
            console.log(bug)
   
            elementosCss14.id = "MAIN1"
            
         
         
            console.log(elementosCss14)
            
            }
            else
      
            if( elementosCss15 != null || elementosCss15 != undefined && bug == true ){ 
              
      
               console.log(bug)
      
               elementosCss15.id = "MAIN1"
               
            
            
               console.log(elementosCss15)
               
               } 

   resetId = false




 }else


   console.log(verificador);
    if( verificador == "MAIN1"   && ligacaoPonto == "pretoFase" && preimeiraLigacao =="pretoFase" && segundaLigacao == "pretoFase" ){
        let elementosCss = document.getElementById("MAIN1");
         if(elementosCss != null || elementosCss != undefined )  { 
         
       if(pontoSelecionado2 == "MAIN3"){   
            console.log(pontoSelecionado2);


         console.log(elementosCss);
         parte2 = true;
         elementosCss.id = "MAIN10"

         }


if(pontoSelecionado2 == "MAIN3" || pontoSelecionado2 == "MAIN1" && elementosCss.id == "MAIN10"){   
            
   
   filtro = "1para3Preto"
   console.log(filtro);


         }

      
         }
    console.log("fundionou"); 
    }
    else if(verificador == "MAIN1" && ligacaoPonto == "verdeTerra" && preimeiraLigacao =="verdeTerra" && segundaLigacao == "verdeTerra"){
      let elementosCss = document.getElementById("MAIN1");
      if(elementosCss != null || elementosCss != undefined) { 

         if(pontoSelecionado2 == "MAIN3"){ 
      console.log(elementosCss);
      parte2 = true;
      elementosCss.id = "MAIN11"

         }


         if(pontoSelecionado2 == "MAIN3" || pontoSelecionado2 == "MAIN1" && elementosCss.id == "MAIN11"){   
            
   
   filtro = "1para3Verde"
   console.log(filtro);


         }
   
 console.log("fundionou");
}
    } else if(verificador == "MAIN1" && ligacaoPonto == "brancoRetorno" && preimeiraLigacao =="brancoRetorno" && segundaLigacao == "brancoRetorno"){

      let elementosCss = document.getElementById("MAIN1");
      if(elementosCss != null || elementosCss != undefined) { 

         if(pontoSelecionado2 == "MAIN3"){ 
      console.log(elementosCss);
      parte2 = true;
      elementosCss.id = "MAIN12"

         }
if(pontoSelecionado2 == "MAIN3" || pontoSelecionado2 == "MAIN1" && elementosCss.id == "MAIN12"){   
            
   
   filtro = "1para3Branco"
   console.log(filtro);


         }

   
 console.log("fundionou");
}
    } else if(verificador == "MAIN1" && ligacaoPonto == "azulNeltro" && preimeiraLigacao =="azulNeltro" && segundaLigacao == "azulNeltro"){
      let elementosCss = document.getElementById("MAIN1");
      if(elementosCss != null || elementosCss != undefined) { 

         if(pontoSelecionado2 == "MAIN3"){ 
      console.log(elementosCss);
      parte2 = true;
      elementosCss.id = "MAIN13"
         }

if(pontoSelecionado2 == "MAIN3" || pontoSelecionado2 == "MAIN1" && elementosCss.id == "MAIN13"){   
            
   
   filtro = "1para3AzulNeltro"
   console.log(filtro);


         }

 console.log("fundionou");
}

    } else if(verificador == "MAIN1" && ligacaoPonto == "marromRetorno" && preimeiraLigacao =="marromRetorno" && segundaLigacao == "marromRetorno"){

      let elementosCss = document.getElementById("MAIN1");
      if(elementosCss != null || elementosCss != undefined) { 

         if(pontoSelecionado2 == "MAIN3"){ 
      console.log(elementosCss);
      parte2 = true;
      elementosCss.id = "MAIN14"

         }
 if(pontoSelecionado2 == "MAIN3" || pontoSelecionado2 == "MAIN1" && elementosCss.id == "MAIN14"){   
            
   
   filtro = "1para3Marrom"
   console.log(filtro);


         }
      

 console.log("fundionou");
}
    } else  if(verificador == "MAIN2" && ligacaoPonto == "pretoFase" && preimeiraLigacao =="pretoFase" && segundaLigacao == "pretoFase" ){
      let elementosCss2 = document.getElementById("MAIN2");
      if(elementosCss2 != null || elementosCss2 != undefined) { 

         if(pontoSelecionado2 == "MAIN4"){ 
       console.log(elementosCss2);
       parte2 = true;
       elementosCss2.id = "MAIN15"
      }

       if(pontoSelecionado2 == "MAIN2" || pontoSelecionado2 == "MAIN4" && elementosCss2.id == "MAIN15"){   
            
   
   filtro = "2para4Preto"
   console.log(filtro);


         }

   }


  console.log("fundionou"); 
  } else  if(verificador == "MAIN2" && ligacaoPonto == "verdeTerra" && preimeiraLigacao =="verdeTerra" && segundaLigacao == "verdeTerra" ){
   let elementosCss2 = document.getElementById("MAIN2");
   if(elementosCss2 != null || elementosCss2 != undefined) { 


      if(pontoSelecionado2 == "MAIN4"){ 
    console.log(elementosCss2);
    parte2 = true;
    elementosCss2.id = "MAIN16"
   }


         if(pontoSelecionado2 == "MAIN2" || pontoSelecionado2 == "MAIN4" && elementosCss2.id == "MAIN16"){   
            
   
   filtro = "2para4Verde"
   console.log(filtro);


         }
}
console.log("fundionou"); 
} else  if(verificador == "MAIN2" && ligacaoPonto == "brancoRetorno" && preimeiraLigacao =="brancoRetorno" && segundaLigacao == "brancoRetorno" ){
   let elementosCss2 = document.getElementById("MAIN2");
   if(elementosCss2 != null || elementosCss2 != undefined) { 


      if(pontoSelecionado2 == "MAIN4"){ 
    console.log(elementosCss2);
    parte2 = true;
    elementosCss2.id = "MAIN17"
   }


        if(pontoSelecionado2 == "MAIN2" || pontoSelecionado2 == "MAIN4" && elementosCss2.id == "MAIN17"){   
            
   
   filtro = "2para4Branco"
   console.log(filtro);


         }
}
console.log("fundionou"); 
} else  if(verificador == "MAIN2" && ligacaoPonto == "azulNeltro" && preimeiraLigacao =="azulNeltro" && segundaLigacao == "azulNeltro" ){
   let elementosCss2 = document.getElementById("MAIN2");
   if(elementosCss2 != null || elementosCss2 != undefined) { 


      if(pontoSelecionado2 == "MAIN4"){ 
    console.log(elementosCss2);
    parte2 = true;
    elementosCss2.id = "MAIN18"
   }

    if(pontoSelecionado2 == "MAIN2" || pontoSelecionado2 == "MAIN4" && elementosCss2.id == "MAIN18"){   
            
   
   filtro = "2para4AzulNeltro"
   console.log(filtro);


         }

}
console.log("fundionou"); 
} else  if(verificador == "MAIN2" && ligacaoPonto == "marromRetorno" && preimeiraLigacao =="marromRetorno" && segundaLigacao == "marromRetorno" ){
   let elementosCss2 = document.getElementById("MAIN2");
   if(elementosCss2 != null || elementosCss2 != undefined) { 


      if(pontoSelecionado2 == "MAIN4"){ 
    console.log(elementosCss2);
    parte2 = true;
    elementosCss2.id = "MAIN19"

console.log("fundionou"); 

      }

      if(pontoSelecionado2 == "MAIN2" || pontoSelecionado2 == "MAIN4" && elementosCss2.id == "MAIN19"){   
            
   
   filtro = "2para4Marrom"
   console.log(filtro);


         }

   }
}
//ligacao do 3 para o 1
if( pontoSelecionado2 == "MAIN1" && verificador == "MAIN3"   && ligacaoPonto == "pretoFase" && preimeiraLigacao =="pretoFase" && segundaLigacao == "pretoFase" ){
   let elementosCss = document.getElementById("MAIN1");
    if(elementosCss != null || elementosCss != undefined) { 
    


      if(pontoSelecionado2 == "MAIN1"){ 
    console.log(elementosCss);
    parte2 = true;
    elementosCss.id = "MAIN10"
    }

     if(pontoSelecionado2 == "MAIN1" || pontoSelecionado2 == "MAIN3" && elementosCss.id == "MAIN10"){   
            
   
   filtro = "1para3Preto"
   console.log(filtro);


         }

console.log("fundionou"); 
   }
}
//ligacao do 3 para o 1 
else if( pontoSelecionado2 == "MAIN1" &&verificador == "MAIN3" && ligacaoPonto == "verdeTerra" && preimeiraLigacao =="verdeTerra" && segundaLigacao == "verdeTerra"){
   let elementosCss = document.getElementById("MAIN1");
   if(elementosCss != null || elementosCss != undefined) { 

      if(pontoSelecionado2 == "MAIN1"){ 
   console.log(elementosCss);
   parte2 = true;
   elementosCss.id = "MAIN11"

console.log("fundionou");
      }

      if(pontoSelecionado2 == "MAIN1" || pontoSelecionado2 == "MAIN3" && elementosCss.id == "MAIN11"){   
            
   
   filtro = "1para3Verde"
   console.log(filtro);


         }


}
 }
//ligacao do 3 para o 1
 else if( pontoSelecionado2 == "MAIN1" &&verificador == "MAIN3" && ligacaoPonto == "brancoRetorno" && preimeiraLigacao =="brancoRetorno" && segundaLigacao == "brancoRetorno"){

   let elementosCss = document.getElementById("MAIN1");
   if(elementosCss != null || elementosCss != undefined) { 

      if(pontoSelecionado2 == "MAIN1"){ 
   console.log(elementosCss);
   parte2 = true;
   elementosCss.id = "MAIN12"

console.log("fundionou");

      }

      if(pontoSelecionado2 == "MAIN1" || pontoSelecionado2 == "MAIN3" && elementosCss.id == "MAIN12"){   
            
   
   filtro = "1para3Branco"
   console.log(filtro);


         }

}
 }
 //ligacao do 3 para o 1
 else if( pontoSelecionado2 == "MAIN1" &&verificador == "MAIN3" && ligacaoPonto == "azulNeltro" && preimeiraLigacao =="azulNeltro" && segundaLigacao == "azulNeltro"){
   let elementosCss = document.getElementById("MAIN1");
   if(elementosCss != null || elementosCss != undefined) { 

      if(pontoSelecionado2 == "MAIN1"){ 
   console.log(elementosCss);
   parte2 = true;
   elementosCss.id = "MAIN13"

console.log("fundionou");
      }

      if(pontoSelecionado2 == "MAIN1" || pontoSelecionado2 == "MAIN3" && elementosCss.id == "MAIN13"){   
            
   
   filtro = "1para3AzulNeltro"
   console.log(filtro);


         }

}

 }

//ligacao do 3 para o 1
 else if(pontoSelecionado2 == "MAIN1" &&verificador == "MAIN3" && ligacaoPonto == "marromRetorno" && preimeiraLigacao =="marromRetorno" && segundaLigacao == "marromRetorno"){

   let elementosCss = document.getElementById("MAIN1");
   if(elementosCss != null || elementosCss != undefined) { 

      if(pontoSelecionado2 == "MAIN1"){ 
   console.log(elementosCss);
   parte2 = true;
   elementosCss.id = "MAIN14"

   

console.log("fundionou");
      }

      if(pontoSelecionado2 == "MAIN1" || pontoSelecionado2 == "MAIN3" && elementosCss.id == "MAIN14"){   
            
   
   filtro = "1para3Marrom"
   console.log(filtro);


         }

}
 }



//ligacao do 4 para o 2
 else  if(pontoSelecionado2 == "MAIN2" &&verificador == "MAIN4" && ligacaoPonto == "pretoFase" && preimeiraLigacao =="pretoFase" && segundaLigacao == "pretoFase" ){
   let elementosCss2 = document.getElementById("MAIN2");
   if(elementosCss2 != null || elementosCss2 != undefined) { 

      if(pontoSelecionado2 == "MAIN2"){ 
    console.log(elementosCss2);
    parte2 = true;
    elementosCss2.id = "MAIN15"
   }


   if(pontoSelecionado2 == "MAIN2" || pontoSelecionado2 == "MAIN4" && elementosCss2.id == "MAIN15"){   
            
   
   filtro = "2para4Preto"
   console.log(filtro);


         }

console.log("fundionou"); 
   }

//ligacao do 4 para o 2
} else  if(pontoSelecionado2 == "MAIN2" &&verificador == "MAIN4" && ligacaoPonto == "verdeTerra" && preimeiraLigacao =="verdeTerra" && segundaLigacao == "verdeTerra" ){
let elementosCss2 = document.getElementById("MAIN2");
if(elementosCss2 != null || elementosCss2 != undefined) { 

   if(pontoSelecionado2 == "MAIN2"){ 
 console.log(elementosCss2);
 parte2 = true;
 elementosCss2.id = "MAIN16"
}

if(pontoSelecionado2 == "MAIN2" || pontoSelecionado2 == "MAIN4" && elementosCss2.id == "MAIN16"){   
            
   
   filtro = "2para4Verde"
   console.log(filtro);


         }

console.log("fundionou"); 
}

//ligacao do 4 para o 2
} else  if(pontoSelecionado2 == "MAIN2" &&verificador == "MAIN4" && ligacaoPonto == "brancoRetorno" && preimeiraLigacao =="brancoRetorno" && segundaLigacao == "brancoRetorno" ){
let elementosCss2 = document.getElementById("MAIN2");
if(elementosCss2 != null || elementosCss2 != undefined) { 

   if(pontoSelecionado2 == "MAIN2"){ 
 console.log(elementosCss2);
 parte2 = true;
 elementosCss2.id = "MAIN17"
}

if(pontoSelecionado2 == "MAIN2" || pontoSelecionado2 == "MAIN4" && elementosCss2.id == "MAIN17"){   
            
   
   filtro = "2para4Branco"
   console.log(filtro);


         }
console.log("fundionou"); 
}

//ligacao do 4 para o 2
} else  if(pontoSelecionado2 == "MAIN2" &&verificador == "MAIN4" && ligacaoPonto == "azulNeltro" && preimeiraLigacao =="azulNeltro" && segundaLigacao == "azulNeltro" ){
let elementosCss2 = document.getElementById("MAIN2");
if(elementosCss2 != null || elementosCss2 != undefined) { 

   if(pontoSelecionado2 == "MAIN2"){ 
 console.log(elementosCss2);
 parte2 = true;
 elementosCss2.id = "MAIN18"
}

if(pontoSelecionado2 == "MAIN2" || pontoSelecionado2 == "MAIN4" && elementosCss2.id == "MAIN18"){   
            
   
   filtro = "2para4AzulNeltro"
   console.log(filtro);


         }


console.log("fundionou");
} 

//ligacao do 4 para o 2
} else  if(pontoSelecionado2 == "MAIN2" &&verificador == "MAIN4" && ligacaoPonto == "marromRetorno" && preimeiraLigacao =="marromRetorno" && segundaLigacao == "marromRetorno" ){
let elementosCss2 = document.getElementById("MAIN2");
if(elementosCss2 != null || elementosCss2 != undefined) { 

   if(pontoSelecionado2 == "MAIN2"){ 
 console.log(elementosCss2);
 parte2 = true;
 elementosCss2.id = "MAIN19"

console.log("fundionou"); 

   }

   if(pontoSelecionado2 == "MAIN2" || pontoSelecionado2 == "MAIN4" && elementosCss2.id == "MAIN19"){   
            
   
   filtro = "2para4Marrom"
   console.log(filtro);


         }

} 
}else

//ligacao do 5 para o 6
if( pontoSelecionado2 == "MAIN6" && verificador == "MAIN5"   && ligacaoPonto == "pretoFase" && preimeiraLigacao =="pretoFase" && segundaLigacao == "pretoFase" ){
   let elementosCss = document.getElementById("MAIN5");
    if(elementosCss != null || elementosCss != undefined) { 
    


      if(pontoSelecionado2 == "MAIN6"){ 
    console.log(elementosCss);
    parte2 = true;
    elementosCss.id = "MAIN30"
    }

    if(pontoSelecionado2 == "MAIN5" || pontoSelecionado2 == "MAIN6" && elementosCss.id == "MAIN30"){   
            
   
   filtro = "5para6Preto"
   console.log(filtro);


         }

console.log("fundionou"); 
   }
}
//ligacao do 5 para o 6 
else if( pontoSelecionado2 == "MAIN6" &&verificador == "MAIN5" && ligacaoPonto == "verdeTerra" && preimeiraLigacao =="verdeTerra" && segundaLigacao == "verdeTerra"){
   let elementosCss = document.getElementById("MAIN5");
    console.log(elementosCss);
   if(elementosCss != null || elementosCss != undefined) { 
 console.log("tttttt");
      if(pontoSelecionado2 == "MAIN6"){ 
   console.log(elementosCss);
   parte2 = true;
   elementosCss.id = "MAIN31"

console.log("fundionou");
      }

      if(pontoSelecionado2 == "MAIN5" || pontoSelecionado2 == "MAIN6" && elementosCss.id == "MAIN31"){   
            
   
   filtro = "5para6Verde"
   console.log(filtro);


         }

}
 }
//ligacao do 5 para o 6
 else if( pontoSelecionado2 == "MAIN6" &&verificador == "MAIN5" && ligacaoPonto == "brancoRetorno" && preimeiraLigacao =="brancoRetorno" && segundaLigacao == "brancoRetorno"){

   let elementosCss = document.getElementById("MAIN5");
   if(elementosCss != null || elementosCss != undefined) { 

      if(pontoSelecionado2 == "MAIN6"){ 
   console.log(elementosCss);
   parte2 = true;
   elementosCss.id = "MAIN32"

console.log("fundionou");

      }

      if(pontoSelecionado2 == "MAIN5" || pontoSelecionado2 == "MAIN6" && elementosCss.id == "MAIN32"){   
            
   
   filtro = "5para6Branco"
   console.log(filtro);


         }

}
 }
 //ligacao do 5 para o 6
 else if( pontoSelecionado2 == "MAIN6" &&verificador == "MAIN5" && ligacaoPonto == "azulNeltro" && preimeiraLigacao =="azulNeltro" && segundaLigacao == "azulNeltro"){
   let elementosCss = document.getElementById("MAIN5");
   if(elementosCss != null || elementosCss != undefined) { 

      if(pontoSelecionado2 == "MAIN6"){ 
   console.log(elementosCss);
   parte2 = true;
   elementosCss.id = "MAIN33"

console.log("fundionou");
      }

      if(pontoSelecionado2 == "MAIN5" || pontoSelecionado2 == "MAIN6" && elementosCss.id == "MAIN33"){   
            
   
   filtro = "5para6AzulNeltro"
   console.log(filtro);


         }

}

 }

//ligacao do 5 para o 6
 else if(pontoSelecionado2 == "MAIN6" &&verificador == "MAIN5" && ligacaoPonto == "marromRetorno" && preimeiraLigacao =="marromRetorno" && segundaLigacao == "marromRetorno"){

   let elementosCss = document.getElementById("MAIN5");
   if(elementosCss != null || elementosCss != undefined) { 

      if(pontoSelecionado2 == "MAIN6"){ 
   console.log(elementosCss);
   parte2 = true;
   elementosCss.id = "MAIN34"

   

console.log("fundionou");
      }

      if(pontoSelecionado2 == "MAIN5" || pontoSelecionado2 == "MAIN6" && elementosCss.id == "MAIN34"){   
            
   
   filtro = "5para6Marrom"
   console.log(filtro);


         }
}
 }

 else

//ligacao do 6 para o 5
if( pontoSelecionado2 == "MAIN5" && verificador == "MAIN6"   && ligacaoPonto == "pretoFase" && preimeiraLigacao =="pretoFase" && segundaLigacao == "pretoFase" ){
   let elementosCss = document.getElementById("MAIN5");
    if(elementosCss != null || elementosCss != undefined) { 
    


      if(pontoSelecionado2 == "MAIN5"){ 
    console.log(elementosCss);
    parte2 = true;
    elementosCss.id = "MAIN30"
    }

    if(pontoSelecionado2 == "MAIN5" || pontoSelecionado2 == "MAIN6" && elementosCss.id == "MAIN30"){   
            
   
   filtro = "5para6Preto"
   console.log(filtro);


         }

console.log("fundionou"); 
   }
}
//ligacao do 6 para o 5 
else if( pontoSelecionado2 == "MAIN5" &&verificador == "MAIN6" && ligacaoPonto == "verdeTerra" && preimeiraLigacao =="verdeTerra" && segundaLigacao == "verdeTerra"){
   let elementosCss = document.getElementById("MAIN5");
    console.log(elementosCss);
   if(elementosCss != null || elementosCss != undefined) { 

      if(pontoSelecionado2 == "MAIN5"){ 
   console.log(elementosCss);
   parte2 = true;
   elementosCss.id = "MAIN31"

console.log("fundionou");
      }

      if(pontoSelecionado2 == "MAIN5" || pontoSelecionado2 == "MAIN6" && elementosCss.id == "MAIN31"){   
            
   
   filtro = "5para6Verde"
   console.log(filtro);


         }

}
 }
//ligacao do 6 para o 5
 else if( pontoSelecionado2 == "MAIN5" &&verificador == "MAIN6" && ligacaoPonto == "brancoRetorno" && preimeiraLigacao =="brancoRetorno" && segundaLigacao == "brancoRetorno"){

   let elementosCss = document.getElementById("MAIN5");
   if(elementosCss != null || elementosCss != undefined) { 

      if(pontoSelecionado2 == "MAIN5"){ 
   console.log(elementosCss);
   parte2 = true;
   elementosCss.id = "MAIN32"

console.log("fundionou");

      }

      if(pontoSelecionado2 == "MAIN5" || pontoSelecionado2 == "MAIN6" && elementosCss.id == "MAIN32"){   
            
   
   filtro = "5para6Branco"
   console.log(filtro);


         }

}
 }
 //ligacao do 6 para o 5
 else if( pontoSelecionado2 == "MAIN5" &&verificador == "MAIN6" && ligacaoPonto == "azulNeltro" && preimeiraLigacao =="azulNeltro" && segundaLigacao == "azulNeltro"){
   let elementosCss = document.getElementById("MAIN5");
   if(elementosCss != null || elementosCss != undefined) { 

      if(pontoSelecionado2 == "MAIN5"){ 
   console.log(elementosCss);
   parte2 = true;
   elementosCss.id = "MAIN33"

console.log("fundionou");
      }


      if(pontoSelecionado2 == "MAIN5" || pontoSelecionado2 == "MAIN6" && elementosCss.id == "MAIN33"){   
            
   
   filtro = "5para6AzulNeltro"
   console.log(filtro);


         }

}

 }

//ligacao do 6 para o 6
 else if(pontoSelecionado2 == "MAIN5" &&verificador == "MAIN6" && ligacaoPonto == "marromRetorno" && preimeiraLigacao =="marromRetorno" && segundaLigacao == "marromRetorno"){

   let elementosCss = document.getElementById("MAIN5");
   if(elementosCss != null || elementosCss != undefined) { 

      if(pontoSelecionado2 == "MAIN5"){ 
   console.log(elementosCss);
   parte2 = true;
   elementosCss.id = "MAIN34"

   

console.log("fundionou");
      }

      if(pontoSelecionado2 == "MAIN5" || pontoSelecionado2 == "MAIN6" && elementosCss.id == "MAIN34"){   
            
   
   filtro = "5para6Morrom"
   console.log(filtro);


         }
}
 }



            ///// BUG DE CIRCUITO
else  if(verificador == "MAIN1" && ligacaoPonto == "pretoFase" && preimeiraLigacao =="pretoFase" && segundaLigacao == "pretoFase" ){
   let elementosCss = document.getElementById("MAIN1");
   if(elementosCss != null || elementosCss != undefined) { 
   
      if(pontoSelecionado2 == "MAIN2" || pontoSelecionado2 == "MAIN1"){ 
         conexao = "1p2"
    console.log(elementosCss);
    parte2 = true;
    elementosCss.id = "MAIN20"
   
   console.log("fundionou"); 
   abrirPopup(conexao)
    bug = true;
      }
   }
   }
   
else  if(verificador == "MAIN1" && ligacaoPonto == "verdeTerra" && preimeiraLigacao =="verdeTerra" && segundaLigacao == "verdeTerra" ){
      let elementosCss = document.getElementById("MAIN1");
      if(elementosCss != null || elementosCss != undefined) { 
      
         if(pontoSelecionado2 == "MAIN2" || pontoSelecionado2 == "MAIN1"){ 
       console.log(elementosCss);
       parte2 = true;
       conexao = "1p2"
       elementosCss.id = "MAIN21"
      abrirPopup(conexao)
      console.log("fundionou"); 
       bug = true;
         }
      }
      }
else  if(verificador == "MAIN1" && ligacaoPonto == "brancoRetorno" && preimeiraLigacao =="brancoRetorno" && segundaLigacao == "brancoRetorno" ){
      let elementosCss = document.getElementById("MAIN1");
      if(elementosCss != null || elementosCss != undefined) { 
         
      if(pontoSelecionado2 == "MAIN2" || pontoSelecionado2 == "MAIN1"){ 
      console.log(elementosCss);
      parte2 = true;
      conexao = "1p2"
      elementosCss.id = "MAIN22"
      abrirPopup(conexao)
      console.log("fundionou"); 
      bug = true;
}} }
else  if(verificador == "MAIN1" && ligacaoPonto == "azulNeltro" && preimeiraLigacao =="azulNeltro" && segundaLigacao == "azulNeltro" ){
      let elementosCss = document.getElementById("MAIN1");
      if(elementosCss != null || elementosCss != undefined) { 
            
          if(pontoSelecionado2 == "MAIN2" || pontoSelecionado2 == "MAIN1"){ 
         console.log(elementosCss);
       parte2 = true;
       conexao = "1p2"
       elementosCss.id = "MAIN23"
       abrirPopup(conexao)
       console.log("fundionou"); 
         bug = true;
         }
       }
       }

 else  if(verificador == "MAIN1" && ligacaoPonto == "marromRetorno" && preimeiraLigacao =="marromRetorno" && segundaLigacao == "marromRetorno" ){
         let elementosCss = document.getElementById("MAIN1");
          if(elementosCss != null || elementosCss != undefined) { 
               
             if(pontoSelecionado2 == "MAIN2" || pontoSelecionado2 == "MAIN1"){ 
            console.log(elementosCss);
          parte2 = true;
          conexao = "1p2"
            elementosCss.id = "MAIN24"
            abrirPopup(conexao)
          console.log("fundionou"); 
          bug = true;
  }
       }
   }
               
 else  if(verificador == "MAIN2" && ligacaoPonto == "pretoFase" && preimeiraLigacao =="pretoFase" && segundaLigacao == "pretoFase" ){
         let elementosCss = document.getElementById("MAIN1");
         if(elementosCss != null || elementosCss != undefined) { 
                  
            if(pontoSelecionado2 == "MAIN2" || pontoSelecionado2 == "MAIN1"){ 
         console.log(elementosCss);
          parte2 = true;
         elementosCss.id = "MAIN20"
         abrirPopup()
          console.log("fundionou"); 
            bug = true;
          }
       }
    }
                  
else  if(verificador == "MAIN2" && ligacaoPonto == "verdeTerra" && preimeiraLigacao =="verdeTerra" && segundaLigacao == "verdeTerra" ){
         let elementosCss = document.getElementById("MAIN1");
       if(elementosCss != null || elementosCss != undefined) { 
                     
         if(pontoSelecionado2 == "MAIN2" || pontoSelecionado2 == "MAIN1"){ 
       console.log(elementosCss);
       parte2 = true;
       elementosCss.id = "MAIN21"
       abrirPopup()        
       console.log("fundionou"); 
       bug = true;
 }
   }
   }
   else  if(verificador == "MAIN2" && ligacaoPonto == "brancoRetorno" && preimeiraLigacao =="brancoRetorno" && segundaLigacao == "brancoRetorno" ){
          let elementosCss = document.getElementById("MAIN1");
          if(elementosCss != null || elementosCss != undefined) { 
                        
           if(pontoSelecionado2 == "MAIN2" || pontoSelecionado2 == "MAIN1"){ 
             console.log(elementosCss);
             parte2 = true;
              elementosCss.id = "MAIN22"
              abrirPopup()      
              console.log("fundionou"); 
              bug = true;
   }
    }
    }
    else  if(verificador == "MAIN2" && ligacaoPonto == "azulNeltro" && preimeiraLigacao =="azulNeltro" && segundaLigacao == "azulNeltro" ){
       let elementosCss = document.getElementById("MAIN1");
          if(elementosCss != null || elementosCss != undefined) { 
                           
          if(pontoSelecionado2 == "MAIN2" || pontoSelecionado2 == "MAIN1"){ 
           console.log(elementosCss);
             parte2 = true;
              elementosCss.id = "MAIN23"
              abrirPopup()           
               console.log("fundionou"); 
            bug = true;
     }
     }
    }
 else  if(verificador == "MAIN2" && ligacaoPonto == "marromRetorno" && preimeiraLigacao =="marromRetorno" && segundaLigacao == "marromRetorno" ){
             let elementosCss = document.getElementById("MAIN1");
            if(elementosCss != null || elementosCss != undefined) { 
                              console.log(pontoSelecionado2)
               if(pontoSelecionado2 == "MAIN2" || pontoSelecionado2 == "MAIN1"){ 
                console.log(elementosCss);
                parte2 = true;
                elementosCss.id = "MAIN24"
                abrirPopup()       
               console.log("fundionou"); 
                bug = true;
  }
    }
      }         
      
      else  if(verificador == "MAIN3" && ligacaoPonto == "pretoFase" && preimeiraLigacao =="pretoFase" && segundaLigacao == "pretoFase" ){
         let elementosCss = document.getElementById("MAIN3");
         if(elementosCss != null || elementosCss != undefined) { 
         
            if(pontoSelecionado2 == "MAIN3" || pontoSelecionado2 == "MAIN4"){ 
          console.log(elementosCss);
          parte2 = true;
          elementosCss.id = "MAIN25"
          abrirPopup()
         console.log("fundionou"); 
          bug = true;
            }
         }
         }
         
      else  if(verificador == "MAIN3" && ligacaoPonto == "verdeTerra" && preimeiraLigacao =="verdeTerra" && segundaLigacao == "verdeTerra" ){
            let elementosCss = document.getElementById("MAIN3");
            if(elementosCss != null || elementosCss != undefined) { 
            
               if(pontoSelecionado2 == "MAIN3" || pontoSelecionado2 == "MAIN4"){ 
             console.log(elementosCss);
             parte2 = true;
             elementosCss.id = "MAIN26"
             abrirPopup()
            console.log("fundionou"); 
             bug = true;
               }
            }
            }
      else  if(verificador == "MAIN3" && ligacaoPonto == "brancoRetorno" && preimeiraLigacao =="brancoRetorno" && segundaLigacao == "brancoRetorno" ){
            let elementosCss = document.getElementById("MAIN3");
            if(elementosCss != null || elementosCss != undefined) { 
               
            if(pontoSelecionado2 == "MAIN3" || pontoSelecionado2 == "MAIN4"){ 
            console.log(elementosCss);
            parte2 = true;
            elementosCss.id = "MAIN27"
            abrirPopup() 
            console.log("fundionou"); 
            bug = true;
      }} }
      else  if(verificador == "MAIN3" && ligacaoPonto == "azulNeltro" && preimeiraLigacao =="azulNeltro" && segundaLigacao == "azulNeltro" ){
            let elementosCss = document.getElementById("MAIN3");
            if(elementosCss != null || elementosCss != undefined) { 
                  
                if(pontoSelecionado2 == "MAIN3" || pontoSelecionado2 == "MAIN4"){ 
               console.log(elementosCss);
             parte2 = true;
             elementosCss.id = "MAIN28"
             abrirPopup()     
             console.log("fundionou"); 
               bug = true;
               }
             }
             }
      
       else  if(verificador == "MAIN3" && ligacaoPonto == "marromRetorno" && preimeiraLigacao =="marromRetorno" && segundaLigacao == "marromRetorno" ){
               let elementosCss = document.getElementById("MAIN3");
                if(elementosCss != null || elementosCss != undefined) { 
                     
                   if(pontoSelecionado2 == "MAIN3" || pontoSelecionado2 == "MAIN4"){ 
                  console.log(elementosCss);
                parte2 = true;
                  elementosCss.id = "MAIN29"
                  abrirPopup()      
                console.log("fundionou"); 
                bug = true;
        }
             }
         }
                     
       else  if(verificador == "MAIN4" && ligacaoPonto == "pretoFase" && preimeiraLigacao =="pretoFase" && segundaLigacao == "pretoFase" ){
               let elementosCss = document.getElementById("MAIN3");
               if(elementosCss != null || elementosCss != undefined) { 
                        
                  if(pontoSelecionado2 == "MAIN3" || pontoSelecionado2 == "MAIN4"){ 
               console.log(elementosCss);
                parte2 = true;
               elementosCss.id = "MAIN25"
               abrirPopup()       
                console.log("fundionou"); 
                  bug = true;
                }
             }
          }
                        
      else  if(verificador == "MAIN4" && ligacaoPonto == "verdeTerra" && preimeiraLigacao =="verdeTerra" && segundaLigacao == "verdeTerra" ){
               let elementosCss = document.getElementById("MAIN3");
             if(elementosCss != null || elementosCss != undefined) { 
                           
               if(pontoSelecionado2 == "MAIN3" || pontoSelecionado2 == "MAIN4"){ 
             console.log(elementosCss);
             parte2 = true;
             elementosCss.id = "MAIN26"
             abrirPopup()            
             console.log("fundionou"); 
             bug = true;
       }
         }
         }
         else  if(verificador == "MAIN4" && ligacaoPonto == "brancoRetorno" && preimeiraLigacao =="brancoRetorno" && segundaLigacao == "brancoRetorno" ){
                let elementosCss = document.getElementById("MAIN3");
                if(elementosCss != null || elementosCss != undefined) { 
                              
                 if(pontoSelecionado2 == "MAIN3" || pontoSelecionado2 == "MAIN4"){ 
                   console.log(elementosCss);
                   parte2 = true;
                    elementosCss.id = "MAIN27"
                    abrirPopup()              
                    console.log("fundionou"); 
                    bug = true;
         }
          }
          }
          else  if(verificador == "MAIN4" && ligacaoPonto == "azulNeltro" && preimeiraLigacao =="azulNeltro" && segundaLigacao == "azulNeltro" ){
             let elementosCss = document.getElementById("MAIN3");
                if(elementosCss != null || elementosCss != undefined) { 
                                 
                if(pontoSelecionado2 == "MAIN3" || pontoSelecionado2 == "MAIN4"){ 
                 console.log(elementosCss);
                   parte2 = true;
                    elementosCss.id = "MAIN28"
                 abrirPopup()    
                 console.log("fundionou"); 
                                 
                  bug = true;
           }
           }
          }


       else  if(verificador == "MAIN4" && ligacaoPonto == "marromRetorno" && preimeiraLigacao =="marromRetorno" && segundaLigacao == "marromRetorno" ){
                   let elementosCss = document.getElementById("MAIN3");
                  if(elementosCss != null || elementosCss != undefined) { 
                                    console.log(pontoSelecionado2)
                     if(pontoSelecionado2 == "MAIN3" || pontoSelecionado2 == "MAIN4"){ 
                      console.log(elementosCss);
                      parte2 = true;
                      elementosCss.id = "MAIN29"
                 abrirPopup()     
                              
                     console.log("fundionou"); 
                      bug = true;
        }
          }
            }    
            
            




    
    console.log(ligacaoPonto);
    console.log(preimeiraLigacao);
    console.log(segundaLigacao);
 
 
 };
 //=========PRIMEIRO FIO===========








//===========SEGUNDO FIO==========
 function fioConectadoParte33(){



   console.log( " e true ou false",resetId2);
 if(resetId2 == true ){

   //MAIN1
   let elementosCss = this.document.getElementById("MAIN10")
   let elementosCss2 = this.document.getElementById("MAIN11")
   let elementosCss3 = this.document.getElementById("MAIN12")
   let elementosCss4 = this.document.getElementById("MAIN13")
   let elementosCss5 = this.document.getElementById("MAIN14")

//MAIN2
   let elementosCss6 = this.document.getElementById("MAIN15")
   let elementosCss7 = this.document.getElementById("MAIN16")
   let elementosCss8 = this.document.getElementById("MAIN17")
   let elementosCss9 = this.document.getElementById("MAIN18")
   let elementosCss10 = this.document.getElementById("MAIN19")


     //MAIN5
   let elementosCss16 = this.document.getElementById("MAIN30")
   let elementosCss17 = this.document.getElementById("MAIN31")
   let elementosCss18 = this.document.getElementById("MAIN32")
   let elementosCss19 = this.document.getElementById("MAIN33")
   let elementosCss20 = this.document.getElementById("MAIN34")


   // tratar bug 2
   let elementosCss11 = this.document.getElementById("MAIN25")
   let elementosCss12 = this.document.getElementById("MAIN26")
   let elementosCss13 = this.document.getElementById("MAIN27")
   let elementosCss14 = this.document.getElementById("MAIN28")
   let elementosCss15 = this.document.getElementById("MAIN29")




   console.log(elementosCss)
   if( elementosCss != null || elementosCss != undefined ){ 
   elementosCss.id = "MAIN1"
   


   console.log(elementosCss)
   
   }
   if( elementosCss2 != null || elementosCss2 != undefined ){ 
       
      elementosCss2.id= "MAIN1"
      
   
   
      console.log(elementosCss)
      
   }

   if( elementosCss3 != null || elementosCss3 != undefined ){ 
      
         
         elementosCss3.id= "MAIN1"
         
      
      
         console.log(elementosCss)
         
   }
   if( elementosCss4 != null || elementosCss4 != undefined ){ 
      
         
           
            elementosCss4.id= "MAIN1"
          
         
         
            console.log(elementosCss)
            
   }
   if( elementosCss5 != null || elementosCss5 != undefined ){ 
      
         
           
               
               elementosCss5.id= "MAIN1"
            
            
               console.log(elementosCss)
               
   }        
   if( elementosCss6 != null || elementosCss6 != undefined ){ 
      elementosCss6.id = "MAIN2"
      
   
   
      console.log(elementosCss)
      
   }
   if( elementosCss7 != null || elementosCss7 != undefined ){ 
          
         elementosCss7.id= "MAIN2"
         
      
      
         console.log(elementosCss)
         
   }
   
   if( elementosCss8 != null || elementosCss8 != undefined ){ 
         
            
            elementosCss8.id= "MAIN2"
            
         
         
            console.log(elementosCss)
            
   }
      if( elementosCss9 != null || elementosCss9 != undefined ){ 
         
            
              
               elementosCss9.id= "MAIN2"
             
            
            
               console.log(elementosCss)
               
   }
      if( elementosCss10 != null || elementosCss10 != undefined ){ 
         
            
              
                  
                  elementosCss10.id= "MAIN2"
               
               
                  console.log(elementosCss)
                  
      } 

          if( elementosCss16 != null || elementosCss16 != undefined ){ 
      elementosCss16.id = "MAIN5"
      
   
   
      console.log(elementosCss)
      
   }
   if( elementosCss17 != null || elementosCss17 != undefined ){ 
          
         elementosCss17.id= "MAIN5"
         
      
      
         console.log(elementosCss)
         
   }
   
   if( elementosCss18 != null || elementosCss18 != undefined ){ 
         
            
            elementosCss18.id= "MAIN5"
            
         
         
            console.log(elementosCss)
            
   }
      if( elementosCss19 != null || elementosCss19 != undefined ){ 
         
            
              
               elementosCss19.id= "MAIN5"
             
            
            
               console.log(elementosCss)
               
   }
      if( elementosCss20 != null || elementosCss20 != undefined ){ 
         
            
              
                  
                  elementosCss20.id= "MAIN5"
               
               
                  console.log(elementosCss)
                  
      } 


// BUG   2 
console.log(bug)
console.log(elementosCss11)

if( elementosCss11 != null || elementosCss11 != undefined && bug == true ){ 
        

   console.log(bug)

   elementosCss11.id = "MAIN3"
   


   console.log(elementosCss11)
   
   }else

if( elementosCss12 != null || elementosCss12 != undefined && bug == true ){ 
  

   console.log(bug)

   elementosCss12.id = "MAIN3"
   


   console.log(elementosCss12)
   
   }
   else

if( elementosCss13 != null || elementosCss13 != undefined && bug == true ){ 
  

   console.log(bug)

   elementosCss13.id = "MAIN3"
   


   console.log(elementosCss13)
   
   }
   else

   if( elementosCss14 != null || elementosCss14 != undefined && bug == true ){ 
     

      console.log(bug)

      elementosCss14.id = "MAIN3"
      
   
   
      console.log(elementosCss14)
      
      }
      else

      if( elementosCss15 != null || elementosCss15 != undefined && bug == true ){ 
        

         console.log(bug)

         elementosCss15.id = "MAIN3"
         
      
      
         console.log(elementosCss15)
         
         } 
             


   resetId2 = false




 }else

 
   console.log(verificador2);
    if(  verificador2 == "MAIN1" && ligacaoPonto2 == "pretoFase" && preimeiraLigacao2 =="pretoFase" && segundaLigacao2 == "pretoFase" ){
        let elementosCss = document.getElementById("MAIN1");
         if(elementosCss != null || elementosCss != undefined) { 
         
         console.log(elementosCss);
         parte3 = true;
         elementosCss.id = "MAIN10"
         }

         if(elementosCss != null || elementosCss != undefined) { 
         if(pontoSelecionado4 == "MAIN1" || pontoSelecionado4 == "MAIN3" && elementosCss.id == "MAIN10"){   
            
   
   filtro2 = "1para3Preto"
   console.log(filtro);


         }}

    console.log("fundionou"); 
    }
    else if(verificador2 == "MAIN1" && ligacaoPonto2 == "verdeTerra" && preimeiraLigacao2 =="verdeTerra" && segundaLigacao2 == "verdeTerra"){
      let elementosCss = document.getElementById("MAIN1");
      if(elementosCss != null || elementosCss != undefined) { 
      console.log(elementosCss);
      parte3 = true;
      elementosCss.id = "MAIN11"
   

      if(pontoSelecionado4 == "MAIN1" || pontoSelecionado4 == "MAIN3" && elementosCss.id == "MAIN11"){   
            
   
   filtro2 = "1para3Verde"
   console.log(filtro);


         }

 console.log("fundionou");
}
    } else if(verificador2 == "MAIN1" && ligacaoPonto2 == "brancoRetorno" && preimeiraLigacao2 =="brancoRetorno" && segundaLigacao2 == "brancoRetorno"){

      let elementosCss = document.getElementById("MAIN1");
      if(elementosCss != null || elementosCss != undefined) { 
      console.log(elementosCss);
      parte3 = true;
      elementosCss.id = "MAIN12"
   

      if(pontoSelecionado4 == "MAIN1" || pontoSelecionado4 == "MAIN3" && elementosCss.id == "MAIN12"){   
            
   
   filtro2 = "1para3Branco"
   console.log(filtro);


         }

 console.log("fundionou");
}
    } else if(verificador2 == "MAIN1" && ligacaoPonto2 == "azulNeltro" && preimeiraLigacao2 =="azulNeltro" && segundaLigacao2 == "azulNeltro"){
      let elementosCss = document.getElementById("MAIN1");
      if(elementosCss != null || elementosCss != undefined) { 
      console.log(elementosCss);
      parte3 = true;
      elementosCss.id = "MAIN13"

      if(pontoSelecionado4 == "MAIN1" || pontoSelecionado4 == "MAIN3" && elementosCss.id == "MAIN13"){   
            
   
   filtro2 = "1para3AzulNeltro"
   console.log(filtro);


         }

 console.log("fundionou");
}

    } else if(verificador2 == "MAIN1" && ligacaoPonto2 == "marromRetorno" && preimeiraLigacao2 =="marromRetorno" && segundaLigacao2 == "marromRetorno"){

      let elementosCss = document.getElementById("MAIN1");
      if(elementosCss != null || elementosCss != undefined) { 
      console.log(elementosCss);
      parte3 = true;
      elementosCss.id = "MAIN14"
 
      if(pontoSelecionado4 == "MAIN1" || pontoSelecionado4 == "MAIN3" && elementosCss.id == "MAIN14"){   
            
   
   filtro2 = "1para3Marrom"
   console.log(filtro);


         }

 console.log("fundionou");
}
    } else  if(verificador2 == "MAIN2" && ligacaoPonto2 == "pretoFase" && preimeiraLigacao2 =="pretoFase" && segundaLigacao2 == "pretoFase" ){
      let elementosCss2 = document.getElementById("MAIN2");
      if(elementosCss2 != null || elementosCss2 != undefined) { 
       console.log(elementosCss2);
       parte3 = true;
       elementosCss2.id = "MAIN15"

       if(pontoSelecionado4 == "MAIN2" || pontoSelecionado4 == "MAIN4" && elementosCss2.id == "MAIN15"){   
            
   
   filtro2 = "2para4Preto"
   console.log(filtro);


         }
      }
  console.log("fundionou"); 
  } else  if(verificador2 == "MAIN2" && ligacaoPonto2 == "verdeTerra" && preimeiraLigacao2 =="verdeTerra" && segundaLigacao2 == "verdeTerra" ){
   let elementosCss2 = document.getElementById("MAIN2");
   if(elementosCss2 != null || elementosCss2 != undefined) { 
    console.log(elementosCss2);
    parte3 = true;
    elementosCss2.id = "MAIN16"
   

   if(pontoSelecionado4 == "MAIN2" || pontoSelecionado4 == "MAIN4" && elementosCss2.id == "MAIN16"){   
            
   
   filtro2 = "2para4Verde"
   console.log(filtro);


         }
      }
console.log("fundionou"); 
} else  if(verificador2 == "MAIN2" && ligacaoPonto2 == "brancoRetorno" && preimeiraLigacao2 =="brancoRetorno" && segundaLigacao2 == "brancoRetorno" ){
   let elementosCss2 = document.getElementById("MAIN2");
   if(elementosCss2 != null || elementosCss2 != undefined) { 
    console.log(elementosCss2);
    parte3 = true;
    elementosCss2.id = "MAIN17"
   

   if(pontoSelecionado4 == "MAIN2" || pontoSelecionado4 == "MAIN4" && elementosCss2.id == "MAIN17"){   
            
   
   filtro2 = "2para4Branco"
   console.log(filtro);


         }
      }
console.log("fundionou"); 
} else  if(verificador2 == "MAIN2" && ligacaoPonto2 == "azulNeltro" && preimeiraLigacao2 =="azulNeltro" && segundaLigacao2 == "azulNeltro" ){
   let elementosCss2 = document.getElementById("MAIN2");
   if(elementosCss2 != null || elementosCss2 != undefined) { 
    console.log(elementosCss2);
    parte3 = true;
    elementosCss2.id = "MAIN18"
   

   if(pontoSelecionado4 == "MAIN2" || pontoSelecionado4 == "MAIN4" && elementosCss2.id == "MAIN18"){   
            
   
   filtro2 = "2para4AzulNeltro"
   console.log(filtro);


         }
      }
console.log("fundionou"); 
} else  if(verificador2 == "MAIN2" && ligacaoPonto2 == "marromRetorno" && preimeiraLigacao2 =="marromRetorno" && segundaLigacao2 == "marromRetorno" ){
   let elementosCss2 = document.getElementById("MAIN2");
   if(elementosCss2 != null || elementosCss2 != undefined) { 
    console.log(elementosCss2);
 parte3 = true;
    elementosCss2.id = "MAIN19"

console.log("fundionou"); 
   
   if(pontoSelecionado4 == "MAIN2" || pontoSelecionado4 == "MAIN4" && elementosCss2.id == "MAIN19"){   
            
   
   filtro2 = "2para4Marrom"
   console.log(filtro);


         }
      }
}
 

else




 
   console.log(verificador2);
    if(  verificador2 == "MAIN3" && ligacaoPonto2 == "pretoFase" && preimeiraLigacao2 =="pretoFase" && segundaLigacao2 == "pretoFase" ){
        let elementosCss = document.getElementById("MAIN1");
         if(elementosCss != null || elementosCss != undefined) { 
         
         console.log(elementosCss);
         parte3 = true;
         elementosCss.id = "MAIN10"
         

         if(pontoSelecionado4 == "MAIN3" || pontoSelecionado4 == "MAIN1" && elementosCss.id == "MAIN10"){   
            
   
   filtro2 = "1para3Preto"
   console.log(filtro);


         }

         }
    console.log("fundionou"); 
    }
    else if(verificador2 == "MAIN3" && ligacaoPonto2 == "verdeTerra" && preimeiraLigacao2 =="verdeTerra" && segundaLigacao2 == "verdeTerra"){
      let elementosCss = document.getElementById("MAIN1");
      if(elementosCss != null || elementosCss != undefined) { 
      console.log(elementosCss);
      parte3 = true;
      elementosCss.id = "MAIN11"
   

      if(pontoSelecionado4 == "MAIN3" || pontoSelecionado4 == "MAIN1" && elementosCss.id == "MAIN11"){   
            
   
   filtro2 = "1para3Verde"
   console.log(filtro);


         }


 console.log("fundionou");
}
    } else if(verificador2 == "MAIN3" && ligacaoPonto2 == "brancoRetorno" && preimeiraLigacao2 =="brancoRetorno" && segundaLigacao2 == "brancoRetorno"){

      let elementosCss = document.getElementById("MAIN1");
      if(elementosCss != null || elementosCss != undefined) { 
      console.log(elementosCss);
      parte3 = true;
      elementosCss.id = "MAIN12"
   

      if(pontoSelecionado4 == "MAIN3" || pontoSelecionado4 == "MAIN1" && elementosCss.id == "MAIN12"){   
            
   
   filtro2 = "1para3Branco"
   console.log(filtro);


         }
 console.log("fundionou");
}
    } else if(verificador2 == "MAIN3" && ligacaoPonto2 == "azulNeltro" && preimeiraLigacao2 =="azulNeltro" && segundaLigacao2 == "azulNeltro"){
      let elementosCss = document.getElementById("MAIN1");
      if(elementosCss != null || elementosCss != undefined) { 
      console.log(elementosCss);
      parte3 = true;
      elementosCss.id = "MAIN13"

      if(pontoSelecionado4 == "MAIN3" || pontoSelecionado4 == "MAIN1" && elementosCss.id == "MAIN13"){   
            
   
   filtro2 = "1para3AzulNeltro"
   console.log(filtro);


         }

 console.log("fundionou");
}

    } else if(verificador2 == "MAIN3" && ligacaoPonto2 == "marromRetorno" && preimeiraLigacao2 =="marromRetorno" && segundaLigacao2 == "marromRetorno"){

      let elementosCss = document.getElementById("MAIN1");
      if(elementosCss != null || elementosCss != undefined) { 
      console.log(elementosCss);
   parte3 = true;
      elementosCss.id = "MAIN14"
 
      
if(pontoSelecionado4 == "MAIN3" || pontoSelecionado4 == "MAIN1" && elementosCss.id == "MAIN14"){   
            
   
   filtro2 = "1para3Marrom"
   console.log(filtro);


         }

 console.log("fundionou");
}
    } else  if(verificador2 == "MAIN4" && ligacaoPonto2 == "pretoFase" && preimeiraLigacao2 =="pretoFase" && segundaLigacao2 == "pretoFase" ){
      let elementosCss2 = document.getElementById("MAIN2");
      if(elementosCss2 != null || elementosCss2 != undefined) { 
       console.log(elementosCss2);
       parte3 = true;
       elementosCss2.id = "MAIN15"
      

      if(pontoSelecionado4 == "MAIN4" || pontoSelecionado4 == "MAIN2" && elementosCss2.id == "MAIN15"){   
            
   
   filtro2 = "2para4Preto"
   console.log(filtro);


         }
      }
  console.log("fundionou"); 
  } else  if(verificador2 == "MAIN4" && ligacaoPonto2 == "verdeTerra" && preimeiraLigacao2 =="verdeTerra" && segundaLigacao2 == "verdeTerra" ){
   let elementosCss2 = document.getElementById("MAIN2");
   if(elementosCss2 != null || elementosCss2 != undefined) { 
    console.log(elementosCss2);
    parte3 = true;
    elementosCss2.id = "MAIN16"
   

   if(pontoSelecionado4 == "MAIN4" || pontoSelecionado4 == "MAIN2" && elementosCss2.id == "MAIN16"){   
            
   
   filtro2 = "2para4Verde"
   console.log(filtro);


         }
      }
console.log("fundionou"); 
} else  if(verificador2 == "MAIN4" && ligacaoPonto2 == "brancoRetorno" && preimeiraLigacao2 =="brancoRetorno" && segundaLigacao2 == "brancoRetorno" ){
   let elementosCss2 = document.getElementById("MAIN2");
   if(elementosCss2 != null || elementosCss2 != undefined) { 
    console.log(elementosCss2);
    parte3 = true;
    elementosCss2.id = "MAIN17"
   

   if(pontoSelecionado4 == "MAIN4" || pontoSelecionado4 == "MAIN2" && elementosCss2.id == "MAIN17"){   
            
   
   filtro2 = "2para4Branco"
   console.log(filtro);


         }
      }
console.log("fundionou"); 
} else  if(verificador2 == "MAIN4" && ligacaoPonto2 == "azulNeltro" && preimeiraLigacao2 =="azulNeltro" && segundaLigacao2 == "azulNeltro" ){
   let elementosCss2 = document.getElementById("MAIN2");
   if(elementosCss2 != null || elementosCss2 != undefined) { 
    console.log(elementosCss2);
    parte3 = true;
    elementosCss2.id = "MAIN18"
   

   if(pontoSelecionado4 == "MAIN4" || pontoSelecionado4 == "MAIN2" && elementosCss2.id == "MAIN18"){   
            
   
   filtro2 = "2para4AzulNeltro"
   console.log(filtro);


         }
      }

console.log("fundionou"); 
} else  if(verificador2 == "MAIN4" && ligacaoPonto2 == "marromRetorno" && preimeiraLigacao2 =="marromRetorno" && segundaLigacao2 == "marromRetorno" ){
   let elementosCss2 = document.getElementById("MAIN2");
   if(elementosCss2 != null || elementosCss2 != undefined) { 
    console.log(elementosCss2);
    parte3 = true;
    elementosCss2.id = "MAIN19"

    if(pontoSelecionado4 == "MAIN4" || pontoSelecionado4 == "MAIN2" && elementosCss2.id == "MAIN19"){   
            
   
   filtro2 = "2para4Marrom"
   console.log(filtro);


         }

console.log("fundionou"); 
   }
}else




//ligacao do 5 para o 6
if(   verificador2 == "MAIN5"   && ligacaoPonto2 == "pretoFase" && preimeiraLigacao2 =="pretoFase" && segundaLigacao2 == "pretoFase" ){
   let elementosCss = document.getElementById("MAIN5");
    if(elementosCss != null || elementosCss != undefined) { 
    


      
    console.log(elementosCss);
    parte3 = true;
    elementosCss.id = "MAIN30"
    
    if(pontoSelecionado4 == "MAIN5" || pontoSelecionado4 == "MAIN6" && elementosCss.id == "MAIN30"){   
            
   
   filtro2 = "5para6Preto"
   console.log(filtro);


         }

console.log("fundionou"); 
   }
}
//ligacao do 5 para o 6 
else if(  verificador2 == "MAIN5" && ligacaoPonto2 == "verdeTerra" && preimeiraLigacao2 =="verdeTerra" && segundaLigacao2 == "verdeTerra"){
   let elementosCss = document.getElementById("MAIN5");
    console.log(elementosCss);
   if(elementosCss != null || elementosCss != undefined) { 
 
      
   console.log(elementosCss);
   parte3 = true;
   elementosCss.id = "MAIN31"

   if(pontoSelecionado4 == "MAIN5" || pontoSelecionado4 == "MAIN6" && elementosCss.id == "MAIN31"){   
            
   
   filtro2 = "5para6Verde"
   console.log(filtro);


         }

console.log("fundionou");
      
}
 }
//ligacao do 5 para o 6
 else if( verificador2 == "MAIN5" && ligacaoPonto2 == "brancoRetorno" && preimeiraLigacao2 =="brancoRetorno" && segundaLigacao2 == "brancoRetorno"){

   let elementosCss = document.getElementById("MAIN5");
   if(elementosCss != null || elementosCss != undefined) { 

      
   console.log(elementosCss);
   parte3 = true;
   elementosCss.id = "MAIN32"


   if(pontoSelecionado4 == "MAIN5" || pontoSelecionado4 == "MAIN6" && elementosCss.id == "MAIN32"){   
            
   
   filtro2 = "5para6Branco"
   console.log(filtro);


         }

console.log("fundionou");

      
}
 }
 //ligacao do 5 para o 6
 else if( verificador2 == "MAIN5" && ligacaoPonto2 == "azulNeltro" && preimeiraLigacao2 =="azulNeltro" && segundaLigacao2 == "azulNeltro"){
   let elementosCss = document.getElementById("MAIN5");
   if(elementosCss != null || elementosCss != undefined) { 

      
   console.log(elementosCss);
   parte3 = true;
   elementosCss.id = "MAIN33"

   if(pontoSelecionado4 == "MAIN5" || pontoSelecionado4 == "MAIN6" && elementosCss.id == "MAIN33"){   
            
   
   filtro2 = "5para6AzulNeltro"
   console.log(filtro);


         }

console.log("fundionou");
      
}

 }

//ligacao do 5 para o 6
 else if(verificador2 == "MAIN5" && ligacaoPonto2 == "marromRetorno" && preimeiraLigacao2 =="marromRetorno" && segundaLigacao2 == "marromRetorno"){

   let elementosCss = document.getElementById("MAIN5");
   if(elementosCss != null || elementosCss != undefined) { 

       
   console.log(elementosCss);
   parte3 = true;
   elementosCss.id = "MAIN34"

   if(pontoSelecionado4 == "MAIN5" || pontoSelecionado4 == "MAIN6" && elementosCss.id == "MAIN34"){   
            
   
   filtro2 = "5para6Marrom"
   console.log(filtro);


         }

console.log("fundionou");
      
}
 }



 else

//ligacao do 6 para o 5
if(  verificador2 == "MAIN6"   && ligacaoPonto2 == "pretoFase" && preimeiraLigacao2 =="pretoFase" && segundaLigacao2 == "pretoFase" ){
   let elementosCss = document.getElementById("MAIN5");
    if(elementosCss != null || elementosCss != undefined) { 
    


      
    console.log(elementosCss);
    parte3 = true;
    elementosCss.id = "MAIN30"
    

    if(pontoSelecionado4 == "MAIN5" || pontoSelecionado4 == "MAIN6" && elementosCss.id == "MAIN30"){   
            
   
   filtro2 = "5para6Preto"
   console.log(filtro);


         }


console.log("fundionou"); 
   }
}
//ligacao do 5 para o 6 
else if(verificador2 == "MAIN6" && ligacaoPonto2 == "verdeTerra" && preimeiraLigacao2 =="verdeTerra" && segundaLigacao2 == "verdeTerra"){
   let elementosCss = document.getElementById("MAIN5");
    console.log(elementosCss);
   if(elementosCss != null || elementosCss != undefined) { 
 console.log("tttttt");
      
   console.log(elementosCss);
   parte3 = true;
   elementosCss.id = "MAIN31"


   if(pontoSelecionado4 == "MAIN5" || pontoSelecionado4 == "MAIN6" && elementosCss.id == "MAIN31"){   
            
   
   filtro2 = "5para6Verde"
   console.log(filtro);


         }

console.log("fundionou");
     
}
 }
//ligacao do 5 para o 6
 else if( verificador2 == "MAIN6" && ligacaoPonto2 == "brancoRetorno" && preimeiraLigacao2 =="brancoRetorno" && segundaLigacao2 == "brancoRetorno"){

   let elementosCss = document.getElementById("MAIN5");
   if(elementosCss != null || elementosCss != undefined) { 

     
   console.log(elementosCss);
   parte3 = true;
   elementosCss.id = "MAIN32"

console.log("fundionou");
if(pontoSelecionado4 == "MAIN5" || pontoSelecionado4 == "MAIN6" && elementosCss.id == "MAIN32"){   
            
   
   filtro2 = "5para6Branco"
   console.log(filtro);


         }
      
}
 }
 //ligacao do 5 para o 6
 else if( verificador2 == "MAIN6" && ligacaoPonto2 == "azulNeltro" && preimeiraLigacao2 =="azulNeltro" && segundaLigacao2 == "azulNeltro"){
   let elementosCss = document.getElementById("MAIN5");
   if(elementosCss != null || elementosCss != undefined) { 

      
   console.log(elementosCss);
   parte3 = true;
   elementosCss.id = "MAIN33"

console.log("fundionou");
      

if(pontoSelecionado4 == "MAIN5" || pontoSelecionado4 == "MAIN6" && elementosCss.id == "MAIN33"){   
            
   
   filtro2 = "5para6AzulNeltro"
   console.log(filtro);


         }

}

 }

//ligacao do 5 para o 6
 else if(verificador2 == "MAIN6" && ligacaoPonto2 == "marromRetorno" && preimeiraLigacao2 =="marromRetorno" && segundaLigacao2 == "marromRetorno"){

   let elementosCss = document.getElementById("MAIN5");
   if(elementosCss != null || elementosCss != undefined) { 

      
   console.log(elementosCss);
   parte3 = true;
   elementosCss.id = "MAIN34"

   if(pontoSelecionado4 == "MAIN5" || pontoSelecionado4 == "MAIN6" && elementosCss.id == "MAIN34"){   
            
   
   filtro2 = "5para6Marrom"
   console.log(filtro);


         }

console.log("fundionou");
      
}
 }


 ///// BUG DE CIRCUITO 2
//  else  if(verificador2 == "MAIN3" && ligacaoPonto2 == "pretoFase" && preimeiraLigacao2 =="pretoFase" && segundaLigacao2 == "pretoFase" ){
//    let elementosCss = document.getElementById("MAIN3");
//    if(elementosCss != null || elementosCss != undefined) { 
   
//       console.log( "pontoSelecionado4",pontoSelecionado4)
//       if(pontoSelecionado4 == "MAIN3" || pontoSelecionado4 == "MAIN4"){ 
//     console.log(elementosCss);
//     parte2 = true;
//     elementosCss.id = "MAIN25"
   
//    console.log("fundionou"); 
//     bug = true;
//       }
//    }
//    }
   
// else  if(verificador2 == "MAIN3" && ligacaoPonto2 == "verdeTerra" && preimeiraLigacao2 =="verdeTerra" && segundaLigacao2 == "verdeTerra" ){
//       let elementosCss = document.getElementById("MAIN3");
//       if(elementosCss != null || elementosCss != undefined) { 
      
//          if(pontoSelecionado4 == "MAIN3" || pontoSelecionado4 == "MAIN4"){ 
//        console.log(elementosCss);
//        parte2 = true;
//        elementosCss.id = "MAIN26"
      
//       console.log("fundionou"); 
//        bug = true;
//          }
//       }
//       }
// else  if(verificador2 == "MAIN3" && ligacaoPonto2 == "brancoRetorno" && preimeiraLigacao2 =="brancoRetorno" && segundaLigacao2 == "brancoRetorno" ){
//       let elementosCss = document.getElementById("MAIN3");
//       if(elementosCss != null || elementosCss != undefined) { 
         
//       if(pontoSelecionado4 == "MAIN3" || pontoSelecionado4 == "MAIN4"){ 
//       console.log(elementosCss);
//       parte2 = true;
//       elementosCss.id = "MAIN27"
         
//       console.log("fundionou"); 
//       bug = true;
// }} }
// else  if(verificador2 == "MAIN3" && ligacaoPonto2 == "azulNeltro" && preimeiraLigacao2 =="azulNeltro" && segundaLigacao2 == "azulNeltro" ){
//       let elementosCss = document.getElementById("MAIN3");
//       if(elementosCss != null || elementosCss != undefined) { 
            
//           if(pontoSelecionado4 == "MAIN3" || pontoSelecionado4 == "MAIN4"){ 
//          console.log(elementosCss);
//        parte2 = true;
//        elementosCss.id = "MAIN28"
            
//        console.log("fundionou"); 
//          bug = true;
//          }
//        }
//        }

//  else  if(verificador2 == "MAIN3" && ligacaoPonto2 == "marromRetorno" && preimeiraLigacao2 =="marromRetorno" && segundaLigacao2 == "marromRetorno" ){
//          let elementosCss = document.getElementById("MAIN3");
//           if(elementosCss != null || elementosCss != undefined) { 
               
//              if(pontoSelecionado4 == "MAIN3" || pontoSelecionado4 == "MAIN4"){ 
//             console.log(elementosCss);
//           parte2 = true;
//             elementosCss.id = "MAIN29"
               
//           console.log("fundionou"); 
//           bug = true;
//   }
//        }
//    }
               
//  else  if(verificador2 == "MAIN4" && ligacaoPonto2 == "pretoFase" && preimeiraLigacao2 =="pretoFase" && segundaLigacao2 == "pretoFase" ){
//          let elementosCss = document.getElementById("MAIN3");
//          if(elementosCss != null || elementosCss != undefined) { 
                  
//             if(pontoSelecionado4 == "MAIN3" || pontoSelecionado4 == "MAIN4"){ 
//          console.log(elementosCss);
//           parte2 = true;
//          elementosCss.id = "MAIN25"
                  
//           console.log("fundionou"); 
//             bug = true;
//           }
//        }
//     }
                  
// else  if(verificador2 == "MAIN4" && ligacaoPonto2 == "verdeTerra" && preimeiraLigacao2 =="verdeTerra" && segundaLigacao2 == "verdeTerra" ){
//          let elementosCss = document.getElementById("MAIN3");
//        if(elementosCss != null || elementosCss != undefined) { 
                     
//          if(pontoSelecionado4 == "MAIN3" || pontoSelecionado4 == "MAIN4"){ 
//        console.log(elementosCss);
//        parte2 = true;
//        elementosCss.id = "MAIN26"
                     
//        console.log("fundionou"); 
//        bug = true;
//  }
//    }
//    }
//    else  if(verificador2 == "MAIN4" && ligacaoPonto2 == "brancoRetorno" && preimeiraLigacao2 =="brancoRetorno" && segundaLigacao2 == "brancoRetorno" ){
//           let elementosCss = document.getElementById("MAIN3");
//           if(elementosCss != null || elementosCss != undefined) { 
                        
//            if(pontoSelecionado4 == "MAIN3" || pontoSelecionado4 == "MAIN4"){ 
//              console.log(elementosCss);
//              parte2 = true;
//               elementosCss.id = "MAIN27"
                        
//               console.log("fundionou"); 
//               bug = true;
//    }
//     }
//     }
//     else  if(verificador2 == "MAIN4" && ligacaoPonto2 == "azulNeltro" && preimeiraLigacao2 =="azulNeltro" && segundaLigacao2 == "azulNeltro" ){
//        let elementosCss = document.getElementById("MAIN3");
//           if(elementosCss != null || elementosCss != undefined) { 
                           
//           if(pontoSelecionado4 == "MAIN3" || pontoSelecionado4 == "MAIN4"){ 
//            console.log(elementosCss);
//              parte2 = true;
//               elementosCss.id = "MAIN28"
                           
//                console.log("fundionou"); 
//             bug = true;
//      }
//      }
//     }
//  else  if(verificador2 == "MAIN4" && ligacaoPonto2 == "marromRetorno" && preimeiraLigacao2 =="marromRetorno" && segundaLigacao2 == "marromRetorno" ){
//              let elementosCss = document.getElementById("MAIN3");
//             if(elementosCss != null || elementosCss != undefined) { 
                              
//                if(pontoSelecionado4 == "MAIN3" || pontoSelecionado4 == "MAIN4"){ 
//                 console.log(elementosCss);
//                 parte2 = true;
//                 elementosCss.id = "MAIN29"
                        
//                console.log("fundionou"); 
//                 bug = true;
//   }
//     }
     // }         



    
    
    console.log(ligacaoPonto2);
    console.log(preimeiraLigacao2);
    console.log(segundaLigacao2);
 
 
 };
//===========SEGUNDO FIO==========






//===========TERCEIRO FIO==========
 function fioConectadoParte333(){



   console.log( " e true ou false",resetId3);
 if(resetId3 == true ){

   //MAIN1
   let elementosCss = this.document.getElementById("MAIN10")
   let elementosCss2 = this.document.getElementById("MAIN11")
   let elementosCss3 = this.document.getElementById("MAIN12")
   let elementosCss4 = this.document.getElementById("MAIN13")
   let elementosCss5 = this.document.getElementById("MAIN14")

//MAIN2
   let elementosCss6 = this.document.getElementById("MAIN15")
   let elementosCss7 = this.document.getElementById("MAIN16")
   let elementosCss8 = this.document.getElementById("MAIN17")
   let elementosCss9 = this.document.getElementById("MAIN18")
   let elementosCss10 = this.document.getElementById("MAIN19")

   //MAIN5
   let elementosCss16 = this.document.getElementById("MAIN30")
   let elementosCss17 = this.document.getElementById("MAIN31")
   let elementosCss18 = this.document.getElementById("MAIN32")
   let elementosCss19 = this.document.getElementById("MAIN33")
   let elementosCss20 = this.document.getElementById("MAIN34")


   // tratar bug 2
   let elementosCss11 = this.document.getElementById("MAIN25")
   let elementosCss12 = this.document.getElementById("MAIN26")
   let elementosCss13 = this.document.getElementById("MAIN27")
   let elementosCss14 = this.document.getElementById("MAIN28")
   let elementosCss15 = this.document.getElementById("MAIN29")




   console.log(elementosCss)
   if( elementosCss != null || elementosCss != undefined ){ 
   elementosCss.id = "MAIN1"
   


   console.log(elementosCss)
   
   }
   if( elementosCss2 != null || elementosCss2 != undefined ){ 
       
      elementosCss2.id= "MAIN1"
      
   
   
      console.log(elementosCss)
      
   }

   if( elementosCss3 != null || elementosCss3 != undefined ){ 
      
         
         elementosCss3.id= "MAIN1"
         
      
      
         console.log(elementosCss)
         
   }
   if( elementosCss4 != null || elementosCss4 != undefined ){ 
      
         
           
            elementosCss4.id= "MAIN1"
          
         
         
            console.log(elementosCss)
            
   }
   if( elementosCss5 != null || elementosCss5 != undefined ){ 
      
         
           
               
               elementosCss5.id= "MAIN1"
            
            
               console.log(elementosCss)
               
   }        
   if( elementosCss6 != null || elementosCss6 != undefined ){ 
      elementosCss6.id = "MAIN2"
      
   
   
      console.log(elementosCss)
      
   }
   if( elementosCss7 != null || elementosCss7 != undefined ){ 
          
         elementosCss7.id= "MAIN2"
         
      
      
         console.log(elementosCss)
         
   }
   
   if( elementosCss8 != null || elementosCss8 != undefined ){ 
         
            
            elementosCss8.id= "MAIN2"
            
         
         
            console.log(elementosCss)
            
   }
      if( elementosCss9 != null || elementosCss9 != undefined ){ 
         
            
              
               elementosCss9.id= "MAIN2"
             
            
            
               console.log(elementosCss)
               
   }
      if( elementosCss10 != null || elementosCss10 != undefined ){ 
         
            
              
                  
                  elementosCss10.id= "MAIN2"
               
               
                  console.log(elementosCss)
                  
      } 



      if( elementosCss16 != null || elementosCss16 != undefined ){ 
      elementosCss16.id = "MAIN5"
      
   
   
      console.log(elementosCss)
      
   }
   if( elementosCss17 != null || elementosCss17 != undefined ){ 
          
         elementosCss17.id= "MAIN5"
         
      
      
         console.log(elementosCss)
         
   }
   
   if( elementosCss18 != null || elementosCss18 != undefined ){ 
         
            
            elementosCss18.id= "MAIN5"
            
         
         
            console.log(elementosCss)
            
   }
      if( elementosCss19 != null || elementosCss19 != undefined ){ 
         
            
              
               elementosCss19.id= "MAIN5"
             
            
            
               console.log(elementosCss)
               
   }
      if( elementosCss20 != null || elementosCss20 != undefined ){ 
         
            
              
                  
                  elementosCss20.id= "MAIN5"
               
               
                  console.log(elementosCss)
                  
      } 



// BUG   2 
console.log(bug)
console.log(elementosCss11)

if( elementosCss11 != null || elementosCss11 != undefined && bug == true ){ 
        

   console.log(bug)

   elementosCss11.id = "MAIN3"
   


   console.log(elementosCss11)
   
   }else

if( elementosCss12 != null || elementosCss12 != undefined && bug == true ){ 
  

   console.log(bug)

   elementosCss12.id = "MAIN3"
   


   console.log(elementosCss12)
   
   }
   else

if( elementosCss13 != null || elementosCss13 != undefined && bug == true ){ 
  

   console.log(bug)

   elementosCss13.id = "MAIN3"
   


   console.log(elementosCss13)
   
   }
   else

   if( elementosCss14 != null || elementosCss14 != undefined && bug == true ){ 
     

      console.log(bug)

      elementosCss14.id = "MAIN3"
      
   
   
      console.log(elementosCss14)
      
      }
      else

      if( elementosCss15 != null || elementosCss15 != undefined && bug == true ){ 
        

         console.log(bug)

         elementosCss15.id = "MAIN3"
         
      
      
         console.log(elementosCss15)
         
         } 
             


   resetId3 = false




 }else

 
   console.log(verificador3);
   //ligacao do 1 para o 3
    if(  verificador3 == "MAIN1" && ligacaoPonto3 == "pretoFase" && preimeiraLigacao3 =="pretoFase" && segundaLigacao3 == "pretoFase" ){
        let elementosCss = document.getElementById("MAIN1");
         if(elementosCss != null || elementosCss != undefined) { 
         
         console.log(elementosCss);
         parte3 = true;
         elementosCss.id = "MAIN10"

         if(pontoSelecionado6 == "MAIN3" || pontoSelecionado6 == "MAIN1" && elementosCss.id == "MAIN10"){   
            
   
   filtro3 = "1para3Preto"
   console.log(filtro);


         }
         }

    console.log("fundionou"); 
    }
    else if(verificador3 == "MAIN1" && ligacaoPonto3 == "verdeTerra" && preimeiraLigacao3 =="verdeTerra" && segundaLigacao3 == "verdeTerra"){
      let elementosCss = document.getElementById("MAIN1");
      if(elementosCss != null || elementosCss != undefined) { 
      console.log(elementosCss);
      parte3 = true;
      elementosCss.id = "MAIN11"
   
        if(pontoSelecionado6 == "MAIN3" || pontoSelecionado6 == "MAIN1" && elementosCss.id == "MAIN11"){   
            
   
   filtro3 = "1para3Verde"
   console.log(filtro);


         }

 console.log("fundionou");
}
    } else if(verificador3 == "MAIN1" && ligacaoPonto3 == "brancoRetorno" && preimeiraLigacao3 =="brancoRetorno" && segundaLigacao3 == "brancoRetorno"){

      let elementosCss = document.getElementById("MAIN1");
      if(elementosCss != null || elementosCss != undefined) { 
      console.log(elementosCss);
      parte3 = true;
      elementosCss.id = "MAIN12"
     if(pontoSelecionado6 == "MAIN3" || pontoSelecionado6 == "MAIN1" && elementosCss.id == "MAIN12"){   
            
   
   filtro3 = "1para3Branco"
   console.log(filtro);


         }
 console.log("fundionou");
}
    } else if(verificador3 == "MAIN1" && ligacaoPonto3 == "azulNeltro" && preimeiraLigacao3 =="azulNeltro" && segundaLigacao3 == "azulNeltro"){
      let elementosCss = document.getElementById("MAIN1");
      if(elementosCss != null || elementosCss != undefined) { 
      console.log(elementosCss);
      parte3 = true;
      elementosCss.id = "MAIN13"
  if(pontoSelecionado6 == "MAIN3" || pontoSelecionado6 == "MAIN1" && elementosCss.id == "MAIN13"){   
            
   
   filtro3 = "1para3AzulNeltro"
   console.log(filtro);


         }
 console.log("fundionou");
}

    } else if(verificador3 == "MAIN1" && ligacaoPonto3 == "marromRetorno" && preimeiraLigacao3 =="marromRetorno" && segundaLigacao3 == "marromRetorno"){

      let elementosCss = document.getElementById("MAIN1");
      if(elementosCss != null || elementosCss != undefined) { 
      console.log(elementosCss);
   parte3 = true;
      elementosCss.id = "MAIN14"
 
        if(pontoSelecionado6 == "MAIN3" || pontoSelecionado6 == "MAIN1" && elementosCss.id == "MAIN14"){   
            
   
   filtro3 = "1para3Marrom"
   console.log(filtro);


         }

 console.log("fundionou");
}

    } else  
    
    //ligacao do 2 para o 4
    if(verificador3 == "MAIN2" && ligacaoPonto3 == "pretoFase" && preimeiraLigacao3 =="pretoFase" && segundaLigacao3 == "pretoFase" ){
      let elementosCss2 = document.getElementById("MAIN2");
      if(elementosCss2 != null || elementosCss2 != undefined) { 
       console.log(elementosCss2);
       parte3 = true;
       elementosCss2.id = "MAIN15"

         if(pontoSelecionado6 == "MAIN2" || pontoSelecionado6 == "MAIN4" && elementosCss2.id == "MAIN15"){   
            
   
   filtro3 = "2para4Preto"
   console.log(filtro);


         }

      }
  console.log("fundionou"); 
  } else  if(verificador3 == "MAIN2" && ligacaoPonto3 == "verdeTerra" && preimeiraLigacao3 =="verdeTerra" && segundaLigacao3 == "verdeTerra" ){
   let elementosCss2 = document.getElementById("MAIN2");
   if(elementosCss2 != null || elementosCss2 != undefined) { 
    console.log(elementosCss2);
    parte3 = true;


    elementosCss2.id = "MAIN16"

     if(pontoSelecionado6 == "MAIN2" || pontoSelecionado6 == "MAIN4" && elementosCss2.id == "MAIN16"){   
            
   
   filtro3 = "2para4Verde"
   console.log(filtro);


         }

    
   }
console.log("fundionou"); 
} else  if(verificador3 == "MAIN2" && ligacaoPonto3 == "brancoRetorno" && preimeiraLigacao3 =="brancoRetorno" && segundaLigacao3 == "brancoRetorno" ){
   let elementosCss2 = document.getElementById("MAIN2");
   if(elementosCss2 != null || elementosCss2 != undefined) { 
    console.log(elementosCss2);
    parte3 = true;
    elementosCss2.id = "MAIN17"

    if(pontoSelecionado6 == "MAIN2" || pontoSelecionado6 == "MAIN4" && elementosCss2.id == "MAIN17"){   
            
   
   filtro3 = "2para4Branco"
   console.log(filtro);


         }

   }
console.log("fundionou"); 
} else  if(verificador3 == "MAIN2" && ligacaoPonto3 == "azulNeltro" && preimeiraLigacao3 =="azulNeltro" && segundaLigacao3 == "azulNeltro" ){
   let elementosCss2 = document.getElementById("MAIN2");
   if(elementosCss2 != null || elementosCss2 != undefined) { 
    console.log(elementosCss2);
    parte3 = true;
    elementosCss2.id = "MAIN18"

    if(pontoSelecionado6 == "MAIN2" || pontoSelecionado6 == "MAIN4" && elementosCss2.id == "MAIN18"){   
            
   
   filtro3 = "2para4AzulNeltro"
   console.log(filtro);


         }

   }
console.log("fundionou"); 
} else  if(verificador3 == "MAIN2" && ligacaoPonto3 == "marromRetorno" && preimeiraLigacao3 =="marromRetorno" && segundaLigacao3 == "marromRetorno" ){
   let elementosCss2 = document.getElementById("MAIN2");
   if(elementosCss2 != null || elementosCss2 != undefined) { 
    console.log(elementosCss2);
    parte3 = true;
    elementosCss2.id = "MAIN19"

console.log("fundionou"); 

if(pontoSelecionado6 == "MAIN2" || pontoSelecionado6 == "MAIN4" && elementosCss2.id == "MAIN19"){   
            
   
   filtro3 = "2para4Marrom"
   console.log(filtro);


         }


   }
}
 

else




 
   console.log(verificador3);

   //ligacao do 3 para o 1
    if(  verificador3 == "MAIN3" && ligacaoPonto3 == "pretoFase" && preimeiraLigacao3 =="pretoFase" && segundaLigacao3 == "pretoFase" ){
        let elementosCss = document.getElementById("MAIN1");
         if(elementosCss != null || elementosCss != undefined) { 
         
         console.log(elementosCss);
         parte3 = true;
         elementosCss.id = "MAIN10"

         if(pontoSelecionado6 == "MAIN3" || pontoSelecionado6 == "MAIN1" && elementosCss.id == "MAIN10"){   
            
   
   filtro3 = "1para3Preto"
   console.log(filtro);


         }

         }
    console.log("fundionou"); 
    }
    else if(verificador3 == "MAIN3" && ligacaoPonto3 == "verdeTerra" && preimeiraLigacao3 =="verdeTerra" && segundaLigacao3 == "verdeTerra"){
      let elementosCss = document.getElementById("MAIN1");
      if(elementosCss != null || elementosCss != undefined) { 
      console.log(elementosCss);
      parte3 = true;
      elementosCss.id = "MAIN11"
   


      if(pontoSelecionado6 == "MAIN3" || pontoSelecionado6 == "MAIN1" && elementosCss.id == "MAIN11"){   
            
   
   filtro3 = "1para3Verde"
   console.log(filtro);


         }

 console.log("fundionou");
}
    } else if(verificador3 == "MAIN3" && ligacaoPonto3 == "brancoRetorno" && preimeiraLigacao3 =="brancoRetorno" && segundaLigacao3 == "brancoRetorno"){

      let elementosCss = document.getElementById("MAIN1");
      if(elementosCss != null || elementosCss != undefined) { 
      console.log(elementosCss);
      parte3 = true;
      elementosCss.id = "MAIN12"


      if(pontoSelecionado6 == "MAIN3" || pontoSelecionado6 == "MAIN1" && elementosCss.id == "MAIN12"){   
            
   
   filtro3 = "1para3Branco"
   console.log(filtro);


         }

   
 console.log("fundionou");
}
    } else if(verificador3 == "MAIN3" && ligacaoPonto3 == "azulNeltro" && preimeiraLigacao3 =="azulNeltro" && segundaLigacao3 == "azulNeltro"){
      let elementosCss = document.getElementById("MAIN1");
      if(elementosCss != null || elementosCss != undefined) { 
      console.log(elementosCss);
      parte3 = true;
      elementosCss.id = "MAIN13"


      if(pontoSelecionado6 == "MAIN3" || pontoSelecionado6 == "MAIN1" && elementosCss.id == "MAIN13"){   
            
   
   filtro3 = "1para3AzulNeltro"
   console.log(filtro);


         }


 console.log("fundionou");
}

    } else if(verificador3 == "MAIN3" && ligacaoPonto3 == "marromRetorno" && preimeiraLigacao3 =="marromRetorno" && segundaLigacao3 == "marromRetorno"){

      let elementosCss = document.getElementById("MAIN1");
      if(elementosCss != null || elementosCss != undefined) { 
      console.log(elementosCss);
      parte3 = true;
      elementosCss.id = "MAIN14"
 
      if(pontoSelecionado6 == "MAIN3" || pontoSelecionado6 == "MAIN1" && elementosCss.id == "MAIN14"){   
            
   
   filtro3 = "1para3Marrom"
   console.log(filtro);


         }

 console.log("fundionou");
}


    } else 
    
    
    
    //ligacao do 4 para o 2
    if(verificador3 == "MAIN4" && ligacaoPonto3 == "pretoFase" && preimeiraLigacao3 =="pretoFase" && segundaLigacao3 == "pretoFase" ){
      let elementosCss2 = document.getElementById("MAIN2");
      if(elementosCss2 != null || elementosCss2 != undefined) { 
       console.log(elementosCss2);
       parte3 = true;
       elementosCss2.id = "MAIN15"

       if(pontoSelecionado6 == "MAIN4" || pontoSelecionado6 == "MAIN2" && elementosCss2.id == "MAIN15"){   
            
   
   filtro3 = "2para4Preto"
   console.log(filtro);


         }


      }
  console.log("fundionou"); 
  } else  if(verificador3 == "MAIN4" && ligacaoPonto3 == "verdeTerra" && preimeiraLigacao3 =="verdeTerra" && segundaLigacao3 == "verdeTerra" ){
   let elementosCss2 = document.getElementById("MAIN2");
   if(elementosCss2 != null || elementosCss2 != undefined) { 
    console.log(elementosCss2);
    parte3 = true;
    elementosCss2.id = "MAIN16"

    if(pontoSelecionado6 == "MAIN4" || pontoSelecionado6 == "MAIN2" && elementosCss2.id == "MAIN16"){   
            
   
   filtro3 = "2para4Verde"
   console.log(filtro);


         }


   }
console.log("fundionou"); 
} else  if(verificador3 == "MAIN4" && ligacaoPonto3 == "brancoRetorno" && preimeiraLigacao3 =="brancoRetorno" && segundaLigacao3 == "brancoRetorno" ){
   let elementosCss2 = document.getElementById("MAIN2");
   if(elementosCss2 != null || elementosCss2 != undefined) { 
    console.log(elementosCss2);
    parte3 = true;
    elementosCss2.id = "MAIN17"

    if(pontoSelecionado6 == "MAIN4" || pontoSelecionado6 == "MAIN2" && elementosCss2.id == "MAIN17"){   
            
   
   filtro3 = "2para4Branco"
   console.log(filtro);


         }


   }
console.log("fundionou"); 
} else  if(verificador3 == "MAIN4" && ligacaoPonto3 == "azulNeltro" && preimeiraLigacao3 =="azulNeltro" && segundaLigacao3 == "azulNeltro" ){
   let elementosCss2 = document.getElementById("MAIN2");
   if(elementosCss2 != null || elementosCss2 != undefined) { 
    console.log(elementosCss2);
    parte3 = true;
    elementosCss2.id = "MAIN18"

    if(pontoSelecionado6 == "MAIN4" || pontoSelecionado6 == "MAIN2" && elementosCss2.id == "MAIN18"){   
            
   
   filtro3 = "2para4AzulNeltro"
   console.log(filtro);


         }


   }
console.log("fundionou"); 
} else  if(verificador3 == "MAIN4" && ligacaoPonto3 == "marromRetorno" && preimeiraLigacao3 =="marromRetorno" && segundaLigacao3 == "marromRetorno" ){
   let elementosCss2 = document.getElementById("MAIN2");
   if(elementosCss2 != null || elementosCss2 != undefined) { 
    console.log(elementosCss2);
    parte3 = true;
    elementosCss2.id = "MAIN19"


    if(pontoSelecionado6 == "MAIN4" || pontoSelecionado6 == "MAIN2" && elementosCss2.id == "MAIN19"){   
            
   
   filtro3 = "2para4Marrom"
   console.log(filtro);


         }


console.log("fundionou"); 
   }
}else




//ligacao do 5 para o 6
if(   verificador3 == "MAIN5"   && ligacaoPonto3 == "pretoFase" && preimeiraLigacao3 =="pretoFase" && segundaLigacao3 == "pretoFase" ){
   let elementosCss = document.getElementById("MAIN5");
    if(elementosCss != null || elementosCss != undefined) { 
    


      
    console.log(elementosCss);
    parte3 = true;
    elementosCss.id = "MAIN30"

    if(pontoSelecionado6 == "MAIN5" || pontoSelecionado6 == "MAIN6" && elementosCss.id == "MAIN30"){   
            
   
   filtro3 = "5para6Preto"
   console.log(filtro);


         }
    
console.log("fundionou"); 
   }
}
//ligacao do 5 para o 6 
else if(  verificador3 == "MAIN5" && ligacaoPonto3 == "verdeTerra" && preimeiraLigacao3 =="verdeTerra" && segundaLigacao3 == "verdeTerra"){
   let elementosCss = document.getElementById("MAIN5");
    console.log(elementosCss);
   if(elementosCss != null || elementosCss != undefined) { 
 
      
   console.log(elementosCss);
   parte3 = true;
   elementosCss.id = "MAIN31"


   if(pontoSelecionado6 == "MAIN5" || pontoSelecionado6 == "MAIN6" && elementosCss.id == "MAIN31"){   
            
   
   filtro3 = "5para6Verde"
   console.log(filtro);


         }

console.log("fundionou");
      
}
 }
//ligacao do 5 para o 6
 else if( verificador3 == "MAIN5" && ligacaoPonto3 == "brancoRetorno" && preimeiraLigacao3 =="brancoRetorno" && segundaLigacao3 == "brancoRetorno"){

   let elementosCss = document.getElementById("MAIN5");
   if(elementosCss != null || elementosCss != undefined) { 

      
   console.log(elementosCss);
   parte3 = true;
   elementosCss.id = "MAIN32"


   if(pontoSelecionado6 == "MAIN5" || pontoSelecionado6 == "MAIN6" && elementosCss.id == "MAIN32"){   
            
   
   filtro3 = "5para6Branco"
   console.log(filtro);


         }


console.log("fundionou");

      
}
 }
 //ligacao do 5 para o 6
 else if( verificador3 == "MAIN5" && ligacaoPonto3 == "azulNeltro" && preimeiraLigacao3 =="azulNeltro" && segundaLigacao3 == "azulNeltro"){
   let elementosCss = document.getElementById("MAIN5");
   if(elementosCss != null || elementosCss != undefined) { 

      
   console.log(elementosCss);
   parte3 = true;
   elementosCss.id = "MAIN33"


   if(pontoSelecionado6 == "MAIN5" || pontoSelecionado6 == "MAIN6" && elementosCss.id == "MAIN33"){   
            
   
   filtro3 = "5para6AzulNeltro"
   console.log(filtro);


         }


console.log("fundionou");
      
}

 }

//ligacao do 5 para o 6
 else if(verificador3 == "MAIN5" && ligacaoPonto3 == "marromRetorno" && preimeiraLigacao3 =="marromRetorno" && segundaLigacao3 == "marromRetorno"){

   let elementosCss = document.getElementById("MAIN5");
   if(elementosCss != null || elementosCss != undefined) { 

       
   console.log(elementosCss);
   parte3 = true;
   elementosCss.id = "MAIN34"

   if(pontoSelecionado6 == "MAIN5" || pontoSelecionado6 == "MAIN6" && elementosCss.id == "MAIN34"){   
            
   
   filtro3 = "5para6Marrom"
   console.log(filtro);


         }

console.log("fundionou");
      
}
 }




 else

//ligacao do 6 para o 5
if(  verificador3 == "MAIN6"   && ligacaoPonto3 == "pretoFase" && preimeiraLigacao3 =="pretoFase" && segundaLigacao3 == "pretoFase" ){
   let elementosCss = document.getElementById("MAIN5");
    if(elementosCss != null || elementosCss != undefined) { 
    


      
    console.log(elementosCss);
    parte3 = true;
    elementosCss.id = "MAIN30"
    

    if(pontoSelecionado6 == "MAIN6" || pontoSelecionado6 == "MAIN5" && elementosCss.id == "MAIN30"){   
            
   
   filtro3 = "5para6Preto"
   console.log(filtro);


         }


console.log("fundionou"); 
   }
}
//ligacao do 6 para o 5 
else if(verificador3 == "MAIN6" && ligacaoPonto3 == "verdeTerra" && preimeiraLigacao3 =="verdeTerra" && segundaLigacao3 == "verdeTerra"){
   let elementosCss = document.getElementById("MAIN5");
    console.log(elementosCss);
   if(elementosCss != null || elementosCss != undefined) { 
 console.log("tttttt");
      
   console.log(elementosCss);
   parte3 = true;
   elementosCss.id = "MAIN31"
if(pontoSelecionado6 == "MAIN5" || pontoSelecionado6 == "MAIN6" && elementosCss.id == "MAIN31"){   
            
   
   filtro3 = "5para6Verde"
   console.log(filtro);


         }
console.log("fundionou");
     
}
 }
//ligacao do 6 para o 5
 else if( verificador3 == "MAIN6" && ligacaoPonto3 == "brancoRetorno" && preimeiraLigacao3 =="brancoRetorno" && segundaLigacao3 == "brancoRetorno"){

   let elementosCss = document.getElementById("MAIN5");
   if(elementosCss != null || elementosCss != undefined) { 

     
   console.log(elementosCss);
   parte3 = true;
   elementosCss.id = "MAIN32"


   if(pontoSelecionado6 == "MAIN5" || pontoSelecionado6 == "MAIN6" && elementosCss.id == "MAIN32"){   
            
   
   filtro3 = "5para6Branco"
   console.log(filtro);


         }


console.log("fundionou");

      
}
 }
 //ligacao do 6 para o 5
 else if( verificador3 == "MAIN6" && ligacaoPonto3 == "azulNeltro" && preimeiraLigacao3 =="azulNeltro" && segundaLigacao3 == "azulNeltro"){
   let elementosCss = document.getElementById("MAIN5");
   if(elementosCss != null || elementosCss != undefined) { 

      
   console.log(elementosCss);
   parte3 = true;
   elementosCss.id = "MAIN33"

console.log("fundionou");
      if(pontoSelecionado6 == "MAIN5" || pontoSelecionado6 == "MAIN6" && elementosCss.id == "MAIN33"){   
            
   
   filtro3 = "5para6AzulNeltro"
   console.log(filtro);


         }

}

 }

//ligacao do 6 para o 5
 else if(verificador3 == "MAIN6" && ligacaoPonto3 == "marromRetorno" && preimeiraLigacao3 =="marromRetorno" && segundaLigacao3 == "marromRetorno"){

   let elementosCss = document.getElementById("MAIN5");
   if(elementosCss != null || elementosCss != undefined) { 

      
   console.log(elementosCss);
   parte3 = true;
   elementosCss.id = "MAIN34"

   if(pontoSelecionado6 == "MAIN5" || pontoSelecionado6 == "MAIN6" && elementosCss.id == "MAIN34"){   
            
   
   filtro3 = "5para6Marrom"
   console.log(filtro);


         }

console.log("fundionou");
      
}
 }


 ///// BUG DE CIRCUITO 2
//  else  if(verificador2 == "MAIN3" && ligacaoPonto2 == "pretoFase" && preimeiraLigacao2 =="pretoFase" && segundaLigacao2 == "pretoFase" ){
//    let elementosCss = document.getElementById("MAIN3");
//    if(elementosCss != null || elementosCss != undefined) { 
   
//       console.log( "pontoSelecionado4",pontoSelecionado4)
//       if(pontoSelecionado4 == "MAIN3" || pontoSelecionado4 == "MAIN4"){ 
//     console.log(elementosCss);
//     parte2 = true;
//     elementosCss.id = "MAIN25"
   
//    console.log("fundionou"); 
//     bug = true;
//       }
//    }
//    }
   
// else  if(verificador2 == "MAIN3" && ligacaoPonto2 == "verdeTerra" && preimeiraLigacao2 =="verdeTerra" && segundaLigacao2 == "verdeTerra" ){
//       let elementosCss = document.getElementById("MAIN3");
//       if(elementosCss != null || elementosCss != undefined) { 
      
//          if(pontoSelecionado4 == "MAIN3" || pontoSelecionado4 == "MAIN4"){ 
//        console.log(elementosCss);
//        parte2 = true;
//        elementosCss.id = "MAIN26"
      
//       console.log("fundionou"); 
//        bug = true;
//          }
//       }
//       }
// else  if(verificador2 == "MAIN3" && ligacaoPonto2 == "brancoRetorno" && preimeiraLigacao2 =="brancoRetorno" && segundaLigacao2 == "brancoRetorno" ){
//       let elementosCss = document.getElementById("MAIN3");
//       if(elementosCss != null || elementosCss != undefined) { 
         
//       if(pontoSelecionado4 == "MAIN3" || pontoSelecionado4 == "MAIN4"){ 
//       console.log(elementosCss);
//       parte2 = true;
//       elementosCss.id = "MAIN27"
         
//       console.log("fundionou"); 
//       bug = true;
// }} }
// else  if(verificador2 == "MAIN3" && ligacaoPonto2 == "azulNeltro" && preimeiraLigacao2 =="azulNeltro" && segundaLigacao2 == "azulNeltro" ){
//       let elementosCss = document.getElementById("MAIN3");
//       if(elementosCss != null || elementosCss != undefined) { 
            
//           if(pontoSelecionado4 == "MAIN3" || pontoSelecionado4 == "MAIN4"){ 
//          console.log(elementosCss);
//        parte2 = true;
//        elementosCss.id = "MAIN28"
            
//        console.log("fundionou"); 
//          bug = true;
//          }
//        }
//        }

//  else  if(verificador2 == "MAIN3" && ligacaoPonto2 == "marromRetorno" && preimeiraLigacao2 =="marromRetorno" && segundaLigacao2 == "marromRetorno" ){
//          let elementosCss = document.getElementById("MAIN3");
//           if(elementosCss != null || elementosCss != undefined) { 
               
//              if(pontoSelecionado4 == "MAIN3" || pontoSelecionado4 == "MAIN4"){ 
//             console.log(elementosCss);
//           parte2 = true;
//             elementosCss.id = "MAIN29"
               
//           console.log("fundionou"); 
//           bug = true;
//   }
//        }
//    }
               
//  else  if(verificador2 == "MAIN4" && ligacaoPonto2 == "pretoFase" && preimeiraLigacao2 =="pretoFase" && segundaLigacao2 == "pretoFase" ){
//          let elementosCss = document.getElementById("MAIN3");
//          if(elementosCss != null || elementosCss != undefined) { 
                  
//             if(pontoSelecionado4 == "MAIN3" || pontoSelecionado4 == "MAIN4"){ 
//          console.log(elementosCss);
//           parte2 = true;
//          elementosCss.id = "MAIN25"
                  
//           console.log("fundionou"); 
//             bug = true;
//           }
//        }
//     }
                  
// else  if(verificador2 == "MAIN4" && ligacaoPonto2 == "verdeTerra" && preimeiraLigacao2 =="verdeTerra" && segundaLigacao2 == "verdeTerra" ){
//          let elementosCss = document.getElementById("MAIN3");
//        if(elementosCss != null || elementosCss != undefined) { 
                     
//          if(pontoSelecionado4 == "MAIN3" || pontoSelecionado4 == "MAIN4"){ 
//        console.log(elementosCss);
//        parte2 = true;
//        elementosCss.id = "MAIN26"
                     
//        console.log("fundionou"); 
//        bug = true;
//  }
//    }
//    }
//    else  if(verificador2 == "MAIN4" && ligacaoPonto2 == "brancoRetorno" && preimeiraLigacao2 =="brancoRetorno" && segundaLigacao2 == "brancoRetorno" ){
//           let elementosCss = document.getElementById("MAIN3");
//           if(elementosCss != null || elementosCss != undefined) { 
                        
//            if(pontoSelecionado4 == "MAIN3" || pontoSelecionado4 == "MAIN4"){ 
//              console.log(elementosCss);
//              parte2 = true;
//               elementosCss.id = "MAIN27"
                        
//               console.log("fundionou"); 
//               bug = true;
//    }
//     }
//     }
//     else  if(verificador2 == "MAIN4" && ligacaoPonto2 == "azulNeltro" && preimeiraLigacao2 =="azulNeltro" && segundaLigacao2 == "azulNeltro" ){
//        let elementosCss = document.getElementById("MAIN3");
//           if(elementosCss != null || elementosCss != undefined) { 
                           
//           if(pontoSelecionado4 == "MAIN3" || pontoSelecionado4 == "MAIN4"){ 
//            console.log(elementosCss);
//              parte2 = true;
//               elementosCss.id = "MAIN28"
                           
//                console.log("fundionou"); 
//             bug = true;
//      }
//      }
//     }
//  else  if(verificador2 == "MAIN4" && ligacaoPonto2 == "marromRetorno" && preimeiraLigacao2 =="marromRetorno" && segundaLigacao2 == "marromRetorno" ){
//              let elementosCss = document.getElementById("MAIN3");
//             if(elementosCss != null || elementosCss != undefined) { 
                              
//                if(pontoSelecionado4 == "MAIN3" || pontoSelecionado4 == "MAIN4"){ 
//                 console.log(elementosCss);
//                 parte2 = true;
//                 elementosCss.id = "MAIN29"
                        
//                console.log("fundionou"); 
//                 bug = true;
//   }
//     }
     // }         



    
    
    console.log(ligacaoPonto3);
    console.log(preimeiraLigacao3);
    console.log(segundaLigacao3);
 
 
 };
//===========TERCEIRO FIO==========





function resetButtom(){

    corFio = undefined;
    ligacaoPonto = undefined;
    preimeiraLigacao = undefined;
    segundaLigacao = undefined;
    pontoSelecionado1 = undefined;
    pontoSelecionado2 = undefined;
    verificador = undefined;
    filtro = undefined
   
    corFio2 = undefined;
    ligacaoPonto2 = undefined;
    preimeiraLigacao2 = undefined;
    segundaLigacao2 = undefined;
    pontoSelecionado3 = undefined;
    pontoSelecionado4 = undefined;
    verificador2 = undefined;;
    parte2 = false  ;
    console.log("resetar");
    filtro2 = undefined

    corFio3 = undefined;
    ligacaoPonto3 = undefined;
    preimeiraLigacao3 = undefined;
    segundaLigacao3 = undefined;
    pontoSelecionado5 = undefined;
    pontoSelecionado6 = undefined;
    verificador3 = undefined;
    parte3 = false  ;
    filtro3 = undefined

    resetId = true
    resetId2 = true
    resetId3 = true

    id2 = undefined
   conexao = undefined
   

 conexacaoL11Alto= undefined
 conexacaoL12Alto= undefined
 conexacaoL11Baixo= undefined
 conexacaoL12Baixo= undefined
 conexacaoL11BaixoBaixo= undefined
 conexacaoL12BaixoBaixo= undefined

// texto do curto circuito 
    let textoVasio = ""
    let  message = this.document.getElementById("message2")
    if(message != null && message != undefined) {   
         message.id = "message"
         message.innerHTML = textoVasio
    }
    

// resetando lamp

//1 pata 3
let lp = this.document.getElementById("L11");
let lp2 = this.document.getElementById("L12");
let lp3 = this.document.getElementById("L13");
let lp4 = this.document.getElementById("L14");
let lp5 = this.document.getElementById("L15");

// 2 para 4
let lp6 = this.document.getElementById("L16");
let lp7 = this.document.getElementById("L17");
let lp8 = this.document.getElementById("L18");
let lp9 = this.document.getElementById("L19");
let lp10 = this.document.getElementById("L20");



// L2 1 para 3
let lp11 = this.document.getElementById("L21");
let lp12 = this.document.getElementById("L22");
let lp13 = this.document.getElementById("L23");
let lp14 = this.document.getElementById("L24");
let lp15 = this.document.getElementById("L25");

//L2 2para4 baixa
let lp16 = this.document.getElementById("L26");
let lp17 = this.document.getElementById("L27");
let lp18 = this.document.getElementById("L28");
let lp19 = this.document.getElementById("L29");
let lp20 = this.document.getElementById("L30");

//terceiro fio L1
let lp21 = this.document.getElementById("L31");
let lp22 = this.document.getElementById("L32");
let lp23 = this.document.getElementById("L33");
let lp24 = this.document.getElementById("L34");
let lp25 = this.document.getElementById("L35");

//terceiro fio L2
let lp26 = this.document.getElementById("L36");
let lp27 = this.document.getElementById("L37");
let lp28 = this.document.getElementById("L38");
let lp29 = this.document.getElementById("L39");
let lp30 = this.document.getElementById("L40");


// 1para3 alta
if(lp != null && lp != undefined) {   
      lp.id = "L1" 
}else 
if(lp2 != null && lp2 != undefined) {   
   lp2.id = "L1" 
}else 
if(lp3 != null && lp3 != undefined) {   
   lp3.id = "L1" 
}else 
if(lp4 != null && lp4 != undefined) {   
   lp4.id = "L1" 
}else 
if(lp5 != null && lp5 != undefined) {   
   lp5.id = "L1" 
}
else



//2para4 baixa
if(lp6 != null && lp6 != undefined) {   
   lp6.id = "L1" 
}else 
if(lp7 != null && lp7 != undefined) {   
lp7.id = "L1" 
}else 
if(lp8 != null && lp8 != undefined) {   
lp8.id = "L1" 
}else 
if(lp9 != null && lp9 != undefined) {   
lp9.id = "L1" 
}else 
if(lp10 != null && lp10 != undefined) {   
lp10.id = "L1" 
}else

// 5para6 
if(lp21 != null && lp21 != undefined) {   
      lp21.id = "L1" 
}else 
if(lp22 != null && lp22 != undefined) {   
   lp22.id = "L1" 
}else 
if(lp23 != null && lp23 != undefined) {   
   lp23.id = "L1" 
}else 
if(lp24 != null && lp24 != undefined) {   
   lp24.id = "L1" 
}else 
if(lp25 != null && lp25 != undefined) {   
   lp25.id = "L1" 
}



// L2 1para3  alta
if(lp11 != null && lp11 != undefined) {   
      lp11.id = "L2" 
}else 
if(lp12 != null && lp12 != undefined) {   
   lp12.id = "L2" 
}else 
if(lp13 != null && lp13 != undefined) {   
   lp13.id = "L2" 
}else 
if(lp14 != null && lp14 != undefined) {   
   lp14.id = "L2" 
}else 
if(lp15 != null && lp15 != undefined) {   
   lp15.id = "L2" 
}
else



//L2 2para4 baixa
if(lp16 != null && lp16 != undefined) {   
   lp16.id = "L2" 
}else 
if(lp17 != null && lp17 != undefined) {   
lp17.id = "L2" 
}else 
if(lp18 != null && lp18 != undefined) {   
lp18.id = "L2" 
}else 
if(lp19 != null && lp19 != undefined) {   
lp19.id = "L2" 
}else 
if(lp20 != null && lp20 != undefined) {   
lp20.id = "L2" 
}else


// 5para6  L2
if(lp26 != null && lp26 != undefined) {   
      lp26.id = "L2" 
}else 
if(lp27 != null && lp27 != undefined) {   
   lp27.id = "L2" 
}else 
if(lp28 != null && lp28 != undefined) {   
   lp28.id = "L2" 
}else 
if(lp29 != null && lp29 != undefined) {   
   lp29.id = "L2" 
}else 
if(lp30 != null && lp30 != undefined) {   
   lp30.id = "L2" 
}





// resetando interruptor

 // 1 para 3  L5
let it = this.document.getElementById("L51");
let it2 = this.document.getElementById("L52");
let it3 = this.document.getElementById("L53");
let it4 = this.document.getElementById("L54");
let it5 = this.document.getElementById("L55");

 // 2 para 4 L5
let it6 = this.document.getElementById("L56");
let it7 = this.document.getElementById("L57");
let it8 = this.document.getElementById("L58");
let it9 = this.document.getElementById("L59");
let it10 = this.document.getElementById("L591");

 // 5 para 6 L5
let it11 = this.document.getElementById("L592");
let it12 = this.document.getElementById("L593");
let it13 = this.document.getElementById("L594");
let it14 = this.document.getElementById("L595");
let it15 = this.document.getElementById("L596");



// 1para3 alta
if(it != null && it != undefined) {   
      it.id = "L5" 
}else 
if(it2 != null && it2 != undefined) {   
   it2.id = "L5" 
}else 
if(it3 != null && it3 != undefined) {   
   it3.id = "L5" 
}else 
if(it4 != null && it4 != undefined) {   
   it4.id = "L5" 
}else 
if(it5 != null && it5 != undefined) {   
   it5.id = "L5" 
}
else



//2para4 baixa
if(it6 != null && it6 != undefined) {   
   it6.id = "L5" 
}else 
if(it7 != null && it7 != undefined) {   
it7.id = "L5" 
}else 
if(it8 != null && it8 != undefined) {   
it8.id = "L5" 
}else 
if(it9 != null && it9 != undefined) {   
it9.id = "L5" 
}else 
if(it10 != null && it10 != undefined) {   
it10.id = "L5" 
}else

// 5para6 
if(it11 != null && it11 != undefined) {   
      it11.id = "L5" 
}else 
if(it12 != null && it12 != undefined) {   
   it12.id = "L5" 
}else 
if(it13 != null && it13 != undefined) {   
   it13.id = "L5" 
}else 
if(it14 != null && it14 != undefined) {   
   it14.id = "L5" 
}else 
if(it15 != null && it15 != undefined) {   
   it15.id = "L5" 
}


// 1 para 3  L6
let it31 = this.document.getElementById("L61");
let it32 = this.document.getElementById("L62");
let it33 = this.document.getElementById("L63");
let it34 = this.document.getElementById("L64");
let it35 = this.document.getElementById("L65");

 // 2 para 4 L6
let it36 = this.document.getElementById("L66");
let it37 = this.document.getElementById("L67");
let it38 = this.document.getElementById("L68");
let it39 = this.document.getElementById("L69");
let it40 = this.document.getElementById("L691");

 // 5 para 6 L6
let it41 = this.document.getElementById("L692");
let it42 = this.document.getElementById("L693");
let it43 = this.document.getElementById("L694");
let it44 = this.document.getElementById("L695");
let it45 = this.document.getElementById("L696");


// 1para3 alta
if(it31 != null && it31 != undefined) {   
      it31.id = "L6" 
}else 
if(it32 != null && it32 != undefined) {   
   it32.id = "L6" 
}else 
if(it33 != null && it33 != undefined) {   
   it33.id = "L6" 
}else 
if(it34 != null && it34 != undefined) {   
   it34.id = "L6" 
}else 
if(it35 != null && it35 != undefined) {   
   it35.id = "L6" 
}
else



//2para4 baixa
if(it36 != null && it36 != undefined) {   
   it36.id = "L6" 
}else 
if(it37 != null && it37 != undefined) {   
it37.id = "L6" 
}else 
if(it38 != null && it38 != undefined) {   
it38.id = "L6" 
}else 
if(it39 != null && it39 != undefined) {   
it39.id = "L6" 
}else 
if(it40 != null && it40 != undefined) {   
it40.id = "L6" 
}else

// 5para6 
if(it41 != null && it41 != undefined) {   
      it41.id = "L6" 
}else 
if(it42 != null && it42 != undefined) {   
   it42.id = "L6" 
}else 
if(it43 != null && it43 != undefined) {   
   it43.id = "L6" 
}else 
if(it44 != null && it44 != undefined) {   
   it44.id = "L6" 
}else 
if(it45 != null && it45 != undefined) {   
   it45.id = "L6" 
}



}


function resetButtom2(){

 let textoVasio = ""
    let  message = this.document.getElementById("message3")
    if(message != null && message != undefined) {   
         message.id = "message"
         message.innerHTML = textoVasio
    }

}




function abrirPopup(valor){
   idioma;
   let texto1 = " Voce fechou o circuito! tente de novo."

   let texto2 = ""
       texto2 += " Voce ligou dois fios pretos a ";
       texto2 +=  "lampada. neste caso se ela nao for ";
       texto2 +=   "bivolte 220 voltes ela queimara";
       texto2 +=  " sem uma interruptor ela ficara";
       texto2 += "ligada o tempo todo.";

 

       let texto3 = ""
       texto3 += " Voce ligou dois fios Verdes a ";
       texto3 +=  "lampada. neste caso nao acendera";
       texto3 +=   "pois os fios nao tem energia";
       texto3 +=  " ";
       texto3 += "";



        let texto4 = ""
       texto4 += " Voce ligou dois fios branos a ";
       texto4 +=  "lampada. neste caso, nao acendera";
       texto4 +=   "pois os fios nao tem energia";
       texto4 +=  " sao dois fios retorno";
       texto4 += "";


         let texto5 = ""
       texto5 += " Voce ligou dois fios azuis a ";
       texto5 +=  "lampada. neste caso, nao acendera";
       texto5 +=   "pois os fios nao tem energia";
       texto5 +=  " sao dois fios neltros";
       texto5 += "";


          let texto6 = ""
       texto6 += " Voce ligou dois fios marrom a ";
       texto6 +=  "lampada. neste caso, nao acendera";
       texto6 +=   "pois os fios nao tem energia";
       texto6 +=  " sao dois fios retorno iguais";
       texto6 += " o fio branco";

  let messageFio = "Fio preto fase 110V"

if(valor == "L1PA") { 
conexacaoL11Alto = valor
} else

if(valor == "L2PA") { 
conexacaoL12Alto = valor
}else
  
if(valor == "L1VA") { 
conexacaoL11Alto = valor
} else

if(valor == "L2VA") { 
conexacaoL12Alto = valor
} else 

if(valor == "L1BA") { 
conexacaoL11Alto = valor
} else

if(valor == "L2BA") { 
conexacaoL12Alto = valor
}else

if(valor == "L1AA") { 
conexacaoL11Alto = valor
} else

if(valor == "L2AA") { 
conexacaoL12Alto = valor
}else

if(valor == "L1MA") { 
conexacaoL11Alto = valor
} else

if(valor == "L2MA") { 
conexacaoL12Alto = valor
} else



if(valor == "L1PB") { 
conexacaoL11Baixo = valor
} else

if(valor == "L2PB") { 
conexacaoL12Baixo = valor
}else
  
if(valor == "L1VB") { 
conexacaoL11Baixo = valor
} else

if(valor == "L2VB") { 
conexacaoL12Baixo = valor
} else 

if(valor == "L1BB") { 
conexacaoL11Baixo = valor
} else

if(valor == "L2BB") { 
conexacaoL12Baixo = valor
}else

if(valor == "L1AB") { 
conexacaoL11Baixo = valor
} else

if(valor == "L2AB") { 
conexacaoL12Baixo = valor
}else

if(valor == "L1MB") { 
conexacaoL11Baixo = valor
} else

if(valor == "L2MB") { 
conexacaoL12Baixo = valor
}else



if(valor == "L1PBB") { 
conexacaoL11BaixoBaixo = valor
} else

if(valor == "L2PBB") { 
conexacaoL12BaixoBaixo = valor
}else
  
if(valor == "L1VBB") { 
conexacaoL11BaixoBaixo = valor
} else

if(valor == "L2VBB") { 
conexacaoL12BaixoBaixo = valor
} else 

if(valor == "L1BBB") { 
conexacaoL11BaixoBaixo = valor
} else

if(valor == "L2BBB") { 
conexacaoL12BaixoBaixo = valor
}else

if(valor == "L1ABB") { 
conexacaoL11BaixoBaixo = valor
} else

if(valor == "L2ABB") { 
conexacaoL12BaixoBaixo = valor
}else

if(valor == "L1MBB") { 
conexacaoL11BaixoBaixo = valor
} else

if(valor == "L2MBB") { 
conexacaoL12BaixoBaixo = valor
}





if(idioma == "portugues"){


  let  message = document.getElementById("message")
  console.log(message)
 // message.id = "message2"
  console.log(valor)
  if(valor == "1p2"  ){
   console.log(valor)
message.id = "message2"
   message.innerHTML = texto1

  }
  else
  console.log(conexacaoL11Alto)
console.log(conexacaoL12Alto)

 console.log(conexacaoL11Baixo)
console.log(conexacaoL12Baixo)

console.log(conexacaoL11BaixoBaixo)
console.log(conexacaoL12BaixoBaixo)

if(conexacaoL11Alto == "L1PA" && conexacaoL12Alto == "L2PA" || 
   conexacaoL11Baixo == "L1PB" && conexacaoL12Baixo == "L2PB"|| 
   conexacaoL11Alto == "L1PA" && conexacaoL12Baixo == "L2PB"|| 
   conexacaoL12Alto == "L2PA" && conexacaoL11Baixo == "L1PB" ||
   conexacaoL11BaixoBaixo  == "L1PBB" && conexacaoL12BaixoBaixo == "L2PBB"
){
   // conecao no mesmo fio preto alto
   console.log("dentro do if")
   console.log(texto2)
   message.id = "message2"
message.innerHTML = texto2

  

}else 

if(conexacaoL11Alto == "L1VA" && conexacaoL12Alto == "L2VA"|| 
   conexacaoL11Baixo == "L1VB" && conexacaoL12Baixo == "L2VB"|| 
   conexacaoL11Alto == "L1VA" && conexacaoL12Baixo == "L2VB"|| 
   conexacaoL12Alto == "L2VA" && conexacaoL11Baixo == "L1VB"||
   conexacaoL11BaixoBaixo == "L1VBB" && conexacaoL12BaixoBaixo == "L2VBB"

){
   // conecao no mesmo fio preto alto
   console.log("dentro do if")
   console.log(texto3)
   message.id = "message2"
message.innerHTML = texto3

  

} else

if(conexacaoL11Alto == "L1BA" && conexacaoL12Alto == "L2BA"|| 
   conexacaoL11Baixo == "L1BB" && conexacaoL12Baixo == "L2BB"|| 
   conexacaoL11Alto == "L1BA" && conexacaoL12Baixo == "L2BB"|| 
   conexacaoL12Alto == "L2BA" && conexacaoL11Baixo == "L1BB"||
   conexacaoL11BaixoBaixo == "L1BBB" && conexacaoL12BaixoBaixo=="L2BBB"
){
   // conecao no mesmo fio preto alto
   console.log("dentro do if")
   console.log(texto4)
   message.id = "message2"
message.innerHTML = texto4

  

}

else

if(conexacaoL11Alto == "L1AA" && conexacaoL12Alto == "L2AA"|| 
   conexacaoL11Baixo == "L1AB" && conexacaoL12Baixo == "L2AB"|| 
   conexacaoL11Alto == "L1AA" && conexacaoL12Baixo == "L2AB"|| 
   conexacaoL12Alto == "L2AA" && conexacaoL11Baixo == "L1AB"||
   conexacaoL11BaixoBaixo == "L1ABB" && conexacaoL12BaixoBaixo=="L2ABB"
){
   // conecao no mesmo fio preto alto
   console.log("dentro do if")
   console.log(texto5)
   message.id = "message2"
message.innerHTML = texto5

  

}

else

if(conexacaoL11Alto == "L1MA" && conexacaoL12Alto == "L2MA"|| 
   conexacaoL11Baixo == "L1MB" && conexacaoL12Baixo == "L2MB"|| 
   conexacaoL11Alto == "L1MA" && conexacaoL12Baixo == "L2MB"|| 
   conexacaoL12Alto == "L2MA" && conexacaoL11Baixo == "L1MB"||
   conexacaoL11BaixoBaixo == "L1MBB" && conexacaoL12BaixoBaixo=="L2MBB"
){
   // conecao no mesmo fio preto alto
   console.log("dentro do if")
   console.log(texto6)
   message.id = "message2"
message.innerHTML = texto6

  

}


  
  // setInterval(resetButtom(), 3000);
  // setInterval(message.innerHTML = textoVasio, 6000);
 // setTimeout(message.innerHTML = textoVasio, 6000)
}

if(valor == true )
{

   message.id = "janela"
   message.innerHTML = messageFio
}

}




function abrirPopup2(valor){
idioma;
let janela = document.getElementById("message")


let texto1 = " O fio preto e o fio fase energizado."
let texto2 = " O fio verde e o fio terra."
let texto3 = " O fio branco e o fio retorno."
let texto4 = " O fio azul e o fio neltro."
let texto5 = " O fio marrom tabem e um retorno como segunda opcao."

if(idioma == "portugues" &&  janela != null){




  if(valor == "PRETO"){  
   
    janela.id = "message3"
   janela.innerHTML = texto1
  }else 

   if(valor == "VERDE"){  
   
    janela.id = "message3"
   janela.innerHTML = texto2
  }else 

   if(valor == "BRANCO"){  
   
    janela.id = "message3"
   janela.innerHTML = texto3
  }else 

   if(valor == "AZUL"){  
   
    janela.id = "message3"
   janela.innerHTML = texto4
  }else 

   if(valor == "MARROM"){  
   
    janela.id = "message3"
   janela.innerHTML = texto5
  }




  }

}






/////LAMPADA CONEXAO
const lamp = document.querySelectorAll("[id]");


lamp.forEach(lp => {
   // depois de varrer a variavel lp add um evento
    lp.addEventListener("click", function(){
        const id = lp.id;

 id2 ;
 console.log(id)
        if(id == "MAIN10"){
           return id2 = "MAIN10"
        }else
   if(id == "MAIN11"){

      return id2 = "MAIN11"
   }else

if(id == "MAIN12"){
return id2 = "MAIN12"

}else
if(id == "MAIN13"){
   return id2 = "MAIN13"
   
   }else

   if(id == "MAIN14"){
      return id2 = "MAIN14"
      
      }
else



if(id == "MAIN15"){
   return id2 = "MAIN15"
}else
if(id == "MAIN16"){

return id2 = "MAIN16"
}else

if(id == "MAIN17"){
return id2 = "MAIN17"

}else
if(id == "MAIN18"){
return id2 = "MAIN18"

}else

if(id == "MAIN19"){
return id2 = "MAIN19"

}

else


// equivale ao segundo fio da lampada
if(id == "MAIN20"){
   return id2 = "MAIN20"
}else
if(id == "MAIN21"){

return id2 = "MAIN21"
}else

if(id == "MAIN22"){
return id2 = "MAIN22"

}else
if(id == "MAIN23"){
return id2 = "MAIN23"

}else

if(id == "MAIN24"){
return id2 = "MAIN24"

}
else



if(id == "MAIN25"){
return id2 = "MAIN25"
}else
if(id == "MAIN26"){

return id2 = "MAIN26"
}else

if(id == "MAIN27"){
return id2 = "MAIN27"

}else
if(id == "MAIN28"){
return id2 = "MAIN28"

}else

if(id == "MAIN29"){
return id2 = "MAIN29"

}else


// equivale ao terceiro fio
if(id == "MAIN30"){
   return id2 = "MAIN30"
}else
if(id == "MAIN31"){

return id2 = "MAIN31"
}else

if(id == "MAIN32"){
return id2 = "MAIN32"

}else
if(id == "MAIN33"){
return id2 = "MAIN33"

}else
if(id == "MAIN34"){
return id2 = "MAIN34"

}else



if(id == "MAIN35"){
   return id2 = "MAIN35"
}else
if(id == "MAIN36"){

return id2 = "MAIN36"
}else

if(id == "MAIN37"){
return id2 = "MAIN37"

}else
if(id == "MAIN38"){
return id2 = "MAIN38"

}else
if(id == "MAIN39"){
return id2 = "MAIN39"

}

     console.log(lamp)
     console.log(lp.id)
       
   if(id == "L1" || id == "L2" ){

      lampadaConect(id,id2)
    return id
   }


    });
}


);



function lampadaConect(id,id2){
   
   console.log(id)
   console.log(id2)

   //1para3alto primeiro fio conectado L1
   if(segundaLigacao == "pretoFase"&& id == "L1" && id2 == "MAIN10"&& filtro=="1para3Preto"){
      
      let lp = document.getElementById("L1");
      if(lp != null && lp != undefined) { 
      conexacaoL11Alto = "L1PA";
      lp.id = "L11"
      console.log("funcionou")
      abrirPopup(conexacaoL11Alto)
   }
    } else 

    if(segundaLigacao == "verdeTerra"&& id == "L1"&& id2 == "MAIN11"&& filtro=="1para3Verde"){
     
      let lp = document.getElementById("L1");
      if(lp != null && lp != undefined) { 
         conexacaoL11Alto = "L1VA"; 
      lp.id = "L12"
      console.log("funcionou")
      abrirPopup(conexacaoL11Alto)
    }
    } else

    if(segundaLigacao == "brancoRetorno"&& id == "L1"&& id2 == "MAIN12"&& filtro=="1para3Branco"){

      let lp = document.getElementById("L1");
      if(lp != null && lp != undefined) { 
         conexacaoL11Alto = "L1BA";  
      lp.id = "L13"
      console.log("funcionou")
      abrirPopup(conexacaoL11Alto)
      }
      
    } else
    if(segundaLigacao == "azulNeltro"&& id == "L1"&& id2 == "MAIN13"&& filtro=="1para3AzulNeltro"){

      let lp = document.getElementById("L1");
      if(lp != null && lp != undefined) {  
         conexacaoL11Alto = "L1AA";
      lp.id = "L14"
      console.log("funcionou")
      abrirPopup(conexacaoL11Alto)
      }
      
    }else

    if(segundaLigacao == "marromRetorno"&& id == "L1"&& id2 == "MAIN14"&& filtro=="1para3Marrom"){

      let lp = document.getElementById("L1");
      if(lp != null && lp != undefined) { 
         conexacaoL11Alto = "L1MA"; 
      lp.id = "L15"
      console.log("funcionou")
      abrirPopup(conexacaoL11Alto)
      }
      
    }else




//2para4baixo primeiro fio conectado L1
  if(segundaLigacao == "pretoFase"&& id == "L1" && id2 == "MAIN15"&& filtro=="2para4Preto"){

      let lp = document.getElementById("L1");
      if(lp != null && lp != undefined) {
         conexacaoL11Baixo = "L1PB"; 
      lp.id = "L16"
      console.log("funcionou")
      abrirPopup(conexacaoL11Baixo)
      }
    } else 

    if(segundaLigacao == "verdeTerra"&& id == "L1"&& id2 == "MAIN16"&& filtro=="2para4Verde"){

      let lp = document.getElementById("L1");
      if(lp != null && lp != undefined) {
         conexacaoL11Baixo = "L1VB";  
      lp.id = "L17"
      console.log("funcionou")
      abrirPopup(conexacaoL11Baixo)
      }
      
    } else

    if(segundaLigacao == "brancoRetorno"&& id == "L1"&& id2 == "MAIN17"&& filtro=="2para4Branco"){

      let lp = document.getElementById("L1");
      if(lp != null && lp != undefined) { 
         conexacaoL11Baixo = "L1BB";
      lp.id = "L18"
      console.log("funcionou")
      abrirPopup(conexacaoL11Baixo)
      }
      
    } else
    if(segundaLigacao == "azulNeltro"&& id == "L1"&& id2 == "MAIN18"&& filtro=="2para4AzulNeltro"){

      let lp = document.getElementById("L1");
      if(lp != null && lp != undefined) {
         conexacaoL11Baixo = "L1AB"; 
      lp.id = "L19"
      console.log("funcionou")
      abrirPopup(conexacaoL11Baixo)
      }
      
    }else

    if(segundaLigacao == "marromRetorno"&& id == "L1"&& id2 == "MAIN19"&& filtro=="2para4Marrom"){

      let lp = document.getElementById("L1");
      if(lp != null && lp != undefined) { 
         conexacaoL11Baixo = "L1MB"; 
      lp.id = "L20"
      console.log("funcionou")
      abrirPopup(conexacaoL11Baixo)
      }
      
    }



    //5para6 primeiro fio conectado L1
  if(segundaLigacao == "pretoFase"&& id == "L1" && id2 == "MAIN30"&& filtro=="5para6Preto"){

      let lp = document.getElementById("L1");
      if(lp != null && lp != undefined) {
         conexacaoL11BaixoBaixo = "L1PBB"; 
      lp.id = "L31"
      console.log("funcionou")
      abrirPopup(conexacaoL11BaixoBaixo)
      }
    } else 

    if(segundaLigacao == "verdeTerra"&& id == "L1"&& id2 == "MAIN31"&& filtro=="5para6Verde"){

      let lp = document.getElementById("L1");
      if(lp != null && lp != undefined) {
         conexacaoL11BaixoBaixo = "L1VBB";  
      lp.id = "L32"
      console.log("funcionou")
      abrirPopup(conexacaoL11BaixoBaixo)
      }
      
    } else

    if(segundaLigacao == "brancoRetorno"&& id == "L1"&& id2 == "MAIN32"&& filtro=="5para6Branco"){

      let lp = document.getElementById("L1");
      if(lp != null && lp != undefined) { 
         conexacaoL11BaixoBaixo = "L1BBB";
      lp.id = "L33"
      console.log("funcionou")
      abrirPopup(conexacaoL11BaixoBaixo)
      }
      
    } else
    if(segundaLigacao == "azulNeltro"&& id == "L1"&& id2 == "MAIN33"&& filtro=="5para6AzulNeltro"){

      let lp = document.getElementById("L1");
      if(lp != null && lp != undefined) {
         conexacaoL11BaixoBaixo = "L1ABB"; 
      lp.id = "L34"
      console.log("funcionou")
      abrirPopup(conexacaoL11BaixoBaixo)
      }
      
    }else

    if(segundaLigacao == "marromRetorno"&& id == "L1"&& id2 == "MAIN34"&& filtro=="5para6Marrom"){

      let lp = document.getElementById("L1");
      if(lp != null && lp != undefined) { 
         conexacaoL11BaixoBaixo = "L1MBB"; 
         console.log("funcionou")
      lp.id = "L35"
      abrirPopup(conexacaoL11BaixoBaixo)
      }
      
    }




    else
//equivale a segunda conexao   1para3 alta L2
    if(segundaLigacao == "pretoFase"&& id == "L2" && id2 == "MAIN10"&& filtro=="1para3Preto"){
      
      let lp = document.getElementById("L2");
      if(lp != null && lp != undefined) {  
      conexacaoL12Alto = "L2PA";
      lp.id = "L21"
      console.log("funcionou")
      abrirPopup(conexacaoL12Alto)
    }
    } else 

    if(segundaLigacao == "verdeTerra"&& id == "L2"&& id2 == "MAIN11"&& filtro=="1para3Verde"){
     
      let lp = document.getElementById("L2");
      if(lp != null && lp != undefined) {  
         conexacaoL12Alto = "L2VA";
      lp.id = "L22"
      console.log("funcionou")
      abrirPopup(conexacaoL12Alto)
      }
    } else

    if(segundaLigacao == "brancoRetorno"&& id == "L2"&& id2 == "MAIN12"&& filtro=="1para3Branco"){

      let lp = document.getElementById("L2");
      if(lp != null && lp != undefined) {  
         conexacaoL12Alto = "L2BA";
      lp.id = "L23"
      console.log("funcionou")
      abrirPopup(conexacaoL12Alto)
      }
    } else
    if(segundaLigacao == "azulNeltro"&& id == "L2"&& id2 == "MAIN13"&& filtro=="1para3AzulNeltro"){

      let lp = document.getElementById("L2");
    if(lp != null && lp != undefined) { 
      conexacaoL12Alto = "L2AA"; 
      lp.id = "L24"
      console.log("funcionou")
      abrirPopup(conexacaoL12Alto)
    }
    }else

    if(segundaLigacao == "marromRetorno"&& id == "L2"&& id2 == "MAIN14"&& filtro=="1para3Marrom"){

      let lp = document.getElementById("L2");
      if(lp != null && lp != undefined) {  
          conexacaoL12Alto = "L2MA";
      lp.id = "L25"
      console.log("funcionou")
      abrirPopup(conexacaoL12Alto)
      }
      
    }else




//equivale a segunda conexao   2para4 baixa L2
  if(segundaLigacao == "pretoFase"&& id == "L2" && id2 == "MAIN15"&& filtro=="2para4Preto"){

      let lp = document.getElementById("L2");
      if(lp != null && lp != undefined) {
         conexacaoL12Baixo = "L2PB";  
      lp.id = "L26"
      console.log("funcionou")
      abrirPopup(conexacaoL12Baixo)
      }
      
    } else 

    if(segundaLigacao == "verdeTerra"&& id == "L2"&& id2 == "MAIN16"&& filtro=="2para4Verde"){

      let lp = document.getElementById("L2");
      if(lp != null && lp != undefined) {
         conexacaoL12Baixo = "L2VB";  
      lp.id = "L27"
      console.log("funcionou")
      abrirPopup(conexacaoL12Baixo)
      }
      
    } else

    if(segundaLigacao == "brancoRetorno"&& id == "L2"&& id2 == "MAIN17"&& filtro=="2para4Branco"){

      let lp = document.getElementById("L2");
      if(lp != null && lp != undefined) {  
         conexacaoL12Baixo = "L2BB";
      lp.id = "L28"
      console.log("funcionou")
      abrirPopup(conexacaoL12Baixo)
      }
      
    } else
    if(segundaLigacao == "azulNeltro"&& id == "L2"&& id2 == "MAIN18"&& filtro=="2para4AzulNeltro"){

      let lp = document.getElementById("L2");
      if(lp != null && lp != undefined) {
         conexacaoL12Baixo = "L2AB";  
      lp.id = "L29"
      console.log("funcionou")
      abrirPopup(conexacaoL12Baixo)
      }
      
    }else

    if(segundaLigacao == "marromRetorno"&& id == "L2"&& id2 == "MAIN19"&& filtro=="2para4Marrom"){

      let lp = document.getElementById("L2");
      if(lp != null && lp != undefined) { 
         conexacaoL12Baixo = "L2MB"; 
      lp.id = "L30"
      console.log("funcionou")
      abrirPopup(conexacaoL12Baixo)
      }
      
    }


    //5para6 baixa baixa  L2
  if(segundaLigacao == "pretoFase"&& id == "L2" && id2 == "MAIN30"&& filtro=="5para6Preto"){

      let lp = document.getElementById("L2");
      if(lp != null && lp != undefined) {
         conexacaoL12BaixoBaixo = "L2PBB"; 
      lp.id = "L36"
      console.log("funcionou")
      abrirPopup(conexacaoL12BaixoBaixo)
      }
    } else 

    if(segundaLigacao == "verdeTerra"&& id == "L2"&& id2 == "MAIN31"&& filtro=="5para6Verde"){

      let lp = document.getElementById("L2");
      if(lp != null && lp != undefined) {
         conexacaoL12BaixoBaixo = "L2VBB";  
      lp.id = "L37"
      console.log("funcionou")
      abrirPopup(conexacaoL12BaixoBaixo)
      }
      
    } else

    if(segundaLigacao == "brancoRetorno"&& id == "L2"&& id2 == "MAIN32"&& filtro=="5para6Branco"){

      let lp = document.getElementById("L2");
      if(lp != null && lp != undefined) { 
         conexacaoL12BaixoBaixo = "L2BBB";
      lp.id = "L38"
      console.log("funcionou")
      abrirPopup(conexacaoL12BaixoBaixo)
      }
      
    } else
    if(segundaLigacao == "azulNeltro"&& id == "L2"&& id2 == "MAIN33"&& filtro=="5para6AzulNeltro"){

      let lp = document.getElementById("L2");
      if(lp != null && lp != undefined) {
         conexacaoL12BaixoBaixo = "L2ABB"; 
      lp.id = "L39"
      console.log("funcionou")
      abrirPopup(conexacaoL12BaixoBaixo)
      }
      
    }else

    if(segundaLigacao == "marromRetorno"&& id == "L2"&& id2 == "MAIN34"&& filtro=="5para6Marrom"){

      let lp = document.getElementById("L2");
      if(lp != null && lp != undefined) { 
         conexacaoL12BaixoBaixo = "L2MBB"; 
      lp.id = "L40"
      console.log("funcionou")
      abrirPopup(conexacaoL12BaixoBaixo)
      }
      
    }

     









   // SEGUNDO FIO CONECTADO 

    //1para3alto L1
   if(segundaLigacao2 == "pretoFase"&& id == "L1" && id2 == "MAIN10"&& filtro2=="1para3Preto"){

      let lp = document.getElementById("L1");
      if(lp!=null && lp!=undefined ){
         conexacaoL11Alto = "L1PA"
      lp.id = "L11"
      console.log("funcionou")
      abrirPopup(conexacaoL11Alto)
   }
    } else 

    if(segundaLigacao2 == "verdeTerra"&& id == "L1"&& id2 == "MAIN11"&& filtro2=="1para3Verde"){

      let lp = document.getElementById("L1");
      if(lp != null && lp != undefined) {  
          conexacaoL11Alto = "L1VA"
      lp.id = "L12"
      console.log("funcionou")
      abrirPopup(conexacaoL11Alto)
      }
      
    } else

    if(segundaLigacao2 == "brancoRetorno"&& id == "L1"&& id2 == "MAIN12"&& filtro2=="1para3Branco"){

      let lp = document.getElementById("L1");
      if(lp != null && lp != undefined) {
          conexacaoL11Alto = "L1BA"  
      lp.id = "L13"
      console.log("funcionou")
      abrirPopup(conexacaoL11Alto)
      }
      
    } else
    if(segundaLigacao2 == "azulNeltro"&& id == "L1"&& id2 == "MAIN13"&& filtro2=="1para3AzulNeltro"){

      let lp = document.getElementById("L1");
      if(lp != null && lp != undefined) {
          conexacaoL11Alto = "L1AA"  
      lp.id = "L14"
      console.log("funcionou")
      abrirPopup(conexacaoL11Alto)
      }
      
    }else

    if(segundaLigacao2 == "marromRetorno"&& id == "L1"&& id2 == "MAIN14"&& filtro2=="1para3Marrom"){

      let lp = document.getElementById("L1");
      if(lp != null && lp != undefined) {
          conexacaoL11Alto = "L1MA"  
      lp.id = "L15"
      console.log("funcionou")
      abrirPopup(conexacaoL11Alto)
      }
    }else




//2para4baixo L1 
  if(segundaLigacao2 == "pretoFase"&& id == "L1" && id2 == "MAIN15"&& filtro2=="2para4Preto"){

      let lp = document.getElementById("L1");
      if(lp != null && lp != undefined) {
         conexacaoL11Baixo = "L1PB"  
      lp.id = "L16"
      console.log("funcionou")
      abrirPopup(conexacaoL11Baixo)
      }
      
    } else 

    if(segundaLigacao2 == "verdeTerra"&& id == "L1"&& id2 == "MAIN16"&& filtro2=="2para4Verde"){

      let lp = document.getElementById("L1");
      if(lp != null && lp != undefined) {
         conexacaoL11Baixo = "L1VB"    
      lp.id = "L17"
      console.log("funcionou")
      abrirPopup(conexacaoL11Baixo)
      }
      
    } else

    if(segundaLigacao2 == "brancoRetorno"&& id == "L1"&& id2 == "MAIN17"&& filtro2=="2para4Branco"){

      let lp = document.getElementById("L1");
      if(lp != null && lp != undefined) {
         conexacaoL11Baixo = "L1BB"    
      lp.id = "L18"
      console.log("funcionou")
      abrirPopup(conexacaoL11Baixo)
      }
      
    } else
    if(segundaLigacao2 == "azulNeltro"&& id == "L1"&& id2 == "MAIN18"&& filtro2=="2para4AzulNeltro"){

      let lp = document.getElementById("L1");
      if(lp != null && lp != undefined) {
         conexacaoL11Baixo = "L1AB"    
      lp.id = "L19"
      console.log("funcionou")
      abrirPopup(conexacaoL11Baixo)
      }
      
    }else

    if(segundaLigacao2 == "marromRetorno"&& id == "L1"&& id2 == "MAIN19"&& filtro2=="2para4Marrom"){

      let lp = document.getElementById("L1");
      if(lp != null && lp != undefined) {
         conexacaoL11Baixo = "L1MB"    
      lp.id = "L20"
      console.log("funcionou")
      abrirPopup(conexacaoL11Baixo)
      }
      
    }




    //5para6baixo L1 
  if(segundaLigacao2 == "pretoFase"&& id == "L1" && id2 == "MAIN30"&& filtro2=="5para6Preto"){

      let lp = document.getElementById("L1");
      if(lp != null && lp != undefined) {  
         conexacaoL11BaixoBaixo = "L1PBB"
      lp.id = "L31"
      console.log("funcionou")
      abrirPopup(conexacaoL11BaixoBaixo)
      }
      
    } else 

    if(segundaLigacao2 == "verdeTerra"&& id == "L1"&& id2 == "MAIN31"&& filtro2=="5para6Verde"){

      let lp = document.getElementById("L1");
      if(lp != null && lp != undefined) { 
         conexacaoL11BaixoBaixo = "L1VBB" 
      lp.id = "L32"
      console.log("funcionou")
      abrirPopup(conexacaoL11BaixoBaixo)
      }
      
    } else

    if(segundaLigacao2 == "brancoRetorno"&& id == "L1"&& id2 == "MAIN32"&& filtro2=="5para6Branco"){

      let lp = document.getElementById("L1");
      if(lp != null && lp != undefined) {
         conexacaoL11BaixoBaixo = "L1BBB"  
      lp.id = "L33"
      console.log("funcionou")
      abrirPopup(conexacaoL11BaixoBaixo)
      }
      
    } else
    if(segundaLigacao2 == "azulNeltro"&& id == "L1"&& id2 == "MAIN33"&& filtro2=="5para6AzulNeltro"){

      let lp = document.getElementById("L1");
      if(lp != null && lp != undefined) {
         conexacaoL11BaixoBaixo = "L1ABB"  
      lp.id = "L34"
      console.log("funcionou")
      abrirPopup(conexacaoL11BaixoBaixo)
      }
      
    }else

    if(segundaLigacao2 == "marromRetorno"&& id == "L1"&& id2 == "MAIN34"&& filtro2=="5para6Marrom"){

      let lp = document.getElementById("L1");
      if(lp != null && lp != undefined) {
         conexacaoL11BaixoBaixo = "L1MBB"  
      lp.id = "L35"
      console.log("funcionou")
      abrirPopup(conexacaoL11BaixoBaixo)
      }
      
    }








    else
//equivale a segunda conexao   1para3 alta  L2
    if(segundaLigacao2 == "pretoFase"&& id == "L2" && id2 == "MAIN10"&& filtro2=="1para3Preto"){

      let lp = document.getElementById("L2");
      if(lp != null){ 
      lp.id = "L21"
      console.log("funcionou")
      }
    } else 

    if(segundaLigacao2 == "verdeTerra"&& id == "L2"&& id2 == "MAIN11"&& filtro2=="1para3Verde"){

      let lp = document.getElementById("L2");
      if(lp != null && lp != undefined) {  
      lp.id = "L22"
      console.log("funcionou")
      }
    } else

    if(segundaLigacao2 == "brancoRetorno"&& id == "L2"&& id2 == "MAIN12"&& filtro2=="1para3Branco"){

      let lp = document.getElementById("L2");
      if(lp != null && lp != undefined) {  
      lp.id = "L23"
      console.log("funcionou")
      }
    } else
    if(segundaLigacao2 == "azulNeltro"&& id == "L2"&& id2 == "MAIN13"&& filtro2=="1para3AzulNeltro"){

      let lp = document.getElementById("L2");
      if(lp != null && lp != undefined) {  
      lp.id = "L24"
      console.log("funcionou")
      }
    }else

    if(segundaLigacao2 == "marromRetorno"&& id == "L2"&& id2 == "MAIN14"&& filtro2=="1para3Marrom"){

      let lp = document.getElementById("L2");
      if(lp != null && lp != undefined) {  
      lp.id = "L25"
      console.log("funcionou")
      }
      
    }else




//equivale a segunda conexao   2para4 baixa  L2
  if(segundaLigacao2 == "pretoFase"&& id == "L2" && id2 == "MAIN15"&& filtro2=="2para4Preto"){

      let lp = document.getElementById("L2");
      if(lp != null && lp != undefined) {  
      lp.id = "L26"
      console.log("funcionou")
      }
      
    } else 

    if(segundaLigacao2 == "verdeTerra"&& id == "L2"&& id2 == "MAIN16"&& filtro2=="2para4Verde"){

      let lp = document.getElementById("L2");
      if(lp != null && lp != undefined) {  
      lp.id = "L27"
      console.log("funcionou")
      }
      
    } else

    if(segundaLigacao2 == "brancoRetorno"&& id == "L2"&& id2 == "MAIN17"&& filtro2=="2para4Branco"){

      let lp = document.getElementById("L2");
      if(lp != null && lp != undefined) {  
      lp.id = "L28"
      console.log("funcionou")
      }
      
    } else
    if(segundaLigacao2 == "azulNeltro"&& id == "L2"&& id2 == "MAIN18"&& filtro2=="2para4AzulNeltro"){

      let lp = document.getElementById("L2");
      if(lp != null && lp != undefined) {  
      lp.id = "L29"
      console.log("funcionou")
      }
      
    }else

    if(segundaLigacao2 == "marromRetorno"&& id == "L2"&& id2 == "MAIN19"&& filtro2=="2para4Marrom"){

      let lp = document.getElementById("L2");
      if(lp != null && lp != undefined) {  
      lp.id = "L30"
      console.log("funcionou")
      }
      
    }else




    //equivale a segunda conexao   5para6 baixa  L2
  if(segundaLigacao2 == "pretoFase"&& id == "L2" && id2 == "MAIN30"&& filtro2=="5para6Preto"){

      let lp = document.getElementById("L2");
      if(lp != null && lp != undefined) {  
      lp.id = "L36"
      console.log("funcionou")
      }
      
    } else 

    if(segundaLigacao2 == "verdeTerra"&& id == "L2"&& id2 == "MAIN31"&& filtro2=="5para6Verde"){

      let lp = document.getElementById("L2");
      if(lp != null && lp != undefined) {  
      lp.id = "L37"
      console.log("funcionou")
      }
      
    } else

    if(segundaLigacao2 == "brancoRetorno"&& id == "L2"&& id2 == "MAIN32"&& filtro2=="5para6Branco"){

      let lp = document.getElementById("L2");
      if(lp != null && lp != undefined) {  
      lp.id = "L38"
      console.log("funcionou")
      }
      
    } else
    if(segundaLigacao2 == "azulNeltro"&& id == "L2"&& id2 == "MAIN33"&& filtro2=="5para6AzulNeltro"){

      let lp = document.getElementById("L2");
      if(lp != null && lp != undefined) {  
      lp.id = "L39"
      console.log("funcionou")
      }
      
    }else

    if(segundaLigacao2 == "marromRetorno"&& id == "L2"&& id2 == "MAIN34"&& filtro2=="5para6Marrom"){

      let lp = document.getElementById("L2");
      if(lp != null && lp != undefined) {  
      lp.id = "L40"
      console.log("funcionou")
      }
      
    }else



    //TERCEIRA COEXAO L1  //1para3baixo L1 
   if(segundaLigacao3 == "pretoFase"&& id == "L1" && id2 == "MAIN10"&& filtro3=="1para3Preto"){
      
      let lp = document.getElementById("L1");
      if(lp != null && lp != undefined) { 
      conexacaoL11BaixoBaixo = "L1PBB";
      lp.id = "L11"
      console.log("funcionou")
      abrirPopup(conexacaoL11BaixoBaixo)
   }
    } else 

    if(segundaLigacao3 == "verdeTerra"&& id == "L1"&& id2 == "MAIN11"&& filtro3=="1para3Verde"){
     
      let lp = document.getElementById("L1");
      if(lp != null && lp != undefined) { 
         conexacaoL11BaixoBaixo = "L1VBB"; 
      lp.id = "L12"
      console.log("funcionou")
      abrirPopup(conexacaoL11BaixoBaixo)
    }
    }else

    if(segundaLigacao3 == "brancoRetorno"&& id == "L1"&& id2 == "MAIN12"&& filtro3=="1para3Branco"){

      let lp = document.getElementById("L1");
      if(lp != null && lp != undefined) { 
         conexacaoL11BaixoBaixo = "L1BBB";  
      lp.id = "L13"
      console.log("funcionou")
      abrirPopup(conexacaoL11BaixoBaixo)
      }
      
    } else
    if(segundaLigacao3 == "azulNeltro"&& id == "L1"&& id2 == "MAIN13"&& filtro3=="1para3AzulNeltro"){

      let lp = document.getElementById("L1");
      if(lp != null && lp != undefined) {  
         conexacaoL11BaixoBaixo = "L1ABB";
      lp.id = "L14"
      console.log("funcionou")
      abrirPopup(conexacaoL11BaixoBaixo)
      }
      
    }else

    if(segundaLigacao3 == "marromRetorno"&& id == "L1"&& id2 == "MAIN14"&& filtro3=="1para3Marrom"){

      let lp = document.getElementById("L1");
      if(lp != null && lp != undefined) { 
         conexacaoL11BaixoBaixo = "L1MBB"; 
      lp.id = "L15"
      console.log("funcionou")
      abrirPopup(conexacaoL11BaixoBaixo)
      }
      
    }else




    //TERCEIRA COEXAO L1  //2para4baixo L1 
   if(segundaLigacao3 == "pretoFase"&& id == "L1" && id2 == "MAIN15"&& filtro3=="2para4Preto"){
      
      let lp = document.getElementById("L1");
      if(lp != null && lp != undefined) { 
      conexacaoL11BaixoBaixo = "L1PBB";
      lp.id = "L16"
      console.log("funcionou")
      abrirPopup(conexacaoL11BaixoBaixo)
   }
    } else 

    if(segundaLigacao3 == "verdeTerra"&& id == "L1"&& id2 == "MAIN16"&& filtro3=="2para4Verde"){
     
      let lp = document.getElementById("L1");
      if(lp != null && lp != undefined) { 
         conexacaoL11BaixoBaixo = "L1VBB"; 
      lp.id = "L17"
      console.log("funcionou")
      abrirPopup(conexacaoL11BaixoBaixo)
    }
    }else

    if(segundaLigacao3 == "brancoRetorno"&& id == "L1"&& id2 == "MAIN17"&& filtro3=="2para4Branco"){
console.log("funcionou")
      let lp = document.getElementById("L1");
      if(lp != null && lp != undefined) { 
         conexacaoL11BaixoBaixo = "L1BBB";  
      lp.id = "L18"
      console.log("funcionou")
      abrirPopup(conexacaoL11BaixoBaixo)
      }
      
    } else
    if(segundaLigacao3 == "azulNeltro"&& id == "L1"&& id2 == "MAIN18"&& filtro3=="2para4AzulNeltro"){

      let lp = document.getElementById("L1");
      if(lp != null && lp != undefined) {  
         conexacaoL11BaixoBaixo = "L1ABB";
      lp.id = "L19"
      console.log("funcionou")
      abrirPopup(conexacaoL11BaixoBaixo)
      }
      
    }else

    if(segundaLigacao3 == "marromRetorno"&& id == "L1"&& id2 == "MAIN19"&& filtro3=="2para4Marrom"){

      let lp = document.getElementById("L1");
      if(lp != null && lp != undefined) { 
         conexacaoL11BaixoBaixo = "L1MBB"; 
      lp.id = "L20"
      console.log("funcionou")
      abrirPopup(conexacaoL11BaixoBaixo)
      }
      
    }




    //TERCEIRA COEXAO L1  //5para6baixo L1 
   if(segundaLigacao3 == "pretoFase"&& id == "L1" && id2 == "MAIN30"&& filtro3=="5para6Preto"){
      
      let lp = document.getElementById("L1");
      if(lp != null && lp != undefined) { 
      conexacaoL11BaixoBaixo = "L1PBB";
      lp.id = "L31"
      console.log("funcionou")
      abrirPopup(conexacaoL11BaixoBaixo)
   }
    } else 

    if(segundaLigacao3 == "verdeTerra"&& id == "L1"&& id2 == "MAIN31"&& filtro3=="5para6Verde"){
     
      let lp = document.getElementById("L1");
      if(lp != null && lp != undefined) { 
         conexacaoL11BaixoBaixo = "L1VBB"; 
      lp.id = "L32"
      console.log("funcionou")
      abrirPopup(conexacaoL11BaixoBaixo)
    }
    }else

    if(segundaLigacao3 == "brancoRetorno"&& id == "L1"&& id2 == "MAIN32"&& filtro3=="5para6Branco"){

      let lp = document.getElementById("L1");
      if(lp != null && lp != undefined) { 
         conexacaoL11BaixoBaixo = "L1BBB";  
      lp.id = "L33"
      console.log("funcionou")
      abrirPopup(conexacaoL11BaixoBaixo)
      }
      
    } else
    if(segundaLigacao3 == "azulNeltro"&& id == "L1"&& id2 == "MAIN33"&& filtro3=="5para6AzulNeltro"){

      let lp = document.getElementById("L1");
      if(lp != null && lp != undefined) {  
         conexacaoL11BaixoBaixo = "L1ABB";
      lp.id = "L34"
      console.log("funcionou")
      abrirPopup(conexacaoL11BaixoBaixo)
      }
      
    }else

    if(segundaLigacao3 == "marromRetorno"&& id == "L1"&& id2 == "MAIN34"&& filtro3=="5para6Marrom"){

      let lp = document.getElementById("L1");
      if(lp != null && lp != undefined) { 
         conexacaoL11BaixoBaixo = "L1MBB"; 
      lp.id = "L35"
      console.log("funcionou")
      abrirPopup(conexacaoL11BaixoBaixo)
      }
      
    }



    else






     //TERCEIRA COEXAO L2  //1para3baixo L2 
   if(segundaLigacao3 == "pretoFase"&& id == "L2" && id2 == "MAIN10"){
      
      let lp = document.getElementById("L2");
      if(lp != null && lp != undefined) { 
      conexacaoL11BaixoBaixo = "L1PBB";
      lp.id = "L21"
      console.log("funcionou")
      abrirPopup(conexacaoL11BaixoBaixo)
   }
    } else 

    if(segundaLigacao3 == "verdeTerra"&& id == "L2"&& id2 == "MAIN11"){
     
      let lp = document.getElementById("L2");
      if(lp != null && lp != undefined) { 
         conexacaoL11BaixoBaixo = "L1VBB"; 
      lp.id = "L22"
      console.log("funcionou")
      abrirPopup(conexacaoL11BaixoBaixo)
    }
    }else

    if(segundaLigacao3 == "brancoRetorno"&& id == "L2"&& id2 == "MAIN12"){

      let lp = document.getElementById("L2");
      if(lp != null && lp != undefined) { 
         conexacaoL11BaixoBaixo = "L1BBB";  
      lp.id = "L23"
      console.log("funcionou")
      abrirPopup(conexacaoL11BaixoBaixo)
      }
      
    } else
    if(segundaLigacao3 == "azulNeltro"&& id == "L2"&& id2 == "MAIN13"){

      let lp = document.getElementById("L2");
      if(lp != null && lp != undefined) {  
         conexacaoL11BaixoBaixo = "L1ABB";
      lp.id = "L24"
      console.log("funcionou")
      abrirPopup(conexacaoL11BaixoBaixo)
      }
      
    }else

    if(segundaLigacao3 == "marromRetorno"&& id == "L2"&& id2 == "MAIN14"){

      let lp = document.getElementById("L2");
      if(lp != null && lp != undefined) { 
         conexacaoL11BaixoBaixo = "L1MBB"; 
      lp.id = "L25"
      console.log("funcionou")
      abrirPopup(conexacaoL11BaixoBaixo)
      }
      
    }else



    //TERCEIRA COEXAO L1  //2para4baixo L2 
   if(segundaLigacao3 == "pretoFase"&& id == "L2" && id2 == "MAIN15"){
      
      let lp = document.getElementById("L2");
      if(lp != null && lp != undefined) { 
      conexacaoL11BaixoBaixo = "L1PBB";
      lp.id = "L26"
      console.log("funcionou")
      abrirPopup(conexacaoL11BaixoBaixo)
   }
    } else 

    if(segundaLigacao3 == "verdeTerra"&& id == "L2"&& id2 == "MAIN16"){
     
      let lp = document.getElementById("L2");
      if(lp != null && lp != undefined) { 
         conexacaoL11BaixoBaixo = "L1VBB"; 
      lp.id = "L27"
      console.log("funcionou")
      abrirPopup(conexacaoL11BaixoBaixo)
    }
    }else

    if(segundaLigacao3 == "brancoRetorno"&& id == "L2"&& id2 == "MAIN17"){

      let lp = document.getElementById("L2");
      if(lp != null && lp != undefined) { 
         conexacaoL11BaixoBaixo = "L1BBB";  
      lp.id = "L28"
      console.log("funcionou")
      abrirPopup(conexacaoL11BaixoBaixo)
      }
      
    } else
    if(segundaLigacao3 == "azulNeltro"&& id == "L2"&& id2 == "MAIN18"){

      let lp = document.getElementById("L2");
      if(lp != null && lp != undefined) {  
         conexacaoL11BaixoBaixo = "L1ABB";
      lp.id = "L29"
      console.log("funcionou")
      abrirPopup(conexacaoL11BaixoBaixo)
      }
      
    }else

    if(segundaLigacao3 == "marromRetorno"&& id == "L2"&& id2 == "MAIN19"){

      let lp = document.getElementById("L2");
      if(lp != null && lp != undefined) { 
         conexacaoL11BaixoBaixo = "L1MBB"; 
      lp.id = "L30"
      console.log("funcionou")
      abrirPopup(conexacaoL11BaixoBaixo)
      }
      
    }else



//TERCEIRO FIO L2 //5para6baixo L2 
    if(segundaLigacao3 == "pretoFase"&& id == "L2" && id2 == "MAIN30"){
      
      let lp = document.getElementById("L2");
      if(lp != null && lp != undefined) {  
      conexacaoL12BaixoBaixo = "L2PB";
      lp.id = "L36"
      console.log("funcionou")
      abrirPopup(conexacaoL12BaixoBaixo)
    }
    } else 

    if(segundaLigacao3 == "verdeTerra"&& id == "L2"&& id2 == "MAIN31"){
     
      let lp = document.getElementById("L2");
      if(lp != null && lp != undefined) {  
         conexacaoL12BaixoBaixo = "L2VB";
      lp.id = "L37"
      console.log("funcionou")
      abrirPopup(conexacaoL12BaixoBaixo)
      }
    } else

    if(segundaLigacao3 == "brancoRetorno"&& id == "L2"&& id2 == "MAIN32"){

      let lp = document.getElementById("L2");
      if(lp != null && lp != undefined) {  
         conexacaoL12BaixoBaixo = "L2BB";
      lp.id = "L38"
      console.log("funcionou")
      abrirPopup(conexacaoL12BaixoBaixo)
      }
    } else
    if(segundaLigacao3 == "azulNeltro"&& id == "L2"&& id2 == "MAIN33"){

      let lp = document.getElementById("L2");
    if(lp != null && lp != undefined) { 
      conexacaoL12BaixoBaixo = "L2AB"; 
      lp.id = "L39"
      console.log("funcionou")
      abrirPopup(conexacaoL12BaixoBaixo)
    }
    }else

    if(segundaLigacao3 == "marromRetorno"&& id == "L2"&& id2 == "MAIN34"){

      let lp = document.getElementById("L2");
      if(lp != null && lp != undefined) {  
          conexacaoL12BaixoBaixo = "L2MB";
      lp.id = "L40"
      console.log("funcionou")
      abrirPopup(conexacaoL12BaixoBaixo)
      }
      
    }




    //if((lp.id == "L11" &&id == "L1") && (lp.id == "L16"&& lp.id == "L16")){  
   // abrirPopup()
   // }

}




/////INTERRUPTOR CONEXAO
const inter = document.querySelectorAll("[id]");


inter.forEach(it => {
   // depois de varrer a variavel it add um evento
    it.addEventListener("click", function(){
        const id = it.id;

 id2 ;
 console.log(id)
        if(id == "MAIN10"){
           return id2 = "MAIN10"
        }else
   if(id == "MAIN11"){

      return id2 = "MAIN11"
   }else

if(id == "MAIN12"){
return id2 = "MAIN12"

}else
if(id == "MAIN13"){
   return id2 = "MAIN13"
   
   }else

   if(id == "MAIN14"){
      return id2 = "MAIN14"
      
      }
else



if(id == "MAIN15"){
   return id2 = "MAIN15"
}else
if(id == "MAIN16"){

return id2 = "MAIN16"
}else

if(id == "MAIN17"){
return id2 = "MAIN17"

}else
if(id == "MAIN18"){
return id2 = "MAIN18"

}else

if(id == "MAIN19"){
return id2 = "MAIN19"

}

else


// equivale ao segundo fio da lampada
if(id == "MAIN20"){
   return id2 = "MAIN20"
}else
if(id == "MAIN21"){

return id2 = "MAIN21"
}else

if(id == "MAIN22"){
return id2 = "MAIN22"

}else
if(id == "MAIN23"){
return id2 = "MAIN23"

}else

if(id == "MAIN24"){
return id2 = "MAIN24"

}
else



if(id == "MAIN25"){
return id2 = "MAIN25"
}else
if(id == "MAIN26"){

return id2 = "MAIN26"
}else

if(id == "MAIN27"){
return id2 = "MAIN27"

}else
if(id == "MAIN28"){
return id2 = "MAIN28"

}else

if(id == "MAIN29"){
return id2 = "MAIN29"

}else


// equivale ao terceiro fio
if(id == "MAIN30"){
   return id2 = "MAIN30"
}else
if(id == "MAIN31"){

return id2 = "MAIN31"
}else

if(id == "MAIN32"){
return id2 = "MAIN32"

}else
if(id == "MAIN33"){
return id2 = "MAIN33"

}else
if(id == "MAIN34"){
return id2 = "MAIN34"

}else



if(id == "MAIN35"){
   return id2 = "MAIN35"
}else
if(id == "MAIN36"){

return id2 = "MAIN36"
}else

if(id == "MAIN37"){
return id2 = "MAIN37"

}else
if(id == "MAIN38"){
return id2 = "MAIN38"

}else
if(id == "MAIN39"){
return id2 = "MAIN39"

}

     console.log(inter)
     console.log(it.id)
       
   if(id == "L5" || id == "L6" ){

      interruptorConect(id,id2)
    return id
   }


    });
}


);








function interruptorConect(id,id2){
   
   console.log(id)
   console.log(id2)



   
   //1para3alto primeiro fio conectado L5
   if(segundaLigacao == "pretoFase"&& id == "L5" && id2 == "MAIN10" && filtro=="1para3Preto"){
      
      let it = document.getElementById("L5");
      if(it != null && it != undefined) { 
      conexacaoL11Alto = "L5PA";
      console.log("fincionou")
      it.id = "L51"
      abrirPopup(conexacaoL11Alto)
   }
    } else 

    if(segundaLigacao == "verdeTerra"&& id == "L5"&& id2 == "MAIN11"&& filtro=="1para3Verde"){
     
      let it = document.getElementById("L5");
      if(it != null && it != undefined) { 
         conexacaoL11Alto = "L5VA"; 
         console.log("fincionou")
      it.id = "L52"
      abrirPopup(conexacaoL11Alto)
    }
    } else

    if(segundaLigacao == "brancoRetorno"&& id == "L5"&& id2 == "MAIN12"&& filtro=="1para3Branco"){

      let it = document.getElementById("L5");
      if(it != null && it != undefined) { 
         conexacaoL11Alto = "L5BA"; 
         console.log("fincionou") 
      it.id = "L53"
      abrirPopup(conexacaoL11Alto)
      }
      
    } else
    if(segundaLigacao == "azulNeltro"&& id == "L5"&& id2 == "MAIN13"&& filtro=="1para3AzulNeltro"){

      let it = document.getElementById("L5");
      if(it != null && it != undefined) {  
         conexacaoL11Alto = "L5AA";
         console.log("fincionou")
      it.id = "L54"
      abrirPopup(conexacaoL11Alto)
      }
      
    }else

    if(segundaLigacao == "marromRetorno"&& id == "L5"&& id2 == "MAIN14"&& filtro=="1para3Marrom"){

      let it = document.getElementById("L5");
      if(it != null && it != undefined) { 
         conexacaoL11Alto = "L5MA"; 
         console.log("fincionou")
      it.id = "L55"
      abrirPopup(conexacaoL11Alto)
      }
      
    }else




//2para4baixo primeiro fio conectado L5
  if(segundaLigacao == "pretoFase"&& id == "L5" && id2 == "MAIN15"&& filtro=="2para4Preto"){

      let it = document.getElementById("L5");
      if(it != null && it != undefined) {
         conexacaoL11Baixo = "L5PB"; 
         console.log("fincionou")
      it.id = "L56"
      abrirPopup(conexacaoL11Baixo)
      }
    } else 

    if(segundaLigacao == "verdeTerra"&& id == "L5"&& id2 == "MAIN16"&& filtro=="2para4Verde"){

      let it = document.getElementById("L5");
      if(it != null && it != undefined) {
         conexacaoL11Baixo = "L5VB";  
         console.log("fincionou")
      it.id = "L57"
      abrirPopup(conexacaoL11Baixo)
      }
      
    } else

    if(segundaLigacao == "brancoRetorno"&& id == "L5"&& id2 == "MAIN17"&& filtro=="2para4Branco"){

      let it = document.getElementById("L5");
      if(it != null && it != undefined) { 
         conexacaoL11Baixo = "L5BB";
         console.log("fincionou")
      it.id = "L58"
      abrirPopup(conexacaoL11Baixo)
      }
      
    } else
    if(segundaLigacao == "azulNeltro"&& id == "L5"&& id2 == "MAIN18"&& filtro=="2para4AzulNeltro"){

      let it = document.getElementById("L5");
      if(it != null && it != undefined) {
         conexacaoL11Baixo = "L5AB"; 
         console.log("fincionou")
      it.id = "L59"
      abrirPopup(conexacaoL11Baixo)
      }
      
    }else

    if(segundaLigacao == "marromRetorno"&& id == "L5"&& id2 == "MAIN19"&& filtro=="2para4Marrom"){

      let it = document.getElementById("L5");
      if(it != null && it != undefined) { 
         conexacaoL11Baixo = "L5MB"; 
         console.log("fincionou")
      it.id = "L591"
      abrirPopup(conexacaoL11Baixo)
      }
      
    }



    //5para6 primeiro fio conectado L5
  if(segundaLigacao == "pretoFase"&& id == "L5" && id2 == "MAIN30"&& filtro=="5para6Preto"){

      let it = document.getElementById("L5");
      if(it != null && it != undefined) {
         conexacaoL11BaixoBaixo = "L5PBB"; 
         console.log("fincionou")
      it.id = "L592"
      abrirPopup(conexacaoL11BaixoBaixo)
      }
    } else 

    if(segundaLigacao == "verdeTerra"&& id == "L5"&& id2 == "MAIN31"&& filtro=="5para6Verde"){

      let it = document.getElementById("L5");
      if(it != null && it != undefined) {
         conexacaoL11BaixoBaixo = "L5VBB";  
         console.log("fincionou")
      it.id = "L593"
      abrirPopup(conexacaoL11BaixoBaixo)
      }
      
    } else

    if(segundaLigacao == "brancoRetorno"&& id == "L5"&& id2 == "MAIN32"&& filtro=="5para6Branco"){

      let it = document.getElementById("L5");
      if(it != null && it != undefined) { 
         conexacaoL11BaixoBaixo = "L5BBB";
         console.log("fincionou")
      it.id = "L594"
      abrirPopup(conexacaoL11BaixoBaixo)
      }
      
    } else
    if(segundaLigacao == "azulNeltro"&& id == "L5"&& id2 == "MAIN33"&& filtro=="5para6AzulNeltro"){

      let it = document.getElementById("L5");
      if(it != null && it != undefined) {
         conexacaoL11BaixoBaixo = "L5ABB"; 
         console.log("fincionou")
      it.id = "L595"
      abrirPopup(conexacaoL11BaixoBaixo)
      }
      
    }else

    if(segundaLigacao == "marromRetorno"&& id == "L5"&& id2 == "MAIN34"&& filtro=="5para6Marrom"){

      let it = document.getElementById("L5");
      if(it != null && it != undefined) { 
         conexacaoL11BaixoBaixo = "L5MBB"; 
         console.log("fincionou")
      it.id = "L596"
      abrirPopup(conexacaoL11BaixoBaixo)
      }
      
    }




    else
//equivale a segunda conexao   1para3 alta L6
    if(segundaLigacao == "pretoFase"&& id == "L6" && id2 == "MAIN10"&& filtro=="1para3Preto"){
      
      let it = document.getElementById("L6");
      if(it != null && it != undefined) {  
      conexacaoL12Alto = "L6PA";
      console.log("fincionou")
      it.id = "L61"
      abrirPopup(conexacaoL12Alto)
    }
    } else 

    if(segundaLigacao == "verdeTerra"&& id == "L6"&& id2 == "MAIN11"&& filtro=="1para3Verde"){
     
      let it = document.getElementById("L6");
      if(it != null && it != undefined) {  
         conexacaoL12Alto = "L6VA";
         console.log("fincionou")
      it.id = "L62"
      abrirPopup(conexacaoL12Alto)
      }
    } else

    if(segundaLigacao == "brancoRetorno"&& id == "L6"&& id2 == "MAIN12"&& filtro=="1para3Branco"){

      let it = document.getElementById("L6");
      if(it != null && it != undefined) {  
         conexacaoL12Alto = "L6BA";
         console.log("fincionou")
      it.id = "L63"
      abrirPopup(conexacaoL12Alto)
      }
    } else
    if(segundaLigacao == "azulNeltro"&& id == "L6"&& id2 == "MAIN13"&& filtro=="1para3AzulNeltro"){

      let it = document.getElementById("L6");
    if(it != null && it != undefined) { 
      conexacaoL12Alto = "L6AA"; 
      console.log("fincionou")
      it.id = "L64"
      abrirPopup(conexacaoL12Alto)
    }
    }else

    if(segundaLigacao == "marromRetorno"&& id == "L6"&& id2 == "MAIN14"&& filtro=="1para3Marrom"){

      let it = document.getElementById("L6");
      if(it != null && it != undefined) {  
          conexacaoL12Alto = "L6MA";
          console.log("fincionou")
      it.id = "L65"
      abrirPopup(conexacaoL12Alto)
      }
      
    }else




//equivale a segunda conexao   2para4 baixa L2
  if(segundaLigacao == "pretoFase"&& id == "L6" && id2 == "MAIN15"&& filtro=="2para4Preto"){

      let it = document.getElementById("L6");
      if(it != null && it != undefined) {
         conexacaoL12Baixo = "L6PB";  
         console.log("fincionou")
      it.id = "L66"
      abrirPopup(conexacaoL12Baixo)
      }
      
    } else 

    if(segundaLigacao == "verdeTerra"&& id == "L6"&& id2 == "MAIN16"&& filtro=="2para4Verde"){

      let it = document.getElementById("L6");
      if(it != null && it != undefined) {
         conexacaoL12Baixo = "L6VB";  
         console.log("fincionou")
      it.id = "L67"
      abrirPopup(conexacaoL12Baixo)
      }
      
    } else

    if(segundaLigacao == "brancoRetorno"&& id == "L6"&& id2 == "MAIN17"&& filtro=="2para4Branco"){

      let it = document.getElementById("L6");
      if(it != null && it != undefined) {  
         conexacaoL12Baixo = "L6BB";
         console.log("fincionou")
      it.id = "L68"
      abrirPopup(conexacaoL12Baixo)
      }
      
    } else
    if(segundaLigacao == "azulNeltro"&& id == "L6"&& id2 == "MAIN18"&& filtro=="2para4AzulNeltro"){

      let it = document.getElementById("L6");
      if(it != null && it != undefined) {
         conexacaoL12Baixo = "L6AB";  
         console.log("fincionou")
      it.id = "L69"
      abrirPopup(conexacaoL12Baixo)
      }
      
    }else

    if(segundaLigacao == "marromRetorno"&& id == "L6"&& id2 == "MAIN19"&& filtro=="2para4Marrom"){

      let it = document.getElementById("L6");
      if(it != null && it != undefined) { 
         conexacaoL12Baixo = "L6MB"; 
         console.log("fincionou")
      it.id = "L691"
      abrirPopup(conexacaoL12Baixo)
      }
      
    }


    //5para6 baixa baixa  L6
  if(segundaLigacao == "pretoFase"&& id == "L6" && id2 == "MAIN30"&& filtro=="5para6Preto"){

      let it = document.getElementById("L6");
      if(it != null && it != undefined) {
         conexacaoL12BaixoBaixo = "L6PBB"; 
         console.log("fincionou")
      it.id = "L692"
      abrirPopup(conexacaoL12BaixoBaixo)
      }
    } else 

    if(segundaLigacao == "verdeTerra"&& id == "L6"&& id2 == "MAIN31"&& filtro=="5para6Verde"){

      let it = document.getElementById("L6");
      if(it != null && it != undefined) {
         conexacaoL12BaixoBaixo = "L6VBB"; 
         console.log("fincionou") 
      it.id = "L693"
      abrirPopup(conexacaoL12BaixoBaixo)
      }
      
    } else

    if(segundaLigacao == "brancoRetorno"&& id == "L6"&& id2 == "MAIN32"&& filtro=="5para6Branco"){

      let it = document.getElementById("L6");
      if(it != null && it != undefined) { 
         conexacaoL12BaixoBaixo = "L6BBB";
         console.log("fincionou")
      it.id = "L694"
      abrirPopup(conexacaoL12BaixoBaixo)
      }
      
    } else
    if(segundaLigacao == "azulNeltro"&& id == "L6"&& id2 == "MAIN33"&& filtro=="5para6AzulNeltro"){

      let it = document.getElementById("L6");
      if(it != null && it != undefined) {
         conexacaoL12BaixoBaixo = "L6ABB"; 
         console.log("fincionou")
      it.id = "L695"
      abrirPopup(conexacaoL12BaixoBaixo)
      }
      
    }else

    if(segundaLigacao == "marromRetorno"&& id == "L6"&& id2 == "MAIN34"&& filtro=="5para6Marrom"){

      let it = document.getElementById("L6");
      if(it != null && it != undefined) { 
         conexacaoL12BaixoBaixo = "L6MBB"; 
         console.log("fincionou")
      it.id = "L696"
      abrirPopup(conexacaoL12BaixoBaixo)
      }
      
    }

     









   // SEGUNDO FIO CONECTADO 

    //1para3alto L5
   if(segundaLigacao2 == "pretoFase"&& id == "L5" && id2 == "MAIN10"&& filtro2=="1para3Preto"){

      let it = document.getElementById("L5");
      if(it!=null && it!=undefined ){
         conexacaoL11Alto = "L5PA"
         console.log("fincionou")
      it.id = "L597"
      abrirPopup(conexacaoL11Alto)
   }
    } else 

    if(segundaLigacao2 == "verdeTerra"&& id == "L5"&& id2 == "MAIN11"&& filtro2=="1para3Verde"){

      let it = document.getElementById("L5");
      if(it != null && it != undefined) {  
          conexacaoL11Alto = "L5VA"
          console.log("fincionou")
      it.id = "L598"
      abrirPopup(conexacaoL11Alto)
      }
      
    } else

    if(segundaLigacao2 == "brancoRetorno"&& id == "L5"&& id2 == "MAIN12"&& filtro2=="1para3Branco"){

      let it = document.getElementById("L5");
      if(it != null && it != undefined) {
          conexacaoL11Alto = "L5BA"  
          console.log("fincionou")
      it.id = "L599"
      abrirPopup(conexacaoL11Alto)
      }
      
    } else
    if(segundaLigacao2 == "azulNeltro"&& id == "L5"&& id2 == "MAIN13"&& filtro2=="1para3AzulNeltro"){

      let it = document.getElementById("L5");
      if(it != null && it != undefined) {
          conexacaoL11Alto = "L5AA"  
          console.log("fincionou")
      it.id = "L5991"
      abrirPopup(conexacaoL11Alto)
      }
      
    }else

    if(segundaLigacao2 == "marromRetorno"&& id == "L5"&& id2 == "MAIN14"&& filtro2=="1para3Marrom"){

      let it = document.getElementById("L5");
      if(it != null && it != undefined) {
          conexacaoL11Alto = "L5MA"  
          console.log("fincionou")
      it.id = "L5992"
      abrirPopup(conexacaoL11Alto)
      }
    }else




//2para4baixo L5 
  if(segundaLigacao2 == "pretoFase"&& id == "L5" && id2 == "MAIN15"&& filtro2=="2para4Preto"){

      let it = document.getElementById("L5");
      if(it != null && it != undefined) {
         conexacaoL11Baixo = "L5PB"  
         console.log("fincionou")
      it.id = "L5993"
      abrirPopup(conexacaoL11Baixo)
      }
      
    } else 

    if(segundaLigacao2 == "verdeTerra"&& id == "L5"&& id2 == "MAIN16"&& filtro2=="2para4Verde"){

      let it = document.getElementById("L5");
      if(it != null && it != undefined) {
         conexacaoL11Baixo = "L5VB"   
         console.log("fincionou") 
      it.id = "L5994"
      abrirPopup(conexacaoL11Baixo)
      }
      
    } else

    if(segundaLigacao2 == "brancoRetorno"&& id == "L5"&& id2 == "MAIN17"&& filtro2=="2para4Branco"){

      let it = document.getElementById("L5");
      if(it != null && it != undefined) {
         conexacaoL11Baixo = "L5BB"  
         console.log("fincionou")  
      it.id = "L5995"
      abrirPopup(conexacaoL11Baixo)
      }
      
    } else
    if(segundaLigacao2 == "azulNeltro"&& id == "L5"&& id2 == "MAIN18"&& filtro2=="2para4AzulNeltro"){

      let it = document.getElementById("L5");
      if(it != null && it != undefined) {
         conexacaoL11Baixo = "L5AB"  
         console.log("fincionou")  
      it.id = "L5996"
      abrirPopup(conexacaoL11Baixo)
      }
      
    }else

    if(segundaLigacao2 == "marromRetorno"&& id == "L5"&& id2 == "MAIN19"&& filtro2=="2para4Marrom"){

      let it = document.getElementById("L5");
      if(it != null && it != undefined) {
         conexacaoL11Baixo = "L5MB"    
         console.log("fincionou")
      it.id = "L5997"
      abrirPopup(conexacaoL11Baixo)
      }
      
    }




    //5para6baixo L5 
  if(segundaLigacao2 == "pretoFase"&& id == "L5" && id2 == "MAIN30"&& filtro2=="5para6Preto"){

      let it = document.getElementById("L5");
      if(it != null && it != undefined) {  
         conexacaoL11BaixoBaixo = "L5PBB"
         console.log("fincionou")
      it.id = "L5998"
      abrirPopup(conexacaoL11BaixoBaixo)
      }
      
    } else 

    if(segundaLigacao2 == "verdeTerra"&& id == "L5"&& id2 == "MAIN31"&& filtro2=="5para6Verde"){

      let it = document.getElementById("L5");
      if(it != null && it != undefined) { 
         conexacaoL11BaixoBaixo = "L5VBB" 
         console.log("fincionou")
      it.id = "L5999"
      abrirPopup(conexacaoL11BaixoBaixo)
      }
      
    } else

    if(segundaLigacao2 == "brancoRetorno"&& id == "L5"&& id2 == "MAIN32"&& filtro2=="5para6Branco"){

      let it = document.getElementById("L5");
      if(it != null && it != undefined) {
         conexacaoL11BaixoBaixo = "L5BBB"  
         console.log("fincionou")
      it.id = "L59991"
      abrirPopup(conexacaoL11BaixoBaixo)
      }
      
    } else
    if(segundaLigacao2 == "azulNeltro"&& id == "L5"&& id2 == "MAIN33"&& filtro2=="5para6AzulNeltro"){

      let it = document.getElementById("L5");
      if(it != null && it != undefined) {
         conexacaoL11BaixoBaixo = "L5ABB"  
         console.log("fincionou")
      it.id = "L59992"
      abrirPopup(conexacaoL11BaixoBaixo)
      }
      
    }else

    if(segundaLigacao2 == "marromRetorno"&& id == "L5"&& id2 == "MAIN34"&& filtro2=="5para6Marrom"){

      let it = document.getElementById("L5");
      if(it != null && it != undefined) {
         conexacaoL11BaixoBaixo = "L5MBB"  
         console.log("fincionou")
      it.id = "L59993"
      abrirPopup(conexacaoL11BaixoBaixo)
      }
      
    }








    else
//equivale a segunda conexao   1para3 alta  L6
    if(segundaLigacao2 == "pretoFase"&& id == "L6" && id2 == "MAIN10"&& filtro2=="1para3Preto"){

      let it = document.getElementById("L6");
      if(it != null){ 
      it.id = "L697"
      }
    } else 

    if(segundaLigacao2 == "verdeTerra"&& id == "L6"&& id2 == "MAIN11"&& filtro2=="1para3Verde"){

      let it = document.getElementById("L6");
      if(it != null && it != undefined) {  
      it.id = "L698"
      }
    } else

    if(segundaLigacao2 == "brancoRetorno"&& id == "L6"&& id2 == "MAIN12"&& filtro2=="1para3Branco"){

      let it = document.getElementById("L6");
      if(it != null && it != undefined) {  
      it.id = "L699"
      }
    } else
    if(segundaLigacao2 == "azulNeltro"&& id == "L6"&& id2 == "MAIN13"&& filtro2=="1para3AzulNeltro"){

      let it = document.getElementById("L6");
      if(it != null && it != undefined) {  
      it.id = "L6991"
      }
    }else

    if(segundaLigacao2 == "marromRetorno"&& id == "L6"&& id2 == "MAIN14"&& filtro2=="1para3Marrom"){

      let it = document.getElementById("L6");
      if(it != null && it != undefined) {  
      it.id = "L6992"
      }
      
    }else




//equivale a segunda conexao   2para4 baixa  L2
  if(segundaLigacao2 == "pretoFase"&& id == "L6" && id2 == "MAIN15"&& filtro2=="2para4Preto"){

      let it = document.getElementById("L6");
      if(it != null && it != undefined) {  
      it.id = "L6993"
      }
      
    } else 

    if(segundaLigacao2 == "verdeTerra"&& id == "L6"&& id2 == "MAIN16"&& filtro2=="2para4Verde"){

      let it = document.getElementById("L6");
      if(it != null && it != undefined) {  
      it.id = "L6994"
      }
      
    } else

    if(segundaLigacao2 == "brancoRetorno"&& id == "L6"&& id2 == "MAIN17"&& filtro2=="2para4Branco"){

      let it = document.getElementById("L6");
      if(it != null && it != undefined) {  
      it.id = "L6995"
      }
      
    } else
    if(segundaLigacao2 == "azulNeltro"&& id == "L6"&& id2 == "MAIN18"&& filtro2=="2para4AzulNeltro"){

      let it = document.getElementById("L6");
      if(it != null && it != undefined) {  
      it.id = "L6996"
      }
      
    }else

    if(segundaLigacao2 == "marromRetorno"&& id == "L6"&& id2 == "MAIN19"&& filtro2=="2para4Marrom"){

      let it = document.getElementById("L6");
      if(it != null && it != undefined) {  
      it.id = "L6997"
      }
      
    }else




    //equivale a segunda conexao   5para6 baixa  L6
  if(segundaLigacao2 == "pretoFase"&& id == "L6" && id2 == "MAIN30"&& filtro2=="5para6Preto"){

      let it = document.getElementById("L6");
      if(it != null && it != undefined) {  
      it.id = "L6998"
      }
      
    } else 

    if(segundaLigacao2 == "verdeTerra"&& id == "L6"&& id2 == "MAIN31"&& filtro2=="5para6Verde"){

      let it = document.getElementById("L6");
      if(it != null && it != undefined) {  
      it.id = "L6999"
      }
      
    } else

    if(segundaLigacao2 == "brancoRetorno"&& id == "L6"&& id2 == "MAIN32"&& filtro2=="5para6Branco"){

      let it = document.getElementById("L6");
      if(it != null && it != undefined) {  
      it.id = "L69991"
      }
      
    } else
    if(segundaLigacao2 == "azulNeltro"&& id == "L6"&& id2 == "MAIN33"&& filtro2=="5para6AzulNeltro"){

      let it = document.getElementById("L6");
      if(it != null && it != undefined) {  
      it.id = "L69992"
      }
      
    }else

    if(segundaLigacao2 == "marromRetorno"&& id == "L6"&& id2 == "MAIN34"&& filtro2=="5para6Marrom"){

      let it = document.getElementById("L6");
      if(it != null && it != undefined) {  
      it.id = "L69993"
      }
      
    }else



    //TERCEIRA COEXAO L5  //1para3baixo L5 
   if(segundaLigacao3 == "pretoFase"&& id == "L5" && id2 == "MAIN10"&& filtro3=="1para3Preto"){
      
      let it = document.getElementById("L5");
      if(it != null && it != undefined) { 
      conexacaoL11Alto = "L5PA";
      it.id = "L59994"
      abrirPopup(conexacaoL11Alto)
   }
    } else 

    if(segundaLigacao3 == "verdeTerra"&& id == "L5"&& id2 == "MAIN11"&& filtro3=="1para3Verde"){
     
      let it = document.getElementById("L5");
      if(it != null && it != undefined) { 
         conexacaoL11Alto = "L5VA"; 
      it.id = "L59995"
      abrirPopup(conexacaoL11Alto)
    }
    }else

    if(segundaLigacao3 == "brancoRetorno"&& id == "L5"&& id2 == "MAIN12"&& filtro3=="1para3Branco"){

      let it = document.getElementById("L5");
      if(it != null && it != undefined) { 
         conexacaoL11Alto = "L5BA";  
      it.id = "L59996"
      abrirPopup(conexacaoL11Alto)
      }
      
    } else
    if(segundaLigacao3 == "azulNeltro"&& id == "L5"&& id2 == "MAIN13"&& filtro3=="1para3AzulNeltro"){

      let it = document.getElementById("L5");
      if(it != null && it != undefined) {  
         conexacaoL11Alto = "L5AA";
      it.id = "L59997"
      abrirPopup(conexacaoL11Alto)
      }
      
    }else

    if(segundaLigacao3 == "marromRetorno"&& id == "L5"&& id2 == "MAIN14"&& filtro3=="1para3Marrom"){

      let it = document.getElementById("L5");
      if(it != null && it != undefined) { 
         conexacaoL11Alto = "L5MA"; 
      it.id = "L59998"
      abrirPopup(conexacaoL11Alto)
      }
      
    }else




    //TERCEIRA COEXAO L5  //2para4baixo L5 
   if(segundaLigacao3 == "pretoFase"&& id == "L5" && id2 == "MAIN15"&& filtro3=="2para4Preto"){
      
      let it = document.getElementById("L5");
      if(it != null && it != undefined) { 
      conexacaoL11Baixo = "L5PB";
      it.id = "L59999"
      abrirPopup(conexacaoL11Baixo)
   }
    } else 

    if(segundaLigacao3 == "verdeTerra"&& id == "L5"&& id2 == "MAIN16"&& filtro3=="2para4Verde"){
     
      let it = document.getElementById("L5");
      if(it != null && it != undefined) { 
         conexacaoL11Baixo = "L5VB"; 
      it.id = "L599991"
      abrirPopup(conexacaoL11Baixo)
    }
    }else

    if(segundaLigacao3 == "brancoRetorno"&& id == "L5"&& id2 == "MAIN17"&& filtro3=="2para4Branco"){

      let it = document.getElementById("L5");
      if(it != null && it != undefined) { 
         conexacaoL11Baixo = "L5BB";  
      it.id = "L599992"
      abrirPopup(conexacaoL11Baixo)
      }
      
    } else
    if(segundaLigacao3 == "azulNeltro"&& id == "L5"&& id2 == "MAIN18"&& filtro3=="2para4AzulNeltro"){

      let it = document.getElementById("L5");
      if(it != null && it != undefined) {  
         conexacaoL11Baixo = "L5AB";
      it.id = "L599993"
      abrirPopup(conexacaoL11Baixo)
      }
      
    }else

    if(segundaLigacao3 == "marromRetorno"&& id == "L5"&& id2 == "MAIN19"&& filtro3=="2para4Marrom"){

      let it = document.getElementById("L5");
      if(it != null && it != undefined) { 
         conexacaoL11Baixo = "L5MB"; 
      it.id = "L599994"
      abrirPopup(conexacaoL11Baixo)
      }
      
    }




    //TERCEIRA COEXAO L5  //5para6baixo L5 
   if(segundaLigacao3 == "pretoFase"&& id == "L5" && id2 == "MAIN30"&& filtro3=="5para6Preto"){
      
      let it = document.getElementById("L5");
      if(it != null && it != undefined) { 
      conexacaoL11BaixoBaixo = "L5PBB";
      it.id = "L599995"
      abrirPopup(conexacaoL11BaixoBaixo)
   }
    } else 

    if(segundaLigacao3 == "verdeTerra"&& id == "L5"&& id2 == "MAIN31"&& filtro3=="5para6Verde"){
     
      let it = document.getElementById("L5");
      if(it != null && it != undefined) { 
         conexacaoL11BaixoBaixo = "L5VBB"; 
      it.id = "L599996"
      abrirPopup(conexacaoL11BaixoBaixo)
    }
    }else

    if(segundaLigacao3 == "brancoRetorno"&& id == "L5"&& id2 == "MAIN32"&& filtro3=="5para6Branco"){

      let it = document.getElementById("L5");
      if(it != null && it != undefined) { 
         conexacaoL11BaixoBaixo = "L5BBB";  
      it.id = "L599997"
      abrirPopup(conexacaoL11BaixoBaixo)
      }
      
    } else
    if(segundaLigacao3 == "azulNeltro"&& id == "L5"&& id2 == "MAIN33"&& filtro3=="5para6AzulNeltro"){

      let it = document.getElementById("L5");
      if(it != null && it != undefined) {  
         conexacaoL11BaixoBaixo = "L5ABB";
      it.id = "L599998"
      abrirPopup(conexacaoL11BaixoBaixo)
      }
      
    }else

    if(segundaLigacao3 == "marromRetorno"&& id == "L5"&& id2 == "MAIN34"&& filtro3=="5para6Marrom"){

      let it = document.getElementById("L5");
      if(it != null && it != undefined) { 
         conexacaoL11BaixoBaixo = "L5MBB"; 
      it.id = "L599999"
      abrirPopup(conexacaoL11BaixoBaixo)
      }
      
    }



    else






     //TERCEIRA COEXAO L6  //1para3baixo L6
   if(segundaLigacao3 == "pretoFase"&& id == "L6" && id2 == "MAIN10"&& filtro3=="1para3Preto"){
      
      let it = document.getElementById("L6");
      if(it != null && it != undefined) { 
      conexacaoL12Alto = "L6PA";
      it.id = "L69994"
      abrirPopup(conexacaoL12Alto)
   }
    } else 

    if(segundaLigacao3 == "verdeTerra"&& id == "L6"&& id2 == "MAIN11"&& filtro3=="1para3Verde"){
     
      let it = document.getElementById("L6");
      if(it != null && it != undefined) { 
         conexacaoL12Alto = "L6VA"; 
      it.id = "L69995"
      abrirPopup(conexacaoL12Alto)
    }
    }else

    if(segundaLigacao3 == "brancoRetorno"&& id == "L6"&& id2 == "MAIN12"&& filtro3=="1para3Branco"){

      let it = document.getElementById("L6");
      if(it != null && it != undefined) { 
         conexacaoL12Alto = "L6BA";  
      it.id = "L69996"
      abrirPopup(conexacaoL12Alto)
      }
      
    } else
    if(segundaLigacao3 == "azulNeltro"&& id == "L6"&& id2 == "MAIN13"&& filtro3=="1para3AzulNeltro"){

      let it = document.getElementById("L6");
      if(it != null && it != undefined) {  
         conexacaoL12Alto = "L6AA";
      it.id = "L69997"
      abrirPopup(conexacaoL12Alto)
      }
      
    }else

    if(segundaLigacao3 == "marromRetorno"&& id == "L6"&& id2 == "MAIN14"&& filtro3=="1para3Marrom"){

      let it = document.getElementById("L6");
      if(it != null && it != undefined) { 
         conexacaoL12Alto = "L6MA"; 
      it.id = "L69998"
      abrirPopup(conexacaoL12Alto)
      }
      
    }else



    //TERCEIRA COEXAO L6  //2para4baixo L6 
   if(segundaLigacao3 == "pretoFase"&& id == "L6" && id2 == "MAIN15"&& filtro3=="2para4Preto"){
      
      let it = document.getElementById("L6");
      if(it != null && it != undefined) { 
      conexacaoL12Baixo = "L6PB";
      it.id = "L69999"
      abrirPopup(conexacaoL12Baixo)
   }
    } else 

    if(segundaLigacao3 == "verdeTerra"&& id == "L6"&& id2 == "MAIN16"&& filtro3=="2para4Verde"){
     
      let it = document.getElementById("L6");
      if(it != null && it != undefined) { 
         conexacaoL12Baixo = "L1VB"; 
      it.id = "L699991"
      abrirPopup(conexacaoL12Baixo)
    }
    }else

    if(segundaLigacao3 == "brancoRetorno"&& id == "L6"&& id2 == "MAIN17"&& filtro3=="2para4Branco"){

      let it = document.getElementById("L6");
      if(it != null && it != undefined) { 
         conexacaoL12Baixo = "L6BB";  
      it.id = "L699992"
      abrirPopup(conexacaoL12Baixo)
      }
      
    } else
    if(segundaLigacao3 == "azulNeltro"&& id == "L6"&& id2 == "MAIN18"&& filtro3=="2para4AzulNeltro"){

      let it = document.getElementById("L6");
      if(it != null && it != undefined) {  
         conexacaoL12Baixo = "L6AB";
      it.id = "L699993"
      abrirPopup(conexacaoL12Baixo)
      }
      
    }else

    if(segundaLigacao3 == "marromRetorno"&& id == "L6"&& id2 == "MAIN19"&& filtro3=="2para4Marrom"){

      let it = document.getElementById("L6");
      if(it != null && it != undefined) { 
         conexacaoL12Baixo = "L6MB"; 
      it.id = "L699994"
      abrirPopup(conexacaoL12Baixo)
      }
      
    }else



//TERCEIRO FIO L6 //5para6baixo L6 
    if(segundaLigacao3 == "pretoFase"&& id == "L6" && id2 == "MAIN30"&& filtro3=="5para6Preto"){
      
      let it = document.getElementById("L6");
      if(it != null && it != undefined) {  
      conexacaoL12BaixoBaixo = "L6PBB";
      it.id = "L699995"
      abrirPopup(conexacaoL12BaixoBaixo)
    }
    } else 

    if(segundaLigacao3 == "verdeTerra"&& id == "L6"&& id2 == "MAIN31"&& filtro3=="5para6Verde"){
     
      let it = document.getElementById("L6");
      if(it != null && it != undefined) {  
         conexacaoL12BaixoBaixo = "L2VBB";
      it.id = "L699996"
      abrirPopup(conexacaoL12BaixoBaixo)
      }
    } else

    if(segundaLigacao3 == "brancoRetorno"&& id == "L6"&& id2 == "MAIN32"&& filtro3=="5para6Branco"){

      let it = document.getElementById("L6");
      if(it != null && it != undefined) {  
         conexacaoL12BaixoBaixo = "L2BBB";
      it.id = "L699997"
      abrirPopup(conexacaoL12BaixoBaixo)
      }
    } else
    if(segundaLigacao3 == "azulNeltro"&& id == "L6"&& id2 == "MAIN33"&& filtro3=="5para6AzulNeltro"){

      let it = document.getElementById("L6");
    if(it != null && it != undefined) { 
      conexacaoL12BaixoBaixo = "L2ABB"; 
      it.id = "L699998"
      abrirPopup(conexacaoL12BaixoBaixo)
    }
    }else

    if(segundaLigacao3 == "marromRetorno"&& id == "L6"&& id2 == "MAIN34"&& filtro3=="5para6Marrom"){

      let it = document.getElementById("L6");
      if(it != null && it != undefined) {  
          conexacaoL12BaixoBaixo = "L2MBB";
      it.id = "L699999"
      abrirPopup(conexacaoL12BaixoBaixo)
      }
      
    }




    //if((lp.id == "L11" &&id == "L1") && (lp.id == "L16"&& lp.id == "L16")){  
   // abrirPopup()
   // }

}


function fioHover(){
let fio1 = this.document.getElementById("fio1");
let fio2 = this.document.getElementById("fio2");
let fio3 = this.document.getElementById("fio3");
let fio4 = this.document.getElementById("fio4");
let fio5 = this.document.getElementById("fio5");







 fio1.addEventListener('mouseover',function() {
  let fio = "PRETO"
  
  abrirPopup2(fio)
  
 })

 fio2.addEventListener('mouseover',function() {
  let fio = "VERDE"
  
  abrirPopup2(fio)
  
 })

 fio3.addEventListener('mouseover',function() {
  let fio = "BRANCO"
  
  abrirPopup2(fio)
  
 })

 fio4.addEventListener('mouseover',function() {
  let fio = "AZUL"
  
  abrirPopup2(fio)
  
 })

 fio5.addEventListener('mouseover',function() {
  let fio = "MARROM"
  
  abrirPopup2(fio)
  
 })


}

//chamando a funcao
fioConectado();//=========PRIMEIRO FIO========
fioConectadoParte1();//=========PRIMEIRO FIO========
fioConectadoParte2();//=========PRIMEIRO FIO========
fioConectadoParte3();//=========PRIMEIRO FIO========
mostrar()
fioHover()

fioConectado2();// ===========SEGUNDO FIO==========
fioConectadoParte12()//===========SEGUNDO FIO==========
fioConectadoParte22()//===========SEGUNDO FIO==========
fioConectadoParte33()//===========SEGUNDO FIO==========


setInterval(fioConectado, 3000);//=========PRIMEIRO FIO========
setInterval(fioConectadoParte1, 3000);//=========PRIMEIRO FIO========
setInterval(fioConectadoParte2, 3000);//=========PRIMEIRO FIO========
setInterval(fioConectadoParte3, 3000);//=========PRIMEIRO FIO========




setInterval(fioConectado2, 3000);// ===========SEGUNDO FIO==========
setInterval(fioConectadoParte12, 3000);// ===========SEGUNDO FIO==========
setInterval(fioConectadoParte22, 3000);// ===========SEGUNDO FIO==========
setInterval(fioConectadoParte33, 3000);// ===========SEGUNDO FIO==========




fioConectado3();// ===========TERCEIRO FIO==========
fioConectadoParte123()// ===========TERCEIRO FIO==========
fioConectadoParte222()// ===========TERCEIRO FIO==========
fioConectadoParte333()// ===========TERCEIRO FIO==========

setInterval(fioConectado3, 3000);// ===========TERCEIRO FIO==========
setInterval(fioConectadoParte123, 3000);// ===========TERCEIRO FIO==========
setInterval(fioConectadoParte222, 3000);// ===========TERCEIRO FIO==========
setInterval(fioConectadoParte333, 3000);// ===========TERCEIRO FIO==========



setInterval(mostrar, 3000);
setInterval(fioHover, 1000);
setInterval(resetButtom2,4000)