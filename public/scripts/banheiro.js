
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
               && id != "fio2" && id != "fio3" && id != "fio4" && id != "fio5"&& id !="menu"){
           
           return  pontoSelecionado2 = "MAIN1", console.log(pontoSelecionado2);
            
         } else if(id != "MAIN1" && id != "MAIN3" && id != "MAIN4" && id != "fio1" 
               && id != "fio2" && id != "fio3" && id != "fio4" && id != "fio5"&& id !="menu"){
            
           return  pontoSelecionado2 = "MAIN2", console.log(pontoSelecionado2);
             
         } else if(id != "MAIN1" && id != "MAIN2" && id != "MAIN4" && id != "fio1" 
               && id != "fio2" && id != "fio3" && id != "fio4" && id != "fio5"&& id !="menu"){
            
           return  pontoSelecionado2 = "MAIN3", console.log(pontoSelecionado2);
             
         } else if(id != "MAIN1" && id != "MAIN2" && id != "MAIN3" && id != "fio1" 
               && id != "fio2" && id != "fio3" && id != "fio4" && id != "fio5"&& id !="menu"){
            
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
       


// se o id selecionado for diferente os valres abaixo se TRUE e ele grava a variavel
            if( id != "MAIN2" && id != "MAIN3" && id != "MAIN4" && id != "pretoFase" 
               && id != "verdeTerra" && id != "brancoRetorno" && id != "azulNeltro" && "marromRetorno"){
           
           return  pontoSelecionado4 = "MAIN1", console.log(pontoSelecionado4);
            
         } else if(id != "MAIN1" && id != "MAIN3" && id != "MAIN4" && id != "pretoFase" 
            && id != "verdeTerra" && id != "brancoRetorno" && id != "azulNeltro" && "marromRetorno"){
            
           return  pontoSelecionado4 = "MAIN2", console.log(pontoSelecionado4);
             
         } else if(id != "MAIN1" && id != "MAIN2" && id != "MAIN4" && id != "pretoFase" 
            && id != "verdeTerra" && id != "brancoRetorno" && id != "azulNeltro" && "marromRetorno"){
            
           return  pontoSelecionado4 = "MAIN3", console.log(pontoSelecionado4);
             
         } else if(id != "MAIN1" && id != "MAIN2" && id != "MAIN3" && id != "pretoFase" 
            && id != "verdeTerra" && id != "brancoRetorno" && id != "azulNeltro" && "marromRetorno"){
            
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




        
        if(id== "fio1"){
            
          return  corFio2 = "pretoFase" ,console.log(corFio2);
         
        } else if(id=="fio2"){
              
          return  corFio2 = "verdeTerra",console.log(corFio2);
        } else if(id=="fio3"){
            
          return  corFio2 = "brancoRetorno",console.log(corFio2);
           
        } else if(id=="fio4"){
            
           return corFio2 = "azulNeltro",console.log(corFio2);
            
        }else if(id=="fio5"){
            
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







//=========PRIMEIRO FIO===========
 function fioConectadoParte3(){

   console.log(verificador);
    if( verificador == "MAIN1"   && ligacaoPonto == "pretoFase" && preimeiraLigacao =="pretoFase" && segundaLigacao == "pretoFase" ){
        let elementosCss = document.getElementById("MAIN1");
         if(elementosCss != null || elementosCss != undefined) { 
         
         console.log(elementosCss);
         parte2 = true;
         elementosCss.id = "MAIN10"
         }
    console.log("fundionou"); 
    }
    else if(verificador == "MAIN1" && ligacaoPonto == "verdeTerra" && preimeiraLigacao =="verdeTerra" && segundaLigacao == "verdeTerra"){
      let elementosCss = document.getElementById("MAIN1");
      if(elementosCss != null || elementosCss != undefined) { 
      console.log(elementosCss);
      parte2 = true;
      elementosCss.id = "MAIN11"
   
 console.log("fundionou");
}
    } else if(verificador == "MAIN1" && ligacaoPonto == "brancoRetorno" && preimeiraLigacao =="brancoRetorno" && segundaLigacao == "brancoRetorno"){

      let elementosCss = document.getElementById("MAIN1");
      if(elementosCss != null || elementosCss != undefined) { 
      console.log(elementosCss);
      parte2 = true;
      elementosCss.id = "MAIN12"
   
 console.log("fundionou");
}
    } else if(verificador == "MAIN1" && ligacaoPonto == "azulNeltro" && preimeiraLigacao =="azulNeltro" && segundaLigacao == "azulNeltro"){
      let elementosCss = document.getElementById("MAIN1");
      if(elementosCss != null || elementosCss != undefined) { 
      console.log(elementosCss);
      parte2 = true;
      elementosCss.id = "MAIN13"

 console.log("fundionou");
}

    } else if(verificador == "MAIN1" && ligacaoPonto == "marromRetorno" && preimeiraLigacao =="marromRetorno" && segundaLigacao == "marromRetorno"){

      let elementosCss = document.getElementById("MAIN1");
      if(elementosCss != null || elementosCss != undefined) { 
      console.log(elementosCss);
      parte2 = true;
      elementosCss.id = "MAIN14"
 
      

 console.log("fundionou");
}
    } else  if(verificador == "MAIN2" && ligacaoPonto == "pretoFase" && preimeiraLigacao =="pretoFase" && segundaLigacao == "pretoFase" ){
      let elementosCss2 = document.getElementById("MAIN2");
      if(elementosCss2 != null || elementosCss2 != undefined) { 
       console.log(elementosCss2);
       parte2 = true;
       elementosCss2.id = "MAIN15"
      }
  console.log("fundionou"); 
  } else  if(verificador == "MAIN2" && ligacaoPonto == "verdeTerra" && preimeiraLigacao =="verdeTerra" && segundaLigacao == "verdeTerra" ){
   let elementosCss2 = document.getElementById("MAIN2");
   if(elementosCss2 != null || elementosCss2 != undefined) { 
    console.log(elementosCss2);
    parte2 = true;
    elementosCss2.id = "MAIN16"
   }
console.log("fundionou"); 
} else  if(verificador == "MAIN2" && ligacaoPonto == "brancoRetorno" && preimeiraLigacao =="brancoRetorno" && segundaLigacao == "brancoRetorno" ){
   let elementosCss2 = document.getElementById("MAIN2");
   if(elementosCss2 != null || elementosCss2 != undefined) { 
    console.log(elementosCss2);
    parte2 = true;
    elementosCss2.id = "MAIN17"
   }
console.log("fundionou"); 
} else  if(verificador == "MAIN2" && ligacaoPonto == "azulNeltro" && preimeiraLigacao =="azulNeltro" && segundaLigacao == "azulNeltro" ){
   let elementosCss2 = document.getElementById("MAIN2");
   if(elementosCss2 != null || elementosCss2 != undefined) { 
    console.log(elementosCss2);
    parte2 = true;
    elementosCss2.id = "MAIN18"
   }
console.log("fundionou"); 
} else  if(verificador == "MAIN2" && ligacaoPonto == "marromRetorno" && preimeiraLigacao =="marromRetorno" && segundaLigacao == "marromRetorno" ){
   let elementosCss2 = document.getElementById("MAIN2");
   if(elementosCss2 != null || elementosCss2 != undefined) { 
    console.log(elementosCss2);
    parte2 = true;
    elementosCss2.id = "MAIN19"

console.log("fundionou"); 
   }
}
//ligacao do 3 para o 1
if( verificador == "MAIN3"   && ligacaoPonto == "pretoFase" && preimeiraLigacao =="pretoFase" && segundaLigacao == "pretoFase" ){
   let elementosCss = document.getElementById("MAIN1");
    if(elementosCss != null || elementosCss != undefined) { 
    
    console.log(elementosCss);
    parte2 = true;
    elementosCss.id = "MAIN10"
    }
console.log("fundionou"); 
}
//ligacao do 3 para o 1 
else if(verificador == "MAIN3" && ligacaoPonto == "verdeTerra" && preimeiraLigacao =="verdeTerra" && segundaLigacao == "verdeTerra"){
   let elementosCss = document.getElementById("MAIN1");
   if(elementosCss != null || elementosCss != undefined) { 
   console.log(elementosCss);
   parte2 = true;
   elementosCss.id = "MAIN11"

console.log("fundionou");
}
 }
//ligacao do 3 para o 1
 else if(verificador == "MAIN3" && ligacaoPonto == "brancoRetorno" && preimeiraLigacao =="brancoRetorno" && segundaLigacao == "brancoRetorno"){

   let elementosCss = document.getElementById("MAIN1");
   if(elementosCss != null || elementosCss != undefined) { 
   console.log(elementosCss);
   parte2 = true;
   elementosCss.id = "MAIN12"

console.log("fundionou");
}
 }
 //ligacao do 3 para o 1
 else if(verificador == "MAIN3" && ligacaoPonto == "azulNeltro" && preimeiraLigacao =="azulNeltro" && segundaLigacao == "azulNeltro"){
   let elementosCss = document.getElementById("MAIN1");
   if(elementosCss != null || elementosCss != undefined) { 
   console.log(elementosCss);
   parte2 = true;
   elementosCss.id = "MAIN13"

console.log("fundionou");
}

 }

//ligacao do 3 para o 1
 else if(verificador == "MAIN3" && ligacaoPonto == "marromRetorno" && preimeiraLigacao =="marromRetorno" && segundaLigacao == "marromRetorno"){

   let elementosCss = document.getElementById("MAIN1");
   if(elementosCss != null || elementosCss != undefined) { 
   console.log(elementosCss);
   parte2 = true;
   elementosCss.id = "MAIN14"

   

console.log("fundionou");
}
 }

//ligacao do 4 para o 2
 else  if(verificador == "MAIN4" && ligacaoPonto == "pretoFase" && preimeiraLigacao =="pretoFase" && segundaLigacao == "pretoFase" ){
   let elementosCss2 = document.getElementById("MAIN2");
   if(elementosCss2 != null || elementosCss2 != undefined) { 
    console.log(elementosCss2);
    parte2 = true;
    elementosCss2.id = "MAIN15"
   }
console.log("fundionou"); 

//ligacao do 4 para o 2
} else  if(verificador == "MAIN4" && ligacaoPonto == "verdeTerra" && preimeiraLigacao =="verdeTerra" && segundaLigacao == "verdeTerra" ){
let elementosCss2 = document.getElementById("MAIN2");
if(elementosCss2 != null || elementosCss2 != undefined) { 
 console.log(elementosCss2);
 parte2 = true;
 elementosCss2.id = "MAIN16"
}
console.log("fundionou"); 

//ligacao do 4 para o 2
} else  if(verificador == "MAIN4" && ligacaoPonto == "brancoRetorno" && preimeiraLigacao =="brancoRetorno" && segundaLigacao == "brancoRetorno" ){
let elementosCss2 = document.getElementById("MAIN2");
if(elementosCss2 != null || elementosCss2 != undefined) { 
 console.log(elementosCss2);
 parte2 = true;
 elementosCss2.id = "MAIN17"
}
console.log("fundionou"); 

//ligacao do 4 para o 2
} else  if(verificador == "MAIN4" && ligacaoPonto == "azulNeltro" && preimeiraLigacao =="azulNeltro" && segundaLigacao == "azulNeltro" ){
let elementosCss2 = document.getElementById("MAIN2");
if(elementosCss2 != null || elementosCss2 != undefined) { 
 console.log(elementosCss2);
 parte2 = true;
 elementosCss2.id = "MAIN18"
}
console.log("fundionou"); 

//ligacao do 4 para o 2
} else  if(verificador == "MAIN4" && ligacaoPonto == "marromRetorno" && preimeiraLigacao =="marromRetorno" && segundaLigacao == "marromRetorno" ){
let elementosCss2 = document.getElementById("MAIN2");
if(elementosCss2 != null || elementosCss2 != undefined) { 
 console.log(elementosCss2);
 parte2 = true;
 elementosCss2.id = "MAIN19"

console.log("fundionou"); 
}
}
 





    
    
    console.log(ligacaoPonto);
    console.log(preimeiraLigacao);
    console.log(segundaLigacao);
 
 
 };
 //=========PRIMEIRO FIO===========








//===========SEGUNDO FIO==========
 function fioConectadoParte33(){

   console.log(verificador2);
    if(  verificador2 == "MAIN1" && ligacaoPonto2 == "pretoFase" && preimeiraLigacao2 =="pretoFase" && segundaLigacao2 == "pretoFase" ){
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

    
    
    console.log(ligacaoPonto2);
    console.log(preimeiraLigacao2);
    console.log(segundaLigacao2);
 
 
 };
//===========SEGUNDO FIO==========









//chamando a funcao
fioConectado();//=========PRIMEIRO FIO========
fioConectadoParte1();//=========PRIMEIRO FIO========
fioConectadoParte2();//=========PRIMEIRO FIO========
fioConectadoParte3();//=========PRIMEIRO FIO========


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