

const getAll =  (req, res) => {//async, aguarda porque eu vou lá fazer a consulta espere as ações para renderizar a página
    try{//tente por esse caminho se der certo
        res.render("index");
    }catch(err){//deu erro, venha nesse caminho
        res.status(500).send("deu errado");//vem do objeto erro
    };;
   
};

module.exports = {//exportando todas as rotas que a gente usar qui po routes
    getAll
    
}