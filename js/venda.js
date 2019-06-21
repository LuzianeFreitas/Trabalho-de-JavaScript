const Venda = {
    idVenda: 1,
    lucro: 0,
    vendas: [],

    inicializar(){
        if(localStorage.getItem("vendas") != null){
            this.carregarAtributosDoLocalStorage();
        }
        return true;
    },

    carregarAtributosDoLocalStorage(){
        this.vendas = JSON.parse(localStorage.getItem("vendas"));
        this.idVenda = JSON.parse(localStorage.getItem("idVenda"));
        this.lucro = JSON.parse(localStorage.getItem("lucro"));

        return true;
    },

    salvarAtributosNoLocalStorage(){
        localStorage.setItem("vendas", JSON.stringify(this.vendas));
        localStorage.setItem("idVenda", JSON.stringify(this.idVenda));
        localStorage.setItem("lucro", JSON.stringify(this.lucro));

        return true;
    },

    adicionarProduto(produto){
        this.vendas.push(produto);
        this.salvarAtributosNoLocalStorage();

        return true;
    },

    removerVenda(id){
        for(let i = 0; i < this.vendas.length; i++){
            if(this.vendas[i].id === id){
                this.vendas.splice(i, 1);
                this.salvarAtributosNoLocalStorage();
                return true;
            }
        }
        return false;
    },

    calculaLucroEmpresa(){
        for(let i = 0; i < this.vendas.length; i++){
            this.lucro = ((this.vendas[i].quantidade) * (this.vendas[i].preco));
            this.salvarAtributosNoLocalStorage();
            return true;
        }
        return false;
    },

    getProdutoVendido(id){
        for (let i = 0; i < this.vendas.length; i++) {
            if(this.vendas[i].id === id){
                return this.vendas[i];
            }
            
        }
        return false;
    },

    listarProdutosVendidos(){
        let stringTabela = "<table class='table'>";
        stringTabela += "<thead>";
        stringTabela += "<tr>";
        stringTabela += "<th>id</th>";
        stringTabela += "<th>Nome produto</th>";
        stringTabela += "<th>Quantidade</th>";
        stringTabela += "<th>Preço</th>";
        stringTabela += "<th>Funcionário</th>";
        stringTabela += "<th></th>";
        stringTabela += "<th></th>";
        stringTabela += "</tr>";
        stringTabela += "</thead>";

        stringTabela += "<tbody>";
      

        for(let i = 0; i < this.vendas.length; i++){
            stringTabela += "<tr>";
            stringTabela += "<td>" + this.vendas[i].id + "</td>";
            stringTabela += "<td>" + this.vendas[i].nome + "</td>";
            stringTabela += "<td>" + this.vendas[i].quantidade + "</td>";
            stringTabela += "<td>" + this.vendas[i].preco + "</td>";
            stringTabela += "<td>" + this.vendas[i].funcionario + "</td>";
            stringTabela += "<td class='btn-editar'>Editar</td>";
            stringTabela += "<td class='btn-excluir'>Excluir</td>";
            stringTabela += "</tr>";
        }
        stringTabela += "</tbody>";
        stringTabela += "</table>";

        return stringTabela;
    },

    getLucro(){
        let stringText = "<label> Lucro da Empresa: R$" + this.lucro + "<label>";
        return stringText;
    }
};