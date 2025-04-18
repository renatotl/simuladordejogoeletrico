const elementos = document.querySelectorAll("[id]");



elementos.forEach(elemento => {
    elemento.addEventListener("click", function(){
        const id = elemento.id;
        console.log("foi");
        if(id== "quadrado2"){
            window.location.replace("views/cozinha.html");
             console.log(" cozinha funcionol");
        } else if(id=="quadrado3"){
            window.location.replace("views/quarto.html");
            console.log("quarto funviona")
        } else if(id=="quadrado4"){
            window.location.replace("views/quintal.html") ;
            console.log("quintal funviona") ;
        } else if(id=="quadrado5"){
            window.location.replace("views/sala.html");
            console.log("sala funciona");
        }else if(id=="quadrado1"){
            window.location.replace("views/banheiro.html");
            console.log("banheiro funciona")
        };
    });
});