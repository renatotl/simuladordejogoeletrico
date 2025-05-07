
//=========PRIMEIRO FIO======
// pegando os ids e separando em duas variaveis para melhor manipulacao
const elementos = document.querySelectorAll("[id]");
const elementos2 = document.querySelectorAll("[id]");
//=========PRIMEIRO FIO======




// ===========SEGUNDO FIO==========
const elementos3 = document.querySelectorAll("[id]");
const elementos4 = document.querySelectorAll("[id]");
// ===========SEGUNDO FIO==========





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



let resetId = false;
let resetId2 = false;
let bug = false;
 let idioma = "portugues"

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
      pontoSelecionado2 != "MAIN2" && pontoSelecionado2 != "MAIN3" && pontoSelecionado2 != "MAIN4"
    ){
       
 
console.log(id)
// se o id selecionado for diferente os valres abaixo se TRUE e ele grava a variavel
            if( id != "MAIN2" && id != "MAIN3" && id != "MAIN4" && id != "fio1" 
               && id != "fio2" && id != "fio3" && id != "fio4" && id != "fio5"&& id !="menu" && id !="resetar"){
           
           return  pontoSelecionado2 = "MAIN1", console.log(pontoSelecionado2);
            
         } else if(id != "MAIN1" && id != "MAIN3" && id != "MAIN4" && id != "fio1" 
               && id != "fio2" && id != "fio3" && id != "fio4" && id != "fio5"&& id !="menu"&& id !="resetar"){
            
           return  pontoSelecionado2 = "MAIN2", console.log(pontoSelecionado2);
             
         } else if(id != "MAIN1" && id != "MAIN2" && id != "MAIN4" && id != "fio1" 
               && id != "fio2" && id != "fio3" && id != "fio4" && id != "fio5"&& id !="menu"&& id !="resetar"){
            
           return  pontoSelecionado2 = "MAIN3", console.log(pontoSelecionado2);
             
         } else if(id != "MAIN1" && id != "MAIN2" && id != "MAIN3" && id != "fio1" 
               && id != "fio2" && id != "fio3" && id != "fio4" && id != "fio5"&& id !="menu"&& id !="resetar"){
            
          return  pontoSelecionado2 = "MAIN4", console.log(pontoSelecionado2);
            
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
        
        console.log( "fio chato",corFio);
        if( corFio != "fio1"&& corFio != "fio2" && corFio != "fio3"&& corFio != "fio4" && corFio != "fio5"  && corFio != "pretoFase"&& corFio != "verdeTerra"
         && corFio != "brancoRetorno"&& corFio != "azulNeltro" && corFio != "marromRetorno"
        ) {  

        if(id== "fio1"){
            
          return  corFio = "pretoFase" ,console.log(corFio);
         
        } else if(id=="fio2"){
              
          return  corFio = "verdeTerra",console.log(corFio);
        } else if(id=="fio3"){
            
          return  corFio = "brancoRetorno",console.log(corFio);
           
        } else if(id=="fio4"){
            
           return corFio = "azulNeltro",console.log(corFio);
            
        }else if(id=="fio5"){
            
         return   corFio = "marromRetorno",console.log(corFio);
            
        }
      }
        

// ele grava o valor do primeiro click na variavel pontoSelecionado1 SO SE a pontoSelecionado2 for undefined
        if((id== "MAIN1" )&& (pontoSelecionado2 == undefined)){
         verificador = "MAIN1";
          return  pontoSelecionado1 = "MAIN1" ,console.log(pontoSelecionado1),verificador = "MAIN1";
            
        } else if((id=="MAIN2") && (pontoSelecionado2 == undefined)){
         verificador = "MAIN2";
          return  pontoSelecionado1 = "MAIN2",console.log(pontoSelecionado1),verificador = "MAIN2",console.log( "verificador",verificador);

        } else if((id=="MAIN3") &&( pontoSelecionado2 == undefined)){
         verificador = "MAIN3";
          return  pontoSelecionado1 = "MAIN3",console.log(pontoSelecionado1),verificador = "MAIN3";

        } else if((id=="MAIN4") && (pontoSelecionado2 == undefined)){
         verificador = "MAIN4";
          return  pontoSelecionado1 = "MAIN4",console.log(pontoSelecionado1),verificador = "MAIN4";

        } 
        
        
        
// ate esse ponto as validacoes estao corrende bem
// a  pontoSelecionado1 so recebe valor se  pontoSelecionado2 for undefined
// e foi veio uma validacao que nao deixa a  pontoSelecionado1 receber o mesmo valor 
// ate esse ponto o corFio ja pode ter valor ou nao 
// as variaveis  pontoSelecionado1 e  pontoSelecionado2 ja terao valor
        
        
    });
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
      pontoSelecionado4 != "MAIN2" && pontoSelecionado4 != "MAIN3" && pontoSelecionado4 != "MAIN4"
    ){
       
console.log("id chato", id)

// se o id selecionado for diferente os valres abaixo se TRUE e ele grava a variavel
            if( id != "MAIN2" && id != "MAIN3" && id != "MAIN4" && id != "pretoFase" 
               && id != "verdeTerra" && id != "brancoRetorno" && id != "azulNeltro" && id != "marromRetorno"&& id != "resetar" && id != "menu"
               && id != "fio1"&& id != "fio2"&& id != "fio3"&& id != "fio4"&& id != "fio5"){
           
           return  pontoSelecionado4 = "MAIN1", console.log(pontoSelecionado4);
            
         } else if(id != "MAIN1" && id != "MAIN3" && id != "MAIN4" && id != "pretoFase" 
            && id != "verdeTerra" && id != "brancoRetorno" && id != "azulNeltro" && id != "marromRetorno" && id != "resetar" && id != "menu"
            && id != "fio1"&& id != "fio2"&& id != "fio3"&& id != "fio4"&& id != "fio5"){
            
           return  pontoSelecionado4 = "MAIN2", console.log(pontoSelecionado4);
             
         } else if(id != "MAIN1" && id != "MAIN2" && id != "MAIN4" && id != "pretoFase" 
            && id != "verdeTerra" && id != "brancoRetorno" && id != "azulNeltro" && id != "marromRetorno" && id != "resetar" && id != "menu"
            && id != "fio1"&& id != "fio2"&& id != "fio3"&& id != "fio4"&& id != "fio5"){
            
           return  pontoSelecionado4 = "MAIN3", console.log(pontoSelecionado4);
             
         } else if(id != "MAIN1" && id != "MAIN2" && id != "MAIN3" && id != "pretoFase" 
            && id != "verdeTerra" && id != "brancoRetorno" && id != "azulNeltro" && id != "marromRetorno" && id != "resetar" && id != "menu"
            && id != "fio1"&& id != "fio2"&& id != "fio3"&& id != "fio4"&& id != "fio5"){
            
          return  pontoSelecionado4 = "MAIN4", console.log(pontoSelecionado4);
            
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
         
        if(parte2 == true){




        
        if(id== "fio1" && corFio != undefined  ){
            
          return  corFio2 = "pretoFase" ,console.log(corFio2);
         
        } else if(id=="fio2"&& corFio != undefined ){
              
          return  corFio2 = "verdeTerra",console.log(corFio2);
        } else if(id=="fio3"&& corFio != undefined ){
            
          return  corFio2 = "brancoRetorno",console.log(corFio2);
           
        } else if(id=="fio4"&& corFio != undefined ){
            
           return corFio2 = "azulNeltro",console.log(corFio2);
            
        }else if(id=="fio5"&& corFio != undefined ){
            
         return   corFio2 = "marromRetorno",console.log(corFio2);
            
        }

// ele grava o valor do primeiro click na variavel pontoSelecionado1 SO SE a pontoSelecionado2 for undefined
        if((id== "MAIN1" )&& (pontoSelecionado4 == undefined)){
         verificador2 = "MAIN1";
          return  pontoSelecionado3 = "MAIN1" ,console.log(pontoSelecionado3),verificador2 = "MAIN1";
            
        } else if((id=="MAIN2") && (pontoSelecionado4 == undefined)){
         verificador2 = "MAIN2";
          return  pontoSelecionado3 = "MAIN2",console.log(pontoSelecionado3),verificador2 = "MAIN2",console.log( "verificador2",verificador2);

        } else if((id=="MAIN3") &&( pontoSelecionado4 == undefined)){
         verificador2 = "MAIN3";
          return  pontoSelecionado3 = "MAIN3",console.log(pontoSelecionado3),verificador2 = "MAIN3";

        } else if((id=="MAIN4") && (pontoSelecionado4 == undefined)){
         verificador2 = "MAIN4";
          return  pontoSelecionado3 = "MAIN4",console.log(pontoSelecionado3),verificador2 = "MAIN4";

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










//=========PRIMEIRO FIO===========
console.log(ligacaoPonto);

// se ja temos a cor do fio a gora passaresmos esse valor para outra variavel
// que e a   ligacaoPonto
function fioConectado(){
    

   if( parte2 == false  ){  



    if(corFio == "pretoFase"){

      return  ligacaoPonto = "pretoFase",console.log(ligacaoPonto);
        
    }else if(corFio == "verdeTerra"){

       return ligacaoPonto = "verdeTerra",console.log(ligacaoPonto);
        
    }else if(corFio == "brancoRetorno"){

       return ligacaoPonto = "brancoRetorno",console.log(ligacaoPonto);
        
    }else if(corFio == "azulNeltro"){

       return ligacaoPonto = "azulNeltro",console.log(ligacaoPonto);
       
    }else if(corFio == "marromRetorno"){

       return ligacaoPonto = "marromRetorno",console.log(ligacaoPonto);
        
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

     return  ligacaoPonto2 = "pretoFase",console.log(ligacaoPonto2);
       
   }else if(corFio2 == "verdeTerra"){

      return ligacaoPonto2 = "verdeTerra",console.log(ligacaoPonto2);
       
   }else if(corFio2 == "brancoRetorno"){

      return ligacaoPonto2 = "brancoRetorno",console.log(ligacaoPonto2);
       
   }else if(corFio2 == "azulNeltro"){

      return ligacaoPonto2 = "azulNeltro",console.log(ligacaoPonto2);
      
   }else if(corFio2 == "marromRetorno"){

      return ligacaoPonto2 = "marromRetorno",console.log(ligacaoPonto2);
       
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









//=========PRIMEIRO FIO===========
//conectando os fios a os quadrados
function fioConectadoParte1(){

    if(pontoSelecionado1 == "MAIN1" && corFio == "pretoFase"){
      
       return preimeiraLigacao  = "pretoFase",console.log(preimeiraLigacao),console.log(corFio);
        
    }else if(pontoSelecionado1 == "MAIN2" && corFio == "pretoFase"){
      return  preimeiraLigacao  = "pretoFase",console.log(preimeiraLigacao),console.log(corFio);
       
    }else if(pontoSelecionado1 == "MAIN3" && corFio == "pretoFase"){
       return preimeiraLigacao  = "pretoFase",console.log(preimeiraLigacao),console.log(corFio);
        
    }else if(pontoSelecionado1 == "MAIN4" && corFio == "pretoFase"){
       return preimeiraLigacao  = "pretoFase",console.log(preimeiraLigacao),console.log(corFio);
       
    }
    
    else if(pontoSelecionado1 == "MAIN1" && corFio == "verdeTerra"){
       return preimeiraLigacao  = "verdeTerra",console.log(preimeiraLigacao),console.log(corFio);
        
    }else if(pontoSelecionado1 == "MAIN2" && corFio == "verdeTerra"){
       return preimeiraLigacao  = "verdeTerra",console.log(preimeiraLigacao),console.log(corFio);
        
    }else if(pontoSelecionado1 == "MAIN3" && corFio == "verdeTerra"){
       return preimeiraLigacao  = "verdeTerra",console.log(preimeiraLigacao),console.log(corFio);
        
    }else if(pontoSelecionado1 == "MAIN4" && corFio == "verdeTerra"){
       return preimeiraLigacao  = "verdeTerra",console.log(preimeiraLigacao),console.log(corFio);
        
    }

    else if(pontoSelecionado1 == "MAIN1" && corFio == "brancoRetorno"){
       return preimeiraLigacao  = "brancoRetorno",console.log(preimeiraLigacao),console.log(corFio);
        
    }else if(pontoSelecionado1 == "MAIN2" && corFio == "brancoRetorno"){
       return preimeiraLigacao  = "brancoRetorno",console.log(preimeiraLigacao),console.log(corFio);
        
    }else if(pontoSelecionado1 == "MAIN3" && corFio == "brancoRetorno"){
       return preimeiraLigacao  = "brancoRetorno",console.log(preimeiraLigacao),console.log(corFio);
      
    }else if(pontoSelecionado1 == "MAIN4" && corFio == "brancoRetorno"){
       return preimeiraLigacao  = "brancoRetorno",console.log(preimeiraLigacao),console.log(corFio);
        
    }

    else if(pontoSelecionado1 == "MAIN1" && corFio == "azulNeltro"){
       return preimeiraLigacao  = "azulNeltro",console.log(preimeiraLigacao),console.log(corFio);
        
    }else if(pontoSelecionado1 == "MAIN2" && corFio == "azulNeltro"){
       return preimeiraLigacao  = "azulNeltro",console.log(preimeiraLigacao),console.log(corFio);
       
    }else if(pontoSelecionado1 == "MAIN3" && corFio == "azulNeltro"){
       return preimeiraLigacao  = "azulNeltro",console.log(preimeiraLigacao),console.log(corFio);
       
    }else if(pontoSelecionado1 == "MAIN4" && corFio == "azulNeltro"){
       return preimeiraLigacao  = "azulNeltro",console.log(preimeiraLigacao),console.log(corFio);
        
    }

    else if(pontoSelecionado1 == "MAIN1" && corFio == "marromRetorno"){
       return preimeiraLigacao  = "marromRetorno",console.log(preimeiraLigacao),console.log(corFio);
     
    }else if(pontoSelecionado1 == "MAIN2" && corFio == "marromRetorno"){
       return preimeiraLigacao  = "marromRetorno",console.log(preimeiraLigacao),console.log(corFio);
        
    }else if(pontoSelecionado1 == "MAIN3" && corFio == "marromRetorno"){
       return preimeiraLigacao  = "marromRetorno",console.log(preimeiraLigacao),console.log(corFio);
      
    }else if(pontoSelecionado1 == "MAIN4" && corFio == "marromRetorno"){
       return preimeiraLigacao  = "marromRetorno",console.log(preimeiraLigacao),console.log(corFio);
        
    }

 
 };
//=========PRIMEIRO FIO===========






//===========SEGUNDO FIO==========
//conectando os fios a os quadrados
function fioConectadoParte12(){

   if(pontoSelecionado3 == "MAIN1" && corFio2 == "pretoFase"){
     
      return preimeiraLigacao2  = "pretoFase",console.log(preimeiraLigacao2),console.log(corFio2);
       
   }else if(pontoSelecionado3 == "MAIN2" && corFio2 == "pretoFase"){
     return  preimeiraLigacao2  = "pretoFase",console.log(preimeiraLigacao2),console.log(corFio2);
      
   }else if(pontoSelecionado3 == "MAIN3" && corFio2 == "pretoFase"){
      return preimeiraLigacao2  = "pretoFase",console.log(preimeiraLigacao2),console.log(corFio2);
       
   }else if(pontoSelecionado3 == "MAIN4" && corFio2 == "pretoFase"){
      return preimeiraLigacao2  = "pretoFase",console.log(preimeiraLigacao2),console.log(corFio2);
      
   }
   
   else if(pontoSelecionado3 == "MAIN1" && corFio2 == "verdeTerra"){
      return preimeiraLigacao2  = "verdeTerra",console.log(preimeiraLigacao2),console.log(corFio2);
       
   }else if(pontoSelecionado3 == "MAIN2" && corFio2 == "verdeTerra"){
      return preimeiraLigacao2  = "verdeTerra",console.log(preimeiraLigacao2),console.log(corFio2);
       
   }else if(pontoSelecionado3 == "MAIN3" && corFio2 == "verdeTerra"){
      return preimeiraLigacao2  = "verdeTerra",console.log(preimeiraLigacao),console.log(corFio2);
       
   }else if(pontoSelecionado3 == "MAIN4" && corFio2 == "verdeTerra"){
      return preimeiraLigacao2  = "verdeTerra",console.log(preimeiraLigacao2),console.log(corFio2);
       
   }

   else if(pontoSelecionado3 == "MAIN1" && corFio2 == "brancoRetorno"){
      return preimeiraLigacao2  = "brancoRetorno",console.log(preimeiraLigacao2),console.log(corFio2);
       
   }else if(pontoSelecionado3 == "MAIN2" && corFio2 == "brancoRetorno"){
      return preimeiraLigacao2  = "brancoRetorno",console.log(preimeiraLigacao2),console.log(corFio2);
       
   }else if(pontoSelecionado3 == "MAIN3" && corFio2 == "brancoRetorno"){
      return preimeiraLigacao2  = "brancoRetorno",console.log(preimeiraLigacao2),console.log(corFio2);
     
   }else if(pontoSelecionado3 == "MAIN4" && corFio2 == "brancoRetorno"){
      return preimeiraLigacao2  = "brancoRetorno",console.log(preimeiraLigacao2),console.log(corFio2);
       
   }

   else if(pontoSelecionado3 == "MAIN1" && corFio2 == "azulNeltro"){
      return preimeiraLigacao2  = "azulNeltro",console.log(preimeiraLigacao2),console.log(corFio2);
       
   }else if(pontoSelecionado3 == "MAIN2" && corFio2 == "azulNeltro"){
      return preimeiraLigacao2  = "azulNeltro",console.log(preimeiraLigacao2),console.log(corFio2);
      
   }else if(pontoSelecionado3 == "MAIN3" && corFio2 == "azulNeltro"){
      return preimeiraLigacao2 = "azulNeltro",console.log(preimeiraLigacao2),console.log(corFio2);
      
   }else if(pontoSelecionado3 == "MAIN4" && corFio2 == "azulNeltro"){
      return preimeiraLigacao2  = "azulNeltro",console.log(preimeiraLigacao2),console.log(corFio2);
       
   }

   else if(pontoSelecionado3 == "MAIN1" && corFio2 == "marromRetorno"){
      return preimeiraLigacao2  = "marromRetorno",console.log(preimeiraLigacao2),console.log(corFio2);
    
   }else if(pontoSelecionado3 == "MAIN2" && corFio2 == "marromRetorno"){
      return preimeiraLigacao2  = "marromRetorno",console.log(preimeiraLigacao2),console.log(corFio2);
       
   }else if(pontoSelecionado3 == "MAIN3" && corFio2 == "marromRetorno"){
      return preimeiraLigacao2  = "marromRetorno",console.log(preimeiraLigacao2),console.log(corFio2);
     
   }else if(pontoSelecionado3 == "MAIN4" && corFio2 == "marromRetorno"){
      return preimeiraLigacao2  = "marromRetorno",console.log(preimeiraLigacao2),console.log(corFio2);
       
   }


};
//===========SEGUNDO FIO==========






//=========PRIMEIRO FIO===========
// neste ponto se pontoSelecionado2 for diferente de pontoSelecionado1 
// exemplo eles nao podem ter o mesmo valor "main1" E ligacaoPonto FOR IGUAL A pretoFase
// segundaLigacao ligacao recebe pretoFase
function fioConectadoParte2(){

    if(pontoSelecionado2 != pontoSelecionado1 && pontoSelecionado2 != undefined  && ligacaoPonto == "pretoFase"){

      return  segundaLigacao  = "pretoFase",console.log(segundaLigacao);
        
    }else 

    if(pontoSelecionado2 != pontoSelecionado1 && pontoSelecionado2 != undefined &&  ligacaoPonto == "verdeTerra"){

       return segundaLigacao  = "verdeTerra",console.log(segundaLigacao);
        
    }else 

    if(pontoSelecionado2 != pontoSelecionado1 && pontoSelecionado2 != undefined && ligacaoPonto == "brancoRetorno"){

       return segundaLigacao  = "brancoRetorno",console.log(segundaLigacao);
        
    }else 

    if(pontoSelecionado2 != pontoSelecionado1 && pontoSelecionado2 != undefined && ligacaoPonto == "azulNeltro"){

       return segundaLigacao  = "azulNeltro",console.log(segundaLigacao);
        
    }else 

    if(pontoSelecionado2 != pontoSelecionado1 && pontoSelecionado2 != undefined && ligacaoPonto == "marromRetorno"){

       return segundaLigacao  = "marromRetorno",console.log(segundaLigacao);
       
    }

 
 };
//=========PRIMEIRO FIO===========







// neste ponto se pontoSelecionado2 for diferente de pontoSelecionado1 
// exemplo eles nao podem ter o mesmo valor "main1" E ligacaoPonto FOR IGUAL A pretoFase
// segundaLigacao ligacao recebe pretoFase
function fioConectadoParte22(){

   if(pontoSelecionado4 != pontoSelecionado3 && pontoSelecionado4 != undefined  && ligacaoPonto2 == "pretoFase"){

     return  segundaLigacao2  = "pretoFase",console.log(segundaLigacao2);
       
   }else 

   if(pontoSelecionado4 != pontoSelecionado3 && pontoSelecionado4 != undefined &&  ligacaoPonto2 == "verdeTerra"){

      return segundaLigacao2  = "verdeTerra",console.log(segundaLigacao2);
       
   }else 

   if(pontoSelecionado4 != pontoSelecionado3 && pontoSelecionado4 != undefined && ligacaoPonto2 == "brancoRetorno"){

      return segundaLigacao2  = "brancoRetorno",console.log(segundaLigacao2);
       
   }else 

   if(pontoSelecionado4 != pontoSelecionado3 && pontoSelecionado4 != undefined && ligacaoPonto2 == "azulNeltro"){

      return segundaLigacao2  = "azulNeltro",console.log(segundaLigacao2);
       
   }else 

   if(pontoSelecionado4 != pontoSelecionado3 && pontoSelecionado4 != undefined && ligacaoPonto2 == "marromRetorno"){

      return segundaLigacao2  = "marromRetorno",console.log(segundaLigacao2);
      
   }


};
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
 }

//=========PRIMEIRO FIO===========
 function fioConectadoParte3(){


    console.log( " e true ou false",resetId);
 if(resetId == true ){

   
   let elementosCss = this.document.getElementById("MAIN10")
   let elementosCss2 = this.document.getElementById("MAIN11")
   let elementosCss3 = this.document.getElementById("MAIN12")
   let elementosCss4 = this.document.getElementById("MAIN13")
   let elementosCss5 = this.document.getElementById("MAIN14")


   let elementosCss6 = this.document.getElementById("MAIN15")
   let elementosCss7 = this.document.getElementById("MAIN16")
   let elementosCss8 = this.document.getElementById("MAIN17")
   let elementosCss9 = this.document.getElementById("MAIN18")
   let elementosCss10 = this.document.getElementById("MAIN19")


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
}



            ///// BUG DE CIRCUITO
else  if(verificador == "MAIN1" && ligacaoPonto == "pretoFase" && preimeiraLigacao =="pretoFase" && segundaLigacao == "pretoFase" ){
   let elementosCss = document.getElementById("MAIN1");
   if(elementosCss != null || elementosCss != undefined) { 
   
      if(pontoSelecionado2 == "MAIN2" || pontoSelecionado2 == "MAIN1"){ 
    console.log(elementosCss);
    parte2 = true;
    elementosCss.id = "MAIN20"
   
   console.log("fundionou"); 
   abrirPopup()
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
       elementosCss.id = "MAIN21"
       abrirPopup()
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
      elementosCss.id = "MAIN22"
      abrirPopup()
      console.log("fundionou"); 
      bug = true;
}} }
else  if(verificador == "MAIN1" && ligacaoPonto == "azulNeltro" && preimeiraLigacao =="azulNeltro" && segundaLigacao == "azulNeltro" ){
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

 else  if(verificador == "MAIN1" && ligacaoPonto == "marromRetorno" && preimeiraLigacao =="marromRetorno" && segundaLigacao == "marromRetorno" ){
         let elementosCss = document.getElementById("MAIN1");
          if(elementosCss != null || elementosCss != undefined) { 
               
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

   
   let elementosCss = this.document.getElementById("MAIN10")
   let elementosCss2 = this.document.getElementById("MAIN11")
   let elementosCss3 = this.document.getElementById("MAIN12")
   let elementosCss4 = this.document.getElementById("MAIN13")
   let elementosCss5 = this.document.getElementById("MAIN14")


   let elementosCss6 = this.document.getElementById("MAIN15")
   let elementosCss7 = this.document.getElementById("MAIN16")
   let elementosCss8 = this.document.getElementById("MAIN17")
   let elementosCss9 = this.document.getElementById("MAIN18")
   let elementosCss10 = this.document.getElementById("MAIN19")


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
    if(pontoSelecionado2 == "MAIN1"&&  verificador2 == "MAIN1" && ligacaoPonto2 == "pretoFase" && preimeiraLigacao2 =="pretoFase" && segundaLigacao2 == "pretoFase" ){
        let elementosCss = document.getElementById("MAIN1");
         if(elementosCss != null || elementosCss != undefined) { 
         
         console.log(elementosCss);
        // parte2 = true;
         elementosCss.id = "MAIN10"
         }
    console.log("fundionou"); 
    }
    else if(verificador2 == "MAIN1" && ligacaoPonto2 == "verdeTerra" && preimeiraLigacao2 =="verdeTerra" && segundaLigacao2 == "verdeTerra"){
      let elementosCss = document.getElementById("MAIN1");
      if(elementosCss != null || elementosCss != undefined) { 
      console.log(elementosCss);
     // parte2 = true;
      elementosCss.id = "MAIN11"
   
 console.log("fundionou");
}
    } else if(verificador2 == "MAIN1" && ligacaoPonto2 == "brancoRetorno" && preimeiraLigacao2 =="brancoRetorno" && segundaLigacao2 == "brancoRetorno"){

      let elementosCss = document.getElementById("MAIN1");
      if(elementosCss != null || elementosCss != undefined) { 
      console.log(elementosCss);
     // parte2 = true;
      elementosCss.id = "MAIN12"
   
 console.log("fundionou");
}
    } else if(verificador2 == "MAIN1" && ligacaoPonto2 == "azulNeltro" && preimeiraLigacao2 =="azulNeltro" && segundaLigacao2 == "azulNeltro"){
      let elementosCss = document.getElementById("MAIN1");
      if(elementosCss != null || elementosCss != undefined) { 
      console.log(elementosCss);
     // parte2 = true;
      elementosCss.id = "MAIN13"

 console.log("fundionou");
}

    } else if(verificador2 == "MAIN1" && ligacaoPonto2 == "marromRetorno" && preimeiraLigacao2 =="marromRetorno" && segundaLigacao2 == "marromRetorno"){

      let elementosCss = document.getElementById("MAIN1");
      if(elementosCss != null || elementosCss != undefined) { 
      console.log(elementosCss);
      //parte2 = true;
      elementosCss.id = "MAIN14"
 
      

 console.log("fundionou");
}
    } else  if(verificador2 == "MAIN2" && ligacaoPonto2 == "pretoFase" && preimeiraLigacao2 =="pretoFase" && segundaLigacao2 == "pretoFase" ){
      let elementosCss2 = document.getElementById("MAIN2");
      if(elementosCss2 != null || elementosCss2 != undefined) { 
       console.log(elementosCss2);
      // parte2 = true;
       elementosCss2.id = "MAIN15"
      }
  console.log("fundionou"); 
  } else  if(verificador2 == "MAIN2" && ligacaoPonto2 == "verdeTerra" && preimeiraLigacao2 =="verdeTerra" && segundaLigacao2 == "verdeTerra" ){
   let elementosCss2 = document.getElementById("MAIN2");
   if(elementosCss2 != null || elementosCss2 != undefined) { 
    console.log(elementosCss2);
  //  parte2 = true;
    elementosCss2.id = "MAIN16"
   }
console.log("fundionou"); 
} else  if(verificador2 == "MAIN2" && ligacaoPonto2 == "brancoRetorno" && preimeiraLigacao2 =="brancoRetorno" && segundaLigacao2 == "brancoRetorno" ){
   let elementosCss2 = document.getElementById("MAIN2");
   if(elementosCss2 != null || elementosCss2 != undefined) { 
    console.log(elementosCss2);
   // parte2 = true;
    elementosCss2.id = "MAIN17"
   }
console.log("fundionou"); 
} else  if(verificador2 == "MAIN2" && ligacaoPonto2 == "azulNeltro" && preimeiraLigacao2 =="azulNeltro" && segundaLigacao2 == "azulNeltro" ){
   let elementosCss2 = document.getElementById("MAIN2");
   if(elementosCss2 != null || elementosCss2 != undefined) { 
    console.log(elementosCss2);
   // parte2 = true;
    elementosCss2.id = "MAIN18"
   }
console.log("fundionou"); 
} else  if(verificador2 == "MAIN2" && ligacaoPonto2 == "marromRetorno" && preimeiraLigacao2 =="marromRetorno" && segundaLigacao2 == "marromRetorno" ){
   let elementosCss2 = document.getElementById("MAIN2");
   if(elementosCss2 != null || elementosCss2 != undefined) { 
    console.log(elementosCss2);
   // parte2 = true;
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
        // parte2 = true;
         elementosCss.id = "MAIN10"
         }
    console.log("fundionou"); 
    }
    else if(verificador2 == "MAIN3" && ligacaoPonto2 == "verdeTerra" && preimeiraLigacao2 =="verdeTerra" && segundaLigacao2 == "verdeTerra"){
      let elementosCss = document.getElementById("MAIN1");
      if(elementosCss != null || elementosCss != undefined) { 
      console.log(elementosCss);
     // parte2 = true;
      elementosCss.id = "MAIN11"
   
 console.log("fundionou");
}
    } else if(verificador2 == "MAIN3" && ligacaoPonto2 == "brancoRetorno" && preimeiraLigacao2 =="brancoRetorno" && segundaLigacao2 == "brancoRetorno"){

      let elementosCss = document.getElementById("MAIN1");
      if(elementosCss != null || elementosCss != undefined) { 
      console.log(elementosCss);
     // parte2 = true;
      elementosCss.id = "MAIN12"
   
 console.log("fundionou");
}
    } else if(verificador2 == "MAIN3" && ligacaoPonto2 == "azulNeltro" && preimeiraLigacao2 =="azulNeltro" && segundaLigacao2 == "azulNeltro"){
      let elementosCss = document.getElementById("MAIN1");
      if(elementosCss != null || elementosCss != undefined) { 
      console.log(elementosCss);
     // parte2 = true;
      elementosCss.id = "MAIN13"

 console.log("fundionou");
}

    } else if(verificador2 == "MAIN3" && ligacaoPonto2 == "marromRetorno" && preimeiraLigacao2 =="marromRetorno" && segundaLigacao2 == "marromRetorno"){

      let elementosCss = document.getElementById("MAIN1");
      if(elementosCss != null || elementosCss != undefined) { 
      console.log(elementosCss);
      //parte2 = true;
      elementosCss.id = "MAIN14"
 
      

 console.log("fundionou");
}
    } else  if(verificador2 == "MAIN4" && ligacaoPonto2 == "pretoFase" && preimeiraLigacao2 =="pretoFase" && segundaLigacao2 == "pretoFase" ){
      let elementosCss2 = document.getElementById("MAIN2");
      if(elementosCss2 != null || elementosCss2 != undefined) { 
       console.log(elementosCss2);
      // parte2 = true;
       elementosCss2.id = "MAIN15"
      }
  console.log("fundionou"); 
  } else  if(verificador2 == "MAIN4" && ligacaoPonto2 == "verdeTerra" && preimeiraLigacao2 =="verdeTerra" && segundaLigacao2 == "verdeTerra" ){
   let elementosCss2 = document.getElementById("MAIN2");
   if(elementosCss2 != null || elementosCss2 != undefined) { 
    console.log(elementosCss2);
  //  parte2 = true;
    elementosCss2.id = "MAIN16"
   }
console.log("fundionou"); 
} else  if(verificador2 == "MAIN4" && ligacaoPonto2 == "brancoRetorno" && preimeiraLigacao2 =="brancoRetorno" && segundaLigacao2 == "brancoRetorno" ){
   let elementosCss2 = document.getElementById("MAIN2");
   if(elementosCss2 != null || elementosCss2 != undefined) { 
    console.log(elementosCss2);
   // parte2 = true;
    elementosCss2.id = "MAIN17"
   }
console.log("fundionou"); 
} else  if(verificador2 == "MAIN4" && ligacaoPonto2 == "azulNeltro" && preimeiraLigacao2 =="azulNeltro" && segundaLigacao2 == "azulNeltro" ){
   let elementosCss2 = document.getElementById("MAIN2");
   if(elementosCss2 != null || elementosCss2 != undefined) { 
    console.log(elementosCss2);
   // parte2 = true;
    elementosCss2.id = "MAIN18"
   }
console.log("fundionou"); 
} else  if(verificador2 == "MAIN4" && ligacaoPonto2 == "marromRetorno" && preimeiraLigacao2 =="marromRetorno" && segundaLigacao2 == "marromRetorno" ){
   let elementosCss2 = document.getElementById("MAIN2");
   if(elementosCss2 != null || elementosCss2 != undefined) { 
    console.log(elementosCss2);
   // parte2 = true;
    elementosCss2.id = "MAIN19"

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



function resetButtom(){

    corFio = "";
    ligacaoPonto = "";
    preimeiraLigacao = "";
    segundaLigacao = "";
    pontoSelecionado1 = undefined;
    pontoSelecionado2 = undefined;
    verificador = "";
   
   
    corFio2 = "";
    ligacaoPonto2 = "";
    preimeiraLigacao2 = "";
    segundaLigacao2 = "";
    pontoSelecionado3 = undefined;
    pontoSelecionado4 = undefined;
    verificador2 = "";
    parte2 = false  ;
    console.log("resetar");


    resetId = true
    resetId2 = true
    

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



}

function abrirPopup(){
   idioma;
   let texto1 = " Voce fechou o circuito! tente de novo."
   let texto2 =""
  
if(idioma == "portugues"){


  let  message = document.getElementById("message")
  console.log(message)
  message.id = "message2"
  message.innerHTML = texto1
  
  // setInterval(resetButtom(), 3000);
  // setInterval(message.innerHTML = textoVasio, 6000);
 // setTimeout(message.innerHTML = textoVasio, 6000)
}


}



/////LAMPADA CONEXAO
const lamp = document.querySelectorAll("[id]");


lamp.forEach(lp => {
   // depois de varrer a variavel lp add um evento
    lp.addEventListener("click", function(){
        const id = lp.id;

     console.log(lamp)
     console.log(lp.id)
       
   if(id == "L1"){

      lampadaConect(id)
    return id
   }


    });
}


);



function lampadaConect(id){
   
   console.log(id)
   if(segundaLigacao == "pretoFase"&& id == "L1"){

      let lp = document.getElementById("L1");
      lp.id = "L11"
      
    } else 

    if(segundaLigacao == "verdeTerra"&& id == "L1"){

      let lp = document.getElementById("L1");
      lp.id = "L12"
      
    } else

    if(segundaLigacao == "brancoRetorno"&& id == "L1"){

      let lp = document.getElementById("L1");
      lp.id = "L13"
      
    } else
    if(segundaLigacao == "azulNeltro"&& id == "L1"){

      let lp = document.getElementById("L1");
      lp.id = "L14"
      
    }else

    if(segundaLigacao == "marromRetorno"&& id == "L1"){

      let lp = document.getElementById("L1");
      lp.id = "L15"
      
    }
   


}


//chamando a funcao
fioConectado();//=========PRIMEIRO FIO========
fioConectadoParte1();//=========PRIMEIRO FIO========
fioConectadoParte2();//=========PRIMEIRO FIO========
fioConectadoParte3();//=========PRIMEIRO FIO========
mostrar()

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



setInterval(mostrar, 3000);