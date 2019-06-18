const Estoque = {
    idProduto: 1,
    produtos: [],

    inicializar(){
        if(localStorage.getItem("produtos") != null){
            this.carregarAtributosDoLocalStorage();
        }
        return true;
    },

    carregarAtributosDoLocalStorage(){
        this.produtos = JSON.parse(localStorage.getItem("produtos"));
        this.idProduto = JSON.parse(localStorage.getItem("idProduto"));

        return true;
    },

    salvarAtributosNoLocalStorage(){
        localStorage.setItem("produtos", JSON.stringify(this.produtos));
        localStorage.setItem("idProduto", JSON.stringify(this.idProduto));

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
        stringTabela += "</tr>";
        stringTabela += "</thead>";

        stringTabela += "<tbody>";

        for(let i = 0; i < this.produtos.length; i++){
            stringTabela += "<tr>";
            stringTabela += "<td>" + this.produtos[i].id + "</td>";
            stringTabela += "<td>" + this.produtos[i].nome + "</td>";
            stringTabela += "<td>" + this.produtos[i].dataDeValidade + "</td>";
            stringTabela += "<td>" + this.produtos[i].taxaDeImposto + "</td>";
            stringTabela += "<td>" + this.produtos[i].quantidade + "</td>";
            stringTabela += "<td>" + this.produtos[i].preco + "</td>";
            stringTabela += "</tr>";
        }
        stringTabela += "</tbody>";
        stringTabela += "</table>";

        return stringTabela;
    }
};