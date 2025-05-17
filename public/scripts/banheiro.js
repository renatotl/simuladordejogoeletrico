
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
       
   }else if(pontoSelecionado3 == "MAIN2" && corFio3 == "pretoFase"){
     return  preimeiraLigacao3  = "pretoFase",console.log("preimeiraLigacao3",preimeiraLigacao3),console.log(corFio3);
      
   }else if(pontoSelecionado3 == "MAIN3" && corFio3 == "pretoFase"){
      return preimeiraLigacao3  = "pretoFase",console.log("preimeiraLigacao3",preimeiraLigacao3),console.log(corFio3);
       
   }else if(pontoSelecionado3 == "MAIN4" && corFio3 == "pretoFase"){
      return preimeiraLigacao3  = "pretoFase",console.log("preimeiraLigacao3",preimeiraLigacao3),console.log(corFio3);
      
   }else if(pontoSelecionado3 == "MAIN5" && corFio3 == "pretoFase"){
      return preimeiraLigacao3  = "pretoFase",console.log("preimeiraLigacao3",preimeiraLigacao3),console.log(corFio3);
      
   }else if(pontoSelecionado3 == "MAIN6" && corFio3 == "pretoFase"){
      return preimeiraLigacao3  = "pretoFase",console.log("preimeiraLigacao3",preimeiraLigacao3),console.log(corFio3);
      
   }
   
   else if(pontoSelecionado3 == "MAIN1" && corFio3 == "verdeTerra"){
      return preimeiraLigacao3  = "verdeTerra",console.log("preimeiraLigacao3",preimeiraLigacao3),console.log(corFio3);
       
   }else if(pontoSelecionado3 == "MAIN2" && corFio3 == "verdeTerra"){
      return preimeiraLigacao3  = "verdeTerra",console.log("preimeiraLigacao3",preimeiraLigacao3),console.log(corFio3);
       
   }else if(pontoSelecionado3 == "MAIN3" && corFio3 == "verdeTerra"){
      return preimeiraLigacao3  = "verdeTerra",console.log("preimeiraLigacao3",preimeiraLigacao3),console.log(corFio3);
       
   }else if(pontoSelecionado3 == "MAIN4" && corFio3 == "verdeTerra"){
      return preimeiraLigacao3  = "verdeTerra",console.log("preimeiraLigacao3",preimeiraLigacao3),console.log(corFio3);
       
   }else if(pontoSelecionado3 == "MAIN5" && corFio3 == "verdeTerra"){
      return preimeiraLigacao3  = "verdeTerra",console.log("preimeiraLigacao3",preimeiraLigacao3),console.log(corFio3);
       
   }else if(pontoSelecionado3 == "MAIN6" && corFio3 == "verdeTerra"){
      return preimeiraLigacao3  = "verdeTerra",console.log("preimeiraLigacao3",preimeiraLigacao3),console.log(corFio3);
       
   }

   else if(pontoSelecionado3 == "MAIN1" && corFio3 == "brancoRetorno"){
      return preimeiraLigacao3  = "brancoRetorno",console.log("preimeiraLigacao3",preimeiraLigacao3),console.log(corFio3);
       
   }else if(pontoSelecionado3 == "MAIN2" && corFio3 == "brancoRetorno"){
      return preimeiraLigacao3  = "brancoRetorno",console.log("preimeiraLigacao3",preimeiraLigacao3),console.log(corFio3);
       
   }else if(pontoSelecionado3 == "MAIN3" && corFio3 == "brancoRetorno"){
      return preimeiraLigacao3  = "brancoRetorno",console.log("preimeiraLigacao3",preimeiraLigacao3),console.log(corFio3);
     
   }else if(pontoSelecionado3 == "MAIN4" && corFio3 == "brancoRetorno"){
      return preimeiraLigacao3  = "brancoRetorno",console.log("preimeiraLigacao3",preimeiraLigacao3),console.log(corFio3);
       
   }else if(pontoSelecionado3 == "MAIN5" && corFio3 == "brancoRetorno"){
      return preimeiraLigacao3  = "brancoRetorno",console.log("preimeiraLigacao3",preimeiraLigacao3),console.log(corFio3);
       
   }else if(pontoSelecionado3 == "MAIN6" && corFio3 == "brancoRetorno"){
      return preimeiraLigacao3  = "brancoRetorno",console.log("preimeiraLigacao3",preimeiraLigacao3),console.log(corFio3);
       
   }

   else if(pontoSelecionado3 == "MAIN1" && corFio3 == "azulNeltro"){
      return preimeiraLigacao3  = "azulNeltro",console.log("preimeiraLigacao3",preimeiraLigacao3),console.log(corFio3);
       
   }else if(pontoSelecionado3 == "MAIN2" && corFio3 == "azulNeltro"){
      return preimeiraLigacao3  = "azulNeltro",console.log("preimeiraLigacao3",preimeiraLigacao3),console.log(corFio3);
      
   }else if(pontoSelecionado3 == "MAIN3" && corFio3 == "azulNeltro"){
      return preimeiraLigacao3 = "azulNeltro",console.log("preimeiraLigacao3",preimeiraLigacao3),console.log(corFio3);
      
   }else if(pontoSelecionado3 == "MAIN4" && corFio3 == "azulNeltro"){
      return preimeiraLigacao3  = "azulNeltro",console.log("preimeiraLigacao3",preimeiraLigacao3),console.log(corFio3);
       
   }else if(pontoSelecionado3 == "MAIN5" && corFio3 == "azulNeltro"){
      return preimeiraLigacao3  = "azulNeltro",console.log("preimeiraLigacao3",preimeiraLigacao3),console.log(corFio3);
       
   }else if(pontoSelecionado3 == "MAIN6" && corFio3 == "azulNeltro"){
      return preimeiraLigacao3  = "azulNeltro",console.log("preimeiraLigacao3",preimeiraLigacao3),console.log(corFio3);
       
   }

   else if(pontoSelecionado3 == "MAIN1" && corFio3 == "marromRetorno"){
      return preimeiraLigacao3  = "marromRetorno",console.log("preimeiraLigacao3",preimeiraLigacao3),console.log(corFio3);
    
   }else if(pontoSelecionado3 == "MAIN2" && corFio3 == "marromRetorno"){
      return preimeiraLigacao3  = "marromRetorno",console.log("preimeiraLigacao3",preimeiraLigacao3),console.log(corFio3);
       
   }else if(pontoSelecionado3 == "MAIN3" && corFio3 == "marromRetorno"){
      return preimeiraLigacao3  = "marromRetorno",console.log("preimeiraLigacao3",preimeiraLigacao3),console.log(corFio3);
     
   }else if(pontoSelecionado3 == "MAIN4" && corFio3 == "marromRetorno"){
      return preimeiraLigacao3  = "marromRetorno",console.log("preimeiraLigacao3",preimeiraLigacao3),console.log(corFio3);
       
   }else if(pontoSelecionado3 == "MAIN5" && corFio3 == "marromRetorno"){
      return preimeiraLigacao3  = "marromRetorno",console.log("preimeiraLigacao3",preimeiraLigacao3),console.log(corFio3);
       
   }else if(pontoSelecionado3 == "MAIN6" && corFio3 == "marromRetorno"){
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
    console.log("fundionou"); 
    }
    else if(verificador2 == "MAIN1" && ligacaoPonto2 == "verdeTerra" && preimeiraLigacao2 =="verdeTerra" && segundaLigacao2 == "verdeTerra"){
      let elementosCss = document.getElementById("MAIN1");
      if(elementosCss != null || elementosCss != undefined) { 
      console.log(elementosCss);
      parte3 = true;
      elementosCss.id = "MAIN11"
   
 console.log("fundionou");
}
    } else if(verificador2 == "MAIN1" && ligacaoPonto2 == "brancoRetorno" && preimeiraLigacao2 =="brancoRetorno" && segundaLigacao2 == "brancoRetorno"){

      let elementosCss = document.getElementById("MAIN1");
      if(elementosCss != null || elementosCss != undefined) { 
      console.log(elementosCss);
      parte3 = true;
      elementosCss.id = "MAIN12"
   
 console.log("fundionou");
}
    } else if(verificador2 == "MAIN1" && ligacaoPonto2 == "azulNeltro" && preimeiraLigacao2 =="azulNeltro" && segundaLigacao2 == "azulNeltro"){
      let elementosCss = document.getElementById("MAIN1");
      if(elementosCss != null || elementosCss != undefined) { 
      console.log(elementosCss);
      parte3 = true;
      elementosCss.id = "MAIN13"

 console.log("fundionou");
}

    } else if(verificador2 == "MAIN1" && ligacaoPonto2 == "marromRetorno" && preimeiraLigacao2 =="marromRetorno" && segundaLigacao2 == "marromRetorno"){

      let elementosCss = document.getElementById("MAIN1");
      if(elementosCss != null || elementosCss != undefined) { 
      console.log(elementosCss);
      parte3 = true;
      elementosCss.id = "MAIN14"
 
      

 console.log("fundionou");
}
    } else  if(verificador2 == "MAIN2" && ligacaoPonto2 == "pretoFase" && preimeiraLigacao2 =="pretoFase" && segundaLigacao2 == "pretoFase" ){
      let elementosCss2 = document.getElementById("MAIN2");
      if(elementosCss2 != null || elementosCss2 != undefined) { 
       console.log(elementosCss2);
       parte3 = true;
       elementosCss2.id = "MAIN15"
      }
  console.log("fundionou"); 
  } else  if(verificador2 == "MAIN2" && ligacaoPonto2 == "verdeTerra" && preimeiraLigacao2 =="verdeTerra" && segundaLigacao2 == "verdeTerra" ){
   let elementosCss2 = document.getElementById("MAIN2");
   if(elementosCss2 != null || elementosCss2 != undefined) { 
    console.log(elementosCss2);
    parte3 = true;
    elementosCss2.id = "MAIN16"
   }
console.log("fundionou"); 
} else  if(verificador2 == "MAIN2" && ligacaoPonto2 == "brancoRetorno" && preimeiraLigacao2 =="brancoRetorno" && segundaLigacao2 == "brancoRetorno" ){
   let elementosCss2 = document.getElementById("MAIN2");
   if(elementosCss2 != null || elementosCss2 != undefined) { 
    console.log(elementosCss2);
    parte3 = true;
    elementosCss2.id = "MAIN17"
   }
console.log("fundionou"); 
} else  if(verificador2 == "MAIN2" && ligacaoPonto2 == "azulNeltro" && preimeiraLigacao2 =="azulNeltro" && segundaLigacao2 == "azulNeltro" ){
   let elementosCss2 = document.getElementById("MAIN2");
   if(elementosCss2 != null || elementosCss2 != undefined) { 
    console.log(elementosCss2);
    parte3 = true;
    elementosCss2.id = "MAIN18"
   }
console.log("fundionou"); 
} else  if(verificador2 == "MAIN2" && ligacaoPonto2 == "marromRetorno" && preimeiraLigacao2 =="marromRetorno" && segundaLigacao2 == "marromRetorno" ){
   let elementosCss2 = document.getElementById("MAIN2");
   if(elementosCss2 != null || elementosCss2 != undefined) { 
    console.log(elementosCss2);
 parte3 = true;
    elementosCss2.id = "MAIN19"

console.log("fundionou"); 
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
         }
    console.log("fundionou"); 
    }
    else if(verificador2 == "MAIN3" && ligacaoPonto2 == "verdeTerra" && preimeiraLigacao2 =="verdeTerra" && segundaLigacao2 == "verdeTerra"){
      let elementosCss = document.getElementById("MAIN1");
      if(elementosCss != null || elementosCss != undefined) { 
      console.log(elementosCss);
      parte3 = true;
      elementosCss.id = "MAIN11"
   
 console.log("fundionou");
}
    } else if(verificador2 == "MAIN3" && ligacaoPonto2 == "brancoRetorno" && preimeiraLigacao2 =="brancoRetorno" && segundaLigacao2 == "brancoRetorno"){

      let elementosCss = document.getElementById("MAIN1");
      if(elementosCss != null || elementosCss != undefined) { 
      console.log(elementosCss);
      parte3 = true;
      elementosCss.id = "MAIN12"
   
 console.log("fundionou");
}
    } else if(verificador2 == "MAIN3" && ligacaoPonto2 == "azulNeltro" && preimeiraLigacao2 =="azulNeltro" && segundaLigacao2 == "azulNeltro"){
      let elementosCss = document.getElementById("MAIN1");
      if(elementosCss != null || elementosCss != undefined) { 
      console.log(elementosCss);
      parte3 = true;
      elementosCss.id = "MAIN13"

 console.log("fundionou");
}

    } else if(verificador2 == "MAIN3" && ligacaoPonto2 == "marromRetorno" && preimeiraLigacao2 =="marromRetorno" && segundaLigacao2 == "marromRetorno"){

      let elementosCss = document.getElementById("MAIN1");
      if(elementosCss != null || elementosCss != undefined) { 
      console.log(elementosCss);
   parte3 = true;
      elementosCss.id = "MAIN14"
 
      

 console.log("fundionou");
}
    } else  if(verificador2 == "MAIN4" && ligacaoPonto2 == "pretoFase" && preimeiraLigacao2 =="pretoFase" && segundaLigacao2 == "pretoFase" ){
      let elementosCss2 = document.getElementById("MAIN2");
      if(elementosCss2 != null || elementosCss2 != undefined) { 
       console.log(elementosCss2);
       parte3 = true;
       elementosCss2.id = "MAIN15"
      }
  console.log("fundionou"); 
  } else  if(verificador2 == "MAIN4" && ligacaoPonto2 == "verdeTerra" && preimeiraLigacao2 =="verdeTerra" && segundaLigacao2 == "verdeTerra" ){
   let elementosCss2 = document.getElementById("MAIN2");
   if(elementosCss2 != null || elementosCss2 != undefined) { 
    console.log(elementosCss2);
    parte3 = true;
    elementosCss2.id = "MAIN16"
   }
console.log("fundionou"); 
} else  if(verificador2 == "MAIN4" && ligacaoPonto2 == "brancoRetorno" && preimeiraLigacao2 =="brancoRetorno" && segundaLigacao2 == "brancoRetorno" ){
   let elementosCss2 = document.getElementById("MAIN2");
   if(elementosCss2 != null || elementosCss2 != undefined) { 
    console.log(elementosCss2);
    parte3 = true;
    elementosCss2.id = "MAIN17"
   }
console.log("fundionou"); 
} else  if(verificador2 == "MAIN4" && ligacaoPonto2 == "azulNeltro" && preimeiraLigacao2 =="azulNeltro" && segundaLigacao2 == "azulNeltro" ){
   let elementosCss2 = document.getElementById("MAIN2");
   if(elementosCss2 != null || elementosCss2 != undefined) { 
    console.log(elementosCss2);
    parte3 = true;
    elementosCss2.id = "MAIN18"
   }
console.log("fundionou"); 
} else  if(verificador2 == "MAIN4" && ligacaoPonto2 == "marromRetorno" && preimeiraLigacao2 =="marromRetorno" && segundaLigacao2 == "marromRetorno" ){
   let elementosCss2 = document.getElementById("MAIN2");
   if(elementosCss2 != null || elementosCss2 != undefined) { 
    console.log(elementosCss2);
    parte3 = true;
    elementosCss2.id = "MAIN19"

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
      
}

 }

//ligacao do 5 para o 6
 else if(verificador2 == "MAIN6" && ligacaoPonto2 == "marromRetorno" && preimeiraLigacao2 =="marromRetorno" && segundaLigacao2 == "marromRetorno"){

   let elementosCss = document.getElementById("MAIN5");
   if(elementosCss != null || elementosCss != undefined) { 

      
   console.log(elementosCss);
   parte3 = true;
   elementosCss.id = "MAIN34"

   

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
    if(  verificador3 == "MAIN1" && ligacaoPonto3 == "pretoFase" && preimeiraLigacao3 =="pretoFase" && segundaLigacao3 == "pretoFase" ){
        let elementosCss = document.getElementById("MAIN5");
         if(elementosCss != null || elementosCss != undefined) { 
         
         console.log(elementosCss);
         parte3 = true;
         elementosCss.id = "MAIN10"
         }
    console.log("fundionou"); 
    }
    else if(verificador3 == "MAIN1" && ligacaoPonto3 == "verdeTerra" && preimeiraLigacao3 =="verdeTerra" && segundaLigacao3 == "verdeTerra"){
      let elementosCss = document.getElementById("MAIN5");
      if(elementosCss != null || elementosCss != undefined) { 
      console.log(elementosCss);
      parte3 = true;
      elementosCss.id = "MAIN11"
   
 console.log("fundionou");
}
    } else if(verificador3 == "MAIN1" && ligacaoPonto3 == "brancoRetorno" && preimeiraLigacao3 =="brancoRetorno" && segundaLigacao3 == "brancoRetorno"){

      let elementosCss = document.getElementById("MAIN5");
      if(elementosCss != null || elementosCss != undefined) { 
      console.log(elementosCss);
      parte3 = true;
      elementosCss.id = "MAIN12"
   
 console.log("fundionou");
}
    } else if(verificador3 == "MAIN1" && ligacaoPonto3 == "azulNeltro" && preimeiraLigacao3 =="azulNeltro" && segundaLigacao3 == "azulNeltro"){
      let elementosCss = document.getElementById("MAIN5");
      if(elementosCss != null || elementosCss != undefined) { 
      console.log(elementosCss);
      parte3 = true;
      elementosCss.id = "MAIN13"

 console.log("fundionou");
}

    } else if(verificador3 == "MAIN1" && ligacaoPonto3 == "marromRetorno" && preimeiraLigacao3 =="marromRetorno" && segundaLigacao3 == "marromRetorno"){

      let elementosCss = document.getElementById("MAIN1");
      if(elementosCss != null || elementosCss != undefined) { 
      console.log(elementosCss);
   parte3 = true;
      elementosCss.id = "MAIN14"
 
      

 console.log("fundionou");
}
    } else  if(verificador3 == "MAIN2" && ligacaoPonto3 == "pretoFase" && preimeiraLigacao3 =="pretoFase" && segundaLigacao3 == "pretoFase" ){
      let elementosCss2 = document.getElementById("MAIN2");
      if(elementosCss2 != null || elementosCss2 != undefined) { 
       console.log(elementosCss2);
       parte3 = true;
       elementosCss2.id = "MAIN15"
      }
  console.log("fundionou"); 
  } else  if(verificador3 == "MAIN2" && ligacaoPonto3 == "verdeTerra" && preimeiraLigacao3 =="verdeTerra" && segundaLigacao3 == "verdeTerra" ){
   let elementosCss2 = document.getElementById("MAIN2");
   if(elementosCss2 != null || elementosCss2 != undefined) { 
    console.log(elementosCss2);
    parte3 = true;
    elementosCss2.id = "MAIN16"
   }
console.log("fundionou"); 
} else  if(verificador3 == "MAIN2" && ligacaoPonto3 == "brancoRetorno" && preimeiraLigacao3 =="brancoRetorno" && segundaLigacao3 == "brancoRetorno" ){
   let elementosCss2 = document.getElementById("MAIN2");
   if(elementosCss2 != null || elementosCss2 != undefined) { 
    console.log(elementosCss2);
    parte3 = true;
    elementosCss2.id = "MAIN17"
   }
console.log("fundionou"); 
} else  if(verificador3 == "MAIN2" && ligacaoPonto3 == "azulNeltro" && preimeiraLigacao3 =="azulNeltro" && segundaLigacao3 == "azulNeltro" ){
   let elementosCss2 = document.getElementById("MAIN2");
   if(elementosCss2 != null || elementosCss2 != undefined) { 
    console.log(elementosCss2);
    parte3 = true;
    elementosCss2.id = "MAIN18"
   }
console.log("fundionou"); 
} else  if(verificador3 == "MAIN2" && ligacaoPonto3 == "marromRetorno" && preimeiraLigacao3 =="marromRetorno" && segundaLigacao3 == "marromRetorno" ){
   let elementosCss2 = document.getElementById("MAIN2");
   if(elementosCss2 != null || elementosCss2 != undefined) { 
    console.log(elementosCss2);
    parte3 = true;
    elementosCss2.id = "MAIN19"

console.log("fundionou"); 
   }
}
 

else




 
   console.log(verificador3);
    if(  verificador3 == "MAIN3" && ligacaoPonto3 == "pretoFase" && preimeiraLigacao3 =="pretoFase" && segundaLigacao3 == "pretoFase" ){
        let elementosCss = document.getElementById("MAIN1");
         if(elementosCss != null || elementosCss != undefined) { 
         
         console.log(elementosCss);
         parte3 = true;
         elementosCss.id = "MAIN10"
         }
    console.log("fundionou"); 
    }
    else if(verificador3 == "MAIN3" && ligacaoPonto3 == "verdeTerra" && preimeiraLigacao3 =="verdeTerra" && segundaLigacao3 == "verdeTerra"){
      let elementosCss = document.getElementById("MAIN1");
      if(elementosCss != null || elementosCss != undefined) { 
      console.log(elementosCss);
      parte3 = true;
      elementosCss.id = "MAIN11"
   
 console.log("fundionou");
}
    } else if(verificador3 == "MAIN3" && ligacaoPonto3 == "brancoRetorno" && preimeiraLigacao3 =="brancoRetorno" && segundaLigacao3 == "brancoRetorno"){

      let elementosCss = document.getElementById("MAIN1");
      if(elementosCss != null || elementosCss != undefined) { 
      console.log(elementosCss);
      parte3 = true;
      elementosCss.id = "MAIN12"
   
 console.log("fundionou");
}
    } else if(verificador3 == "MAIN3" && ligacaoPonto3 == "azulNeltro" && preimeiraLigacao3 =="azulNeltro" && segundaLigacao3 == "azulNeltro"){
      let elementosCss = document.getElementById("MAIN1");
      if(elementosCss != null || elementosCss != undefined) { 
      console.log(elementosCss);
      parte3 = true;
      elementosCss.id = "MAIN13"

 console.log("fundionou");
}

    } else if(verificador3 == "MAIN3" && ligacaoPonto3 == "marromRetorno" && preimeiraLigacao3 =="marromRetorno" && segundaLigacao3 == "marromRetorno"){

      let elementosCss = document.getElementById("MAIN1");
      if(elementosCss != null || elementosCss != undefined) { 
      console.log(elementosCss);
      parte3 = true;
      elementosCss.id = "MAIN14"
 
      

 console.log("fundionou");
}
    } else  if(verificador3 == "MAIN4" && ligacaoPonto3 == "pretoFase" && preimeiraLigacao3 =="pretoFase" && segundaLigacao3 == "pretoFase" ){
      let elementosCss2 = document.getElementById("MAIN2");
      if(elementosCss2 != null || elementosCss2 != undefined) { 
       console.log(elementosCss2);
       parte3 = true;
       elementosCss2.id = "MAIN15"
      }
  console.log("fundionou"); 
  } else  if(verificador3 == "MAIN4" && ligacaoPonto3 == "verdeTerra" && preimeiraLigacao3 =="verdeTerra" && segundaLigacao3 == "verdeTerra" ){
   let elementosCss2 = document.getElementById("MAIN2");
   if(elementosCss2 != null || elementosCss2 != undefined) { 
    console.log(elementosCss2);
    parte3 = true;
    elementosCss2.id = "MAIN16"
   }
console.log("fundionou"); 
} else  if(verificador3 == "MAIN4" && ligacaoPonto3 == "brancoRetorno" && preimeiraLigacao3 =="brancoRetorno" && segundaLigacao3 == "brancoRetorno" ){
   let elementosCss2 = document.getElementById("MAIN2");
   if(elementosCss2 != null || elementosCss2 != undefined) { 
    console.log(elementosCss2);
    parte3 = true;
    elementosCss2.id = "MAIN17"
   }
console.log("fundionou"); 
} else  if(verificador3 == "MAIN4" && ligacaoPonto3 == "azulNeltro" && preimeiraLigacao3 =="azulNeltro" && segundaLigacao3 == "azulNeltro" ){
   let elementosCss2 = document.getElementById("MAIN2");
   if(elementosCss2 != null || elementosCss2 != undefined) { 
    console.log(elementosCss2);
    parte3 = true;
    elementosCss2.id = "MAIN18"
   }
console.log("fundionou"); 
} else  if(verificador3 == "MAIN4" && ligacaoPonto3 == "marromRetorno" && preimeiraLigacao3 =="marromRetorno" && segundaLigacao3 == "marromRetorno" ){
   let elementosCss2 = document.getElementById("MAIN2");
   if(elementosCss2 != null || elementosCss2 != undefined) { 
    console.log(elementosCss2);
    parte3 = true;
    elementosCss2.id = "MAIN19"

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
    
console.log("fundionou"); 
   }
}
//ligacao do 5 para o 6 
else if(verificador3 == "MAIN6" && ligacaoPonto3 == "verdeTerra" && preimeiraLigacao3 =="verdeTerra" && segundaLigacao3 == "verdeTerra"){
   let elementosCss = document.getElementById("MAIN5");
    console.log(elementosCss);
   if(elementosCss != null || elementosCss != undefined) { 
 console.log("tttttt");
      
   console.log(elementosCss);
   parte3 = true;
   elementosCss.id = "MAIN31"

console.log("fundionou");
     
}
 }
//ligacao do 5 para o 6
 else if( verificador3 == "MAIN6" && ligacaoPonto3 == "brancoRetorno" && preimeiraLigacao3 =="brancoRetorno" && segundaLigacao3 == "brancoRetorno"){

   let elementosCss = document.getElementById("MAIN5");
   if(elementosCss != null || elementosCss != undefined) { 

     
   console.log(elementosCss);
   parte3 = true;
   elementosCss.id = "MAIN32"

console.log("fundionou");

      
}
 }
 //ligacao do 5 para o 6
 else if( verificador3 == "MAIN6" && ligacaoPonto3 == "azulNeltro" && preimeiraLigacao3 =="azulNeltro" && segundaLigacao3 == "azulNeltro"){
   let elementosCss = document.getElementById("MAIN5");
   if(elementosCss != null || elementosCss != undefined) { 

      
   console.log(elementosCss);
   parte3 = true;
   elementosCss.id = "MAIN33"

console.log("fundionou");
      
}

 }

//ligacao do 5 para o 6
 else if(verificador3 == "MAIN6" && ligacaoPonto3 == "marromRetorno" && preimeiraLigacao3 =="marromRetorno" && segundaLigacao3 == "marromRetorno"){

   let elementosCss = document.getElementById("MAIN5");
   if(elementosCss != null || elementosCss != undefined) { 

      
   console.log(elementosCss);
   parte3 = true;
   elementosCss.id = "MAIN34"

   

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
   
   
    corFio2 = undefined;
    ligacaoPonto2 = undefined;
    preimeiraLigacao2 = undefined;
    segundaLigacao2 = undefined;
    pontoSelecionado3 = undefined;
    pontoSelecionado4 = undefined;
    verificador2 = undefined;;
    parte2 = false  ;
    console.log("resetar");


    corFio3 = undefined;
    ligacaoPonto3 = undefined;
    preimeiraLigacao3 = undefined;
    segundaLigacao3 = undefined;
    pontoSelecionado5 = undefined;
    pontoSelecionado6 = undefined;
    verificador3 = undefined;
    parte3 = false  ;


    resetId = true
    resetId2 = true
    resetId3 = true

    id2 = undefined
   conexao = undefined

 conexacaoL11Alto= undefined
 conexacaoL12Alto= undefined
 conexacaoL11Baixo= undefined
 conexacaoL12Baixo= undefined


// texto do curto circuito 
    let textoVasio = ""
    let  message = this.document.getElementById("message2")
    if(message != null && message != undefined) {   
         message.id = "message"
         message.innerHTML = textoVasio
    }
    

// resetando lamp
let lp = this.document.getElementById("L11");
let lp2 = this.document.getElementById("L12");
let lp3 = this.document.getElementById("L13");
let lp4 = this.document.getElementById("L14");
let lp5 = this.document.getElementById("L15");


let lp6 = this.document.getElementById("L16");
let lp7 = this.document.getElementById("L17");
let lp8 = this.document.getElementById("L18");
let lp9 = this.document.getElementById("L19");
let lp10 = this.document.getElementById("L20");




let lp11 = this.document.getElementById("L21");
let lp12 = this.document.getElementById("L22");
let lp13 = this.document.getElementById("L23");
let lp14 = this.document.getElementById("L24");
let lp15 = this.document.getElementById("L25");


let lp16 = this.document.getElementById("L26");
let lp17 = this.document.getElementById("L27");
let lp18 = this.document.getElementById("L28");
let lp19 = this.document.getElementById("L29");
let lp20 = this.document.getElementById("L30");




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
}




}

function abrirPopup(valor){
   idioma;
   let texto1 = " Voce fechou o circuito! tente de novo."

   let texto2 = ""
       texto2 += " Voce ligou dois fios pretos a ";
       texto2 +=  "lampada. neste caso se ela nao for";
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


if(conexacaoL11Alto == "L1PA" && conexacaoL12Alto == "L2PA" || 
   conexacaoL11Baixo == "L1PB" && conexacaoL12Baixo == "L2PB"|| 
   conexacaoL11Alto == "L1PA" && conexacaoL12Baixo == "L2PB"|| 
   conexacaoL12Alto == "L2PA" && conexacaoL11Baixo == "L1PB"
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
   conexacaoL12Alto == "L2VA" && conexacaoL11Baixo == "L1VB"){
   // conecao no mesmo fio preto alto
   console.log("dentro do if")
   console.log(texto3)
   message.id = "message2"
message.innerHTML = texto3

  

} else

if(conexacaoL11Alto == "L1BA" && conexacaoL12Alto == "L2BA"|| 
   conexacaoL11Baixo == "L1BB" && conexacaoL12Baixo == "L2BB"|| 
   conexacaoL11Alto == "L1BA" && conexacaoL12Baixo == "L2BB"|| 
   conexacaoL12Alto == "L2BA" && conexacaoL11Baixo == "L1BB"){
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
   conexacaoL12Alto == "L2AA" && conexacaoL11Baixo == "L1AB"){
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
   conexacaoL12Alto == "L2MA" && conexacaoL11Baixo == "L1MB"){
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

   //1para3alto
   if(segundaLigacao == "pretoFase"&& id == "L1" && id2 == "MAIN10"){
      
      let lp = document.getElementById("L1");
      if(lp != null && lp != undefined) { 
      conexacaoL11Alto = "L1PA";
      lp.id = "L11"
      abrirPopup(conexacaoL11Alto)
   }
    } else 

    if(segundaLigacao == "verdeTerra"&& id == "L1"&& id2 == "MAIN11"){
     
      let lp = document.getElementById("L1");
      if(lp != null && lp != undefined) { 
         conexacaoL11Alto = "L1VA"; 
      lp.id = "L12"
      abrirPopup(conexacaoL11Alto)
    }
    } else

    if(segundaLigacao == "brancoRetorno"&& id == "L1"&& id2 == "MAIN12"){

      let lp = document.getElementById("L1");
      if(lp != null && lp != undefined) { 
         conexacaoL11Alto = "L1BA";  
      lp.id = "L13"
      abrirPopup(conexacaoL11Alto)
      }
      
    } else
    if(segundaLigacao == "azulNeltro"&& id == "L1"&& id2 == "MAIN13"){

      let lp = document.getElementById("L1");
      if(lp != null && lp != undefined) {  
         conexacaoL11Alto = "L1AA";
      lp.id = "L14"
      abrirPopup(conexacaoL11Alto)
      }
      
    }else

    if(segundaLigacao == "marromRetorno"&& id == "L1"&& id2 == "MAIN14"){

      let lp = document.getElementById("L1");
      if(lp != null && lp != undefined) { 
         conexacaoL11Alto = "L1MA"; 
      lp.id = "L15"
      abrirPopup(conexacaoL11Alto)
      }
      
    }else




//2para4baixo
  if(segundaLigacao == "pretoFase"&& id == "L1" && id2 == "MAIN15"){

      let lp = document.getElementById("L1");
      if(lp != null && lp != undefined) {
         conexacaoL11Baixo = "L1PB"; 
      lp.id = "L16"
      abrirPopup(conexacaoL11Baixo)
      }
    } else 

    if(segundaLigacao == "verdeTerra"&& id == "L1"&& id2 == "MAIN16"){

      let lp = document.getElementById("L1");
      if(lp != null && lp != undefined) {
         conexacaoL11Baixo = "L1VB";  
      lp.id = "L17"
      abrirPopup(conexacaoL11Baixo)
      }
      
    } else

    if(segundaLigacao == "brancoRetorno"&& id == "L1"&& id2 == "MAIN17"){

      let lp = document.getElementById("L1");
      if(lp != null && lp != undefined) { 
         conexacaoL11Baixo = "L1BB";
      lp.id = "L18"
      abrirPopup(conexacaoL11Baixo)
      }
      
    } else
    if(segundaLigacao == "azulNeltro"&& id == "L1"&& id2 == "MAIN18"){

      let lp = document.getElementById("L1");
      if(lp != null && lp != undefined) {
         conexacaoL11Baixo = "L1AB"; 
      lp.id = "L19"
      abrirPopup(conexacaoL11Baixo)
      }
      
    }else

    if(segundaLigacao == "marromRetorno"&& id == "L1"&& id2 == "MAIN19"){

      let lp = document.getElementById("L1");
      if(lp != null && lp != undefined) { 
         conexacaoL11Baixo = "L1MB"; 
      lp.id = "L20"
      abrirPopup(conexacaoL11Baixo)
      }
      
    }





    else
//equivale a segunda conexao   1para3 alta
    if(segundaLigacao == "pretoFase"&& id == "L2" && id2 == "MAIN10"){
      
      let lp = document.getElementById("L2");
      if(lp != null && lp != undefined) {  
      conexacaoL12Alto = "L2PA";
      lp.id = "L21"
      abrirPopup(conexacaoL12Alto)
    }
    } else 

    if(segundaLigacao == "verdeTerra"&& id == "L2"&& id2 == "MAIN11"){
     
      let lp = document.getElementById("L2");
      if(lp != null && lp != undefined) {  
         conexacaoL12Alto = "L2VA";
      lp.id = "L22"
      abrirPopup(conexacaoL12Alto)
      }
    } else

    if(segundaLigacao == "brancoRetorno"&& id == "L2"&& id2 == "MAIN12"){

      let lp = document.getElementById("L2");
      if(lp != null && lp != undefined) {  
         conexacaoL12Alto = "L2BA";
      lp.id = "L23"
      abrirPopup(conexacaoL12Alto)
      }
    } else
    if(segundaLigacao == "azulNeltro"&& id == "L2"&& id2 == "MAIN13"){

      let lp = document.getElementById("L2");
    if(lp != null && lp != undefined) { 
      conexacaoL12Alto = "L2AA"; 
      lp.id = "L24"
      abrirPopup(conexacaoL12Alto)
    }
    }else

    if(segundaLigacao == "marromRetorno"&& id == "L2"&& id2 == "MAIN14"){

      let lp = document.getElementById("L2");
      if(lp != null && lp != undefined) {  
          conexacaoL12Alto = "L2MA";
      lp.id = "L25"
      abrirPopup(conexacaoL12Alto)
      }
      
    }else




//equivale a segunda conexao   2para4 baixa
  if(segundaLigacao == "pretoFase"&& id == "L2" && id2 == "MAIN15"){

      let lp = document.getElementById("L2");
      if(lp != null && lp != undefined) {
         conexacaoL12Baixo = "L2PB";  
      lp.id = "L26"
      abrirPopup(conexacaoL12Baixo)
      }
      
    } else 

    if(segundaLigacao == "verdeTerra"&& id == "L2"&& id2 == "MAIN16"){

      let lp = document.getElementById("L2");
      if(lp != null && lp != undefined) {
         conexacaoL12Baixo = "L2VB";  
      lp.id = "L27"
      abrirPopup(conexacaoL12Baixo)
      }
      
    } else

    if(segundaLigacao == "brancoRetorno"&& id == "L2"&& id2 == "MAIN17"){

      let lp = document.getElementById("L2");
      if(lp != null && lp != undefined) {  
         conexacaoL12Baixo = "L2BB";
      lp.id = "L28"
      abrirPopup(conexacaoL12Baixo)
      }
      
    } else
    if(segundaLigacao == "azulNeltro"&& id == "L2"&& id2 == "MAIN18"){

      let lp = document.getElementById("L2");
      if(lp != null && lp != undefined) {
         conexacaoL12Baixo = "L2AB";  
      lp.id = "L29"
      abrirPopup(conexacaoL12Baixo)
      }
      
    }else

    if(segundaLigacao == "marromRetorno"&& id == "L2"&& id2 == "MAIN19"){

      let lp = document.getElementById("L2");
      if(lp != null && lp != undefined) { 
         conexacaoL12Baixo = "L2MB"; 
      lp.id = "L30"
      abrirPopup(conexacaoL12Baixo)
      }
      
    }

     











    //1para3alto
   if(segundaLigacao2 == "pretoFase"&& id == "L1" && id2 == "MAIN10"){

      let lp = document.getElementById("L1");
      if(lp!=null && lp!=undefined ){
      lp.id = "L11"
      abrirPopup()
   }
    } else 

    if(segundaLigacao2 == "verdeTerra"&& id == "L1"&& id2 == "MAIN11"){

      let lp = document.getElementById("L1");
      if(lp != null && lp != undefined) {  
      lp.id = "L12"
      }
      
    } else

    if(segundaLigacao2 == "brancoRetorno"&& id == "L1"&& id2 == "MAIN12"){

      let lp = document.getElementById("L1");
      if(lp != null && lp != undefined) {  
      lp.id = "L13"
      }
      
    } else
    if(segundaLigacao2 == "azulNeltro"&& id == "L1"&& id2 == "MAIN13"){

      let lp = document.getElementById("L1");
      if(lp != null && lp != undefined) {  
      lp.id = "L14"
      }
      
    }else

    if(segundaLigacao2 == "marromRetorno"&& id == "L1"&& id2 == "MAIN14"){

      let lp = document.getElementById("L1");
      if(lp != null && lp != undefined) {  
      lp.id = "L15"
      }
    }else




//2para4baixo
  if(segundaLigacao2 == "pretoFase"&& id == "L1" && id2 == "MAIN15"){

      let lp = document.getElementById("L1");
      if(lp != null && lp != undefined) {  
      lp.id = "L16"
      }
      
    } else 

    if(segundaLigacao2 == "verdeTerra"&& id == "L1"&& id2 == "MAIN16"){

      let lp = document.getElementById("L1");
      if(lp != null && lp != undefined) {  
      lp.id = "L17"
      }
      
    } else

    if(segundaLigacao2 == "brancoRetorno"&& id == "L1"&& id2 == "MAIN17"){

      let lp = document.getElementById("L1");
      if(lp != null && lp != undefined) {  
      lp.id = "L18"
      }
      
    } else
    if(segundaLigacao2 == "azulNeltro"&& id == "L1"&& id2 == "MAIN18"){

      let lp = document.getElementById("L1");
      if(lp != null && lp != undefined) {  
      lp.id = "L19"
      }
      
    }else

    if(segundaLigacao2 == "marromRetorno"&& id == "L1"&& id2 == "MAIN19"){

      let lp = document.getElementById("L1");
      if(lp != null && lp != undefined) {  
      lp.id = "L20"
      }
      
    }





    else
//equivale a segunda conexao   1para3 alta
    if(segundaLigacao2 == "pretoFase"&& id == "L2" && id2 == "MAIN10"){

      let lp = document.getElementById("L2");
      if(lp != null){ 
      lp.id = "L21"
      }
    } else 

    if(segundaLigacao2 == "verdeTerra"&& id == "L2"&& id2 == "MAIN11"){

      let lp = document.getElementById("L2");
      if(lp != null && lp != undefined) {  
      lp.id = "L22"
      }
    } else

    if(segundaLigacao2 == "brancoRetorno"&& id == "L2"&& id2 == "MAIN12"){

      let lp = document.getElementById("L2");
      if(lp != null && lp != undefined) {  
      lp.id = "L23"
      }
    } else
    if(segundaLigacao2 == "azulNeltro"&& id == "L2"&& id2 == "MAIN13"){

      let lp = document.getElementById("L2");
      if(lp != null && lp != undefined) {  
      lp.id = "L24"
      }
    }else

    if(segundaLigacao2 == "marromRetorno"&& id == "L2"&& id2 == "MAIN14"){

      let lp = document.getElementById("L2");
      if(lp != null && lp != undefined) {  
      lp.id = "L25"
      }
      
    }else




//equivale a segunda conexao   2para4 baixa
  if(segundaLigacao2 == "pretoFase"&& id == "L2" && id2 == "MAIN15"){

      let lp = document.getElementById("L2");
      if(lp != null && lp != undefined) {  
      lp.id = "L26"
      }
      
    } else 

    if(segundaLigacao2 == "verdeTerra"&& id == "L2"&& id2 == "MAIN16"){

      let lp = document.getElementById("L2");
      if(lp != null && lp != undefined) {  
      lp.id = "L27"
      }
      
    } else

    if(segundaLigacao2 == "brancoRetorno"&& id == "L2"&& id2 == "MAIN17"){

      let lp = document.getElementById("L2");
      if(lp != null && lp != undefined) {  
      lp.id = "L28"
      }
      
    } else
    if(segundaLigacao2 == "azulNeltro"&& id == "L2"&& id2 == "MAIN18"){

      let lp = document.getElementById("L2");
      if(lp != null && lp != undefined) {  
      lp.id = "L29"
      }
      
    }else

    if(segundaLigacao2 == "marromRetorno"&& id == "L2"&& id2 == "MAIN19"){

      let lp = document.getElementById("L2");
      if(lp != null && lp != undefined) {  
      lp.id = "L30"
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


const janela = document.getElementById("janela")




 fio1.addEventListener('mouseover',function() {
  let fio = true
 // abrirPopup(fio)
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