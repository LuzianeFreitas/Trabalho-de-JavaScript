const Estoque = {
    idProduto: 1,
    produtos: [],
    perda: 0,

    inicializar(){
        if(localStorage.getItem("produtos") != null){
            this.carregarAtributosDoLocalStorage();
        }
        return true;
    },

    carregarAtributosDoLocalStorage(){
        this.produtos = JSON.parse(localStorage.getItem("produtos"));
        this.idProduto = JSON.parse(localStorage.getItem("idProduto"));
        this.perda = JSON.parse(localStorage.getItem("perda"));

        return true;
    },

    salvarAtributosNoLocalStorage(){
        localStorage.setItem("produtos", JSON.stringify(this.produtos));
        localStorage.setItem("idProduto", JSON.stringify(this.idProduto));
        localStorage.setItem("perda", JSON.stringify(this.perda));

        return true;
    },

    adicionarProduto(produto){
        this.produtos.push(produto);
        this.salvarAtributosNoLocalStorage();

        return true;
    },

    removerProduto(id){
        for(let i = 0; i < this.produtos.length; i++){
            if(this.produtos[i].id === id){
                this.produtos.splice(i, 1);
                this.salvarAtributosNoLocalStorage();
                return true;
            }
        }
        return false;
    },

    atualizarProduto(produto){
        for(let i = 0; i < this.produtos.length; i++){
            if(this.produtos[i].nome === produto.nome){
                if(this.produtos[i].quantidade >= produto.quantidade ){
                    this.produtos[i].quantidade -= produto.quantidade;
                    this.salvarAtributosNoLocalStorage();
                    return true;
                }else{
                    return false;
                }
                
            }
        }
        return false;
    },

    editarProduto(id, produto){
        for(let i = 0; i < this.produtos.length; i++){
            if(this.produtos[i].id === id){
                this.produtos[i] = produto;
                this.salvarAtributosNoLocalStorage();
                return true;
            }
        }
        return false;
    },

    getProduto(id){
        for(let i = 0; i < this.produtos.length; i++){
            if(this.produtos[i].id === id){
                return this.produtos[i];
            }
        }
        return false;
    },

    listarProdutos(){
        let stringTabela = "<table class='table'>";
        stringTabela += "<thead>";
        stringTabela += "<tr>";
        stringTabela += "<th>Id</th>";
        stringTabela += "<th>Nome</th>";
        stringTabela += "<th>Data de Validade</th>";
        stringTabela += "<th>Taxa de Validade</th>";
        stringTabela += "<th>Quantidade</th>";
        stringTabela += "<th>Preço</th>";
        stringTabela += "<th>Func. Cadastro</th>";
        stringTabela += "<th></th>";
        stringTabela += "<th></th>";
        stringTabela += "</tr>";
        stringTabela += "</thead>";

        stringTabela += "<tbody>";
        let data;

        for(let i = 0; i < this.produtos.length; i++){
            stringTabela += "<tr>";
            stringTabela += "<td>" + this.produtos[i].id + "</td>";
            stringTabela += "<td>" + this.produtos[i].nome + "</td>";
            dataDeValidade = new Date(this.produtos[i].dataDeValidade);
            //console.log(this.produtos[i].dataDeValidade);
            dataDeValidade = (dataDeValidade.getDate() + 1) + '/' +
                (dataDeValidade.getMonth() + 1) + '/' +  dataDeValidade.getFullYear();
            stringTabela += "<td>" + dataDeValidade + "</td>";
            stringTabela += "<td>" + this.produtos[i].taxaDeImposto + "</td>";
            stringTabela += "<td>" + this.produtos[i].quantidade + "</td>";
            stringTabela += "<td>" + this.produtos[i].preco + "</td>";
            stringTabela += "<td>" + this.produtos[i].funcionarioCadastro + "</td>";
            stringTabela += "<td class='btn-editar'><i class='fas fa-edit'></i></td>";
            stringTabela += "<td class='btn-excluir'><i class='fas fa-trash'></i></td>";
            stringTabela += "</tr>";
        }
        stringTabela += "</tbody>";
        stringTabela += "</table>";
        
        return stringTabela;
    },

    validaDataDeValidade(){
        let dataAtual = new Date();
        let dia = parseInt(dataAtual.getDate());
        let mes = parseInt(dataAtual.getMonth() + 1);
        let ano = parseInt(dataAtual.getFullYear());
        let dataDigitada;
        let dataDigitadaConvertida;
        let validaData = 1;
        //console.log(mes);
        //dataDigitadaConvertida[0]) -> Ano
        //dataDigitadaConvertida[1]) -> Mes
        //dataDigitadaConvertida[2] -> Dia
        for(let i = 0; i < this.produtos.length; i++){
            dataDigitada = this.produtos[i].dataDeValidade;
            dataDigitada = dataDigitada.toString();
            dataDigitadaConvertida = dataDigitada.split("-");

            //Verifica se possui ano e dia valido
            if((parseInt(dataDigitadaConvertida[0]) > 0 && parseInt(dataDigitadaConvertida[0]) <= 12) && (parseInt(dataDigitadaConvertida[2]) > 0 && parseInt(dataDigitadaConvertida[2]) <= 31)){
               if(parseInt(dataDigitadaConvertida[0]) > ano){
                    validaData = 1;
               }else if(parseInt(dataDigitadaConvertida[0]) == ano){
                    if(parseInt(dataDigitadaConvertida[1]) > mes){
                        validaData = 1;
                    }else if(parseInt(dataDigitadaConvertida[1]) == mes){
                        if(parseInt(dataDigitadaConvertida[2]) > dia){
                            validaData = 1;
                        }else{
                        validaData = 0;
                        }
                    }else{
                        validaData = 0;
                    }
               }else{
                validaData = 0;
               }
            }else{
                validaData = 0;
            }
        }

        return validaData;
    },

    calculaPerda(perdas){
        
        this.perda = 0;
        for(let i = 0; i < perdas.length; i++){            
            this.perda += (parseInt(perdas[i].quantidade) * parseInt(perdas[i].preco));     
        }
        this.salvarAtributosNoLocalStorage();
        return true;
    },

    getSelectProdutos(){
        let stringSelect = "";
        for(let i = 0; i < this.produtos.length; i++){
            stringSelect += "<option value='" + this.produtos[i].nome + "'>" + this.produtos[i].nome + "</option>";
        }

        return stringSelect;
    }
};