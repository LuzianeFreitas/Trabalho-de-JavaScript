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

    listarSelect() {
        let stringSelect = "<select class='form-control'>";
        for(let i = 0; i < this.produtos.length; i++){
            stringSelect += "<option id='produtoSelecionado'>" + this.produtos[i].nome + "</option>";
        }

        stringSelect += "</select>";

        return stringSelect;
    }
};