
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
let lp10 = this.document.getElementById("L191");

//terceiro fio L1
let lp11 = this.document.getElementById("L192");
let lp12 = this.document.getElementById("L193");
let lp13 = this.document.getElementById("L194");
let lp14 = this.document.getElementById("L195");
let lp15 = this.document.getElementById("L196");


//FIO 2
 // 1 para 3 L1
let lp16 = this.document.getElementById("L197");
let lp17 = this.document.getElementById("L198");
let lp18 = this.document.getElementById("L199");
let lp19 = this.document.getElementById("L1991");
let lp20 = this.document.getElementById("L1992");

 // 2 para 4 L1
let lp21 = this.document.getElementById("L1993");
let lp22 = this.document.getElementById("L1994");
let lp23 = this.document.getElementById("L1995");
let lp24 = this.document.getElementById("L1996");
let lp25 = this.document.getElementById("L1997");

 // 5 para 6 L1
let lp26 = this.document.getElementById("L1998");
let lp27 = this.document.getElementById("L1999");
let lp28 = this.document.getElementById("L19991");
let lp29 = this.document.getElementById("L19992");
let lp30 = this.document.getElementById("L19993");


//FIO 3
 // 1 para 3 L1
let lp31 = this.document.getElementById("L19994");
let lp32 = this.document.getElementById("L19995");
let lp33 = this.document.getElementById("L19996");
let lp34 = this.document.getElementById("L19997");
let lp35 = this.document.getElementById("L19998");

 // 2 para 4 L1
let lp36 = this.document.getElementById("L19999");
let lp37 = this.document.getElementById("L199991");
let lp38 = this.document.getElementById("L199992");
let lp39 = this.document.getElementById("L199993");
let lp40 = this.document.getElementById("L199994");

 // 5 para 6 L1
let lp41 = this.document.getElementById("L199995");
let lp42 = this.document.getElementById("L199996");
let lp43 = this.document.getElementById("L199997");
let lp44 = this.document.getElementById("L199998");
let lp45 = this.document.getElementById("L199999");



// 1para3 alta
if(lp != null || lp != undefined) {   
   console.log("confirmado",lp)
      lp.id = "L1" 
}

if(lp2 != null || lp2 != undefined) {   
   console.log("confirmado",lp2)
   lp2.id = "L1" 
}

if(lp3 != null || lp3 != undefined) {   
   console.log("confirmado",lp3)
   lp3.id = "L1" 
}

if(lp4 != null || lp4 != undefined) {   
   console.log("confirmado",lp4)
   lp4.id = "L1" 
}

if(lp5 != null || lp5 != undefined) {   
   console.log("confirmado",lp5)
   lp5.id = "L1" 
}




//2para4 baixa
if(lp6 != null || lp6 != undefined) {   
   console.log("confirmado",lp6)
   lp6.id = "L1" 
}

if(lp7 != null || lp7 != undefined) {   
   console.log("confirmado",lp7)
lp7.id = "L1" 
}

if(lp8 != null || lp8 != undefined) {   
   console.log("confirmado",lp8)
lp8.id = "L1" 
}

if(lp9 != null || lp9 != undefined) {   
   console.log("confirmado",lp9)
lp9.id = "L1" 
}

if(lp10 != null || lp10 != undefined) {   
   console.log("confirmado",lp10)
lp10.id = "L1" 
}


// 5para6 
if(lp11 != null || lp11 != undefined) {   
   console.log("confirmado",lp11)
      lp11.id = "L1" 
}

if(lp12 != null || lp12 != undefined) {   
   console.log("confirmado",lp12)
   lp12.id = "L1" 
}

if(lp13 != null || lp13 != undefined) {   
   console.log("confirmado",lp13)
   lp13.id = "L1" 
}

if(lp14 != null || lp14 != undefined) {   
   console.log("confirmado",lp14)
   lp14.id = "L1" 
}

if(lp15 != null || lp15 != undefined) {   
   console.log("confirmado",lp15)
   lp15.id = "L1" 
}


// FIO 2 
// 1para3 alta
if(lp16 != null || lp16 != undefined) {   
   console.log("confirmado",lp16)
      lp16.id = "L1" 
}

if(lp17 != null || lp17 != undefined) {   
   console.log("confirmado",lp17)
   lp17.id = "L1" 
}

if(lp18 != null || lp18 != undefined) {   
   console.log("confirmado",lp18)
   lp18.id = "L1" 
}

if(lp19 != null || lp19 != undefined) {   
   console.log("confirmado",lp19)
   lp19.id = "L1" 
}

if(lp20 != null || lp20 != undefined) {   
   console.log("confirmado",lp20)
   lp20.id = "L1" 
}


// FIO 2
//2para4 baixa
if(lp21 != null || lp21 != undefined) {   
   console.log("confirmado",lp21)
   lp21.id = "L1" 
}

if(lp22 != null || lp22 != undefined) {   
   console.log("confirmado",lp22)
lp22.id = "L1" 
}

if(lp23 != null || lp23 != undefined) {   
   console.log("confirmado",lp23)
lp23.id = "L1" 
}

if(lp24 != null || lp24 != undefined) {   
   console.log("confirmado",lp24)
lp24.id = "L1" 
}

if(lp25 != null || lp25 != undefined) {   
   console.log("confirmado",lp25)
lp25.id = "L1" 
}


//FIO 2
// 5para6 
if(lp26 != null || lp26 != undefined) {   
   console.log("confirmado",lp26)
      lp26.id = "L1" 
}

if(lp27 != null || lp27 != undefined) {   
   console.log("confirmado",lp27)
   lp27.id = "L1" 
}

if(lp28 != null || lp28 != undefined) {   
   console.log("confirmado",lp28)
   lp28.id = "L1" 
}

if(lp29 != null || lp29 != undefined) {   
   console.log("confirmado",lp29)
   lp29.id = "L1" 
}

if(lp30 != null || lp30 != undefined) {   
   console.log("confirmado",lp30)
   lp30.id = "L1" 
}



// FIO 3
// 1para3 alta
if(lp31 != null || lp31 != undefined) {   
   console.log("confirmado",lp31)
      lp31.id = "L1" 
}

if(lp32 != null || lp32 != undefined) {   
   console.log("confirmado",lp32)
   lp32.id = "L1" 
}

if(lp33 != null || lp33 != undefined) {   
   console.log("confirmado",lp33)
   lp33.id = "L1" 
}

if(lp34 != null || lp34 != undefined) {   
   console.log("confirmado",lp34)
   lp34.id = "L1" 
}

if(lp35 != null || lp35 != undefined) {   
   console.log("confirmado",lp35)
      lp35.id = "L1" 
}


//2para4 baixa
if(lp36 != null || lp36 != undefined) {   
   console.log("confirmado",lp36)
   lp36.id = "L1" 
}

if(lp37 != null || lp37 != undefined) {   
   console.log("confirmado",lp37)
lp37.id = "L1" 
}

if(lp38 != null || lp38 != undefined) {   
   console.log("confirmado",lp38)
lp38.id = "L1" 
}

if(lp39 != null || lp39 != undefined) {   
   console.log("confirmado",lp39)
lp39.id = "L1" 
}

if(lp40 != null || lp40 != undefined) {   
   console.log("confirmado",lp40)
lp40.id = "L1" 
}


// 1para3 alta
if(lp41 != null || lp41 != undefined) {   
   console.log("confirmado",lp41)
      lp41.id = "L1" 
}

if(lp42 != null || lp42 != undefined) {   
   console.log("confirmado",lp42)
   lp42.id = "L1" 
}

if(lp43 != null || lp43 != undefined) {   
   console.log("confirmado",lp43)
   lp43.id = "L1" 
}

if(lp44 != null || lp44 != undefined) {   
   console.log("confirmado",lp44)
   lp44.id = "L1" 
}

if(lp45 != null || lp45 != undefined) {   
   console.log("confirmado",lp45)
      lp45.id = "L1" 
}


// L2 1 para 3
let lp46 = this.document.getElementById("L21");
let lp47 = this.document.getElementById("L22");
let lp48 = this.document.getElementById("L23");
let lp49 = this.document.getElementById("L24");
let lp50 = this.document.getElementById("L25");

//L2 2para4 baixa
let lp51 = this.document.getElementById("L26");
let lp52 = this.document.getElementById("L27");
let lp53 = this.document.getElementById("L28");
let lp54 = this.document.getElementById("L29");
let lp55 = this.document.getElementById("L291");

//terceiro fio L2
let lp56 = this.document.getElementById("L292");
let lp57 = this.document.getElementById("L293");
let lp58 = this.document.getElementById("L294");
let lp59 = this.document.getElementById("L295");
let lp60 = this.document.getElementById("L296");


//FIO 2
// 1 para 3  L2
let lp61 = this.document.getElementById("L297");
let lp62 = this.document.getElementById("L298");
let lp63 = this.document.getElementById("L299");
let lp64 = this.document.getElementById("L2991");
let lp65 = this.document.getElementById("L2992");

 // 2 para 4 L2
let lp66 = this.document.getElementById("L2993");
let lp67 = this.document.getElementById("L2994");
let lp68 = this.document.getElementById("L2995");
let lp69 = this.document.getElementById("L2996");
let lp70 = this.document.getElementById("L2997");

 // 5 para 6 L2
let lp71 = this.document.getElementById("L2998");
let lp72 = this.document.getElementById("L2999");
let lp73 = this.document.getElementById("L29991");
let lp74 = this.document.getElementById("L29992");
let lp75 = this.document.getElementById("L29993");


//FIO 3
// 1 para 3  L2
let lp76 = this.document.getElementById("L29994");
let lp77 = this.document.getElementById("L29995");
let lp78 = this.document.getElementById("L29996");
let lp79 = this.document.getElementById("L29997");
let lp80 = this.document.getElementById("L29998");

 // 2 para 4 L2
let lp81 = this.document.getElementById("L29999");
let lp82 = this.document.getElementById("L299991");
let lp83 = this.document.getElementById("L299992");
let lp84 = this.document.getElementById("L299993");
let lp85 = this.document.getElementById("L299994");

 // 5 para 6 L2
let lp86 = this.document.getElementById("L299995");
let lp87 = this.document.getElementById("L299996");
let lp88 = this.document.getElementById("L299997");
let lp89 = this.document.getElementById("L299998");
let lp90 = this.document.getElementById("L299999");


// resetando lamp



// 1para3 alta
console.log("confirmado",lp46)
if(lp46 != null || lp46 != undefined) {   
   console.log("confirmado",lp46)
      lp46.id = "L2" 
}
console.log("confirmado",lp47)
if(lp47 != null || lp47 != undefined) {   
   console.log("confirmado",lp47)
   lp47.id = "L2" 
}
console.log("confirmado",lp48)
if(lp48 != null || lp48 != undefined) {   
   console.log("confirmado",lp48)
   lp48.id = "L2" 
}
console.log("confirmado",lp49)
if(lp49 != null || lp49 != undefined) {   
   console.log("confirmado",lp49)
   lp49.id = "L2" 
}
console.log("confirmado",lp50)
if(lp50 != null || lp50 != undefined) {   
   console.log("confirmado",lp50)
   lp50.id = "L2" 
}




//2para4 baixa
if(lp51 != null || lp51 != undefined) {   
   console.log("confirmado",lp51)
   lp51.id = "L2" 
}

if(lp52 != null || lp52 != undefined) {   
   console.log("confirmado",lp52)
lp52.id = "L2" 
}

if(lp53 != null || lp53 != undefined) {   
   console.log("confirmado",lp53)
lp53.id = "L2" 
}

if(lp54 != null || lp54 != undefined) {   
   console.log("confirmado",lp54)
lp54.id = "L2" 
}

if(lp55 != null || lp55 != undefined) {   
   console.log("confirmado",lp55)
lp55.id = "L2" 
}


// 5para6 
if(lp56 != null || lp56 != undefined) {   
   console.log("confirmado",lp56)
      lp56.id = "L2" 
}

if(lp57 != null || lp57 != undefined) {   
   console.log("confirmado",lp57)
   lp57.id = "L2" 
}

if(lp58 != null || lp58 != undefined) {   
   console.log("confirmado",lp58)
   lp58.id = "L2" 
}

if(lp59 != null || lp59 != undefined) {   
   console.log("confirmado",lp59)
   lp59.id = "L2" 
}

if(lp60 != null || lp60 != undefined) {   
   console.log("confirmado",lp60)
   lp60.id = "L2" 
}






//SEGUNDO FIO
// 1para3 alta
console.log("confirmado",lp61)
if(lp61 != null || lp61 != undefined) {   
   console.log("confirmado",lp61)
      lp61.id = "L2" 
}
console.log("confirmado",lp62)
if(lp62 != null || lp62 != undefined) {   
   console.log("confirmado",lp62)
   lp62.id = "L2" 
}
console.log("confirmado",lp63)
if(lp63 != null || lp63 != undefined) {   
   console.log("confirmado",lp63)
   lp63.id = "L2" 
}
console.log("confirmado",lp64)
if(lp64 != null || lp64 != undefined) {   
   console.log("confirmado",lp64)
   lp64.id = "L2" 
}
console.log("confirmado",lp65)
if(lp65 != null || lp65 != undefined) {   
   console.log("confirmado",lp65)
   lp65.id = "L2" 
}




//2para4 baixa
if(lp66 != null || lp66 != undefined) {   
   console.log("confirmado",lp66)
   lp66.id = "L2" 
}

if(lp67 != null || lp67 != undefined) {   
   console.log("confirmado",lp67)
lp67.id = "L2" 
}

if(lp68 != null || lp68 != undefined) {   
   console.log("confirmado",lp68)
lp68.id = "L2" 
}

if(lp69 != null || lp69 != undefined) {   
   console.log("confirmado",lp69)
lp69.id = "L2" 
}

if(lp70 != null || lp70 != undefined) {   
   console.log("confirmado",lp70)
lp70.id = "L2" 
}


// 5para6 
if(lp71 != null || lp71 != undefined) {   
   console.log("confirmado",lp71)
      lp71.id = "L2" 
}

if(lp72 != null || lp72 != undefined) {   
   console.log("confirmado",lp72)
   lp72.id = "L2" 
}

if(lp73 != null || lp73 != undefined) {   
   console.log("confirmado",lp73)
   lp73.id = "L2" 
}

if(lp74 != null || lp74 != undefined) {   
   console.log("confirmado",lp74)
   lp74.id = "L2" 
}

if(lp75 != null || lp75 != undefined) {   
   console.log("confirmado",lp75)
   lp75.id = "L2" 
}





//TERCEIRO FIO
// 1para3 alta
console.log("confirmado",lp76)
if(lp76 != null || lp76 != undefined) {   
   console.log("confirmado",lp76)
      lp76.id = "L2" 
}
console.log("confirmado",lp77)
if(lp77 != null || lp77 != undefined) {   
   console.log("confirmado",lp77)
   lp77.id = "L2" 
}
console.log("confirmado",lp78)
if(lp78 != null || lp78 != undefined) {   
   console.log("confirmado",lp78)
   lp78.id = "L2" 
}
console.log("confirmado",lp79)
if(lp79 != null || lp79 != undefined) {   
   console.log("confirmado",lp79)
   lp79.id = "L2" 
}
console.log("confirmado",lp80)
if(lp80 != null || lp80 != undefined) {   
   console.log("confirmado",lp80)
   lp80.id = "L2" 
}




//2para4 baixa
if(lp81 != null || lp81 != undefined) {   
   console.log("confirmado",lp81)
   lp81.id = "L2" 
}

if(lp82 != null || lp82 != undefined) {   
   console.log("confirmado",lp82)
lp82.id = "L2" 
}

if(lp83 != null || lp83 != undefined) {   
   console.log("confirmado",lp83)
lp83.id = "L2" 
}

if(lp84 != null || lp84 != undefined) {   
   console.log("confirmado",lp84)
lp84.id = "L2" 
}

if(lp85 != null || lp85 != undefined) {   
   console.log("confirmado",lp85)
lp85.id = "L2" 
}


// 5para6 
if(lp86 != null || lp86 != undefined) {   
   console.log("confirmado",lp86)
      lp86.id = "L2" 
}

if(lp87 != null || lp87 != undefined) {   
   console.log("confirmado",lp87)
   lp87.id = "L2" 
}

if(lp88 != null || lp88 != undefined) {   
   console.log("confirmado",lp88)
   lp88.id = "L2" 
}

if(lp89 != null || lp89 != undefined) {   
   console.log("confirmado",lp89)
   lp89.id = "L2" 
}

if(lp90 != null || lp90 != undefined) {   
   console.log("confirmado",lp90)
   lp90.id = "L2" 
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




//FIO 2
 // 1 para 3 L5
let it16 = this.document.getElementById("L597");
let it17 = this.document.getElementById("L598");
let it18 = this.document.getElementById("L599");
let it19 = this.document.getElementById("L5991");
let it20 = this.document.getElementById("L5992");

 // 2 para 4 L5
let it21 = this.document.getElementById("L5993");
let it22 = this.document.getElementById("L5994");
let it23 = this.document.getElementById("L5995");
let it24 = this.document.getElementById("L5996");
let it25 = this.document.getElementById("L5997");

 // 5 para 6 L5
let it26 = this.document.getElementById("L5998");
let it27 = this.document.getElementById("L5999");
let it28 = this.document.getElementById("L59991");
let it29 = this.document.getElementById("L59992");
let it30 = this.document.getElementById("L59993");




//FIO 3
 // 1 para 3 L5
let it31 = this.document.getElementById("L59994");
let it32 = this.document.getElementById("L59995");
let it33 = this.document.getElementById("L59996");
let it34 = this.document.getElementById("L59997");
let it35 = this.document.getElementById("L59998");

 // 2 para 4 L5
let it36 = this.document.getElementById("L59999");
let it37 = this.document.getElementById("L599991");
let it38 = this.document.getElementById("L599992");
let it39 = this.document.getElementById("L599993");
let it40 = this.document.getElementById("L599994");

 // 5 para 6 L5
let it41 = this.document.getElementById("L599995");
let it42 = this.document.getElementById("L599996");
let it43 = this.document.getElementById("L599997");
let it44 = this.document.getElementById("L599998");
let it45 = this.document.getElementById("L599999");




// FIO 1
// 1para3 alta
if(it != null || it != undefined) {   
   console.log("confirmado",it)
      it.id = "L5" 
}

if(it2 != null || it2 != undefined) {   
   console.log("confirmado",it2)
   it2.id = "L5" 
}

if(it3 != null || it3 != undefined) {   
   console.log("confirmado",it3)
   it3.id = "L5" 
}

if(it4 != null || it4 != undefined) {   
   console.log("confirmado",it4)
   it4.id = "L5" 
}

if(it5 != null || it5 != undefined) {   
   console.log("confirmado",it5)
   it5.id = "L5" 
}




//2para4 baixa
if(it6 != null || it6 != undefined) {   
   console.log("confirmado",it6)
   it6.id = "L5" 
}

if(it7 != null || it7 != undefined) {   
   console.log("confirmado",it7)
it7.id = "L5" 
}

if(it8 != null || it8 != undefined) {   
   console.log("confirmado",it8)
it8.id = "L5" 
}

if(it9 != null || it9 != undefined) {   
   console.log("confirmado",it9)
it9.id = "L5" 
}

if(it10 != null || it10 != undefined) {   
   console.log("confirmado",it10)
it10.id = "L5" 
}


// 5para6 
if(it11 != null || it11 != undefined) {   
   console.log("confirmado",it11)
      it11.id = "L5" 
}

if(it12 != null || it12 != undefined) {   
   console.log("confirmado",it12)
   it12.id = "L5" 
}

if(it13 != null || it13 != undefined) {   
   console.log("confirmado",it13)
   it13.id = "L5" 
}

if(it14 != null || it14 != undefined) {   
   console.log("confirmado",it14)
   it14.id = "L5" 
}

if(it15 != null || it15 != undefined) {   
   console.log("confirmado",it15)
   it15.id = "L5" 
}


// FIO 2 
// 1para3 alta
if(it16 != null || it16 != undefined) {   
   console.log("confirmado",it16)
      it16.id = "L5" 
}

if(it17 != null || it17 != undefined) {   
   console.log("confirmado",it17)
   it17.id = "L5" 
}

if(it18 != null || it18 != undefined) {   
   console.log("confirmado",it18)
   it18.id = "L5" 
}

if(it19 != null || it19 != undefined) {   
   console.log("confirmado",it19)
   it19.id = "L5" 
}

if(it20 != null || it20 != undefined) {   
   console.log("confirmado",it20)
   it20.id = "L5" 
}


// FIO 2
//2para4 baixa
if(it21 != null || it21 != undefined) {   
   console.log("confirmado",it21)
   it21.id = "L5" 
}

if(it22 != null || it22 != undefined) {   
   console.log("confirmado",it22)
it22.id = "L5" 
}

if(it23 != null || it23 != undefined) {   
   console.log("confirmado",it23)
it23.id = "L5" 
}

if(it24 != null || it24 != undefined) {   
   console.log("confirmado",it24)
it24.id = "L5" 
}

if(it25 != null || it25 != undefined) {   
   console.log("confirmado",it25)
it25.id = "L5" 
}


//FIO 2
// 5para6 
if(it26 != null || it26 != undefined) {   
   console.log("confirmado",it26)
      it26.id = "L5" 
}

if(it27 != null || it27 != undefined) {   
   console.log("confirmado",it27)
   it27.id = "L5" 
}

if(it28 != null || it28 != undefined) {   
   console.log("confirmado",it28)
   it28.id = "L5" 
}

if(it29 != null || it29 != undefined) {   
   console.log("confirmado",it29)
   it29.id = "L5" 
}

if(it30 != null || it30 != undefined) {   
   console.log("confirmado",it30)
   it30.id = "L5" 
}



// FIO 3
// 1para3 alta
if(it31 != null || it31 != undefined) {   
   console.log("confirmado",it31)
      it31.id = "L5" 
}

if(it32 != null || it32 != undefined) {   
   console.log("confirmado",it32)
   it32.id = "L5" 
}

if(it33 != null || it33 != undefined) {   
   console.log("confirmado",it33)
   it33.id = "L5" 
}

if(it34 != null || it34 != undefined) {   
   console.log("confirmado",it34)
   it34.id = "L5" 
}

if(it35 != null || it35 != undefined) {   
   console.log("confirmado",it35)
      it35.id = "L5" 
}


//2para4 baixa
if(it36 != null || it36 != undefined) {   
   console.log("confirmado",it36)
   it36.id = "L5" 
}

if(it37 != null || it37 != undefined) {   
   console.log("confirmado",it37)
it37.id = "L5" 
}

if(it38 != null || it38 != undefined) {   
   console.log("confirmado",it38)
it38.id = "L5" 
}

if(it39 != null || it39 != undefined) {   
   console.log("confirmado",it39)
it39.id = "L5" 
}

if(it40 != null || it40 != undefined) {   
   console.log("confirmado",it40)
it40.id = "L5" 
}


// 1para3 alta
if(it41 != null || it41 != undefined) {   
   console.log("confirmado",it41)
      it41.id = "L5" 
}

if(it42 != null || it42 != undefined) {   
   console.log("confirmado",it42)
   it42.id = "L5" 
}

if(it43 != null || it43 != undefined) {   
   console.log("confirmado",it43)
   it43.id = "L5" 
}

if(it44 != null || it44 != undefined) {   
   console.log("confirmado",it44)
   it44.id = "L5" 
}

if(it45 != null || it45 != undefined) {   
   console.log("confirmado",it45)
      it45.id = "L5" 
}


// 1 para 3  L6
let it46 = this.document.getElementById("L61");
let it47 = this.document.getElementById("L62");
let it48 = this.document.getElementById("L63");
let it49 = this.document.getElementById("L64");
let it50 = this.document.getElementById("L65");

 // 2 para 4 L6
let it51 = this.document.getElementById("L66");
let it52 = this.document.getElementById("L67");
let it53 = this.document.getElementById("L68");
let it54 = this.document.getElementById("L69");
let it55 = this.document.getElementById("L691");

 // 5 para 6 L6
let it56 = this.document.getElementById("L692");
let it57 = this.document.getElementById("L693");
let it58 = this.document.getElementById("L694");
let it59 = this.document.getElementById("L695");
let it60 = this.document.getElementById("L696");


//FIO 2
// 1 para 3  L6
let it61 = this.document.getElementById("L697");
let it62 = this.document.getElementById("L698");
let it63 = this.document.getElementById("L699");
let it64 = this.document.getElementById("L6991");
let it65 = this.document.getElementById("L6992");

 // 2 para 4 L6
let it66 = this.document.getElementById("L6993");
let it67 = this.document.getElementById("L6994");
let it68 = this.document.getElementById("L6995");
let it69 = this.document.getElementById("L6996");
let it70 = this.document.getElementById("L6997");

 // 5 para 6 L6
let it71 = this.document.getElementById("L6998");
let it72 = this.document.getElementById("L6999");
let it73 = this.document.getElementById("L69991");
let it74 = this.document.getElementById("L69992");
let it75 = this.document.getElementById("L69993");


//FIO 3
// 1 para 3  L6
let it76 = this.document.getElementById("L69994");
let it77 = this.document.getElementById("L69995");
let it78 = this.document.getElementById("L69996");
let it79 = this.document.getElementById("L69997");
let it80 = this.document.getElementById("L69998");

 // 2 para 4 L6
let it81 = this.document.getElementById("L69999");
let it82 = this.document.getElementById("L699991");
let it83 = this.document.getElementById("L699992");
let it84 = this.document.getElementById("L699993");
let it85 = this.document.getElementById("L699994");

 // 5 para 6 L6
let it86 = this.document.getElementById("L699995");
let it87 = this.document.getElementById("L699996");
let it88 = this.document.getElementById("L699997");
let it89 = this.document.getElementById("L699998");
let it90 = this.document.getElementById("L699999");


// 1para3 alta
console.log("confirmado",it46)
if(it46 != null || it46 != undefined) {   
   console.log("confirmado",it46)
      it46.id = "L6" 
}
console.log("confirmado",it47)
if(it47 != null || it47 != undefined) {   
   console.log("confirmado",it47)
   it47.id = "L6" 
}
console.log("confirmado",it48)
if(it48 != null || it48 != undefined) {   
   console.log("confirmado",it48)
   it48.id = "L6" 
}
console.log("confirmado",it49)
if(it49 != null || it49 != undefined) {   
   console.log("confirmado",it49)
   it49.id = "L6" 
}
console.log("confirmado",it50)
if(it50 != null || it50 != undefined) {   
   console.log("confirmado",it50)
   it50.id = "L6" 
}




//2para4 baixa
if(it51 != null || it51 != undefined) {   
   console.log("confirmado",it51)
   it51.id = "L6" 
}

if(it52 != null || it52 != undefined) {   
   console.log("confirmado",it52)
it52.id = "L6" 
}

if(it53 != null || it53 != undefined) {   
   console.log("confirmado",it53)
it53.id = "L6" 
}

if(it54 != null || it54 != undefined) {   
   console.log("confirmado",it54)
it54.id = "L6" 
}

if(it55 != null || it55 != undefined) {   
   console.log("confirmado",it55)
it55.id = "L6" 
}


// 5para6 
if(it56 != null || it56 != undefined) {   
   console.log("confirmado",it56)
      it56.id = "L6" 
}

if(it57 != null || it57 != undefined) {   
   console.log("confirmado",it57)
   it57.id = "L6" 
}

if(it58 != null || it58 != undefined) {   
   console.log("confirmado",it58)
   it58.id = "L6" 
}

if(it59 != null || it59 != undefined) {   
   console.log("confirmado",it59)
   it59.id = "L6" 
}

if(it60 != null || it60 != undefined) {   
   console.log("confirmado",it60)
   it60.id = "L6" 
}






//SEGUNDO FIO
// 1para3 alta
console.log("confirmado",it61)
if(it61 != null || it61 != undefined) {   
   console.log("confirmado",it61)
      it61.id = "L6" 
}
console.log("confirmado",it62)
if(it62 != null || it62 != undefined) {   
   console.log("confirmado",it62)
   it62.id = "L6" 
}
console.log("confirmado",it63)
if(it63 != null || it63 != undefined) {   
   console.log("confirmado",it63)
   it63.id = "L6" 
}
console.log("confirmado",it64)
if(it64 != null || it64 != undefined) {   
   console.log("confirmado",it64)
   it64.id = "L6" 
}
console.log("confirmado",it65)
if(it65 != null || it65 != undefined) {   
   console.log("confirmado",it65)
   it65.id = "L6" 
}




//2para4 baixa
if(it66 != null || it66 != undefined) {   
   console.log("confirmado",it66)
   it66.id = "L6" 
}

if(it67 != null || it67 != undefined) {   
   console.log("confirmado",it67)
it67.id = "L6" 
}

if(it68 != null || it68 != undefined) {   
   console.log("confirmado",it68)
it68.id = "L6" 
}

if(it69 != null || it69 != undefined) {   
   console.log("confirmado",it69)
it69.id = "L6" 
}

if(it70 != null || it70 != undefined) {   
   console.log("confirmado",it70)
it70.id = "L6" 
}


// 5para6 
if(it71 != null || it71 != undefined) {   
   console.log("confirmado",it71)
      it71.id = "L6" 
}

if(it72 != null || it72 != undefined) {   
   console.log("confirmado",it72)
   it72.id = "L6" 
}

if(it73 != null || it73 != undefined) {   
   console.log("confirmado",it73)
   it73.id = "L6" 
}

if(it74 != null || it74 != undefined) {   
   console.log("confirmado",it74)
   it74.id = "L6" 
}

if(it75 != null || it75 != undefined) {   
   console.log("confirmado",it75)
   it75.id = "L6" 
}





//TERCEIRO FIO
// 1para3 alta
console.log("confirmado",it76)
if(it76 != null || it76 != undefined) {   
   console.log("confirmado",it76)
      it76.id = "L6" 
}
console.log("confirmado",it77)
if(it77 != null || it77 != undefined) {   
   console.log("confirmado",it77)
   it77.id = "L6" 
}
console.log("confirmado",it78)
if(it78 != null || it78 != undefined) {   
   console.log("confirmado",it78)
   it78.id = "L6" 
}
console.log("confirmado",it79)
if(it79 != null || it79 != undefined) {   
   console.log("confirmado",it79)
   it79.id = "L6" 
}
console.log("confirmado",it80)
if(it80 != null || it80 != undefined) {   
   console.log("confirmado",it80)
   it80.id = "L6" 
}




//2para4 baixa
if(it81 != null || it81 != undefined) {   
   console.log("confirmado",it81)
   it81.id = "L6" 
}

if(it82 != null || it82 != undefined) {   
   console.log("confirmado",it82)
it82.id = "L6" 
}

if(it83 != null || it83 != undefined) {   
   console.log("confirmado",it83)
it83.id = "L6" 
}

if(it84 != null || it84 != undefined) {   
   console.log("confirmado",it84)
it84.id = "L6" 
}

if(it85 != null || it85 != undefined) {   
   console.log("confirmado",it85)
it85.id = "L6" 
}


// 5para6 
if(it86 != null || it86 != undefined) {   
   console.log("confirmado",it86)
      it86.id = "L6" 
}

if(it87 != null || it87 != undefined) {   
   console.log("confirmado",it87)
   it87.id = "L6" 
}

if(it88 != null || it88 != undefined) {   
   console.log("confirmado",it88)
   it88.id = "L6" 
}

if(it89 != null || it89 != undefined) {   
   console.log("confirmado",it89)
   it89.id = "L6" 
}

if(it90 != null || it90 != undefined) {   
   console.log("confirmado",it90)
   it90.id = "L6" 
}

// resetando Tomada

 // 1 para 3  L7
let td = this.document.getElementById("L71");
let td2 = this.document.getElementById("L72");
let td3 = this.document.getElementById("L73");
let td4 = this.document.getElementById("L74");
let td5 = this.document.getElementById("L75");

 // 2 para 4 L7
let td6 = this.document.getElementById("L76");
let td7 = this.document.getElementById("L77");
let td8 = this.document.getElementById("L78");
let td9 = this.document.getElementById("L79");
let td10 = this.document.getElementById("L791");

 // 5 para 6 L7
let td11 = this.document.getElementById("L792");
let td12 = this.document.getElementById("L793");
let td13 = this.document.getElementById("L794");
let td14 = this.document.getElementById("L795");
let td15 = this.document.getElementById("L796");


//FIO 2
// 1 para 3  L7
let td16 = this.document.getElementById("L797");
let td17 = this.document.getElementById("L798");
let td18 = this.document.getElementById("L799");
let td19 = this.document.getElementById("L7991");
let td20 = this.document.getElementById("L7992");

 // 2 para 4 L7
let td21 = this.document.getElementById("L7993");
let td22 = this.document.getElementById("L7994");
let td23 = this.document.getElementById("L7995");
let td24 = this.document.getElementById("L7996");
let td25 = this.document.getElementById("L7997");

 // 5 para 6 L7
let td26 = this.document.getElementById("L7998");
let td27 = this.document.getElementById("L7999");
let td28 = this.document.getElementById("L79991");
let td29 = this.document.getElementById("L79992");
let td30 = this.document.getElementById("L79993");


//FIO 3
// 1 para 3  L7
let td31 = this.document.getElementById("L79994");
let td32 = this.document.getElementById("L79995");
let td33 = this.document.getElementById("L79996");
let td34 = this.document.getElementById("L79997");
let td35 = this.document.getElementById("L79998");

 // 2 para 4 L6
let td36 = this.document.getElementById("L79999");
let td37 = this.document.getElementById("L799991");
let td38 = this.document.getElementById("L799992");
let td39 = this.document.getElementById("L799993");
let td40 = this.document.getElementById("L799994");

 // 5 para 6 L7
let td41 = this.document.getElementById("L799995");
let td42 = this.document.getElementById("L799996");
let td43 = this.document.getElementById("L799997");
let td44 = this.document.getElementById("L799998");
let td45 = this.document.getElementById("L799999");


// 1para3 alta
if(td != null || td != undefined) {   
   console.log("confirmado",td)
      td.id = "L7" 
}

if(td2 != null || td2 != undefined) {   
   console.log("confirmado",td2)
   td2.id = "L7" 
}

if(td3 != null || td3 != undefined) {   
   console.log("confirmado",td3)
   td3.id = "L7" 
}

if(td4 != null || td4 != undefined) {   
   console.log("confirmado",td4)
   td4.id = "L7" 
}

if(td5 != null || td5 != undefined) {   
   console.log("confirmado",td5)
   td5.id = "L7" 
}





//2para4 baixa
if(td6 != null || td6 != undefined) {   
   console.log("confirmado",td6)
   td6.id = "L7" 
}

if(td7 != null || td7 != undefined) {   
   console.log("confirmado",td7)
td7.id = "L7" 
}

if(td8 != null || td8 != undefined) {   
   console.log("confirmado",td8)
td8.id = "L7" 
}

if(td9 != null || td9 != undefined) {   
   console.log("confirmado",td9)
td9.id = "L7" 
}

if(td10 != null || td10 != undefined) {   
   console.log("confirmado",td10)
td10.id = "L7" 
}


// 5para6 
if(td11 != null || td11 != undefined) {   
   console.log("confirmado",td11)
      td11.id = "L7" 
}

if(td12 != null || td12 != undefined) {   
   console.log("confirmado",td12)
   td12.id = "L7" 
}

if(td13 != null || td13 != undefined) {   
   console.log("confirmado",td13)
   td13.id = "L7" 
}

if(td14 != null || td14 != undefined) {   
   console.log("confirmado",td14)
   td14.id = "L7" 
}

if(td15 != null || td15 != undefined) {   
   console.log("confirmado",td15)
   td15.id = "L7" 
}





// FIO 2 
// 1para3 alta
if(td16 != null || td16 != undefined) {   
   console.log("confirmado",td16)
      td16.id = "L7" 
}

if(td17 != null || td17 != undefined) {   
   console.log("confirmado",td17)
   td17.id = "L7" 
}

if(td18 != null || td18 != undefined) {   
   console.log("confirmado",td18)
   td18.id = "L7" 
}

if(td19 != null || td19 != undefined) {   
   console.log("confirmado",td19)
   td19.id = "L7" 
}

if(td20 != null || td20 != undefined) {   
   console.log("confirmado",td20)
   td20.id = "L7" 
}


// FIO 2
//2para4 baixa
if(td21 != null || td21 != undefined) {   
   console.log("confirmado",td21)
   td21.id = "L7" 
}

if(td22 != null || td22 != undefined) {   
   console.log("confirmado",td22)
td22.id = "L7" 
}

if(td23 != null || td23 != undefined) {   
   console.log("confirmado",td23)
td23.id = "L7" 
}

if(td24 != null || td24 != undefined) {   
   console.log("confirmado",td24)
td24.id = "L7" 
}

if(td25 != null || td25 != undefined) {   
   console.log("confirmado",td25)
td25.id = "L7" 
}


//FIO 2
// 5para6 
if(td26 != null || td26 != undefined) {   
   console.log("confirmado",td26)
      td26.id = "L7" 
}

if(td27 != null || td27 != undefined) {   
   console.log("confirmado",td27)
   td27.id = "L7" 
}

if(td28 != null || td28 != undefined) {   
   console.log("confirmado",td28)
   td28.id = "L7" 
}

if(td29 != null || td29 != undefined) {   
   console.log("confirmado",td29)
   td29.id = "L7" 
}

if(td30 != null || td30 != undefined) {   
   console.log("confirmado",td30)
   td30.id = "L7" 
}



// FIO 3
// 1para3 alta
if(td31 != null || td31 != undefined) {   
   console.log("confirmado",td31)
      td31.id = "L7" 
}

if(td32 != null || td32 != undefined) {   
   console.log("confirmado",td32)
   td32.id = "L7" 
}

if(td33 != null || td33 != undefined) {   
   console.log("confirmado",td33)
   td33.id = "L7" 
}

if(td34 != null || td34 != undefined) {   
   console.log("confirmado",td34)
   td34.id = "L7" 
}

if(td35 != null || td35 != undefined) {   
   console.log("confirmado",td35)
      td35.id = "L7" 
}


//2para4 baixa
if(td36 != null || td36 != undefined) {   
   console.log("confirmado",td36)
   td36.id = "L7" 
}

if(td37 != null || td37 != undefined) {   
   console.log("confirmado",td37)
td37.id = "L7" 
}

if(td38 != null || td38 != undefined) {   
   console.log("confirmado",td38)
td38.id = "L7" 
}

if(td39 != null || td39 != undefined) {   
   console.log("confirmado",td39)
td39.id = "L7" 
}

if(td40 != null || td40 != undefined) {   
   console.log("confirmado",td40)
td40.id = "L7" 
}


// 1para3 alta
if(td41 != null || td41 != undefined) {   
   console.log("confirmado",td41)
      td41.id = "L7" 
}

if(td42 != null || td42 != undefined) {   
   console.log("confirmado",td42)
   td42.id = "L7" 
}

if(td43 != null || td43 != undefined) {   
   console.log("confirmado",td43)
   td43.id = "L7" 
}

if(td44 != null || td44 != undefined) {   
   console.log("confirmado",td44)
   td44.id = "L7" 
}

if(td45 != null || td45 != undefined) {   
   console.log("confirmado",td45)
      td45.id = "L7" 
}




// resetando Tomada

 // 1 para 3  L8
let td91 = this.document.getElementById("L81");
let td92 = this.document.getElementById("L82");
let td93 = this.document.getElementById("L83");
let td94 = this.document.getElementById("L84");
let td95 = this.document.getElementById("L85");

 // 2 para 4 L8
let td96 = this.document.getElementById("L86");
let td97 = this.document.getElementById("L87");
let td98 = this.document.getElementById("L88");
let td99 = this.document.getElementById("L89");
let td100 = this.document.getElementById("L891");

 // 5 para 6 L8
let td101 = this.document.getElementById("L892");
let td102 = this.document.getElementById("L893");
let td103 = this.document.getElementById("L894");
let td104 = this.document.getElementById("L895");
let td105 = this.document.getElementById("L896");


//FIO 2
// 1 para 3  L8
let td106 = this.document.getElementById("L897");
let td107 = this.document.getElementById("L898");
let td108 = this.document.getElementById("L899");
let td109 = this.document.getElementById("L8991");
let td110 = this.document.getElementById("L8992");

 // 2 para 4 L8
let td111 = this.document.getElementById("L8993");
let td112 = this.document.getElementById("L8994");
let td113 = this.document.getElementById("L8995");
let td114 = this.document.getElementById("L8996");
let td115 = this.document.getElementById("L8997");

 // 5 para 6 L8
let td116 = this.document.getElementById("L8998");
let td117 = this.document.getElementById("L8999");
let td118 = this.document.getElementById("L89991");
let td119 = this.document.getElementById("L89992");
let td120 = this.document.getElementById("L89993");


//FIO 3
// 1 para 3  L8
let td121 = this.document.getElementById("L89994");
let td122 = this.document.getElementById("L89995");
let td123 = this.document.getElementById("L89996");
let td124 = this.document.getElementById("L89997");
let td125 = this.document.getElementById("L89998");

 // 2 para 4 L8
let td126 = this.document.getElementById("L89999");
let td127 = this.document.getElementById("L899991");
let td128 = this.document.getElementById("L899992");
let td129 = this.document.getElementById("L899993");
let td130 = this.document.getElementById("L899994");

 // 5 para 6 L8
let td131 = this.document.getElementById("L899995");
let td132 = this.document.getElementById("L899996");
let td133 = this.document.getElementById("L899997");
let td134 = this.document.getElementById("L899998");
let td135 = this.document.getElementById("L899999");


// 1para3 alta
if(td91 != null || td91 != undefined) {   
   console.log("confirmado",td91)
      td91.id = "L8" 
}

if(td92 != null || td92 != undefined) {   
   console.log("confirmado",td92)
   td92.id = "L8" 
}

if(td93 != null || td93 != undefined) {   
   console.log("confirmado",td93)
   td93.id = "L8" 
}

if(td94 != null || td94 != undefined) {   
   console.log("confirmado",td94)
   td94.id = "L8" 
}

if(td95 != null || td95 != undefined) {   
   console.log("confirmado",td95)
   td95.id = "L8" 
}





//2para4 baixa
if(td96 != null || td96 != undefined) {   
   console.log("confirmado",td96)
   td96.id = "L8" 
}

if(td97 != null || td97 != undefined) {   
   console.log("confirmado",td97)
td97.id = "L8" 
}

if(td98 != null || td98 != undefined) {   
   console.log("confirmado",td98)
td98.id = "L8" 
}

if(td99 != null || td99 != undefined) {   
   console.log("confirmado",td99)
td99.id = "L8" 
}

if(td100 != null || td100 != undefined) {   
   console.log("confirmado",td100)
td100.id = "L8" 
}


// 5para6 
if(td101 != null || td101 != undefined) {   
   console.log("confirmado",td101)
      td101.id = "L8" 
}

if(td102 != null || td102 != undefined) {  
   console.log("confirmado",td102) 
   td102.id = "L8" 
}

if(td103 != null || td103 != undefined) {  
   console.log("confirmado",td103) 
   td103.id = "L8" 
}

if(td104 != null || td104 != undefined) {   
   console.log("confirmado",td104)
   td104.id = "L8" 
}

if(td105 != null || td105 != undefined) {   
   console.log("confirmado",td105)
   td105.id = "L8" 
}


//SEGUNDO FIO
// 1para3 alta
if(td106 != null || td106 != undefined) {   
   console.log("confirmado",td106)
      td106.id = "L8" 
}

if(td107 != null || td107 != undefined) {   
   console.log("confirmado",td107)
   td107.id = "L8" 
}

if(td108 != null || td108 != undefined) {   
   console.log("confirmado",td108)
   td108.id = "L8" 
}

if(td109 != null || td109 != undefined) {   
   console.log("confirmado",td109)
   td109.id = "L8" 
}

if(td110 != null || td110 != undefined) {   
   console.log("confirmado",td110)
   td110.id = "L8" 
}





//2para4 baixa
if(td111 != null || td111 != undefined) {   
   console.log("confirmado",td111)
   td111.id = "L8" 
}

if(td112 != null || td112 != undefined) {   
   console.log("confirmado",td112)
td112.id = "L8" 
}

if(td113 != null || td113 != undefined) {   
   console.log("confirmado",td113)
td113.id = "L8" 
}

if(td114 != null || td114 != undefined) {   
   console.log("confirmado",td114)
td114.id = "L8" 
}

if(td115 != null || td115 != undefined) {   
   console.log("confirmado",td115)
td115.id = "L8" 
}


// 5para6 
if(td116 != null || td116 != undefined) {   
   console.log("confirmado",td116)
      td116.id = "L8" 
}

if(td117 != null || td117 != undefined) {  
   console.log("confirmado",td117) 
   td117.id = "L8" 
}

if(td118 != null || td118 != undefined) {  
   console.log("confirmado",td118) 
   td118.id = "L8" 
}

if(td119 != null || td119 != undefined) {   
   console.log("confirmado",td119)
   td119.id = "L8" 
}

if(td120 != null || td120 != undefined) {   
   console.log("confirmado",td120)
   td120.id = "L8" 
}




//TERCEIRO FIO
// 1para3 alta
if(td121 != null || td121 != undefined) {   
   console.log("confirmado",td121)
      td121.id = "L8" 
}

if(td122 != null || td122 != undefined) {   
   console.log("confirmado",td122)
   td122.id = "L8" 
}

if(td123 != null || td123 != undefined) {   
   console.log("confirmado",td123)
   td123.id = "L8" 
}

if(td124 != null || td124 != undefined) {   
   console.log("confirmado",td124)
   td124.id = "L8" 
}

if(td125 != null || td125 != undefined) {   
   console.log("confirmado",td125)
   td125.id = "L8" 
}





//2para4 baixa
if(td126 != null || td126 != undefined) {   
   console.log("confirmado",td126)
   td126.id = "L8" 
}

if(td127 != null || td127 != undefined) {   
   console.log("confirmado",td127)
td127.id = "L8" 
}

if(td128 != null || td128 != undefined) {   
   console.log("confirmado",td128)
td128.id = "L8" 
}

if(td129 != null || td129 != undefined) {   
   console.log("confirmado",td129)
td129.id = "L8" 
}

if(td130 != null || td130 != undefined) {   
   console.log("confirmado",td130)
td130.id = "L8" 
}


// 5para6 
if(td131 != null || td131 != undefined) {   
   console.log("confirmado",td131)
      td131.id = "L8" 
}

if(td132 != null || td132 != undefined) {  
   console.log("confirmado",td132) 
   td132.id = "L8" 
}

if(td133 != null || td133 != undefined) {  
   console.log("confirmado",td133) 
   td133.id = "L8" 
}

if(td134 != null || td134 != undefined) {   
   console.log("confirmado",td134)
   td134.id = "L8" 
}

if(td135 != null || td135 != undefined) {   
   console.log("confirmado",td135)
   td135.id = "L8" 
}



// resetando Tomada

 // 1 para 3  L9
let td136 = this.document.getElementById("L91");
let td137 = this.document.getElementById("L92");
let td138 = this.document.getElementById("L93");
let td139 = this.document.getElementById("L94");
let td140 = this.document.getElementById("L95");

 // 2 para 4 L9
let td141 = this.document.getElementById("L96");
let td142 = this.document.getElementById("L97");
let td143 = this.document.getElementById("L98");
let td144 = this.document.getElementById("L99");
let td145 = this.document.getElementById("L991");

 // 5 para 6 L9
let td146 = this.document.getElementById("L992");
let td147 = this.document.getElementById("L993");
let td148 = this.document.getElementById("L994");
let td149 = this.document.getElementById("L995");
let td150 = this.document.getElementById("L996");



//FIO 2
// 1 para 3  L9
let td151 = this.document.getElementById("L997");
let td152 = this.document.getElementById("L998");
let td153 = this.document.getElementById("L999");
let td154 = this.document.getElementById("L9991");
let td155 = this.document.getElementById("L9992");

 // 2 para 4 L9
let td156 = this.document.getElementById("L9993");
let td157 = this.document.getElementById("L9994");
let td158 = this.document.getElementById("L9995");
let td159 = this.document.getElementById("L9996");
let td160 = this.document.getElementById("L9997");

 // 5 para 6 L9
let td161 = this.document.getElementById("L9998");
let td162 = this.document.getElementById("L9999");
let td163 = this.document.getElementById("L99991");
let td164 = this.document.getElementById("L99992");
let td165 = this.document.getElementById("L99993");


//FIO 3
// 1 para 3  L9
let td166 = this.document.getElementById("L99994");
let td167 = this.document.getElementById("L99995");
let td168 = this.document.getElementById("L99996");
let td169 = this.document.getElementById("L99997");
let td170 = this.document.getElementById("L99998");

 // 2 para 4 L9
let td171 = this.document.getElementById("L99999");
let td172 = this.document.getElementById("L999991");
let td173 = this.document.getElementById("L999992");
let td174 = this.document.getElementById("L999993");
let td175 = this.document.getElementById("L999994");

 // 5 para 6 L9
let td176 = this.document.getElementById("L999995");
let td177 = this.document.getElementById("L999996");
let td178 = this.document.getElementById("L999997");
let td179 = this.document.getElementById("L999998");
let td180 = this.document.getElementById("L999999");


// 1para3 alta
if(td136 != null || td136 != undefined) {   
   console.log("confirmado",td136)
      td136.id = "L9" 
}

if(td137 != null || td137 != undefined) {   
   console.log("confirmado",td137)
   td137.id = "L9" 
}

if(td138 != null || td138 != undefined) {   
   console.log("confirmado",td138)
   td138.id = "L9" 
}

if(td139 != null || td139 != undefined) {  
   console.log("confirmado",td139) 
   td139.id = "L9" 
}

if(td140 != null || td140 != undefined) {  
   console.log("confirmado",td140) 
   td140.id = "L9" 
}




//2para4 baixa
if(td141 != null || td141 != undefined) {   
   console.log("confirmado",td141)
   td141.id = "L9" 
}

if(td142 != null || td142 != undefined) {  
   console.log("confirmado",td142) 
td142.id = "L9" 
}

if(td143 != null || td143 != undefined) {  
   console.log("confirmado",td143) 
td143.id = "L9" 
}

if(td144 != null || td144!= undefined) {  
   console.log("confirmado",td144) 
td144.id = "L9" 
}

if(td145 != null || td145 != undefined) {   
   console.log("confirmado",td145)
td145.id = "L9" 
}


// 5para6 
if(td146 != null || td146 != undefined) {  
   console.log("confirmado",td146)
      td146.id = "L9" 
}

if(td147 != null || td147 != undefined) {  
   console.log("confirmado",td147) 
   td147.id = "L9" 
}

if(td148 != null || td148 != undefined) {   
   console.log("confirmado",td148)
   td148.id = "L9" 
}

if(td149 != null || td149!= undefined) {   
   console.log("confirmado",td149)
   td149.id = "L9" 
}

if(td150 != null || td150 != undefined) {   
   console.log("confirmado",td45)
   td150.id = "L9" 
}



//SEGUNDO FIO
// 1para3 alta
if(td151 != null || td151 != undefined) {   
   console.log("confirmado",td151)
      td151.id = "L8" 
}

if(td152 != null || td152 != undefined) {   
   console.log("confirmado",td152)
   td152.id = "L8" 
}

if(td153 != null || td153 != undefined) {   
   console.log("confirmado",td153)
   td153.id = "L8" 
}

if(td154 != null || td154 != undefined) {   
   console.log("confirmado",td154)
   td154.id = "L8" 
}

if(td155 != null || td155 != undefined) {   
   console.log("confirmado",td155)
   td155.id = "L8" 
}





//2para4 baixa
if(td156 != null || td156 != undefined) {   
   console.log("confirmado",td156)
   td156.id = "L8" 
}

if(td157 != null || td157 != undefined) {   
   console.log("confirmado",td157)
td157.id = "L8" 
}

if(td158 != null || td158 != undefined) {   
   console.log("confirmado",td158)
td158.id = "L8" 
}

if(td159 != null || td159 != undefined) {   
   console.log("confirmado",td159)
td159.id = "L8" 
}

if(td160 != null || td160 != undefined) {   
   console.log("confirmado",td160)
td160.id = "L8" 
}


// 5para6 
if(td161 != null || td161 != undefined) {   
   console.log("confirmado",td161)
      td161.id = "L8" 
}

if(td162 != null || td162 != undefined) {  
   console.log("confirmado",td162) 
   td162.id = "L8" 
}

if(td163 != null || td163 != undefined) {  
   console.log("confirmado",td163) 
   td163.id = "L8" 
}

if(td164 != null || td164 != undefined) {   
   console.log("confirmado",td164)
   td164.id = "L8" 
}

if(td165 != null || td165 != undefined) {   
   console.log("confirmado",td165)
   td165.id = "L8" 
}


//TERCEIRO FIO
// 1para3 alta
if(td166 != null || td166 != undefined) {   
   console.log("confirmado",td166)
      td166.id = "L8" 
}

if(td167 != null || td167 != undefined) {   
   console.log("confirmado",td167)
   td167.id = "L8" 
}

if(td168 != null || td168 != undefined) {   
   console.log("confirmado",td168)
   td168.id = "L8" 
}

if(td169 != null || td169 != undefined) {   
   console.log("confirmado",td169)
   td169.id = "L8" 
}

if(td170 != null || td170 != undefined) {   
   console.log("confirmado",td170)
   td170.id = "L8" 
}





//2para4 baixa
if(td171 != null || td171 != undefined) {   
   console.log("confirmado",td171)
   td171.id = "L8" 
}

if(td172 != null || td172 != undefined) {   
   console.log("confirmado",td172)
td172.id = "L8" 
}

if(td173 != null || td173 != undefined) {   
   console.log("confirmado",td173)
td173.id = "L8" 
}

if(td174 != null || td174 != undefined) {   
   console.log("confirmado",td174)
td174.id = "L8" 
}

if(td175 != null || td175 != undefined) {   
   console.log("confirmado",td175)
td175.id = "L8" 
}


// 5para6 
if(td176 != null || td176 != undefined) {   
   console.log("confirmado",td176)
      td176.id = "L8" 
}

if(td177 != null || td177 != undefined) {  
   console.log("confirmado",td177) 
   td177.id = "L8" 
}

if(td178 != null || td178 != undefined) {  
   console.log("confirmado",td178) 
   td178.id = "L8" 
}

if(td179 != null || td179 != undefined) {   
   console.log("confirmado",td179)
   td179.id = "L8" 
}

if(td180 != null || td180 != undefined) {   
   console.log("confirmado",td180)
   td180.id = "L8" 
}



// resetando chuveiro

 // 1 para 3  L3
let ch = this.document.getElementById("L31");
let ch2 = this.document.getElementById("L32");
let ch3 = this.document.getElementById("L33");
let ch4 = this.document.getElementById("L34");
let ch5 = this.document.getElementById("L35");

 // 2 para 4 L3
let ch6 = this.document.getElementById("L36");
let ch7 = this.document.getElementById("L37");
let ch8 = this.document.getElementById("L38");
let ch9 = this.document.getElementById("L39");
let ch10 = this.document.getElementById("L391");

 // 5 para 6 L3
let ch11 = this.document.getElementById("L392");
let ch12 = this.document.getElementById("L393");
let ch13 = this.document.getElementById("L394");
let ch14 = this.document.getElementById("L395");
let ch15 = this.document.getElementById("L396");




//FIO 2
 // 1 para 3 L3
let ch16 = this.document.getElementById("L397");
let ch17 = this.document.getElementById("L398");
let ch18 = this.document.getElementById("L399");
let ch19 = this.document.getElementById("L3991");
let ch20 = this.document.getElementById("L3992");

 // 2 para 4 L3
let ch21 = this.document.getElementById("L3993");
let ch22 = this.document.getElementById("L3994");
let ch23 = this.document.getElementById("L3995");
let ch24 = this.document.getElementById("L3996");
let ch25 = this.document.getElementById("L3997");

 // 5 para 6 L3
let ch26 = this.document.getElementById("L3998");
let ch27 = this.document.getElementById("L3999");
let ch28 = this.document.getElementById("L39991");
let ch29 = this.document.getElementById("L39992");
let ch30 = this.document.getElementById("L39993");




//FIO 3
 // 1 para 3 L3
let ch31 = this.document.getElementById("L39994");
let ch32 = this.document.getElementById("L39995");
let ch33 = this.document.getElementById("L39996");
let ch34 = this.document.getElementById("L39997");
let ch35 = this.document.getElementById("L39998");

 // 2 para 4 L3
let ch36 = this.document.getElementById("L39999");
let ch37 = this.document.getElementById("L399991");
let ch38 = this.document.getElementById("L399992");
let ch39 = this.document.getElementById("L399993");
let ch40 = this.document.getElementById("L399994");

 // 5 para 6 L3
let ch41 = this.document.getElementById("L399995");
let ch42 = this.document.getElementById("L399996");
let ch43 = this.document.getElementById("L399997");
let ch44 = this.document.getElementById("L399998");
let ch45 = this.document.getElementById("L399999");




// FIO 1
// 1para3 alta
if(ch != null || ch != undefined) {   
   console.log("confirmado",ch)
      ch.id = "L3" 
}

if(ch2 != null || ch2 != undefined) {   
   console.log("confirmado",ch2)
   ch2.id = "L3" 
}

if(ch3 != null || ch3 != undefined) {   
   console.log("confirmado",ch3)
   ch3.id = "L3" 
}

if(ch4 != null || ch4 != undefined) {   
   console.log("confirmado",ch4)
   ch4.id = "L3" 
}

if(ch5 != null || ch5 != undefined) {   
   console.log("confirmado",ch5)
   ch5.id = "L3" 
}




//2para4 baixa
if(ch6 != null || ch6 != undefined) {   
   console.log("confirmado",ch6)
   ch6.id = "L3" 
}

if(ch7 != null || ch7 != undefined) {   
   console.log("confirmado",ch7)
ch7.id = "L3" 
}

if(ch8 != null || ch8 != undefined) {   
   console.log("confirmado",ch8)
ch8.id = "L3" 
}

if(ch9 != null || ch9 != undefined) {   
   console.log("confirmado",ch9)
ch9.id = "L3" 
}

if(ch10 != null || ch10 != undefined) {   
   console.log("confirmado",ch10)
ch10.id = "L3" 
}


// 5para6 
if(ch11 != null || ch11 != undefined) {   
   console.log("confirmado",ch11)
      ch11.id = "L3" 
}

if(ch12 != null || ch12 != undefined) {   
   console.log("confirmado",ch12)
   ch12.id = "L3" 
}

if(ch13 != null || ch13 != undefined) {   
   console.log("confirmado",ch13)
   ch13.id = "L3" 
}

if(ch14 != null || ch14 != undefined) {   
   console.log("confirmado",ch14)
   ch14.id = "L3" 
}

if(ch15 != null || ch15 != undefined) {   
   console.log("confirmado",ch15)
   ch15.id = "L3" 
}


// FIO 2 
// 1para3 alta
if(ch16 != null || ch16 != undefined) {   
   console.log("confirmado",ch16)
      ch16.id = "L3" 
}

if(ch17 != null || ch17 != undefined) {   
   console.log("confirmado",ch17)
   ch17.id = "L3" 
}

if(ch18 != null || ch18 != undefined) {   
   console.log("confirmado",ch18)
   ch18.id = "L3" 
}

if(ch19 != null || ch19 != undefined) {   
   console.log("confirmado",ch19)
   ch19.id = "L3" 
}

if(ch20 != null || ch20 != undefined) {   
   console.log("confirmado",ch20)
   ch20.id = "L3" 
}


// FIO 2
//2para4 baixa
if(ch21 != null || ch21 != undefined) {   
   console.log("confirmado",ch21)
   ch21.id = "L3" 
}

if(ch22 != null || ch22 != undefined) {   
   console.log("confirmado",ch22)
ch22.id = "L3" 
}

if(ch23 != null || ch23 != undefined) {   
   console.log("confirmado",ch23)
ch23.id = "L3" 
}

if(ch24 != null || ch24 != undefined) {   
   console.log("confirmado",ch24)
ch24.id = "L3" 
}

if(ch25 != null || ch25 != undefined) {   
   console.log("confirmado",ch25)
ch25.id = "L3" 
}


//FIO 2
// 5para6 
if(ch26 != null || ch26 != undefined) {   
   console.log("confirmado",ch26)
      ch26.id = "L3" 
}

if(ch27 != null || ch27 != undefined) {   
   console.log("confirmado",ch27)
   ch27.id = "L3" 
}

if(ch28 != null || ch28 != undefined) {   
   console.log("confirmado",ch28)
   ch28.id = "L3" 
}

if(ch29 != null || ch29 != undefined) {   
   console.log("confirmado",ch29)
   ch29.id = "L3" 
}

if(ch30 != null || ch30 != undefined) {   
   console.log("confirmado",ch30)
   ch30.id = "L3" 
}



// FIO 3
// 1para3 alta
if(ch31 != null || ch31 != undefined) {   
   console.log("confirmado",ch31)
      ch31.id = "L3" 
}

if(ch32 != null || ch32 != undefined) {   
   console.log("confirmado",ch32)
   ch32.id = "L3" 
}

if(ch33 != null || ch33 != undefined) {   
   console.log("confirmado",ch33)
   ch33.id = "L3" 
}

if(ch34 != null || ch34 != undefined) {   
   console.log("confirmado",ch34)
   ch34.id = "L3" 
}

if(ch35 != null || ch35 != undefined) {   
   console.log("confirmado",ch35)
      ch35.id = "L3" 
}


//2para4 baixa
if(ch36 != null || ch36 != undefined) {   
   console.log("confirmado",ch36)
   ch36.id = "L3" 
}

if(ch37 != null || ch37 != undefined) {   
   console.log("confirmado",ch37)
ch37.id = "L3" 
}

if(ch38 != null || ch38 != undefined) {   
   console.log("confirmado",ch38)
ch38.id = "L3" 
}

if(ch39 != null || ch39 != undefined) {   
   console.log("confirmado",ch39)
ch39.id = "L3" 
}

if(ch40 != null || ch40 != undefined) {   
   console.log("confirmado",ch40)
ch40.id = "L3" 
}


// 1para3 alta
if(ch41 != null || ch41 != undefined) {   
   console.log("confirmado",ch41)
      ch41.id = "L3" 
}

if(ch42 != null || ch42 != undefined) {   
   console.log("confirmado",ch42)
   ch42.id = "L3" 
}

if(ch43 != null || ch43 != undefined) {   
   console.log("confirmado",ch43)
   ch43.id = "L3" 
}

if(ch44 != null || ch44 != undefined) {   
   console.log("confirmado",ch44)
   ch44.id = "L3" 
}

if(ch45 != null || ch45 != undefined) {   
   console.log("confirmado",ch45)
      ch45.id = "L3" 
}


// 1 para 3  L4
let ch46 = this.document.getElementById("L41");
let ch47 = this.document.getElementById("L42");
let ch48 = this.document.getElementById("L43");
let ch49 = this.document.getElementById("L44");
let ch50 = this.document.getElementById("L45");

 // 2 para 4 L4
let ch51 = this.document.getElementById("L46");
let ch52 = this.document.getElementById("L47");
let ch53 = this.document.getElementById("L48");
let ch54 = this.document.getElementById("L49");
let ch55 = this.document.getElementById("L491");

 // 5 para 6 L4
let ch56 = this.document.getElementById("L492");
let ch57 = this.document.getElementById("L493");
let ch58 = this.document.getElementById("L494");
let ch59 = this.document.getElementById("L495");
let ch60 = this.document.getElementById("L496");


//FIO 2
// 1 para 3  L4
let ch61 = this.document.getElementById("L497");
let ch62 = this.document.getElementById("L498");
let ch63 = this.document.getElementById("L499");
let ch64 = this.document.getElementById("L4991");
let ch65 = this.document.getElementById("L4992");

 // 2 para 4 L4
let ch66 = this.document.getElementById("L4993");
let ch67 = this.document.getElementById("L4994");
let ch68 = this.document.getElementById("L4995");
let ch69 = this.document.getElementById("L4996");
let ch70 = this.document.getElementById("L4997");

 // 5 para 6 L4
let ch71 = this.document.getElementById("L4998");
let ch72 = this.document.getElementById("L4999");
let ch73 = this.document.getElementById("L49991");
let ch74 = this.document.getElementById("L49992");
let ch75 = this.document.getElementById("L49993");


//FIO 3
// 1 para 3  L4
let ch76 = this.document.getElementById("L49994");
let ch77 = this.document.getElementById("L49995");
let ch78 = this.document.getElementById("L49996");
let ch79 = this.document.getElementById("L49997");
let ch80 = this.document.getElementById("L49998");

 // 2 para 4 L4
let ch81 = this.document.getElementById("L49999");
let ch82 = this.document.getElementById("L499991");
let ch83 = this.document.getElementById("L499992");
let ch84 = this.document.getElementById("L499993");
let ch85 = this.document.getElementById("L499994");

 // 5 para 6 L4
let ch86 = this.document.getElementById("L499995");
let ch87 = this.document.getElementById("L499996");
let ch88 = this.document.getElementById("L499997");
let ch89 = this.document.getElementById("L499998");
let ch90 = this.document.getElementById("L499999");


// 1para3 alta
console.log("confirmado",ch46)
if(ch46 != null || ch46 != undefined) {   
   console.log("confirmado",ch46)
      ch46.id = "L4" 
}
console.log("confirmado",ch47)
if(ch47 != null || ch47 != undefined) {   
   console.log("confirmado",ch47)
   ch47.id = "L4" 
}
console.log("confirmado",ch48)
if(ch48 != null || ch48 != undefined) {   
   console.log("confirmado",ch48)
   ch48.id = "L4" 
}
console.log("confirmado",ch49)
if(ch49 != null || ch49 != undefined) {   
   console.log("confirmado",ch49)
   ch49.id = "L4" 
}
console.log("confirmado",ch50)
if(ch50 != null || ch50 != undefined) {   
   console.log("confirmado",ch50)
   ch50.id = "L4" 
}




//2para4 baixa
if(ch51 != null || ch51 != undefined) {   
   console.log("confirmado",ch51)
   ch51.id = "L4" 
}

if(ch52 != null || ch52 != undefined) {   
   console.log("confirmado",ch52)
ch52.id = "L4" 
}

if(ch53 != null || ch53 != undefined) {   
   console.log("confirmado",ch53)
ch53.id = "L4" 
}

if(ch54 != null || ch54 != undefined) {   
   console.log("confirmado",ch54)
ch54.id = "L4" 
}

if(ch55 != null || ch55 != undefined) {   
   console.log("confirmado",ch55)
ch55.id = "L4" 
}


// 5para6 
if(ch56 != null || ch56 != undefined) {   
   console.log("confirmado",ch56)
      ch56.id = "L4" 
}

if(ch57 != null || ch57 != undefined) {   
   console.log("confirmado",ch57)
   ch57.id = "L4" 
}

if(ch58 != null || ch58 != undefined) {   
   console.log("confirmado",ch58)
   ch58.id = "L4" 
}

if(ch59 != null || ch59 != undefined) {   
   console.log("confirmado",ch59)
   ch59.id = "L4" 
}

if(ch60 != null || ch60 != undefined) {   
   console.log("confirmado",ch60)
   ch60.id = "L4" 
}






//SEGUNDO FIO
// 1para3 alta
console.log("confirmado",ch61)
if(ch61 != null || ch61 != undefined) {   
   console.log("confirmado",ch61)
      ch61.id = "L4" 
}
console.log("confirmado",ch62)
if(ch62 != null || ch62 != undefined) {   
   console.log("confirmado",ch62)
   ch62.id = "L4" 
}
console.log("confirmado",ch63)
if(ch63 != null || ch63 != undefined) {   
   console.log("confirmado",ch63)
   ch63.id = "L4" 
}
console.log("confirmado",ch64)
if(ch64 != null || ch64 != undefined) {   
   console.log("confirmado",ch64)
   ch64.id = "L4" 
}
console.log("confirmado",ch65)
if(ch65 != null || ch65 != undefined) {   
   console.log("confirmado",ch65)
   ch65.id = "L4" 
}




//2para4 baixa
if(ch66 != null || ch66 != undefined) {   
   console.log("confirmado",ch66)
   ch66.id = "L4" 
}

if(ch67 != null || ch67 != undefined) {   
   console.log("confirmado",ch67)
ch67.id = "L4" 
}

if(ch68 != null || ch68 != undefined) {   
   console.log("confirmado",ch68)
ch68.id = "L4" 
}

if(ch69 != null || ch69 != undefined) {   
   console.log("confirmado",ch69)
ch69.id = "L4" 
}

if(ch70 != null || ch70 != undefined) {   
   console.log("confirmado",ch70)
ch70.id = "L4" 
}


// 5para6 
if(ch71 != null || ch71 != undefined) {   
   console.log("confirmado",ch71)
      ch71.id = "L4" 
}

if(ch72 != null || ch72 != undefined) {   
   console.log("confirmado",ch72)
   ch72.id = "L4" 
}

if(ch73 != null || ch73 != undefined) {   
   console.log("confirmado",ch73)
   ch73.id = "L4" 
}

if(ch74 != null || ch74 != undefined) {   
   console.log("confirmado",ch74)
   ch74.id = "L4" 
}

if(ch75 != null || ch75 != undefined) {   
   console.log("confirmado",ch75)
   ch75.id = "L4" 
}





//TERCEIRO FIO
// 1para3 alta
console.log("confirmado",ch76)
if(ch76 != null || ch76 != undefined) {   
   console.log("confirmado",ch76)
      ch76.id = "L4" 
}
console.log("confirmado",ch77)
if(ch77 != null || ch77 != undefined) {   
   console.log("confirmado",ch77)
   ch77.id = "L4" 
}
console.log("confirmado",ch78)
if(ch78 != null || ch78 != undefined) {   
   console.log("confirmado",ch78)
   ch78.id = "L4" 
}
console.log("confirmado",ch79)
if(ch79 != null || ch79 != undefined) {   
   console.log("confirmado",ch79)
   ch79.id = "L4" 
}
console.log("confirmado",ch80)
if(ch80 != null || ch80 != undefined) {   
   console.log("confirmado",ch80)
   ch80.id = "L4" 
}




//2para4 baixa
if(ch81 != null || ch81 != undefined) {   
   console.log("confirmado",ch81)
   ch81.id = "L4" 
}

if(ch82 != null || ch82 != undefined) {   
   console.log("confirmado",ch82)
ch82.id = "L4" 
}

if(ch83 != null || ch83 != undefined) {   
   console.log("confirmado",ch83)
ch83.id = "L4" 
}

if(ch84 != null || ch84 != undefined) {   
   console.log("confirmado",ch84)
ch84.id = "L4" 
}

if(ch85 != null || ch85 != undefined) {   
   console.log("confirmado",ch85)
ch85.id = "L4" 
}


// 5para6 
if(ch86 != null || ch86 != undefined) {   
   console.log("confirmado",ch86)
      ch86.id = "L4" 
}

if(ch87 != null || ch87 != undefined) {   
   console.log("confirmado",ch87)
   ch87.id = "L4" 
}

if(ch88 != null || ch88 != undefined) {   
   console.log("confirmado",ch88)
   ch88.id = "L4" 
}

if(ch89 != null || ch89 != undefined) {   
   console.log("confirmado",ch89)
   ch89.id = "L4" 
}

if(ch90 != null || ch90 != undefined) {   
   console.log("confirmado",ch90)
   ch90.id = "L4" 
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
      
      console.log("funcionou")
      abrirPopup(conexacaoL11Alto)

      return lp.id = "L11"

   }
    } else 

    if(segundaLigacao == "verdeTerra"&& id == "L1"&& id2 == "MAIN11"&& filtro=="1para3Verde"){
     
      let lp = document.getElementById("L1");
      if(lp != null && lp != undefined) { 
         conexacaoL11Alto = "L1VA"; 
      
      console.log("funcionou")
      abrirPopup(conexacaoL11Alto)
       return lp.id = "L12"
    }
    } else

    if(segundaLigacao == "brancoRetorno"&& id == "L1"&& id2 == "MAIN12"&& filtro=="1para3Branco"){

      let lp = document.getElementById("L1");
      if(lp != null && lp != undefined) { 
         conexacaoL11Alto = "L1BA";  
      
      console.log("funcionou")
      abrirPopup(conexacaoL11Alto)
       return lp.id = "L13"
      }
      
    } else
    if(segundaLigacao == "azulNeltro"&& id == "L1"&& id2 == "MAIN13"&& filtro=="1para3AzulNeltro"){

      let lp = document.getElementById("L1");
      if(lp != null && lp != undefined) {  
         conexacaoL11Alto = "L1AA";
      
      console.log("funcionou")
      abrirPopup(conexacaoL11Alto)
       return lp.id = "L14"
      }
      
    }else

    if(segundaLigacao == "marromRetorno"&& id == "L1"&& id2 == "MAIN14"&& filtro=="1para3Marrom"){

      let lp = document.getElementById("L1");
      if(lp != null && lp != undefined) { 
         conexacaoL11Alto = "L1MA"; 
      
      console.log("funcionou")
      abrirPopup(conexacaoL11Alto)
       return lp.id = "L15"
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
       return lp.id = "L16"
      }
    } else 

    if(segundaLigacao == "verdeTerra"&& id == "L1"&& id2 == "MAIN16"&& filtro=="2para4Verde"){

      let lp = document.getElementById("L1");
      if(lp != null && lp != undefined) {
         conexacaoL11Baixo = "L1VB";  
      lp.id = "L17"
      console.log("funcionou")
      abrirPopup(conexacaoL11Baixo)
       return lp.id = "L17"
      }
      
    } else

    if(segundaLigacao == "brancoRetorno"&& id == "L1"&& id2 == "MAIN17"&& filtro=="2para4Branco"){

      let lp = document.getElementById("L1");
      if(lp != null && lp != undefined) { 
         conexacaoL11Baixo = "L1BB";
      lp.id = "L18"
      console.log("funcionou")
      abrirPopup(conexacaoL11Baixo)
       return lp.id = "L18"
      }
      
    } else
    if(segundaLigacao == "azulNeltro"&& id == "L1"&& id2 == "MAIN18"&& filtro=="2para4AzulNeltro"){

      let lp = document.getElementById("L1");
      if(lp != null && lp != undefined) {
         conexacaoL11Baixo = "L1AB"; 
      lp.id = "L19"
      console.log("funcionou")
      abrirPopup(conexacaoL11Baixo)
       return lp.id = "L19"
      }
      
    }else

    if(segundaLigacao == "marromRetorno"&& id == "L1"&& id2 == "MAIN19"&& filtro=="2para4Marrom"){

      let lp = document.getElementById("L1");
      if(lp != null && lp != undefined) { 
         conexacaoL11Baixo = "L1MB"; 
      lp.id = "L191"
      console.log("funcionou")
      abrirPopup(conexacaoL11Baixo)
       return lp.id = "L191"
      }
      
    }



    //5para6 primeiro fio conectado L1
  if(segundaLigacao == "pretoFase"&& id == "L1" && id2 == "MAIN30"&& filtro=="5para6Preto"){

      let lp = document.getElementById("L1");
      if(lp != null && lp != undefined) {
         conexacaoL11BaixoBaixo = "L1PBB"; 
      lp.id = "L192"
      console.log("funcionou")
      abrirPopup(conexacaoL11BaixoBaixo)
       return lp.id = "L192"
      }
    } else 

    if(segundaLigacao == "verdeTerra"&& id == "L1"&& id2 == "MAIN31"&& filtro=="5para6Verde"){

      let lp = document.getElementById("L1");
      if(lp != null && lp != undefined) {
         conexacaoL11BaixoBaixo = "L1VBB";  
      lp.id = "L193"
      console.log("funcionou")
      abrirPopup(conexacaoL11BaixoBaixo)
       return lp.id = "L193"
      }
      
    } else

    if(segundaLigacao == "brancoRetorno"&& id == "L1"&& id2 == "MAIN32"&& filtro=="5para6Branco"){

      let lp = document.getElementById("L1");
      if(lp != null && lp != undefined) { 
         conexacaoL11BaixoBaixo = "L1BBB";
      lp.id = "L194"
      console.log("funcionou")
      abrirPopup(conexacaoL11BaixoBaixo)
       return lp.id = "L194"
      }
      
    } else
    if(segundaLigacao == "azulNeltro"&& id == "L1"&& id2 == "MAIN33"&& filtro=="5para6AzulNeltro"){

      let lp = document.getElementById("L1");
      if(lp != null && lp != undefined) {
         conexacaoL11BaixoBaixo = "L1ABB"; 
      lp.id = "L195"
      console.log("funcionou")
      abrirPopup(conexacaoL11BaixoBaixo)
       return lp.id = "L195"
      }
      
    }else

    if(segundaLigacao == "marromRetorno"&& id == "L1"&& id2 == "MAIN34"&& filtro=="5para6Marrom"){

      let lp = document.getElementById("L1");
      if(lp != null && lp != undefined) { 
         conexacaoL11BaixoBaixo = "L1MBB"; 
         console.log("funcionou")
      lp.id = "L196"
      abrirPopup(conexacaoL11BaixoBaixo)
       return lp.id = "L196"
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
       return lp.id = "L21"
    }
    } else 

    if(segundaLigacao == "verdeTerra"&& id == "L2"&& id2 == "MAIN11"&& filtro=="1para3Verde"){
     
      let lp = document.getElementById("L2");
      if(lp != null && lp != undefined) {  
         conexacaoL12Alto = "L2VA";
      lp.id = "L22"
      console.log("funcionou")
      abrirPopup(conexacaoL12Alto)
       return lp.id = "L22"
      }
    } else

    if(segundaLigacao == "brancoRetorno"&& id == "L2"&& id2 == "MAIN12"&& filtro=="1para3Branco"){

      let lp = document.getElementById("L2");
      if(lp != null && lp != undefined) {  
         conexacaoL12Alto = "L2BA";
      lp.id = "L23"
      console.log("funcionou")
      abrirPopup(conexacaoL12Alto)
       return lp.id = "L23"
      }
    } else
    if(segundaLigacao == "azulNeltro"&& id == "L2"&& id2 == "MAIN13"&& filtro=="1para3AzulNeltro"){

      let lp = document.getElementById("L2");
    if(lp != null && lp != undefined) { 
      conexacaoL12Alto = "L2AA"; 
      lp.id = "L24"
      console.log("funcionou")
      abrirPopup(conexacaoL12Alto)
       return lp.id = "L24"
    }
    }else

    if(segundaLigacao == "marromRetorno"&& id == "L2"&& id2 == "MAIN14"&& filtro=="1para3Marrom"){

      let lp = document.getElementById("L2");
      if(lp != null && lp != undefined) {  
          conexacaoL12Alto = "L2MA";
      lp.id = "L25"
      console.log("funcionou")
      abrirPopup(conexacaoL12Alto)
       return lp.id = "L25"
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
       return lp.id = "L26"
      }
      
    } else 

    if(segundaLigacao == "verdeTerra"&& id == "L2"&& id2 == "MAIN16"&& filtro=="2para4Verde"){

      let lp = document.getElementById("L2");
      if(lp != null && lp != undefined) {
         conexacaoL12Baixo = "L2VB";  
      lp.id = "L27"
      console.log("funcionou")
      abrirPopup(conexacaoL12Baixo)
       return lp.id = "L27"
      }
      
    } else

    if(segundaLigacao == "brancoRetorno"&& id == "L2"&& id2 == "MAIN17"&& filtro=="2para4Branco"){

      let lp = document.getElementById("L2");
      if(lp != null && lp != undefined) {  
         conexacaoL12Baixo = "L2BB";
      lp.id = "L28"
      console.log("funcionou")
      abrirPopup(conexacaoL12Baixo)
       return lp.id = "L28"
      }
      
    } else
    if(segundaLigacao == "azulNeltro"&& id == "L2"&& id2 == "MAIN18"&& filtro=="2para4AzulNeltro"){

      let lp = document.getElementById("L2");
      if(lp != null && lp != undefined) {
         conexacaoL12Baixo = "L2AB";  
      lp.id = "L29"
      console.log("funcionou")
      abrirPopup(conexacaoL12Baixo)
       return lp.id = "L29"
      }
      
    }else

    if(segundaLigacao == "marromRetorno"&& id == "L2"&& id2 == "MAIN19"&& filtro=="2para4Marrom"){

      let lp = document.getElementById("L2");
      if(lp != null && lp != undefined) { 
         conexacaoL12Baixo = "L2MB"; 
      lp.id = "L291"
      console.log("funcionou")
      abrirPopup(conexacaoL12Baixo)
       return lp.id = "L291"
      }
      
    }


    //5para6 baixa baixa  L2
  if(segundaLigacao == "pretoFase"&& id == "L2" && id2 == "MAIN30"&& filtro=="5para6Preto"){

      let lp = document.getElementById("L2");
      if(lp != null && lp != undefined) {
         conexacaoL12BaixoBaixo = "L2PBB"; 
      lp.id = "L292"
      console.log("funcionou")
      abrirPopup(conexacaoL12BaixoBaixo)
       return lp.id = "L292"
      }
    } else 

    if(segundaLigacao == "verdeTerra"&& id == "L2"&& id2 == "MAIN31"&& filtro=="5para6Verde"){

      let lp = document.getElementById("L2");
      if(lp != null && lp != undefined) {
         conexacaoL12BaixoBaixo = "L2VBB";  
      lp.id = "L293"
      console.log("funcionou")
      abrirPopup(conexacaoL12BaixoBaixo)
       return lp.id = "L293"
      }
      
    } else

    if(segundaLigacao == "brancoRetorno"&& id == "L2"&& id2 == "MAIN32"&& filtro=="5para6Branco"){

      let lp = document.getElementById("L2");
      if(lp != null && lp != undefined) { 
         conexacaoL12BaixoBaixo = "L2BBB";
      lp.id = "L294"
      console.log("funcionou")
      abrirPopup(conexacaoL12BaixoBaixo)
       return lp.id = "L294"
      }
      
    } else
    if(segundaLigacao == "azulNeltro"&& id == "L2"&& id2 == "MAIN33"&& filtro=="5para6AzulNeltro"){

      let lp = document.getElementById("L2");
      if(lp != null && lp != undefined) {
         conexacaoL12BaixoBaixo = "L2ABB"; 
      lp.id = "L295"
      console.log("funcionou")
      abrirPopup(conexacaoL12BaixoBaixo)
       return lp.id = "L295"
      }
      
    }else

    if(segundaLigacao == "marromRetorno"&& id == "L2"&& id2 == "MAIN34"&& filtro=="5para6Marrom"){

      let lp = document.getElementById("L2");
      if(lp != null && lp != undefined) { 
         conexacaoL12BaixoBaixo = "L2MBB"; 
      lp.id = "L296"
      console.log("funcionou")
      abrirPopup(conexacaoL12BaixoBaixo)
       return lp.id = "L296"
      }
      
    }

     









   // SEGUNDO FIO CONECTADO 

    //1para3alto L1
   if(segundaLigacao2 == "pretoFase"&& id == "L1" && id2 == "MAIN10"&& filtro2=="1para3Preto"){

      let lp = document.getElementById("L1");
      if(lp!=null && lp!=undefined ){
         conexacaoL11Alto = "L1PA"
      lp.id = "L197"
      console.log("funcionou")
      abrirPopup(conexacaoL11Alto)
       return lp.id = "L197"
   }
    } else 

    if(segundaLigacao2 == "verdeTerra"&& id == "L1"&& id2 == "MAIN11"&& filtro2=="1para3Verde"){

      let lp = document.getElementById("L1");
      if(lp != null && lp != undefined) {  
          conexacaoL11Alto = "L1VA"
      lp.id = "L198"
      console.log("funcionou")
      abrirPopup(conexacaoL11Alto)
 return lp.id = "L198"
      }
      
    } else

    if(segundaLigacao2 == "brancoRetorno"&& id == "L1"&& id2 == "MAIN12"&& filtro2=="1para3Branco"){

      let lp = document.getElementById("L1");
      if(lp != null && lp != undefined) {
          conexacaoL11Alto = "L1BA"  
      lp.id = "L199"
      console.log("funcionou")
      abrirPopup(conexacaoL11Alto)
       return lp.id = "L199"
      }
      
    } else
    if(segundaLigacao2 == "azulNeltro"&& id == "L1"&& id2 == "MAIN13"&& filtro2=="1para3AzulNeltro"){

      let lp = document.getElementById("L1");
      if(lp != null && lp != undefined) {
          conexacaoL11Alto = "L1AA"  
      lp.id = "L1991"
      console.log("funcionou")
      abrirPopup(conexacaoL11Alto)
       return lp.id = "L1991"
      }
      
    }else

    if(segundaLigacao2 == "marromRetorno"&& id == "L1"&& id2 == "MAIN14"&& filtro2=="1para3Marrom"){

      let lp = document.getElementById("L1");
      if(lp != null && lp != undefined) {
          conexacaoL11Alto = "L1MA"  
      lp.id = "L1992"
      console.log("funcionou")
      abrirPopup(conexacaoL11Alto)
       return lp.id = "L1992"
      }
    }else




//2para4baixo L1 
  if(segundaLigacao2 == "pretoFase"&& id == "L1" && id2 == "MAIN15"&& filtro2=="2para4Preto"){

      let lp = document.getElementById("L1");
      if(lp != null && lp != undefined) {
         conexacaoL11Baixo = "L1PB"  
      lp.id = "L1993"
      console.log("funcionou")
      abrirPopup(conexacaoL11Baixo)
       return lp.id = "L1993"
      }
      
    } else 

    if(segundaLigacao2 == "verdeTerra"&& id == "L1"&& id2 == "MAIN16"&& filtro2=="2para4Verde"){

      let lp = document.getElementById("L1");
      if(lp != null && lp != undefined) {
         conexacaoL11Baixo = "L1VB"    
      lp.id = "L1994"
      console.log("funcionou")
      abrirPopup(conexacaoL11Baixo)
       return lp.id = "L1994"
      }
      
    } else

    if(segundaLigacao2 == "brancoRetorno"&& id == "L1"&& id2 == "MAIN17"&& filtro2=="2para4Branco"){

      let lp = document.getElementById("L1");
      if(lp != null && lp != undefined) {
         conexacaoL11Baixo = "L1BB"    
      lp.id = "L1995"
      console.log("funcionou")
      abrirPopup(conexacaoL11Baixo)
       return lp.id = "L1995"
      }
      
    } else
    if(segundaLigacao2 == "azulNeltro"&& id == "L1"&& id2 == "MAIN18"&& filtro2=="2para4AzulNeltro"){

      let lp = document.getElementById("L1");
      if(lp != null && lp != undefined) {
         conexacaoL11Baixo = "L1AB"    
      lp.id = "L1996"
      console.log("funcionou")
      abrirPopup(conexacaoL11Baixo)
       return lp.id = "L1996"
      }
      
    }else

    if(segundaLigacao2 == "marromRetorno"&& id == "L1"&& id2 == "MAIN19"&& filtro2=="2para4Marrom"){

      let lp = document.getElementById("L1");
      if(lp != null && lp != undefined) {
         conexacaoL11Baixo = "L1MB"    
      lp.id = "L1997"
      console.log("funcionou")
      abrirPopup(conexacaoL11Baixo)
       return lp.id = "L1997"
      }
      
    }




    //5para6baixo L1 
  if(segundaLigacao2 == "pretoFase"&& id == "L1" && id2 == "MAIN30"&& filtro2=="5para6Preto"){

      let lp = document.getElementById("L1");
      if(lp != null && lp != undefined) {  
         conexacaoL11BaixoBaixo = "L1PBB"
      lp.id = "L1998"
      console.log("funcionou")
      abrirPopup(conexacaoL11BaixoBaixo)
      return lp.id = "L1998"
      }
      
    } else 

    if(segundaLigacao2 == "verdeTerra"&& id == "L1"&& id2 == "MAIN31"&& filtro2=="5para6Verde"){

      let lp = document.getElementById("L1");
      if(lp != null && lp != undefined) { 
         conexacaoL11BaixoBaixo = "L1VBB" 
      lp.id = "L1999"
      console.log("funcionou")
      abrirPopup(conexacaoL11BaixoBaixo)
      return lp.id = "L1999"
      }
      
    } else

    if(segundaLigacao2 == "brancoRetorno"&& id == "L1"&& id2 == "MAIN32"&& filtro2=="5para6Branco"){

      let lp = document.getElementById("L1");
      if(lp != null && lp != undefined) {
         conexacaoL11BaixoBaixo = "L1BBB"  
      lp.id = "L19991"
      console.log("funcionou")
      abrirPopup(conexacaoL11BaixoBaixo)
      return lp.id = "L19991"
      }
      
    } else
    if(segundaLigacao2 == "azulNeltro"&& id == "L1"&& id2 == "MAIN33"&& filtro2=="5para6AzulNeltro"){

      let lp = document.getElementById("L1");
      if(lp != null && lp != undefined) {
         conexacaoL11BaixoBaixo = "L1ABB"  
      lp.id = "L19992"
      console.log("funcionou")
      abrirPopup(conexacaoL11BaixoBaixo)
      return lp.id = "L19992"
      }
      
    }else

    if(segundaLigacao2 == "marromRetorno"&& id == "L1"&& id2 == "MAIN34"&& filtro2=="5para6Marrom"){

      let lp = document.getElementById("L1");
      if(lp != null && lp != undefined) {
         conexacaoL11BaixoBaixo = "L1MBB"  
      lp.id = "L19993"
      console.log("funcionou")
      abrirPopup(conexacaoL11BaixoBaixo)
      return lp.id = "L19993"
      }
      
    }








    else
//equivale a segunda conexao   1para3 alta  L2
    if(segundaLigacao2 == "pretoFase"&& id == "L2" && id2 == "MAIN10"&& filtro2=="1para3Preto"){

      let lp = document.getElementById("L2");
      if(lp != null){ 
      lp.id = "L297"
      console.log("funcionou")
      return lp.id = "L297"
      }
    } else 

    if(segundaLigacao2 == "verdeTerra"&& id == "L2"&& id2 == "MAIN11"&& filtro2=="1para3Verde"){

      let lp = document.getElementById("L2");
      if(lp != null && lp != undefined) {  
      lp.id = "L298"
      console.log("funcionou")
      return lp.id = "L298"
      }
    } else

    if(segundaLigacao2 == "brancoRetorno"&& id == "L2"&& id2 == "MAIN12"&& filtro2=="1para3Branco"){

      let lp = document.getElementById("L2");
      if(lp != null && lp != undefined) {  
      lp.id = "L299"
      console.log("funcionou")
      return lp.id = "L299"
      }
    } else
    if(segundaLigacao2 == "azulNeltro"&& id == "L2"&& id2 == "MAIN13"&& filtro2=="1para3AzulNeltro"){

      let lp = document.getElementById("L2");
      if(lp != null && lp != undefined) {  
      lp.id = "L2991"
      console.log("funcionou")
      return lp.id = "L2991"
      }
    }else

    if(segundaLigacao2 == "marromRetorno"&& id == "L2"&& id2 == "MAIN14"&& filtro2=="1para3Marrom"){

      let lp = document.getElementById("L2");
      if(lp != null && lp != undefined) {  
      lp.id = "L2992"
      console.log("funcionou")
      return lp.id = "L2992"
      }
      
    }else




//equivale a segunda conexao   2para4 baixa  L2
  if(segundaLigacao2 == "pretoFase"&& id == "L2" && id2 == "MAIN15"&& filtro2=="2para4Preto"){

      let lp = document.getElementById("L2");
      if(lp != null && lp != undefined) {  
      lp.id = "L2993"
      console.log("funcionou")
      return lp.id = "L2993"
      }
      
    } else 

    if(segundaLigacao2 == "verdeTerra"&& id == "L2"&& id2 == "MAIN16"&& filtro2=="2para4Verde"){

      let lp = document.getElementById("L2");
      if(lp != null && lp != undefined) {  
      lp.id = "L2994"
      console.log("funcionou")
      return lp.id = "L2994"
      }
      
    } else

    if(segundaLigacao2 == "brancoRetorno"&& id == "L2"&& id2 == "MAIN17"&& filtro2=="2para4Branco"){

      let lp = document.getElementById("L2");
      if(lp != null && lp != undefined) {  
      lp.id = "L2995"
      console.log("funcionou")
      return lp.id = "L2995"
      }
      
    } else
    if(segundaLigacao2 == "azulNeltro"&& id == "L2"&& id2 == "MAIN18"&& filtro2=="2para4AzulNeltro"){

      let lp = document.getElementById("L2");
      if(lp != null && lp != undefined) {  
      lp.id = "L2996"
      console.log("funcionou")
      return lp.id = "L2996"
      }
      
    }else

    if(segundaLigacao2 == "marromRetorno"&& id == "L2"&& id2 == "MAIN19"&& filtro2=="2para4Marrom"){

      let lp = document.getElementById("L2");
      if(lp != null && lp != undefined) {  
      lp.id = "L2997"
      console.log("funcionou")
      return lp.id = "L2997"
      }
      
    }else




    //equivale a segunda conexao   5para6 baixa  L2
  if(segundaLigacao2 == "pretoFase"&& id == "L2" && id2 == "MAIN30"&& filtro2=="5para6Preto"){

      let lp = document.getElementById("L2");
      if(lp != null && lp != undefined) {  
      lp.id = "L2998"
      console.log("funcionou")
      return lp.id = "L2998"
      }
      
    } else 

    if(segundaLigacao2 == "verdeTerra"&& id == "L2"&& id2 == "MAIN31"&& filtro2=="5para6Verde"){

      let lp = document.getElementById("L2");
      if(lp != null && lp != undefined) {  
      lp.id = "L2999"
      console.log("funcionou")
      return lp.id = "L2999"
      }
      
    } else

    if(segundaLigacao2 == "brancoRetorno"&& id == "L2"&& id2 == "MAIN32"&& filtro2=="5para6Branco"){

      let lp = document.getElementById("L2");
      if(lp != null && lp != undefined) {  
      lp.id = "L29991"
      console.log("funcionou")
      return lp.id = "L29991"
      }
      
    } else
    if(segundaLigacao2 == "azulNeltro"&& id == "L2"&& id2 == "MAIN33"&& filtro2=="5para6AzulNeltro"){

      let lp = document.getElementById("L2");
      if(lp != null && lp != undefined) {  
      lp.id = "L29992"
      console.log("funcionou")
      return lp.id = "L29992"
      }
      
    }else

    if(segundaLigacao2 == "marromRetorno"&& id == "L2"&& id2 == "MAIN34"&& filtro2=="5para6Marrom"){

      let lp = document.getElementById("L2");
      if(lp != null && lp != undefined) {  
      lp.id = "L29993"
      console.log("funcionou")
      return lp.id = "L29993"
      }
      
    }else



    //TERCEIRA COEXAO L1  //1para3baixo L1 
   if(segundaLigacao3 == "pretoFase"&& id == "L1" && id2 == "MAIN10"&& filtro3=="1para3Preto"){
      
      let lp = document.getElementById("L1");
      if(lp != null && lp != undefined) { 
      conexacaoL11BaixoBaixo = "L1PBB";
      lp.id = "L19994"
      console.log("funcionou")
      abrirPopup(conexacaoL11BaixoBaixo)
      return lp.id = "L19994"
   }
    } else 

    if(segundaLigacao3 == "verdeTerra"&& id == "L1"&& id2 == "MAIN11"&& filtro3=="1para3Verde"){
     
      let lp = document.getElementById("L1");
      if(lp != null && lp != undefined) { 
         conexacaoL11BaixoBaixo = "L1VBB"; 
      lp.id = "L19995"
      console.log("funcionou")
      abrirPopup(conexacaoL11BaixoBaixo)
      return lp.id = "L19995"
    }
    }else

    if(segundaLigacao3 == "brancoRetorno"&& id == "L1"&& id2 == "MAIN12"&& filtro3=="1para3Branco"){

      let lp = document.getElementById("L1");
      if(lp != null && lp != undefined) { 
         conexacaoL11BaixoBaixo = "L1BBB";  
      lp.id = "L19996"
      console.log("funcionou")
      abrirPopup(conexacaoL11BaixoBaixo)
      return lp.id = "L19996"
      }
      
    } else
    if(segundaLigacao3 == "azulNeltro"&& id == "L1"&& id2 == "MAIN13"&& filtro3=="1para3AzulNeltro"){

      let lp = document.getElementById("L1");
      if(lp != null && lp != undefined) {  
         conexacaoL11BaixoBaixo = "L1ABB";
      lp.id = "L19997"
      console.log("funcionou")
      abrirPopup(conexacaoL11BaixoBaixo)
      return lp.id = "L19997"
      }
      
    }else

    if(segundaLigacao3 == "marromRetorno"&& id == "L1"&& id2 == "MAIN14"&& filtro3=="1para3Marrom"){

      let lp = document.getElementById("L1");
      if(lp != null && lp != undefined) { 
         conexacaoL11BaixoBaixo = "L1MBB"; 
      lp.id = "L19998"
      console.log("funcionou")
      abrirPopup(conexacaoL11BaixoBaixo)
      return lp.id = "L19998"
      }
      
    }else




    //TERCEIRA COEXAO L1  //2para4baixo L1 
   if(segundaLigacao3 == "pretoFase"&& id == "L1" && id2 == "MAIN15"&& filtro3=="2para4Preto"){
      
      let lp = document.getElementById("L1");
      if(lp != null && lp != undefined) { 
      conexacaoL11BaixoBaixo = "L1PBB";
      lp.id = "L19999"
      console.log("funcionou")
      abrirPopup(conexacaoL11BaixoBaixo)
      return lp.id = "L19999"
   }
    } else 

    if(segundaLigacao3 == "verdeTerra"&& id == "L1"&& id2 == "MAIN16"&& filtro3=="2para4Verde"){
     
      let lp = document.getElementById("L1");
      if(lp != null && lp != undefined) { 
         conexacaoL11BaixoBaixo = "L1VBB"; 
      lp.id = "L199991"
      console.log("funcionou")
      abrirPopup(conexacaoL11BaixoBaixo)
      return lp.id = "L199991"
    }
    }else

    if(segundaLigacao3 == "brancoRetorno"&& id == "L1"&& id2 == "MAIN17"&& filtro3=="2para4Branco"){
console.log("funcionou")
      let lp = document.getElementById("L1");
      if(lp != null && lp != undefined) { 
         conexacaoL11BaixoBaixo = "L1BBB";  
      lp.id = "L199992"
      console.log("funcionou")
      abrirPopup(conexacaoL11BaixoBaixo)
      return lp.id = "L199992"
      }
      
    } else
    if(segundaLigacao3 == "azulNeltro"&& id == "L1"&& id2 == "MAIN18"&& filtro3=="2para4AzulNeltro"){

      let lp = document.getElementById("L1");
      if(lp != null && lp != undefined) {  
         conexacaoL11BaixoBaixo = "L1ABB";
      lp.id = "L199993"
      console.log("funcionou")
      abrirPopup(conexacaoL11BaixoBaixo)
      return lp.id = "L199993"
      }
      
    }else

    if(segundaLigacao3 == "marromRetorno"&& id == "L1"&& id2 == "MAIN19"&& filtro3=="2para4Marrom"){

      let lp = document.getElementById("L1");
      if(lp != null && lp != undefined) { 
         conexacaoL11BaixoBaixo = "L1MBB"; 
      lp.id = "L199994"
      console.log("funcionou")
      abrirPopup(conexacaoL11BaixoBaixo)
      return lp.id = "L199994"
      }
      
    }




    //TERCEIRA COEXAO L1  //5para6baixo L1 
   if(segundaLigacao3 == "pretoFase"&& id == "L1" && id2 == "MAIN30"&& filtro3=="5para6Preto"){
      
      let lp = document.getElementById("L1");
      if(lp != null && lp != undefined) { 
      conexacaoL11BaixoBaixo = "L1PBB";
      lp.id = "L199995"
      console.log("funcionou")
      abrirPopup(conexacaoL11BaixoBaixo)
      return lp.id = "L199995"
   }
    } else 

    if(segundaLigacao3 == "verdeTerra"&& id == "L1"&& id2 == "MAIN31"&& filtro3=="5para6Verde"){
     
      let lp = document.getElementById("L1");
      if(lp != null && lp != undefined) { 
         conexacaoL11BaixoBaixo = "L1VBB"; 
      lp.id = "L199996"
      console.log("funcionou")
      abrirPopup(conexacaoL11BaixoBaixo)
      return lp.id = "L199996"
    }
    }else

    if(segundaLigacao3 == "brancoRetorno"&& id == "L1"&& id2 == "MAIN32"&& filtro3=="5para6Branco"){

      let lp = document.getElementById("L1");
      if(lp != null && lp != undefined) { 
         conexacaoL11BaixoBaixo = "L1BBB";  
      lp.id = "L199997"
      console.log("funcionou")
      abrirPopup(conexacaoL11BaixoBaixo)
      return lp.id = "L199997"
      }
      
    } else
    if(segundaLigacao3 == "azulNeltro"&& id == "L1"&& id2 == "MAIN33"&& filtro3=="5para6AzulNeltro"){

      let lp = document.getElementById("L1");
      if(lp != null && lp != undefined) {  
         conexacaoL11BaixoBaixo = "L1ABB";
      lp.id = "L199998"
      console.log("funcionou")
      abrirPopup(conexacaoL11BaixoBaixo)
      return lp.id = "L199998"
      }
      
    }else

    if(segundaLigacao3 == "marromRetorno"&& id == "L1"&& id2 == "MAIN34"&& filtro3=="5para6Marrom"){

      let lp = document.getElementById("L1");
      if(lp != null && lp != undefined) { 
         conexacaoL11BaixoBaixo = "L1MBB"; 
      lp.id = "L199999"
      console.log("funcionou")
      abrirPopup(conexacaoL11BaixoBaixo)
      return lp.id = "L199999"
      }
      
    }



    else






     //TERCEIRA COEXAO L2  //1para3baixo L2 
   if(segundaLigacao3 == "pretoFase"&& id == "L2" && id2 == "MAIN10"&& filtro3=="1para3Preto"){
      
      let lp = document.getElementById("L2");
      if(lp != null && lp != undefined) { 
      conexacaoL11BaixoBaixo = "L1PBB";
      lp.id = "L29994"
      console.log("funcionou")
      abrirPopup(conexacaoL11BaixoBaixo)
      return lp.id = "L29994"
   }
    } else 

    if(segundaLigacao3 == "verdeTerra"&& id == "L2"&& id2 == "MAIN11"&& filtro3=="1para3Verde"){
     
      let lp = document.getElementById("L2");
      if(lp != null && lp != undefined) { 
         conexacaoL11BaixoBaixo = "L1VBB"; 
      lp.id = "L29995"
      console.log("funcionou")
      abrirPopup(conexacaoL11BaixoBaixo)
      return lp.id = "L29995"
    }
    }else

    if(segundaLigacao3 == "brancoRetorno"&& id == "L2"&& id2 == "MAIN12"&& filtro3=="1para3Branco"){

      let lp = document.getElementById("L2");
      if(lp != null && lp != undefined) { 
         conexacaoL11BaixoBaixo = "L1BBB";  
      lp.id = "L29996"
      console.log("funcionou")
      abrirPopup(conexacaoL11BaixoBaixo)
      return lp.id = "L29996"
      }
      
    } else
    if(segundaLigacao3 == "azulNeltro"&& id == "L2"&& id2 == "MAIN13"&& filtro3=="1para3AzulNeltro"){

      let lp = document.getElementById("L2");
      if(lp != null && lp != undefined) {  
         conexacaoL11BaixoBaixo = "L1ABB";
      lp.id = "L29997"
      console.log("funcionou")
      abrirPopup(conexacaoL11BaixoBaixo)
      return lp.id = "L29997"
      }
      
    }else

    if(segundaLigacao3 == "marromRetorno"&& id == "L2"&& id2 == "MAIN14"&& filtro3=="1para3Marrom"){

      let lp = document.getElementById("L2");
      if(lp != null && lp != undefined) { 
         conexacaoL11BaixoBaixo = "L1MBB"; 
      lp.id = "L29998"
      console.log("funcionou")
      abrirPopup(conexacaoL11BaixoBaixo)
      return lp.id = "L29998"
      }
      
    }else



    //TERCEIRA COEXAO L1  //2para4baixo L2 
   if(segundaLigacao3 == "pretoFase"&& id == "L2" && id2 == "MAIN15"&& filtro3=="2para4Preto"){
      
      let lp = document.getElementById("L2");
      if(lp != null && lp != undefined) { 
      conexacaoL11BaixoBaixo = "L1PBB";
      lp.id = "L29999"
      console.log("funcionou")
      abrirPopup(conexacaoL11BaixoBaixo)
      return lp.id = "L29999"
   }
    } else 

    if(segundaLigacao3 == "verdeTerra"&& id == "L2"&& id2 == "MAIN16"&& filtro3=="2para4Verde"){
     
      let lp = document.getElementById("L2");
      if(lp != null && lp != undefined) { 
         conexacaoL11BaixoBaixo = "L1VBB"; 
      lp.id = "L299991"
      console.log("funcionou")
      abrirPopup(conexacaoL11BaixoBaixo)
      return lp.id = "L299991"
    }
    }else

    if(segundaLigacao3 == "brancoRetorno"&& id == "L2"&& id2 == "MAIN17"&& filtro3=="2para4Branco"){

      let lp = document.getElementById("L2");
      if(lp != null && lp != undefined) { 
         conexacaoL11BaixoBaixo = "L1BBB";  
      lp.id = "L299992"
      console.log("funcionou")
      abrirPopup(conexacaoL11BaixoBaixo)
      return lp.id = "L299992"
      }
      
    } else
    if(segundaLigacao3 == "azulNeltro"&& id == "L2"&& id2 == "MAIN18"&& filtro3=="2para4AzulNeltro"){

      let lp = document.getElementById("L2");
      if(lp != null && lp != undefined) {  
         conexacaoL11BaixoBaixo = "L1ABB";
      lp.id = "L299993"
      console.log("funcionou")
      abrirPopup(conexacaoL11BaixoBaixo)
      return lp.id = "L299993"
      }
      
    }else

    if(segundaLigacao3 == "marromRetorno"&& id == "L2"&& id2 == "MAIN19"&& filtro3=="2para4Marrom"){

      let lp = document.getElementById("L2");
      if(lp != null && lp != undefined) { 
         conexacaoL11BaixoBaixo = "L1MBB"; 
      lp.id = "L299994"
      console.log("funcionou")
      abrirPopup(conexacaoL11BaixoBaixo)
      return lp.id = "L299994"
      }
      
    }else



//TERCEIRO FIO L2 //5para6baixo L2 
    if(segundaLigacao3 == "pretoFase"&& id == "L2" && id2 == "MAIN30"&& filtro3=="5para6Preto"){
      
      let lp = document.getElementById("L2");
      if(lp != null && lp != undefined) {  
      conexacaoL12BaixoBaixo = "L2PB";
      lp.id = "L299995"
      console.log("funcionou")
      abrirPopup(conexacaoL12BaixoBaixo)
      return lp.id = "L299995"
    }
    } else 

    if(segundaLigacao3 == "verdeTerra"&& id == "L2"&& id2 == "MAIN31"&& filtro3=="5para6Verde"){
     
      let lp = document.getElementById("L2");
      if(lp != null && lp != undefined) {  
         conexacaoL12BaixoBaixo = "L2VB";
      lp.id = "L299996"
      console.log("funcionou")
      abrirPopup(conexacaoL12BaixoBaixo)
      return lp.id = "L299996"
      }
    } else

    if(segundaLigacao3 == "brancoRetorno"&& id == "L2"&& id2 == "MAIN32"&& filtro3=="5para6Branco"){

      let lp = document.getElementById("L2");
      if(lp != null && lp != undefined) {  
         conexacaoL12BaixoBaixo = "L2BB";
      lp.id = "L299997"
      console.log("funcionou")
      abrirPopup(conexacaoL12BaixoBaixo)
      return lp.id = "L299997"
      }
    } else
    if(segundaLigacao3 == "azulNeltro"&& id == "L2"&& id2 == "MAIN33"&& filtro3=="5para6AzulNeltro"){

      let lp = document.getElementById("L2");
    if(lp != null && lp != undefined) { 
      conexacaoL12BaixoBaixo = "L2AB"; 
      lp.id = "L299998"
      console.log("funcionou")
      abrirPopup(conexacaoL12BaixoBaixo)
      return lp.id = "L299998"
    }
    }else

    if(segundaLigacao3 == "marromRetorno"&& id == "L2"&& id2 == "MAIN34"&& filtro3=="5para6Marrom"){

      let lp = document.getElementById("L2");
      if(lp != null && lp != undefined) {  
          conexacaoL12BaixoBaixo = "L2MB";
      lp.id = "L299999"
      console.log("funcionou")
      abrirPopup(conexacaoL12BaixoBaixo)
      return lp.id = "L299999"
      }
      
    }




    //if((lp.id == "L11" &&id == "L1") && (lp.id == "L16"&& lp.id == "L16")){  
   // abrirPopup()
   // }

}






/////TOMODA CONEXAO
const tomada = document.querySelectorAll("[id]");


tomada.forEach(td => {
   // depois de varrer a variavel td add um evento
    td.addEventListener("click", function(){
        const id = td.id;

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


// equivale ao segundo fio da tomada
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

     console.log(tomada)
     console.log(td.id)
       
   if(id == "L7" || id == "L8" || id == "L9"){

      TomadaConect(id,id2)
    return id
   }


    });
}


);









function TomadaConect(id,id2){
   
   console.log(id)
   console.log(id2)

   //1para3alto primeiro fio conectado L7
   if(segundaLigacao == "pretoFase"&& id == "L7" && id2 == "MAIN10"&& filtro=="1para3Preto"){
      
      let td = document.getElementById("L7");
      if(td != null && td != undefined) { 
      conexacaoL11Alto = "L7PA";
      td.id = "L71"
      console.log("funcionou")
      abrirPopup(conexacaoL11Alto)
   }
    } else 

    if(segundaLigacao == "verdeTerra"&& id == "L7"&& id2 == "MAIN11"&& filtro=="1para3Verde"){
     
      let td = document.getElementById("L7");
      if(td != null && td != undefined) { 
         conexacaoL11Alto = "L7VA"; 
      td.id = "L72"
      console.log("funcionou")
      abrirPopup(conexacaoL11Alto)
    }
    } else

    if(segundaLigacao == "brancoRetorno"&& id == "L7"&& id2 == "MAIN12"&& filtro=="1para3Branco"){

      let td = document.getElementById("L7");
      if(td != null && td != undefined) { 
         conexacaoL11Alto = "L7BA";  
      td.id = "L73"
      console.log("funcionou")
      abrirPopup(conexacaoL11Alto)
      }
      
    } else
    if(segundaLigacao == "azulNeltro"&& id == "L7"&& id2 == "MAIN13"&& filtro=="1para3AzulNeltro"){

      let td = document.getElementById("L7");
      if(td != null && td != undefined) {  
         conexacaoL11Alto = "L7AA";
      td.id = "L74"
      console.log("funcionou")
      abrirPopup(conexacaoL11Alto)
      }
      
    }else

    if(segundaLigacao == "marromRetorno"&& id == "L7"&& id2 == "MAIN14"&& filtro=="1para3Marrom"){

      let td = document.getElementById("L7");
      if(td != null && td != undefined) { 
         conexacaoL11Alto = "L7MA"; 
      td.id = "L75"
      console.log("funcionou")
      abrirPopup(conexacaoL11Alto)
      }
      
    }else




//2para4baixo primeiro fio conectado L7
  if(segundaLigacao == "pretoFase"&& id == "L7" && id2 == "MAIN15"&& filtro=="2para4Preto"){

      let td = document.getElementById("L7");
      if(td != null && td != undefined) {
         conexacaoL11Baixo = "L7PB"; 
      td.id = "L76"
      console.log("funcionou")
      abrirPopup(conexacaoL11Baixo)
      }
    } else 

    if(segundaLigacao == "verdeTerra"&& id == "L7"&& id2 == "MAIN16"&& filtro=="2para4Verde"){

      let td = document.getElementById("L7");
      if(td != null && td != undefined) {
         conexacaoL11Baixo = "L7VB";  
      td.id = "L77"
      console.log("funcionou")
      abrirPopup(conexacaoL11Baixo)
      }
      
    } else

    if(segundaLigacao == "brancoRetorno"&& id == "L7"&& id2 == "MAIN17"&& filtro=="2para4Branco"){

      let td = document.getElementById("L7");
      if(td != null && td != undefined) { 
         conexacaoL11Baixo = "L7BB";
      td.id = "L78"
      console.log("funcionou")
      abrirPopup(conexacaoL11Baixo)
      }
      
    } else
    if(segundaLigacao == "azulNeltro"&& id == "L7"&& id2 == "MAIN18"&& filtro=="2para4AzulNeltro"){

      let td = document.getElementById("L7");
      if(td != null && td != undefined) {
         conexacaoL11Baixo = "L7AB"; 
      td.id = "L79"
      console.log("funcionou")
      abrirPopup(conexacaoL11Baixo)
      }
      
    }else

    if(segundaLigacao == "marromRetorno"&& id == "L7"&& id2 == "MAIN19"&& filtro=="2para4Marrom"){

      let td = document.getElementById("L7");
      if(td != null && td != undefined) { 
         conexacaoL11Baixo = "L7MB"; 
      td.id = "L791"
      console.log("funcionou")
      abrirPopup(conexacaoL11Baixo)
      }
      
    }



    //5para6 primeiro fio conectado L7
  if(segundaLigacao == "pretoFase"&& id == "L7" && id2 == "MAIN30"&& filtro=="5para6Preto"){

      let td = document.getElementById("L7");
      if(td != null && td != undefined) {
         conexacaoL11BaixoBaixo = "L7PBB"; 
      td.id = "L792"
      console.log("funcionou")
      abrirPopup(conexacaoL11BaixoBaixo)
      }
    } else 

    if(segundaLigacao == "verdeTerra"&& id == "L7"&& id2 == "MAIN31"&& filtro=="5para6Verde"){

      let td = document.getElementById("L7");
      if(td != null && td != undefined) {
         conexacaoL11BaixoBaixo = "L7VBB";  
      td.id = "L793"
      console.log("funcionou")
      abrirPopup(conexacaoL11BaixoBaixo)
      }
      
    } else

    if(segundaLigacao == "brancoRetorno"&& id == "L7"&& id2 == "MAIN32"&& filtro=="5para6Branco"){

      let td = document.getElementById("L7");
      if(td != null && td != undefined) { 
         conexacaoL11BaixoBaixo = "L7BBB";
      td.id = "L794"
      console.log("funcionou")
      abrirPopup(conexacaoL11BaixoBaixo)
      }
      
    } else
    if(segundaLigacao == "azulNeltro"&& id == "L7"&& id2 == "MAIN33"&& filtro=="5para6AzulNeltro"){

      let td = document.getElementById("L7");
      if(td != null && td != undefined) {
         conexacaoL11BaixoBaixo = "L7ABB"; 
      td.id = "L795"
      console.log("funcionou")
      abrirPopup(conexacaoL11BaixoBaixo)
      }
      
    }else

    if(segundaLigacao == "marromRetorno"&& id == "L7"&& id2 == "MAIN34"&& filtro=="5para6Marrom"){

      let td = document.getElementById("L7");
      if(td != null && td != undefined) { 
         conexacaoL11BaixoBaixo = "L7MBB"; 
         console.log("funcionou")
      td.id = "L796"
      abrirPopup(conexacaoL11BaixoBaixo)
      }
      
    }




    else
//   1para3 alta L8
    if(segundaLigacao == "pretoFase"&& id == "L8" && id2 == "MAIN10"&& filtro=="1para3Preto"){
      
      let td = document.getElementById("L8");
      if(td != null && td != undefined) {  
      conexacaoL12Alto = "L8PA";
      td.id = "L81"
      console.log("funcionou")
      abrirPopup(conexacaoL12Alto)
    }
    } else 

    if(segundaLigacao == "verdeTerra"&& id == "L8"&& id2 == "MAIN11"&& filtro=="1para3Verde"){
     
      let td = document.getElementById("L8");
      if(td != null && td != undefined) {  
         conexacaoL12Alto = "L8VA";
      td.id = "L82"
      console.log("funcionou")
      abrirPopup(conexacaoL12Alto)
      }
    } else

    if(segundaLigacao == "brancoRetorno"&& id == "L8"&& id2 == "MAIN12"&& filtro=="1para3Branco"){

      let td = document.getElementById("L8");
      if(td != null && td != undefined) {  
         conexacaoL12Alto = "L8BA";
      td.id = "L83"
      console.log("funcionou")
      abrirPopup(conexacaoL12Alto)
      }
    } else
    if(segundaLigacao == "azulNeltro"&& id == "L8"&& id2 == "MAIN13"&& filtro=="1para3AzulNeltro"){

      let td = document.getElementById("L8");
    if(td != null && td != undefined) { 
      conexacaoL12Alto = "L8AA"; 
      td.id = "L84"
      console.log("funcionou")
      abrirPopup(conexacaoL12Alto)
    }
    }else

    if(segundaLigacao == "marromRetorno"&& id == "L8"&& id2 == "MAIN14"&& filtro=="1para3Marrom"){

      let td = document.getElementById("L8");
      if(td != null && td != undefined) {  
          conexacaoL12Alto = "L8MA";
      td.id = "L85"
      console.log("funcionou")
      abrirPopup(conexacaoL12Alto)
      }
      
    }else




//equivale a segunda conexao   2para4 baixa L8
  if(segundaLigacao == "pretoFase"&& id == "L8" && id2 == "MAIN15"&& filtro=="2para4Preto"){

      let td = document.getElementById("L8");
      if(td != null && td != undefined) {
         conexacaoL12Baixo = "L8PB";  
      td.id = "L86"
      console.log("funcionou")
      abrirPopup(conexacaoL12Baixo)
      }
      
    } else 

    if(segundaLigacao == "verdeTerra"&& id == "L8"&& id2 == "MAIN16"&& filtro=="2para4Verde"){

      let td = document.getElementById("L8");
      if(td != null && td != undefined) {
         conexacaoL12Baixo = "L8VB";  
      td.id = "L87"
      console.log("funcionou")
      abrirPopup(conexacaoL12Baixo)
      }
      
    } else

    if(segundaLigacao == "brancoRetorno"&& id == "L8"&& id2 == "MAIN17"&& filtro=="2para4Branco"){

      let td = document.getElementById("L8");
      if(td != null && td != undefined) {  
         conexacaoL12Baixo = "L8BB";
      td.id = "L88"
      console.log("funcionou")
      abrirPopup(conexacaoL12Baixo)
      }
      
    } else
    if(segundaLigacao == "azulNeltro"&& id == "L8"&& id2 == "MAIN18"&& filtro=="2para4AzulNeltro"){

      let td = document.getElementById("L8");
      if(td != null && td != undefined) {
         conexacaoL12Baixo = "L8AB";  
      td.id = "L89"
      console.log("funcionou")
      abrirPopup(conexacaoL12Baixo)
      }
      
    }else

    if(segundaLigacao == "marromRetorno"&& id == "L8"&& id2 == "MAIN19"&& filtro=="2para4Marrom"){

      let td = document.getElementById("L8");
      if(td != null && td != undefined) { 
         conexacaoL12Baixo = "L8MB"; 
      td.id = "L891"
      console.log("funcionou")
      abrirPopup(conexacaoL12Baixo)
      }
      
    }


    //5para6 baixa baixa  L8
  if(segundaLigacao == "pretoFase"&& id == "L8" && id2 == "MAIN30"&& filtro=="5para6Preto"){

      let td = document.getElementById("L8");
      if(td != null && td != undefined) {
         conexacaoL12BaixoBaixo = "L8PBB"; 
      td.id = "L892"
      console.log("funcionou")
      abrirPopup(conexacaoL12BaixoBaixo)
      }
    } else 

    if(segundaLigacao == "verdeTerra"&& id == "L8"&& id2 == "MAIN31"&& filtro=="5para6Verde"){

      let td = document.getElementById("L8");
      if(td != null && td != undefined) {
         conexacaoL12BaixoBaixo = "L8VBB";  
      td.id = "L893"
      console.log("funcionou")
      abrirPopup(conexacaoL12BaixoBaixo)
      }
      
    } else

    if(segundaLigacao == "brancoRetorno"&& id == "L8"&& id2 == "MAIN32"&& filtro=="5para6Branco"){

      let td = document.getElementById("L8");
      if(td != null && td != undefined) { 
         conexacaoL12BaixoBaixo = "L8BBB";
      td.id = "L894"
      console.log("funcionou")
      abrirPopup(conexacaoL12BaixoBaixo)
      }
      
    } else
    if(segundaLigacao == "azulNeltro"&& id == "L8"&& id2 == "MAIN33"&& filtro=="5para6AzulNeltro"){

      let td = document.getElementById("L8");
      if(td != null && td != undefined) {
         conexacaoL12BaixoBaixo = "L8ABB"; 
      td.id = "L895"
      console.log("funcionou")
      abrirPopup(conexacaoL12BaixoBaixo)
      }
      
    }else

    if(segundaLigacao == "marromRetorno"&& id == "L8"&& id2 == "MAIN34"&& filtro=="5para6Marrom"){

      let td = document.getElementById("L8");
      if(td != null && td != undefined) { 
         conexacaoL12BaixoBaixo = "L8MBB"; 
      td.id = "L896"
      console.log("funcionou")
      abrirPopup(conexacaoL12BaixoBaixo)
      }
      
    }

     









   // SEGUNDO FIO CONECTADO 

    //1para3alto L7
   if(segundaLigacao2 == "pretoFase"&& id == "L7" && id2 == "MAIN10"&& filtro2=="1para3Preto"){

      let td = document.getElementById("L7");
      if(td!=null && td!=undefined ){
         conexacaoL11Alto = "L7PA"
      td.id = "L797"
      console.log("funcionou")
      abrirPopup(conexacaoL11Alto)
   }
    } else 

    if(segundaLigacao2 == "verdeTerra"&& id == "L7"&& id2 == "MAIN11"&& filtro2=="1para3Verde"){

      let td = document.getElementById("L7");
      if(td != null && td != undefined) {  
          conexacaoL11Alto = "L7VA"
      td.id = "L798"
      console.log("funcionou")
      abrirPopup(conexacaoL11Alto)
      }
      
    } else

    if(segundaLigacao2 == "brancoRetorno"&& id == "L7"&& id2 == "MAIN12"&& filtro2=="1para3Branco"){

      let td = document.getElementById("L7");
      if(td != null && td != undefined) {
          conexacaoL11Alto = "L7BA"  
      td.id = "L799"
      console.log("funcionou")
      abrirPopup(conexacaoL11Alto)
      }
      
    } else
    if(segundaLigacao2 == "azulNeltro"&& id == "L7"&& id2 == "MAIN13"&& filtro2=="1para3AzulNeltro"){

      let td = document.getElementById("L7");
      if(td != null && td != undefined) {
          conexacaoL11Alto = "L7AA"  
      td.id = "L7991"
      console.log("funcionou")
      abrirPopup(conexacaoL11Alto)
      }
      
    }else

    if(segundaLigacao2 == "marromRetorno"&& id == "L7"&& id2 == "MAIN14"&& filtro2=="1para3Marrom"){

      let td = document.getElementById("L7");
      if(td != null && td != undefined) {
          conexacaoL11Alto = "L7MA"  
      td.id = "L7992"
      console.log("funcionou")
      abrirPopup(conexacaoL11Alto)
      }
    }else




//2para4baixo L7 
  if(segundaLigacao2 == "pretoFase"&& id == "L7" && id2 == "MAIN15"&& filtro2=="2para4Preto"){

      let td = document.getElementById("L7");
      if(td != null && td != undefined) {
         conexacaoL11Baixo = "L7PB"  
      td.id = "L7993"
      console.log("funcionou")
      abrirPopup(conexacaoL11Baixo)
      }
      
    } else 

    if(segundaLigacao2 == "verdeTerra"&& id == "L7"&& id2 == "MAIN16"&& filtro2=="2para4Verde"){

      let td = document.getElementById("L7");
      if(td != null && td != undefined) {
         conexacaoL11Baixo = "L7VB"    
      td.id = "L7994"
      console.log("funcionou")
      abrirPopup(conexacaoL11Baixo)
      }
      
    } else

    if(segundaLigacao2 == "brancoRetorno"&& id == "L7"&& id2 == "MAIN17"&& filtro2=="2para4Branco"){

      let td = document.getElementById("L7");
      if(td != null && td != undefined) {
         conexacaoL11Baixo = "L7BB"    
      td.id = "L7995"
      console.log("funcionou")
      abrirPopup(conexacaoL11Baixo)
      }
      
    } else
    if(segundaLigacao2 == "azulNeltro"&& id == "L7"&& id2 == "MAIN18"&& filtro2=="2para4AzulNeltro"){

      let td = document.getElementById("L7");
      if(td != null && td != undefined) {
         conexacaoL11Baixo = "L7AB"    
      td.id = "L7996"
      console.log("funcionou")
      abrirPopup(conexacaoL11Baixo)
      }
      
    }else

    if(segundaLigacao2 == "marromRetorno"&& id == "L7"&& id2 == "MAIN19"&& filtro2=="2para4Marrom"){

      let td = document.getElementById("L7");
      if(td != null && td != undefined) {
         conexacaoL11Baixo = "L7MB"    
      td.id = "L7997"
      console.log("funcionou")
      abrirPopup(conexacaoL11Baixo)
      }
      
    }




    //5para6baixo L7 
  if(segundaLigacao2 == "pretoFase"&& id == "L7" && id2 == "MAIN30"&& filtro2=="5para6Preto"){

      let td = document.getElementById("L7");
      if(td != null && td != undefined) {  
         conexacaoL11BaixoBaixo = "L7PBB"
      td.id = "L7998"
      console.log("funcionou")
      abrirPopup(conexacaoL11BaixoBaixo)
      }
      
    } else 

    if(segundaLigacao2 == "verdeTerra"&& id == "L7"&& id2 == "MAIN31"&& filtro2=="5para6Verde"){

      let td = document.getElementById("L7");
      if(td != null && td != undefined) { 
         conexacaoL11BaixoBaixo = "L7VBB" 
      td.id = "L7999"
      console.log("funcionou")
      abrirPopup(conexacaoL11BaixoBaixo)
      }
      
    } else

    if(segundaLigacao2 == "brancoRetorno"&& id == "L7"&& id2 == "MAIN32"&& filtro2=="5para6Branco"){

      let td = document.getElementById("L7");
      if(td != null && td != undefined) {
         conexacaoL11BaixoBaixo = "L7BBB"  
      td.id = "L79991"
      console.log("funcionou")
      abrirPopup(conexacaoL11BaixoBaixo)
      }
      
    } else
    if(segundaLigacao2 == "azulNeltro"&& id == "L7"&& id2 == "MAIN33"&& filtro2=="5para6AzulNeltro"){

      let td = document.getElementById("L7");
      if(td != null && td != undefined) {
         conexacaoL11BaixoBaixo = "L7ABB"  
      td.id = "L79992"
      console.log("funcionou")
      abrirPopup(conexacaoL11BaixoBaixo)
      }
      
    }else

    if(segundaLigacao2 == "marromRetorno"&& id == "L7"&& id2 == "MAIN34"&& filtro2=="5para6Marrom"){

      let td = document.getElementById("L7");
      if(td != null && td != undefined) {
         conexacaoL11BaixoBaixo = "L7MBB"  
      td.id = "L79993"
      console.log("funcionou")
      abrirPopup(conexacaoL11BaixoBaixo)
      }
      
    }








    else
    //SEGUNDA CONEXAO
//equivale a segunda conexao   1para3 alta  L8
    if(segundaLigacao2 == "pretoFase"&& id == "L8" && id2 == "MAIN10"&& filtro2=="1para3Preto"){

      let td = document.getElementById("L8");
      if(td != null){ 
      td.id = "L897"
      console.log("funcionou")
      }
    } else 

    if(segundaLigacao2 == "verdeTerra"&& id == "L8"&& id2 == "MAIN11"&& filtro2=="1para3Verde"){

      let td = document.getElementById("L8");
      if(td != null && td != undefined) {  
      td.id = "L898"
      console.log("funcionou")
      }
    } else

    if(segundaLigacao2 == "brancoRetorno"&& id == "L8"&& id2 == "MAIN12"&& filtro2=="1para3Branco"){

      let td = document.getElementById("L8");
      if(td != null && td != undefined) {  
      td.id = "L899"
      console.log("funcionou")
      }
    } else
    if(segundaLigacao2 == "azulNeltro"&& id == "L8"&& id2 == "MAIN13"&& filtro2=="1para3AzulNeltro"){

      let td = document.getElementById("L8");
      if(td != null && td != undefined) {  
      td.id = "L8991"
      console.log("funcionou")
      }
    }else

    if(segundaLigacao2 == "marromRetorno"&& id == "L8"&& id2 == "MAIN14"&& filtro2=="1para3Marrom"){

      let td = document.getElementById("L8");
      if(td != null && td != undefined) {  
      td.id = "L8992"
      console.log("funcionou")
      }
      
    }else




//equivale a segunda conexao   2para4 baixa  L8
  if(segundaLigacao2 == "pretoFase"&& id == "L8" && id2 == "MAIN15"&& filtro2=="2para4Preto"){

      let td = document.getElementById("L8");
      if(td != null && td != undefined) {  
      td.id = "L8993"
      console.log("funcionou")
      }
      
    } else 

    if(segundaLigacao2 == "verdeTerra"&& id == "L8"&& id2 == "MAIN16"&& filtro2=="2para4Verde"){

      let td = document.getElementById("L8");
      if(td != null && td != undefined) {  
      td.id = "L8994"
      console.log("funcionou")
      }
      
    } else

    if(segundaLigacao2 == "brancoRetorno"&& id == "L8"&& id2 == "MAIN17"&& filtro2=="2para4Branco"){

      let td = document.getElementById("L8");
      if(td != null && td != undefined) {  
      td.id = "L8995"
      console.log("funcionou")
      }
      
    } else
    if(segundaLigacao2 == "azulNeltro"&& id == "L8"&& id2 == "MAIN18"&& filtro2=="2para4AzulNeltro"){

      let td = document.getElementById("L8");
      if(td != null && td != undefined) {  
      td.id = "L8996"
      console.log("funcionou")
      }
      
    }else

    if(segundaLigacao2 == "marromRetorno"&& id == "L8"&& id2 == "MAIN19"&& filtro2=="2para4Marrom"){

      let td = document.getElementById("L8");
      if(td != null && td != undefined) {  
      td.id = "L8997"
      console.log("funcionou")
      }
      
    }else




    //equivale a segunda conexao   5para6 baixa  L8
  if(segundaLigacao2 == "pretoFase"&& id == "L8" && id2 == "MAIN30"&& filtro2=="5para6Preto"){

      let td = document.getElementById("L8");
      if(td != null && td != undefined) {  
      td.id = "L8998"
      console.log("funcionou")
      }
      
    } else 

    if(segundaLigacao2 == "verdeTerra"&& id == "L8"&& id2 == "MAIN31"&& filtro2=="5para6Verde"){

      let td = document.getElementById("L8");
      if(td != null && td != undefined) {  
      td.id = "L8999"
      console.log("funcionou")
      }
      
    } else

    if(segundaLigacao2 == "brancoRetorno"&& id == "L8"&& id2 == "MAIN32"&& filtro2=="5para6Branco"){

      let td = document.getElementById("L8");
      if(td != null && td != undefined) {  
      td.id = "L89991"
      console.log("funcionou")
      }
      
    } else
    if(segundaLigacao2 == "azulNeltro"&& id == "L8"&& id2 == "MAIN33"&& filtro2=="5para6AzulNeltro"){

      let td = document.getElementById("L8");
      if(td != null && td != undefined) {  
      td.id = "L89992"
      console.log("funcionou")
      }
      
    }else

    if(segundaLigacao2 == "marromRetorno"&& id == "L8"&& id2 == "MAIN34"&& filtro2=="5para6Marrom"){

      let td = document.getElementById("L8");
      if(td != null && td != undefined) {  
      td.id = "L89993"
      console.log("funcionou")
      }
      
    }else



    //TERCEIRA COEXAO L7  //1para3baixo L7 
   if(segundaLigacao3 == "pretoFase"&& id == "L7" && id2 == "MAIN10"&& filtro3=="1para3Preto"){
      
      let td = document.getElementById("L7");
      if(td != null && td != undefined) { 
      conexacaoL11BaixoBaixo = "L7PBB";
      td.id = "L79994"
      console.log("funcionou")
      abrirPopup(conexacaoL11BaixoBaixo)
   }
    } else 

    if(segundaLigacao3 == "verdeTerra"&& id == "L7"&& id2 == "MAIN11"&& filtro3=="1para3Verde"){
     
      let td = document.getElementById("L7");
      if(td != null && td != undefined) { 
         conexacaoL11BaixoBaixo = "L7VBB"; 
      td.id = "L79995"
      console.log("funcionou")
      abrirPopup(conexacaoL11BaixoBaixo)
    }
    }else

    if(segundaLigacao3 == "brancoRetorno"&& id == "L7"&& id2 == "MAIN12"&& filtro3=="1para3Branco"){

      let td = document.getElementById("L7");
      if(td != null && td != undefined) { 
         conexacaoL11BaixoBaixo = "L7BBB";  
      td.id = "L79996"
      console.log("funcionou")
      abrirPopup(conexacaoL11BaixoBaixo)
      }
      
    } else
    if(segundaLigacao3 == "azulNeltro"&& id == "L7"&& id2 == "MAIN13"&& filtro3=="1para3AzulNeltro"){

      let td = document.getElementById("L7");
      if(td != null && td != undefined) {  
         conexacaoL11BaixoBaixo = "L7ABB";
      td.id = "L79997"
      console.log("funcionou")
      abrirPopup(conexacaoL11BaixoBaixo)
      }
      
    }else

    if(segundaLigacao3 == "marromRetorno"&& id == "L7"&& id2 == "MAIN14"&& filtro3=="1para3Marrom"){

      let td = document.getElementById("L7");
      if(td != null && td != undefined) { 
         conexacaoL11BaixoBaixo = "L7MBB"; 
      td.id = "L79998"
      console.log("funcionou")
      abrirPopup(conexacaoL11BaixoBaixo)
      }
      
    }else




    //TERCEIRA COEXAO L7  //2para4baixo L7 
   if(segundaLigacao3 == "pretoFase"&& id == "L7" && id2 == "MAIN15"&& filtro3=="2para4Preto"){
      
      let td = document.getElementById("L7");
      if(td != null && td != undefined) { 
      conexacaoL11BaixoBaixo = "L7PBB";
      td.id = "L79999"
      console.log("funcionou")
      abrirPopup(conexacaoL11BaixoBaixo)
   }
    } else 

    if(segundaLigacao3 == "verdeTerra"&& id == "L7"&& id2 == "MAIN16"&& filtro3=="2para4Verde"){
     
      let td = document.getElementById("L7");
      if(td != null && td != undefined) { 
         conexacaoL11BaixoBaixo = "L7VBB"; 
      td.id = "L799991"
      console.log("funcionou")
      abrirPopup(conexacaoL11BaixoBaixo)
    }
    }else

    if(segundaLigacao3 == "brancoRetorno"&& id == "L7"&& id2 == "MAIN17"&& filtro3=="2para4Branco"){
console.log("funcionou")
      let td = document.getElementById("L7");
      if(td != null && td != undefined) { 
         conexacaoL11BaixoBaixo = "L7BBB";  
      td.id = "L799992"
      console.log("funcionou")
      abrirPopup(conexacaoL11BaixoBaixo)
      }
      
    } else
    if(segundaLigacao3 == "azulNeltro"&& id == "L7"&& id2 == "MAIN18"&& filtro3=="2para4AzulNeltro"){

      let td = document.getElementById("L7");
      if(td != null && td != undefined) {  
         conexacaoL11BaixoBaixo = "L7ABB";
      td.id = "L799993"
      console.log("funcionou")
      abrirPopup(conexacaoL11BaixoBaixo)
      }
      
    }else

    if(segundaLigacao3 == "marromRetorno"&& id == "L7"&& id2 == "MAIN19"&& filtro3=="2para4Marrom"){

      let td = document.getElementById("L7");
      if(td != null && td != undefined) { 
         conexacaoL11BaixoBaixo = "L7MBB"; 
      td.id = "L799994"
      console.log("funcionou")
      abrirPopup(conexacaoL11BaixoBaixo)
      }
      
    }




    //TERCEIRA COEXAO L7  //5para6baixo L7 
   if(segundaLigacao3 == "pretoFase"&& id == "L7" && id2 == "MAIN30"&& filtro3=="5para6Preto"){
      
      let td = document.getElementById("L7");
      if(td != null && td != undefined) { 
      conexacaoL11BaixoBaixo = "L7PBB";
      td.id = "L799995"
      console.log("funcionou")
      abrirPopup(conexacaoL11BaixoBaixo)
   }
    } else 

    if(segundaLigacao3 == "verdeTerra"&& id == "L7"&& id2 == "MAIN31"&& filtro3=="5para6Verde"){
     
      let td = document.getElementById("L7");
      if(td != null && td != undefined) { 
         conexacaoL11BaixoBaixo = "L7VBB"; 
      td.id = "L799996"
      console.log("funcionou")
      abrirPopup(conexacaoL11BaixoBaixo)
    }
    }else

    if(segundaLigacao3 == "brancoRetorno"&& id == "L7"&& id2 == "MAIN32"&& filtro3=="5para6Branco"){

      let td = document.getElementById("L7");
      if(td != null && td != undefined) { 
         conexacaoL11BaixoBaixo = "L7BBB";  
      td.id = "L799997"
      console.log("funcionou")
      abrirPopup(conexacaoL11BaixoBaixo)
      }
      
    } else
    if(segundaLigacao3 == "azulNeltro"&& id == "L7"&& id2 == "MAIN33"&& filtro3=="5para6AzulNeltro"){

      let td = document.getElementById("L7");
      if(td != null && td != undefined) {  
         conexacaoL11BaixoBaixo = "L7ABB";
      td.id = "L799998"
      console.log("funcionou")
      abrirPopup(conexacaoL11BaixoBaixo)
      }
      
    }else

    if(segundaLigacao3 == "marromRetorno"&& id == "L7"&& id2 == "MAIN34"&& filtro3=="5para6Marrom"){

      let td = document.getElementById("L7");
      if(td != null && td != undefined) { 
         conexacaoL11BaixoBaixo = "L7MBB"; 
      td.id = "L799999"
      console.log("funcionou")
      abrirPopup(conexacaoL11BaixoBaixo)
      }
      
    }



    else






     //TERCEIRA COEXAO L8  //1para3baixo L8 
   if(segundaLigacao3 == "pretoFase"&& id == "L8" && id2 == "MAIN10"&& filtro3=="1para3Preto"){
      
      let td = document.getElementById("L8");
      if(td != null && td != undefined) { 
      conexacaoL11BaixoBaixo = "L8PBB";
      td.id = "L89994"
      console.log("funcionou")
      abrirPopup(conexacaoL11BaixoBaixo)
   }
    } else 

    if(segundaLigacao3 == "verdeTerra"&& id == "L8"&& id2 == "MAIN11"&& filtro3=="1para3Verde"){
     
      let td = document.getElementById("L8");
      if(td != null && td != undefined) { 
         conexacaoL11BaixoBaixo = "L8VBB"; 
      td.id = "L89995"
      console.log("funcionou")
      abrirPopup(conexacaoL11BaixoBaixo)
    }
    }else

    if(segundaLigacao3 == "brancoRetorno"&& id == "L8"&& id2 == "MAIN12"&& filtro3=="1para3Branco"){

      let td = document.getElementById("L8");
      if(td != null && td != undefined) { 
         conexacaoL11BaixoBaixo = "L8BBB";  
      td.id = "L89996"
      console.log("funcionou")
      abrirPopup(conexacaoL11BaixoBaixo)
      }
      
    } else
    if(segundaLigacao3 == "azulNeltro"&& id == "L8"&& id2 == "MAIN13"&& filtro3=="1para3AzulNeltro"){

      let td = document.getElementById("L8");
      if(td != null && td != undefined) {  
         conexacaoL11BaixoBaixo = "L8ABB";
      td.id = "L89997"
      console.log("funcionou")
      abrirPopup(conexacaoL11BaixoBaixo)
      }
      
    }else

    if(segundaLigacao3 == "marromRetorno"&& id == "L8"&& id2 == "MAIN14"&& filtro3=="1para3Marrom"){

      let td = document.getElementById("L8");
      if(td != null && td != undefined) { 
         conexacaoL11BaixoBaixo = "L8MBB"; 
      td.id = "L89998"
      console.log("funcionou")
      abrirPopup(conexacaoL11BaixoBaixo)
      }
      
    }else



    //TERCEIRA COEXAO L8  //2para4baixo L8 
   if(segundaLigacao3 == "pretoFase"&& id == "L8" && id2 == "MAIN15"&& filtro3=="2para4Preto"){
      
      let td = document.getElementById("L8");
      if(td != null && td != undefined) { 
      conexacaoL11BaixoBaixo = "L8PBB";
      td.id = "L89999"
      console.log("funcionou")
      abrirPopup(conexacaoL11BaixoBaixo)
   }
    } else 

    if(segundaLigacao3 == "verdeTerra"&& id == "L8"&& id2 == "MAIN16"&& filtro3=="2para4Verde"){
     
      let td = document.getElementById("L8");
      if(td != null && td != undefined) { 
         conexacaoL11BaixoBaixo = "L8VBB"; 
      td.id = "L899991"
      console.log("funcionou")
      abrirPopup(conexacaoL11BaixoBaixo)
    }
    }else

    if(segundaLigacao3 == "brancoRetorno"&& id == "L8"&& id2 == "MAIN17"&& filtro3=="2para4Branco"){

      let td = document.getElementById("L8");
      if(td != null && td != undefined) { 
         conexacaoL11BaixoBaixo = "L8BBB";  
      td.id = "L899992"
      console.log("funcionou")
      abrirPopup(conexacaoL11BaixoBaixo)
      }
      
    } else
    if(segundaLigacao3 == "azulNeltro"&& id == "L8"&& id2 == "MAIN18"&& filtro3=="2para4AzulNeltro"){

      let td = document.getElementById("L8");
      if(td != null && td != undefined) {  
         conexacaoL11BaixoBaixo = "L8ABB";
      td.id = "L899993"
      console.log("funcionou")
      abrirPopup(conexacaoL11BaixoBaixo)
      }
      
    }else

    if(segundaLigacao3 == "marromRetorno"&& id == "L8"&& id2 == "MAIN19"&& filtro3=="2para4Marrom"){

      let td = document.getElementById("L8");
      if(td != null && td != undefined) { 
         conexacaoL11BaixoBaixo = "L8MBB"; 
      td.id = "L899994"
      console.log("funcionou")
      abrirPopup(conexacaoL11BaixoBaixo)
      }
      
    }else



//TERCEIRO FIO L8 //5para6baixo L8 
    if(segundaLigacao3 == "pretoFase"&& id == "L8" && id2 == "MAIN30"&& filtro3=="5para6Preto"){
      
      let td = document.getElementById("L8");
      if(td != null && td != undefined) {  
      conexacaoL12BaixoBaixo = "L8PB";
      td.id = "L899995"
      console.log("funcionou")
      abrirPopup(conexacaoL12BaixoBaixo)
    }
    } else 

    if(segundaLigacao3 == "verdeTerra"&& id == "L8"&& id2 == "MAIN31"&& filtro3=="5para6Verde"){
     
      let td = document.getElementById("L8");
      if(td != null && td != undefined) {  
         conexacaoL12BaixoBaixo = "L8VB";
      td.id = "L899996"
      console.log("funcionou")
      abrirPopup(conexacaoL12BaixoBaixo)
      }
    } else

    if(segundaLigacao3 == "brancoRetorno"&& id == "L8"&& id2 == "MAIN32"&& filtro3=="5para6Branco"){

      let td = document.getElementById("L8");
      if(td != null && td != undefined) {  
         conexacaoL12BaixoBaixo = "L8BB";
      td.id = "L899997"
      console.log("funcionou")
      abrirPopup(conexacaoL12BaixoBaixo)
      }
    } else
    if(segundaLigacao3 == "azulNeltro"&& id == "L8"&& id2 == "MAIN33"&& filtro3=="5para6AzulNeltro"){

      let td = document.getElementById("L8");
    if(td != null && td != undefined) { 
      conexacaoL12BaixoBaixo = "L8AB"; 
      td.id = "L899998"
      console.log("funcionou")
      abrirPopup(conexacaoL12BaixoBaixo)
    }
    }else

    if(segundaLigacao3 == "marromRetorno"&& id == "L8"&& id2 == "MAIN34"&& filtro3=="5para6Marrom"){

      let td = document.getElementById("L8");
      if(td != null && td != undefined) {  
          conexacaoL12BaixoBaixo = "L8MB";
      td.id = "L899999"
      console.log("funcionou")
      abrirPopup(conexacaoL12BaixoBaixo)
      }
      
    }





       //1para3alto primeiro fio conectado L9
   if(segundaLigacao == "pretoFase"&& id == "L9" && id2 == "MAIN10"&& filtro=="1para3Preto"){
      
      let td = document.getElementById("L9");
      if(td != null && td != undefined) { 
      conexacaoL11Alto = "L9PA";
      td.id = "L91"
      console.log("funcionou")
      abrirPopup(conexacaoL11Alto)
   }
    } else 

    if(segundaLigacao == "verdeTerra"&& id == "L9"&& id2 == "MAIN11"&& filtro=="1para3Verde"){
     
      let td = document.getElementById("L9");
      if(td != null && td != undefined) { 
         conexacaoL11Alto = "L9VA"; 
      td.id = "L92"
      console.log("funcionou")
      abrirPopup(conexacaoL11Alto)
    }
    } else

    if(segundaLigacao == "brancoRetorno"&& id == "L9"&& id2 == "MAIN12"&& filtro=="1para3Branco"){

      let td = document.getElementById("L9");
      if(td != null && td != undefined) { 
         conexacaoL11Alto = "L9BA";  
      td.id = "L93"
      console.log("funcionou")
      abrirPopup(conexacaoL11Alto)
      }
      
    } else
    if(segundaLigacao == "azulNeltro"&& id == "L9"&& id2 == "MAIN13"&& filtro=="1para3AzulNeltro"){

      let td = document.getElementById("L9");
      if(td != null && td != undefined) {  
         conexacaoL11Alto = "L9AA";
      td.id = "L94"
      console.log("funcionou")
      abrirPopup(conexacaoL11Alto)
      }
      
    }else

    if(segundaLigacao == "marromRetorno"&& id == "L9"&& id2 == "MAIN14"&& filtro=="1para3Marrom"){

      let td = document.getElementById("L9");
      if(td != null && td != undefined) { 
         conexacaoL11Alto = "L9MA"; 
      td.id = "L95"
      console.log("funcionou")
      abrirPopup(conexacaoL11Alto)
      }
      
    }else




//2para4baixo primeiro fio conectado L9
  if(segundaLigacao == "pretoFase"&& id == "L9" && id2 == "MAIN15"&& filtro=="2para4Preto"){

      let td = document.getElementById("L9");
      if(td != null && td != undefined) {
         conexacaoL11Baixo = "L9PB"; 
      td.id = "L96"
      console.log("funcionou")
      abrirPopup(conexacaoL11Baixo)
      }
    } else 

    if(segundaLigacao == "verdeTerra"&& id == "L9"&& id2 == "MAIN16"&& filtro=="2para4Verde"){

      let td = document.getElementById("L9");
      if(td != null && td != undefined) {
         conexacaoL11Baixo = "L9VB";  
      td.id = "L97"
      console.log("funcionou")
      abrirPopup(conexacaoL11Baixo)
      }
      
    } else

    if(segundaLigacao == "brancoRetorno"&& id == "L9"&& id2 == "MAIN17"&& filtro=="2para4Branco"){

      let td = document.getElementById("L9");
      if(td != null && td != undefined) { 
         conexacaoL11Baixo = "L9BB";
      td.id = "L98"
      console.log("funcionou")
      abrirPopup(conexacaoL11Baixo)
      }
      
    } else
    if(segundaLigacao == "azulNeltro"&& id == "L9"&& id2 == "MAIN18"&& filtro=="2para4AzulNeltro"){

      let td = document.getElementById("L9");
      if(td != null && td != undefined) {
         conexacaoL11Baixo = "L9AB"; 
      td.id = "L99"
      console.log("funcionou")
      abrirPopup(conexacaoL11Baixo)
      }
      
    }else

    if(segundaLigacao == "marromRetorno"&& id == "L9"&& id2 == "MAIN19"&& filtro=="2para4Marrom"){

      let td = document.getElementById("L9");
      if(td != null && td != undefined) { 
         conexacaoL11Baixo = "L9MB"; 
      td.id = "L991"
      console.log("funcionou")
      abrirPopup(conexacaoL11Baixo)
      }
      
    }



    //5para6 primeiro fio conectado L9
  if(segundaLigacao == "pretoFase"&& id == "L9" && id2 == "MAIN30"&& filtro=="5para6Preto"){

      let td = document.getElementById("L9");
      if(td != null && td != undefined) {
         conexacaoL11BaixoBaixo = "L9PBB"; 
      td.id = "L992"
      console.log("funcionou")
      abrirPopup(conexacaoL11BaixoBaixo)
      }
    } else 

    if(segundaLigacao == "verdeTerra"&& id == "L9"&& id2 == "MAIN31"&& filtro=="5para6Verde"){

      let td = document.getElementById("L9");
      if(td != null && td != undefined) {
         conexacaoL11BaixoBaixo = "L9VBB";  
      td.id = "L993"
      console.log("funcionou")
      abrirPopup(conexacaoL11BaixoBaixo)
      }
      
    } else

    if(segundaLigacao == "brancoRetorno"&& id == "L9"&& id2 == "MAIN32"&& filtro=="5para6Branco"){

      let td = document.getElementById("L9");
      if(td != null && td != undefined) { 
         conexacaoL11BaixoBaixo = "L9BBB";
      td.id = "L994"
      console.log("funcionou")
      abrirPopup(conexacaoL11BaixoBaixo)
      }
      
    } else
    if(segundaLigacao == "azulNeltro"&& id == "L9"&& id2 == "MAIN33"&& filtro=="5para6AzulNeltro"){

      let td = document.getElementById("L9");
      if(td != null && td != undefined) {
         conexacaoL11BaixoBaixo = "L9ABB"; 
      td.id = "L995"
      console.log("funcionou")
      abrirPopup(conexacaoL11BaixoBaixo)
      }
      
    }else

    if(segundaLigacao == "marromRetorno"&& id == "L9"&& id2 == "MAIN34"&& filtro=="5para6Marrom"){

      let td = document.getElementById("L9");
      if(td != null && td != undefined) { 
         conexacaoL11BaixoBaixo = "L9MBB"; 
         console.log("funcionou")
      td.id = "L996"
      abrirPopup(conexacaoL11BaixoBaixo)
      }
      
    }




     // SEGUNDO FIO CONECTADO 

    //1para3alto L9
   if(segundaLigacao2 == "pretoFase"&& id == "L9" && id2 == "MAIN10"&& filtro2=="1para3Preto"){

      let td = document.getElementById("L9");
      if(td!=null && td!=undefined ){
         conexacaoL11Alto = "L9PA"
      td.id = "L997"
      console.log("funcionou")
      abrirPopup(conexacaoL11Alto)
   }
    } else 

    if(segundaLigacao2 == "verdeTerra"&& id == "L9"&& id2 == "MAIN11"&& filtro2=="1para3Verde"){

      let td = document.getElementById("L9");
      if(td != null && td != undefined) {  
          conexacaoL11Alto = "L9VA"
      td.id = "L998"
      console.log("funcionou")
      abrirPopup(conexacaoL11Alto)
      }
      
    } else

    if(segundaLigacao2 == "brancoRetorno"&& id == "L9"&& id2 == "MAIN12"&& filtro2=="1para3Branco"){

      let td = document.getElementById("L9");
      if(td != null && td != undefined) {
          conexacaoL11Alto = "L9BA"  
      td.id = "L999"
      console.log("funcionou")
      abrirPopup(conexacaoL11Alto)
      }
      
    } else
    if(segundaLigacao2 == "azulNeltro"&& id == "L9"&& id2 == "MAIN13"&& filtro2=="1para3AzulNeltro"){

      let td = document.getElementById("L9");
      if(td != null && td != undefined) {
          conexacaoL11Alto = "L9AA"  
      td.id = "L9991"
      console.log("funcionou")
      abrirPopup(conexacaoL11Alto)
      }
      
    }else

    if(segundaLigacao2 == "marromRetorno"&& id == "L9"&& id2 == "MAIN14"&& filtro2=="1para3Marrom"){

      let td = document.getElementById("L9");
      if(td != null && td != undefined) {
          conexacaoL11Alto = "L9MA"  
      td.id = "L9992"
      console.log("funcionou")
      abrirPopup(conexacaoL11Alto)
      }
    }else




//2para4baixo L9 
  if(segundaLigacao2 == "pretoFase"&& id == "L9" && id2 == "MAIN15"&& filtro2=="2para4Preto"){

      let td = document.getElementById("L9");
      if(td != null && td != undefined) {
         conexacaoL11Baixo = "L9PB"  
      td.id = "L9993"
      console.log("funcionou")
      abrirPopup(conexacaoL11Baixo)
      }
      
    } else 

    if(segundaLigacao2 == "verdeTerra"&& id == "L9"&& id2 == "MAIN16"&& filtro2=="2para4Verde"){

      let td = document.getElementById("L9");
      if(td != null && td != undefined) {
         conexacaoL11Baixo = "L9VB"    
      td.id = "L9994"
      console.log("funcionou")
      abrirPopup(conexacaoL11Baixo)
      }
      
    } else

    if(segundaLigacao2 == "brancoRetorno"&& id == "L9"&& id2 == "MAIN17"&& filtro2=="2para4Branco"){

      let td = document.getElementById("L9");
      if(td != null && td != undefined) {
         conexacaoL11Baixo = "L9BB"    
      td.id = "L9995"
      console.log("funcionou")
      abrirPopup(conexacaoL11Baixo)
      }
      
    } else
    if(segundaLigacao2 == "azulNeltro"&& id == "L9"&& id2 == "MAIN18"&& filtro2=="2para4AzulNeltro"){

      let td = document.getElementById("L9");
      if(td != null && td != undefined) {
         conexacaoL11Baixo = "L9AB"    
      td.id = "L9996"
      console.log("funcionou")
      abrirPopup(conexacaoL11Baixo)
      }
      
    }else

    if(segundaLigacao2 == "marromRetorno"&& id == "L9"&& id2 == "MAIN19"&& filtro2=="2para4Marrom"){

      let td = document.getElementById("L9");
      if(td != null && td != undefined) {
         conexacaoL11Baixo = "L9MB"    
      td.id = "L9997"
      console.log("funcionou")
      abrirPopup(conexacaoL11Baixo)
      }
      
    }




    //5para6baixo L9
  if(segundaLigacao2 == "pretoFase"&& id == "L9" && id2 == "MAIN30"&& filtro2=="5para6Preto"){

      let td = document.getElementById("L9");
      if(td != null && td != undefined) {  
         conexacaoL11BaixoBaixo = "L9PBB"
      td.id = "L9998"
      console.log("funcionou")
      abrirPopup(conexacaoL11BaixoBaixo)
      }
      
    } else 

    if(segundaLigacao2 == "verdeTerra"&& id == "L9"&& id2 == "MAIN31"&& filtro2=="5para6Verde"){

      let td = document.getElementById("L9");
      if(td != null && td != undefined) { 
         conexacaoL11BaixoBaixo = "L9VBB" 
      td.id = "L9999"
      console.log("funcionou")
      abrirPopup(conexacaoL11BaixoBaixo)
      }
      
    } else

    if(segundaLigacao2 == "brancoRetorno"&& id == "L9"&& id2 == "MAIN32"&& filtro2=="5para6Branco"){

      let td = document.getElementById("L9");
      if(td != null && td != undefined) {
         conexacaoL11BaixoBaixo = "L9BBB"  
      td.id = "L99991"
      console.log("funcionou")
      abrirPopup(conexacaoL11BaixoBaixo)
      }
      
    } else
    if(segundaLigacao2 == "azulNeltro"&& id == "L9"&& id2 == "MAIN33"&& filtro2=="5para6AzulNeltro"){

      let td = document.getElementById("L9");
      if(td != null && td != undefined) {
         conexacaoL11BaixoBaixo = "L9ABB"  
      td.id = "L99992"
      console.log("funcionou")
      abrirPopup(conexacaoL11BaixoBaixo)
      }
      
    }else

    if(segundaLigacao2 == "marromRetorno"&& id == "L9"&& id2 == "MAIN34"&& filtro2=="5para6Marrom"){

      let td = document.getElementById("L9");
      if(td != null && td != undefined) {
         conexacaoL11BaixoBaixo = "L9MBB"  
      td.id = "L99993"
      console.log("funcionou")
      abrirPopup(conexacaoL11BaixoBaixo)
      }
      
    }



    //TERCEIRA COEXAO L9  //1para3baixo L9 
   if(segundaLigacao3 == "pretoFase"&& id == "L9" && id2 == "MAIN10"&& filtro3=="1para3Preto"){
      
      let td = document.getElementById("L9");
      if(td != null && td != undefined) { 
      conexacaoL11BaixoBaixo = "L9PBB";
      td.id = "L99994"
      console.log("funcionou")
      abrirPopup(conexacaoL11BaixoBaixo)
   }
    } else 

    if(segundaLigacao3 == "verdeTerra"&& id == "L9"&& id2 == "MAIN11"&& filtro3=="1para3Verde"){
     
      let td = document.getElementById("L9");
      if(td != null && td != undefined) { 
         conexacaoL11BaixoBaixo = "L9VBB"; 
      td.id = "L99995"
      console.log("funcionou")
      abrirPopup(conexacaoL11BaixoBaixo)
    }
    }else

    if(segundaLigacao3 == "brancoRetorno"&& id == "L9"&& id2 == "MAIN12"&& filtro3=="1para3Branco"){

      let td = document.getElementById("L9");
      if(td != null && td != undefined) { 
         conexacaoL11BaixoBaixo = "L9BBB";  
      td.id = "L99996"
      console.log("funcionou")
      abrirPopup(conexacaoL11BaixoBaixo)
      }
      
    } else
    if(segundaLigacao3 == "azulNeltro"&& id == "L9"&& id2 == "MAIN13"&& filtro3=="1para3AzulNeltro"){

      let td = document.getElementById("L9");
      if(td != null && td != undefined) {  
         conexacaoL11BaixoBaixo = "L9ABB";
      td.id = "L99997"
      console.log("funcionou")
      abrirPopup(conexacaoL11BaixoBaixo)
      }
      
    }else

    if(segundaLigacao3 == "marromRetorno"&& id == "L9"&& id2 == "MAIN14"&& filtro3=="1para3Marrom"){

      let td = document.getElementById("L9");
      if(td != null && td != undefined) { 
         conexacaoL11BaixoBaixo = "L9MBB"; 
      td.id = "L99998"
      console.log("funcionou")
      abrirPopup(conexacaoL11BaixoBaixo)
      }
      
    }else




    //TERCEIRA COEXAO L9  //2para4baixo L9 
   if(segundaLigacao3 == "pretoFase"&& id == "L9" && id2 == "MAIN15"&& filtro3=="2para4Preto"){
      
      let td = document.getElementById("L9");
      if(td != null && td != undefined) { 
      conexacaoL11BaixoBaixo = "L9PBB";
      td.id = "L99999"
      console.log("funcionou")
      abrirPopup(conexacaoL11BaixoBaixo)
   }
    } else 

    if(segundaLigacao3 == "verdeTerra"&& id == "L9"&& id2 == "MAIN16"&& filtro3=="2para4Verde"){
     
      let td = document.getElementById("L9");
      if(td != null && td != undefined) { 
         conexacaoL11BaixoBaixo = "L9VBB"; 
      td.id = "L999991"
      console.log("funcionou")
      abrirPopup(conexacaoL11BaixoBaixo)
    }
    }else

    if(segundaLigacao3 == "brancoRetorno"&& id == "L9"&& id2 == "MAIN17"&& filtro3=="2para4Branco"){
console.log("funcionou")
      let td = document.getElementById("L9");
      if(td != null && td != undefined) { 
         conexacaoL11BaixoBaixo = "L9BBB";  
      td.id = "L999992"
      console.log("funcionou")
      abrirPopup(conexacaoL11BaixoBaixo)
      }
      
    } else
    if(segundaLigacao3 == "azulNeltro"&& id == "L9"&& id2 == "MAIN18"&& filtro3=="2para4AzulNeltro"){

      let td = document.getElementById("L9");
      if(td != null && td != undefined) {  
         conexacaoL11BaixoBaixo = "L9ABB";
      td.id = "L999993"
      console.log("funcionou")
      abrirPopup(conexacaoL11BaixoBaixo)
      }
      
    }else

    if(segundaLigacao3 == "marromRetorno"&& id == "L9"&& id2 == "MAIN19"&& filtro3=="2para4Marrom"){

      let td = document.getElementById("L9");
      if(td != null && td != undefined) { 
         conexacaoL11BaixoBaixo = "L9MBB"; 
      td.id = "L999994"
      console.log("funcionou")
      abrirPopup(conexacaoL11BaixoBaixo)
      }
      
    }
else



    //TERCEIRA COEXAO L9  //5para6baixo L9 
   if(segundaLigacao3 == "pretoFase"&& id == "L9" && id2 == "MAIN30"&& filtro3=="5para6Preto"){
      
      let td = document.getElementById("L9");
      if(td != null && td != undefined) { 
      conexacaoL11BaixoBaixo = "L9PBB";
      td.id = "L999995"
      console.log("funcionou")
      abrirPopup(conexacaoL11BaixoBaixo)
   }
    } else 

    if(segundaLigacao3 == "verdeTerra"&& id == "L9"&& id2 == "MAIN31"&& filtro3=="5para6Verde"){
     
      let td = document.getElementById("L9");
      if(td != null && td != undefined) { 
         conexacaoL11BaixoBaixo = "L9VBB"; 
      td.id = "L999996"
      console.log("funcionou")
      abrirPopup(conexacaoL11BaixoBaixo)
    }
    }else

    if(segundaLigacao3 == "brancoRetorno"&& id == "L9"&& id2 == "MAIN32"&& filtro3=="5para6Branco"){

      let td = document.getElementById("L9");
      if(td != null && td != undefined) { 
         conexacaoL11BaixoBaixo = "L9BBB";  
      td.id = "L999997"
      console.log("funcionou")
      abrirPopup(conexacaoL11BaixoBaixo)
      }
      
    } else
    if(segundaLigacao3 == "azulNeltro"&& id == "L9"&& id2 == "MAIN33"&& filtro3=="5para6AzulNeltro"){

      let td = document.getElementById("L9");
      if(td != null && td != undefined) {  
         conexacaoL11BaixoBaixo = "L9ABB";
      td.id = "L999998"
      console.log("funcionou")
      abrirPopup(conexacaoL11BaixoBaixo)
      }
      
    }else

    if(segundaLigacao3 == "marromRetorno"&& id == "L9"&& id2 == "MAIN34"&& filtro3=="5para6Marrom"){

      let td = document.getElementById("L9");
      if(td != null && td != undefined) { 
         conexacaoL11BaixoBaixo = "L9MBB"; 
      td.id = "L999999"
      console.log("funcionou")
      abrirPopup(conexacaoL11BaixoBaixo)
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




///// CHUVEIRO CONEXAO
const chuveiro = document.querySelectorAll("[id]");


chuveiro.forEach(it => {
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

     console.log(chuveiro)
     console.log(it.id)
       
   if(id == "L3" || id == "L4" ){

      chuveiroConect(id,id2)
    return id
   }


    });
}


);








function chuveiroConect(id,id2){
   
   console.log(id)
   console.log(id2)



   
   //1para3alto primeiro fio conectado L3
   if(segundaLigacao == "pretoFase"&& id == "L3" && id2 == "MAIN10" && filtro=="1para3Preto"){
      
      let it = document.getElementById("L3");
      if(it != null && it != undefined) { 
      conexacaoL11Alto = "L3PA";
      console.log("fincionou")
      it.id = "L31"
      abrirPopup(conexacaoL11Alto)
   }
    } else 

    if(segundaLigacao == "verdeTerra"&& id == "L3"&& id2 == "MAIN11"&& filtro=="1para3Verde"){
     
      let it = document.getElementById("L3");
      if(it != null && it != undefined) { 
         conexacaoL11Alto = "L3VA"; 
         console.log("fincionou")
      it.id = "L32"
      abrirPopup(conexacaoL11Alto)
    }
    } else

    if(segundaLigacao == "brancoRetorno"&& id == "L3"&& id2 == "MAIN12"&& filtro=="1para3Branco"){

      let it = document.getElementById("L3");
      if(it != null && it != undefined) { 
         conexacaoL11Alto = "L3BA"; 
         console.log("fincionou") 
      it.id = "L33"
      abrirPopup(conexacaoL11Alto)
      }
      
    } else
    if(segundaLigacao == "azulNeltro"&& id == "L3"&& id2 == "MAIN13"&& filtro=="1para3AzulNeltro"){

      let it = document.getElementById("L3");
      if(it != null && it != undefined) {  
         conexacaoL11Alto = "L3AA";
         console.log("fincionou")
      it.id = "L34"
      abrirPopup(conexacaoL11Alto)
      }
      
    }else

    if(segundaLigacao == "marromRetorno"&& id == "L3"&& id2 == "MAIN14"&& filtro=="1para3Marrom"){

      let it = document.getElementById("L3");
      if(it != null && it != undefined) { 
         conexacaoL11Alto = "L3MA"; 
         console.log("fincionou")
      it.id = "L35"
      abrirPopup(conexacaoL11Alto)
      }
      
    }else




//2para4baixo primeiro fio conectado L3
  if(segundaLigacao == "pretoFase"&& id == "L3" && id2 == "MAIN15"&& filtro=="2para4Preto"){

      let it = document.getElementById("L3");
      if(it != null && it != undefined) {
         conexacaoL11Baixo = "L3PB"; 
         console.log("fincionou")
      it.id = "L36"
      abrirPopup(conexacaoL11Baixo)
      }
    } else 

    if(segundaLigacao == "verdeTerra"&& id == "L3"&& id2 == "MAIN16"&& filtro=="2para4Verde"){

      let it = document.getElementById("L3");
      if(it != null && it != undefined) {
         conexacaoL11Baixo = "L3VB";  
         console.log("fincionou")
      it.id = "L37"
      abrirPopup(conexacaoL11Baixo)
      }
      
    } else

    if(segundaLigacao == "brancoRetorno"&& id == "L3"&& id2 == "MAIN17"&& filtro=="2para4Branco"){

      let it = document.getElementById("L3");
      if(it != null && it != undefined) { 
         conexacaoL11Baixo = "L3BB";
         console.log("fincionou")
      it.id = "L38"
      abrirPopup(conexacaoL11Baixo)
      }
      
    } else
    if(segundaLigacao == "azulNeltro"&& id == "L3"&& id2 == "MAIN18"&& filtro=="2para4AzulNeltro"){

      let it = document.getElementById("L3");
      if(it != null && it != undefined) {
         conexacaoL11Baixo = "L3AB"; 
         console.log("fincionou")
      it.id = "L39"
      abrirPopup(conexacaoL11Baixo)
      }
      
    }else

    if(segundaLigacao == "marromRetorno"&& id == "L3"&& id2 == "MAIN19"&& filtro=="2para4Marrom"){

      let it = document.getElementById("L3");
      if(it != null && it != undefined) { 
         conexacaoL11Baixo = "L3MB"; 
         console.log("fincionou")
      it.id = "L391"
      abrirPopup(conexacaoL11Baixo)
      }
      
    }



    //5para6 primeiro fio conectado L3
  if(segundaLigacao == "pretoFase"&& id == "L3" && id2 == "MAIN30"&& filtro=="5para6Preto"){

      let it = document.getElementById("L3");
      if(it != null && it != undefined) {
         conexacaoL11BaixoBaixo = "L3PBB"; 
         console.log("fincionou")
      it.id = "L392"
      abrirPopup(conexacaoL11BaixoBaixo)
      }
    } else 

    if(segundaLigacao == "verdeTerra"&& id == "L3"&& id2 == "MAIN31"&& filtro=="5para6Verde"){

      let it = document.getElementById("L3");
      if(it != null && it != undefined) {
         conexacaoL11BaixoBaixo = "L3VBB";  
         console.log("fincionou")
      it.id = "L393"
      abrirPopup(conexacaoL11BaixoBaixo)
      }
      
    } else

    if(segundaLigacao == "brancoRetorno"&& id == "L3"&& id2 == "MAIN32"&& filtro=="5para6Branco"){

      let it = document.getElementById("L3");
      if(it != null && it != undefined) { 
         conexacaoL11BaixoBaixo = "L3BBB";
         console.log("fincionou")
      it.id = "L394"
      abrirPopup(conexacaoL11BaixoBaixo)
      }
      
    } else
    if(segundaLigacao == "azulNeltro"&& id == "L3"&& id2 == "MAIN33"&& filtro=="5para6AzulNeltro"){

      let it = document.getElementById("L3");
      if(it != null && it != undefined) {
         conexacaoL11BaixoBaixo = "L3ABB"; 
         console.log("fincionou")
      it.id = "L395"
      abrirPopup(conexacaoL11BaixoBaixo)
      }
      
    }else

    if(segundaLigacao == "marromRetorno"&& id == "L3"&& id2 == "MAIN34"&& filtro=="5para6Marrom"){

      let it = document.getElementById("L3");
      if(it != null && it != undefined) { 
         conexacaoL11BaixoBaixo = "L3MBB"; 
         console.log("fincionou")
      it.id = "L396"
      abrirPopup(conexacaoL11BaixoBaixo)
      }
      
    }




    else
//equivale a segunda conexao   1para3 alta L4
    if(segundaLigacao == "pretoFase"&& id == "L4" && id2 == "MAIN10"&& filtro=="1para3Preto"){
      
      let it = document.getElementById("L4");
      if(it != null && it != undefined) {  
      conexacaoL12Alto = "L4PA";
      console.log("fincionou")
      it.id = "L41"
      abrirPopup(conexacaoL12Alto)
    }
    } else 

    if(segundaLigacao == "verdeTerra"&& id == "L4"&& id2 == "MAIN11"&& filtro=="1para3Verde"){
     
      let it = document.getElementById("L4");
      if(it != null && it != undefined) {  
         conexacaoL12Alto = "L4VA";
         console.log("fincionou")
      it.id = "L42"
      abrirPopup(conexacaoL12Alto)
      }
    } else

    if(segundaLigacao == "brancoRetorno"&& id == "L4"&& id2 == "MAIN12"&& filtro=="1para3Branco"){

      let it = document.getElementById("L4");
      if(it != null && it != undefined) {  
         conexacaoL12Alto = "L4BA";
         console.log("fincionou")
      it.id = "L43"
      abrirPopup(conexacaoL12Alto)
      }
    } else
    if(segundaLigacao == "azulNeltro"&& id == "L4"&& id2 == "MAIN13"&& filtro=="1para3AzulNeltro"){

      let it = document.getElementById("L4");
    if(it != null && it != undefined) { 
      conexacaoL12Alto = "L4AA"; 
      console.log("fincionou")
      it.id = "L44"
      abrirPopup(conexacaoL12Alto)
    }
    }else

    if(segundaLigacao == "marromRetorno"&& id == "L4"&& id2 == "MAIN14"&& filtro=="1para3Marrom"){

      let it = document.getElementById("L4");
      if(it != null && it != undefined) {  
          conexacaoL12Alto = "L4MA";
          console.log("fincionou")
      it.id = "L45"
      abrirPopup(conexacaoL12Alto)
      }
      
    }else




//equivale a segunda conexao   2para4 baixa L4
  if(segundaLigacao == "pretoFase"&& id == "L4" && id2 == "MAIN15"&& filtro=="2para4Preto"){

      let it = document.getElementById("L4");
      if(it != null && it != undefined) {
         conexacaoL12Baixo = "L4PB";  
         console.log("fincionou")
      it.id = "L46"
      abrirPopup(conexacaoL12Baixo)
      }
      
    } else 

    if(segundaLigacao == "verdeTerra"&& id == "L4"&& id2 == "MAIN16"&& filtro=="2para4Verde"){

      let it = document.getElementById("L4");
      if(it != null && it != undefined) {
         conexacaoL12Baixo = "L4VB";  
         console.log("fincionou")
      it.id = "L47"
      abrirPopup(conexacaoL12Baixo)
      }
      
    } else

    if(segundaLigacao == "brancoRetorno"&& id == "L4"&& id2 == "MAIN17"&& filtro=="2para4Branco"){

      let it = document.getElementById("L4");
      if(it != null && it != undefined) {  
         conexacaoL12Baixo = "L4BB";
         console.log("fincionou")
      it.id = "L48"
      abrirPopup(conexacaoL12Baixo)
      }
      
    } else
    if(segundaLigacao == "azulNeltro"&& id == "L4"&& id2 == "MAIN18"&& filtro=="2para4AzulNeltro"){

      let it = document.getElementById("L4");
      if(it != null && it != undefined) {
         conexacaoL12Baixo = "L4AB";  
         console.log("fincionou")
      it.id = "L49"
      abrirPopup(conexacaoL12Baixo)
      }
      
    }else

    if(segundaLigacao == "marromRetorno"&& id == "L4"&& id2 == "MAIN19"&& filtro=="2para4Marrom"){

      let it = document.getElementById("L4");
      if(it != null && it != undefined) { 
         conexacaoL12Baixo = "L4MB"; 
         console.log("fincionou")
      it.id = "L491"
      abrirPopup(conexacaoL12Baixo)
      }
      
    }


    //5para6 baixa baixa  L4
  if(segundaLigacao == "pretoFase"&& id == "L4" && id2 == "MAIN30"&& filtro=="5para6Preto"){

      let it = document.getElementById("L4");
      if(it != null && it != undefined) {
         conexacaoL12BaixoBaixo = "L4PBB"; 
         console.log("fincionou")
      it.id = "L492"
      abrirPopup(conexacaoL12BaixoBaixo)
      }
    } else 

    if(segundaLigacao == "verdeTerra"&& id == "L4"&& id2 == "MAIN31"&& filtro=="5para6Verde"){

      let it = document.getElementById("L4");
      if(it != null && it != undefined) {
         conexacaoL12BaixoBaixo = "L4VBB"; 
         console.log("fincionou") 
      it.id = "L493"
      abrirPopup(conexacaoL12BaixoBaixo)
      }
      
    } else

    if(segundaLigacao == "brancoRetorno"&& id == "L4"&& id2 == "MAIN32"&& filtro=="5para6Branco"){

      let it = document.getElementById("L4");
      if(it != null && it != undefined) { 
         conexacaoL12BaixoBaixo = "L4BBB";
         console.log("fincionou")
      it.id = "L494"
      abrirPopup(conexacaoL12BaixoBaixo)
      }
      
    } else
    if(segundaLigacao == "azulNeltro"&& id == "L4"&& id2 == "MAIN33"&& filtro=="5para6AzulNeltro"){

      let it = document.getElementById("L4");
      if(it != null && it != undefined) {
         conexacaoL12BaixoBaixo = "L4ABB"; 
         console.log("fincionou")
      it.id = "L495"
      abrirPopup(conexacaoL12BaixoBaixo)
      }
      
    }else

    if(segundaLigacao == "marromRetorno"&& id == "L4"&& id2 == "MAIN34"&& filtro=="5para6Marrom"){

      let it = document.getElementById("L4");
      if(it != null && it != undefined) { 
         conexacaoL12BaixoBaixo = "L4MBB"; 
         console.log("fincionou")
      it.id = "L496"
      abrirPopup(conexacaoL12BaixoBaixo)
      }
      
    }

     









   // SEGUNDO FIO CONECTADO 

    //1para3alto L3
   if(segundaLigacao2 == "pretoFase"&& id == "L3" && id2 == "MAIN10"&& filtro2=="1para3Preto"){

      let it = document.getElementById("L3");
      if(it!=null && it!=undefined ){
         conexacaoL11Alto = "L3PA"
         console.log("fincionou")
      it.id = "L397"
      abrirPopup(conexacaoL11Alto)
   }
    } else 

    if(segundaLigacao2 == "verdeTerra"&& id == "L3"&& id2 == "MAIN11"&& filtro2=="1para3Verde"){

      let it = document.getElementById("L3");
      if(it != null && it != undefined) {  
          conexacaoL11Alto = "L3VA"
          console.log("fincionou")
      it.id = "L398"
      abrirPopup(conexacaoL11Alto)
      }
      
    } else

    if(segundaLigacao2 == "brancoRetorno"&& id == "L3"&& id2 == "MAIN12"&& filtro2=="1para3Branco"){

      let it = document.getElementById("L3");
      if(it != null && it != undefined) {
          conexacaoL11Alto = "L3BA"  
          console.log("fincionou")
      it.id = "L399"
      abrirPopup(conexacaoL11Alto)
      }
      
    } else
    if(segundaLigacao2 == "azulNeltro"&& id == "L3"&& id2 == "MAIN13"&& filtro2=="1para3AzulNeltro"){

      let it = document.getElementById("L3");
      if(it != null && it != undefined) {
          conexacaoL11Alto = "L3AA"  
          console.log("fincionou")
      it.id = "L3991"
      abrirPopup(conexacaoL11Alto)
      }
      
    }else

    if(segundaLigacao2 == "marromRetorno"&& id == "L3"&& id2 == "MAIN14"&& filtro2=="1para3Marrom"){

      let it = document.getElementById("L3");
      if(it != null && it != undefined) {
          conexacaoL11Alto = "L3MA"  
          console.log("fincionou")
      it.id = "L3992"
      abrirPopup(conexacaoL11Alto)
      }
    }else




//2para4baixo L3 
  if(segundaLigacao2 == "pretoFase"&& id == "L3" && id2 == "MAIN15"&& filtro2=="2para4Preto"){

      let it = document.getElementById("L3");
      if(it != null && it != undefined) {
         conexacaoL11Baixo = "L3PB"  
         console.log("fincionou")
      it.id = "L3993"
      abrirPopup(conexacaoL11Baixo)
      }
      
    } else 

    if(segundaLigacao2 == "verdeTerra"&& id == "L3"&& id2 == "MAIN16"&& filtro2=="2para4Verde"){

      let it = document.getElementById("L3");
      if(it != null && it != undefined) {
         conexacaoL11Baixo = "L3VB"   
         console.log("fincionou") 
      it.id = "L3994"
      abrirPopup(conexacaoL11Baixo)
      }
      
    } else

    if(segundaLigacao2 == "brancoRetorno"&& id == "L3"&& id2 == "MAIN17"&& filtro2=="2para4Branco"){

      let it = document.getElementById("L3");
      if(it != null && it != undefined) {
         conexacaoL11Baixo = "L3BB"  
         console.log("fincionou")  
      it.id = "L3995"
      abrirPopup(conexacaoL11Baixo)
      }
      
    } else
    if(segundaLigacao2 == "azulNeltro"&& id == "L3"&& id2 == "MAIN18"&& filtro2=="2para4AzulNeltro"){

      let it = document.getElementById("L3");
      if(it != null && it != undefined) {
         conexacaoL11Baixo = "L3AB"  
         console.log("fincionou")  
      it.id = "L3996"
      abrirPopup(conexacaoL11Baixo)
      }
      
    }else

    if(segundaLigacao2 == "marromRetorno"&& id == "L3"&& id2 == "MAIN19"&& filtro2=="2para4Marrom"){

      let it = document.getElementById("L3");
      if(it != null && it != undefined) {
         conexacaoL11Baixo = "L3MB"    
         console.log("fincionou")
      it.id = "L3997"
      abrirPopup(conexacaoL11Baixo)
      }
      
    }




    //5para6baixo L3 
  if(segundaLigacao2 == "pretoFase"&& id == "L3" && id2 == "MAIN30"&& filtro2=="5para6Preto"){

      let it = document.getElementById("L3");
      if(it != null && it != undefined) {  
         conexacaoL11BaixoBaixo = "L3PBB"
         console.log("fincionou")
      it.id = "L3998"
      abrirPopup(conexacaoL11BaixoBaixo)
      }
      
    } else 

    if(segundaLigacao2 == "verdeTerra"&& id == "L3"&& id2 == "MAIN31"&& filtro2=="5para6Verde"){

      let it = document.getElementById("L3");
      if(it != null && it != undefined) { 
         conexacaoL11BaixoBaixo = "L3VBB" 
         console.log("fincionou")
      it.id = "L3999"
      abrirPopup(conexacaoL11BaixoBaixo)
      }
      
    } else

    if(segundaLigacao2 == "brancoRetorno"&& id == "L3"&& id2 == "MAIN32"&& filtro2=="5para6Branco"){

      let it = document.getElementById("L3");
      if(it != null && it != undefined) {
         conexacaoL11BaixoBaixo = "L3BBB"  
         console.log("fincionou")
      it.id = "L39991"
      abrirPopup(conexacaoL11BaixoBaixo)
      }
      
    } else
    if(segundaLigacao2 == "azulNeltro"&& id == "L3"&& id2 == "MAIN33"&& filtro2=="5para6AzulNeltro"){

      let it = document.getElementById("L3");
      if(it != null && it != undefined) {
         conexacaoL11BaixoBaixo = "L3ABB"  
         console.log("fincionou")
      it.id = "L39992"
      abrirPopup(conexacaoL11BaixoBaixo)
      }
      
    }else

    if(segundaLigacao2 == "marromRetorno"&& id == "L3"&& id2 == "MAIN34"&& filtro2=="5para6Marrom"){

      let it = document.getElementById("L3");
      if(it != null && it != undefined) {
         conexacaoL11BaixoBaixo = "L3MBB"  
         console.log("fincionou")
      it.id = "L39993"
      abrirPopup(conexacaoL11BaixoBaixo)
      }
      
    }








    else
//equivale a segunda conexao   1para3 alta  L4
    if(segundaLigacao2 == "pretoFase"&& id == "L4" && id2 == "MAIN10"&& filtro2=="1para3Preto"){

      let it = document.getElementById("L4");
      if(it != null){ 
      it.id = "L497"
      }
    } else 

    if(segundaLigacao2 == "verdeTerra"&& id == "L4"&& id2 == "MAIN11"&& filtro2=="1para3Verde"){

      let it = document.getElementById("L4");
      if(it != null && it != undefined) {  
      it.id = "L498"
      }
    } else

    if(segundaLigacao2 == "brancoRetorno"&& id == "L4"&& id2 == "MAIN12"&& filtro2=="1para3Branco"){

      let it = document.getElementById("L4");
      if(it != null && it != undefined) {  
      it.id = "L499"
      }
    } else
    if(segundaLigacao2 == "azulNeltro"&& id == "L4"&& id2 == "MAIN13"&& filtro2=="1para3AzulNeltro"){

      let it = document.getElementById("L4");
      if(it != null && it != undefined) {  
      it.id = "L4991"
      }
    }else

    if(segundaLigacao2 == "marromRetorno"&& id == "L4"&& id2 == "MAIN14"&& filtro2=="1para3Marrom"){

      let it = document.getElementById("L4");
      if(it != null && it != undefined) {  
      it.id = "L4992"
      }
      
    }else




//equivale a segunda conexao   2para4 baixa  L4
  if(segundaLigacao2 == "pretoFase"&& id == "L4" && id2 == "MAIN15"&& filtro2=="2para4Preto"){

      let it = document.getElementById("L4");
      if(it != null && it != undefined) {  
      it.id = "L4993"
      }
      
    } else 

    if(segundaLigacao2 == "verdeTerra"&& id == "L4"&& id2 == "MAIN16"&& filtro2=="2para4Verde"){

      let it = document.getElementById("L4");
      if(it != null && it != undefined) {  
      it.id = "L4994"
      }
      
    } else

    if(segundaLigacao2 == "brancoRetorno"&& id == "L4"&& id2 == "MAIN17"&& filtro2=="2para4Branco"){

      let it = document.getElementById("L4");
      if(it != null && it != undefined) {  
      it.id = "L4995"
      }
      
    } else
    if(segundaLigacao2 == "azulNeltro"&& id == "L4"&& id2 == "MAIN18"&& filtro2=="2para4AzulNeltro"){

      let it = document.getElementById("L4");
      if(it != null && it != undefined) {  
      it.id = "L4996"
      }
      
    }else

    if(segundaLigacao2 == "marromRetorno"&& id == "L4"&& id2 == "MAIN19"&& filtro2=="2para4Marrom"){

      let it = document.getElementById("L4");
      if(it != null && it != undefined) {  
      it.id = "L4997"
      }
      
    }else




    //equivale a segunda conexao   5para6 baixa  L4
  if(segundaLigacao2 == "pretoFase"&& id == "L4" && id2 == "MAIN30"&& filtro2=="5para6Preto"){

      let it = document.getElementById("L4");
      if(it != null && it != undefined) {  
      it.id = "L4998"
      }
      
    } else 

    if(segundaLigacao2 == "verdeTerra"&& id == "L4"&& id2 == "MAIN31"&& filtro2=="5para6Verde"){

      let it = document.getElementById("L4");
      if(it != null && it != undefined) {  
      it.id = "L4999"
      }
      
    } else

    if(segundaLigacao2 == "brancoRetorno"&& id == "L4"&& id2 == "MAIN32"&& filtro2=="5para6Branco"){

      let it = document.getElementById("L4");
      if(it != null && it != undefined) {  
      it.id = "L49991"
      }
      
    } else
    if(segundaLigacao2 == "azulNeltro"&& id == "L4"&& id2 == "MAIN33"&& filtro2=="5para6AzulNeltro"){

      let it = document.getElementById("L4");
      if(it != null && it != undefined) {  
      it.id = "L49992"
      }
      
    }else

    if(segundaLigacao2 == "marromRetorno"&& id == "L4"&& id2 == "MAIN34"&& filtro2=="5para6Marrom"){

      let it = document.getElementById("L4");
      if(it != null && it != undefined) {  
      it.id = "L49993"
      }
      
    }else



    //TERCEIRA COEXAO L3  //1para3baixo L3 
   if(segundaLigacao3 == "pretoFase"&& id == "L3" && id2 == "MAIN10"&& filtro3=="1para3Preto"){
      
      let it = document.getElementById("L3");
      if(it != null && it != undefined) { 
      conexacaoL11Alto = "L3PA";
      it.id = "L39994"
      abrirPopup(conexacaoL11Alto)
   }
    } else 

    if(segundaLigacao3 == "verdeTerra"&& id == "L3"&& id2 == "MAIN11"&& filtro3=="1para3Verde"){
     
      let it = document.getElementById("L3");
      if(it != null && it != undefined) { 
         conexacaoL11Alto = "L3VA"; 
      it.id = "L39995"
      abrirPopup(conexacaoL11Alto)
    }
    }else

    if(segundaLigacao3 == "brancoRetorno"&& id == "L3"&& id2 == "MAIN12"&& filtro3=="1para3Branco"){

      let it = document.getElementById("L3");
      if(it != null && it != undefined) { 
         conexacaoL11Alto = "L3BA";  
      it.id = "L39996"
      abrirPopup(conexacaoL11Alto)
      }
      
    } else
    if(segundaLigacao3 == "azulNeltro"&& id == "L3"&& id2 == "MAIN13"&& filtro3=="1para3AzulNeltro"){

      let it = document.getElementById("L3");
      if(it != null && it != undefined) {  
         conexacaoL11Alto = "L3AA";
      it.id = "L39997"
      abrirPopup(conexacaoL11Alto)
      }
      
    }else

    if(segundaLigacao3 == "marromRetorno"&& id == "L3"&& id2 == "MAIN14"&& filtro3=="1para3Marrom"){

      let it = document.getElementById("L3");
      if(it != null && it != undefined) { 
         conexacaoL11Alto = "L3MA"; 
      it.id = "L39998"
      abrirPopup(conexacaoL11Alto)
      }
      
    }else




    //TERCEIRA COEXAO L3  //2para4baixo L3 
   if(segundaLigacao3 == "pretoFase"&& id == "L3" && id2 == "MAIN15"&& filtro3=="2para4Preto"){
      
      let it = document.getElementById("L3");
      if(it != null && it != undefined) { 
      conexacaoL11Baixo = "L3PB";
      it.id = "L39999"
      abrirPopup(conexacaoL11Baixo)
   }
    } else 

    if(segundaLigacao3 == "verdeTerra"&& id == "L3"&& id2 == "MAIN16"&& filtro3=="2para4Verde"){
     
      let it = document.getElementById("L3");
      if(it != null && it != undefined) { 
         conexacaoL11Baixo = "L3VB"; 
      it.id = "L399991"
      abrirPopup(conexacaoL11Baixo)
    }
    }else

    if(segundaLigacao3 == "brancoRetorno"&& id == "L3"&& id2 == "MAIN17"&& filtro3=="2para4Branco"){

      let it = document.getElementById("L3");
      if(it != null && it != undefined) { 
         conexacaoL11Baixo = "L3BB";  
      it.id = "L399992"
      abrirPopup(conexacaoL11Baixo)
      }
      
    } else
    if(segundaLigacao3 == "azulNeltro"&& id == "L3"&& id2 == "MAIN18"&& filtro3=="2para4AzulNeltro"){

      let it = document.getElementById("L3");
      if(it != null && it != undefined) {  
         conexacaoL11Baixo = "L3AB";
      it.id = "L399993"
      abrirPopup(conexacaoL11Baixo)
      }
      
    }else

    if(segundaLigacao3 == "marromRetorno"&& id == "L3"&& id2 == "MAIN19"&& filtro3=="2para4Marrom"){

      let it = document.getElementById("L3");
      if(it != null && it != undefined) { 
         conexacaoL11Baixo = "L3MB"; 
      it.id = "L399994"
      abrirPopup(conexacaoL11Baixo)
      }
      
    }




    //TERCEIRA COEXAO L3  //5para6baixo L3 
   if(segundaLigacao3 == "pretoFase"&& id == "L3" && id2 == "MAIN30"&& filtro3=="5para6Preto"){
      
      let it = document.getElementById("L3");
      if(it != null && it != undefined) { 
      conexacaoL11BaixoBaixo = "L3PBB";
      it.id = "L399995"
      abrirPopup(conexacaoL11BaixoBaixo)
   }
    } else 

    if(segundaLigacao3 == "verdeTerra"&& id == "L3"&& id2 == "MAIN31"&& filtro3=="5para6Verde"){
     
      let it = document.getElementById("L3");
      if(it != null && it != undefined) { 
         conexacaoL11BaixoBaixo = "L3VBB"; 
      it.id = "L399996"
      abrirPopup(conexacaoL11BaixoBaixo)
    }
    }else

    if(segundaLigacao3 == "brancoRetorno"&& id == "L3"&& id2 == "MAIN32"&& filtro3=="5para6Branco"){

      let it = document.getElementById("L3");
      if(it != null && it != undefined) { 
         conexacaoL11BaixoBaixo = "L3BBB";  
      it.id = "L399997"
      abrirPopup(conexacaoL11BaixoBaixo)
      }
      
    } else
    if(segundaLigacao3 == "azulNeltro"&& id == "L3"&& id2 == "MAIN33"&& filtro3=="5para6AzulNeltro"){

      let it = document.getElementById("L3");
      if(it != null && it != undefined) {  
         conexacaoL11BaixoBaixo = "L3ABB";
      it.id = "L399998"
      abrirPopup(conexacaoL11BaixoBaixo)
      }
      
    }else

    if(segundaLigacao3 == "marromRetorno"&& id == "L3"&& id2 == "MAIN34"&& filtro3=="5para6Marrom"){

      let it = document.getElementById("L3");
      if(it != null && it != undefined) { 
         conexacaoL11BaixoBaixo = "L3MBB"; 
      it.id = "L399999"
      abrirPopup(conexacaoL11BaixoBaixo)
      }
      
    }



    else






     //TERCEIRA COEXAO L4  //1para3baixo L4
   if(segundaLigacao3 == "pretoFase"&& id == "L4" && id2 == "MAIN10"&& filtro3=="1para3Preto"){
      
      let it = document.getElementById("L4");
      if(it != null && it != undefined) { 
      conexacaoL12Alto = "L4PA";
      it.id = "L49994"
      abrirPopup(conexacaoL12Alto)
   }
    } else 

    if(segundaLigacao3 == "verdeTerra"&& id == "L4"&& id2 == "MAIN11"&& filtro3=="1para3Verde"){
     
      let it = document.getElementById("L4");
      if(it != null && it != undefined) { 
         conexacaoL12Alto = "L4VA"; 
      it.id = "L49995"
      abrirPopup(conexacaoL12Alto)
    }
    }else

    if(segundaLigacao3 == "brancoRetorno"&& id == "L4"&& id2 == "MAIN12"&& filtro3=="1para3Branco"){

      let it = document.getElementById("L4");
      if(it != null && it != undefined) { 
         conexacaoL12Alto = "L4BA";  
      it.id = "L49996"
      abrirPopup(conexacaoL12Alto)
      }
      
    } else
    if(segundaLigacao3 == "azulNeltro"&& id == "L4"&& id2 == "MAIN13"&& filtro3=="1para3AzulNeltro"){

      let it = document.getElementById("L4");
      if(it != null && it != undefined) {  
         conexacaoL12Alto = "L4AA";
      it.id = "L49997"
      abrirPopup(conexacaoL12Alto)
      }
      
    }else

    if(segundaLigacao3 == "marromRetorno"&& id == "L4"&& id2 == "MAIN14"&& filtro3=="1para3Marrom"){

      let it = document.getElementById("L4");
      if(it != null && it != undefined) { 
         conexacaoL12Alto = "L4MA"; 
      it.id = "L49998"
      abrirPopup(conexacaoL12Alto)
      }
      
    }else



    //TERCEIRA COEXAO L4  //2para4baixo L4 
   if(segundaLigacao3 == "pretoFase"&& id == "L4" && id2 == "MAIN15"&& filtro3=="2para4Preto"){
      
      let it = document.getElementById("L4");
      if(it != null && it != undefined) { 
      conexacaoL12Baixo = "L4PB";
      it.id = "L49999"
      abrirPopup(conexacaoL12Baixo)
   }
    } else 

    if(segundaLigacao3 == "verdeTerra"&& id == "L4"&& id2 == "MAIN16"&& filtro3=="2para4Verde"){
     
      let it = document.getElementById("L4");
      if(it != null && it != undefined) { 
         conexacaoL12Baixo = "L4VB"; 
      it.id = "L499991"
      abrirPopup(conexacaoL12Baixo)
    }
    }else

    if(segundaLigacao3 == "brancoRetorno"&& id == "L4"&& id2 == "MAIN17"&& filtro3=="2para4Branco"){

      let it = document.getElementById("L4");
      if(it != null && it != undefined) { 
         conexacaoL12Baixo = "L4BB";  
      it.id = "L499992"
      abrirPopup(conexacaoL12Baixo)
      }
      
    } else
    if(segundaLigacao3 == "azulNeltro"&& id == "L4"&& id2 == "MAIN18"&& filtro3=="2para4AzulNeltro"){

      let it = document.getElementById("L4");
      if(it != null && it != undefined) {  
         conexacaoL12Baixo = "L4AB";
      it.id = "L499993"
      abrirPopup(conexacaoL12Baixo)
      }
      
    }else

    if(segundaLigacao3 == "marromRetorno"&& id == "L4"&& id2 == "MAIN19"&& filtro3=="2para4Marrom"){

      let it = document.getElementById("L4");
      if(it != null && it != undefined) { 
         conexacaoL12Baixo = "L4MB"; 
      it.id = "L499994"
      abrirPopup(conexacaoL12Baixo)
      }
      
    }else



//TERCEIRO FIO L4 //5para6baixo L4 
    if(segundaLigacao3 == "pretoFase"&& id == "L4" && id2 == "MAIN30"&& filtro3=="5para6Preto"){
      
      let it = document.getElementById("L4");
      if(it != null && it != undefined) {  
      conexacaoL12BaixoBaixo = "L4PBB";
      it.id = "L499995"
      abrirPopup(conexacaoL12BaixoBaixo)
    }
    } else 

    if(segundaLigacao3 == "verdeTerra"&& id == "L4"&& id2 == "MAIN31"&& filtro3=="5para6Verde"){
     
      let it = document.getElementById("L4");
      if(it != null && it != undefined) {  
         conexacaoL12BaixoBaixo = "L4VBB";
      it.id = "L499996"
      abrirPopup(conexacaoL12BaixoBaixo)
      }
    } else

    if(segundaLigacao3 == "brancoRetorno"&& id == "L4"&& id2 == "MAIN32"&& filtro3=="5para6Branco"){

      let it = document.getElementById("L4");
      if(it != null && it != undefined) {  
         conexacaoL12BaixoBaixo = "L4BBB";
      it.id = "L499997"
      abrirPopup(conexacaoL12BaixoBaixo)
      }
    } else
    if(segundaLigacao3 == "azulNeltro"&& id == "L4"&& id2 == "MAIN33"&& filtro3=="5para6AzulNeltro"){

      let it = document.getElementById("L4");
    if(it != null && it != undefined) { 
      conexacaoL12BaixoBaixo = "L4ABB"; 
      it.id = "L499998"
      abrirPopup(conexacaoL12BaixoBaixo)
    }
    }else

    if(segundaLigacao3 == "marromRetorno"&& id == "L4"&& id2 == "MAIN34"&& filtro3=="5para6Marrom"){

      let it = document.getElementById("L4");
      if(it != null && it != undefined) {  
          conexacaoL12BaixoBaixo = "L4MBB";
      it.id = "L499999"
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