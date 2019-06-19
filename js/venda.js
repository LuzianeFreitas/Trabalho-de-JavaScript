const Venda = {
    produtoVenda: [],

    inicializarVenda(){
        if(localStorage.getItem("produtoVenda") != null){
            this.carregarAtributosDoLocalStorage();
        }
        return true;
    },

    carregarAtributosDoLocalStorage(){
        this.produtoVenda = JSON.parse(localStorage.getItem("produtoVenda"));

        return true;
    },

    salvarAtributosNoLocalStorage(){
        localStorage.setItem("produtoVenda", JSON.stringify(this.produtoVenda));

        return true;
    },

    adicionarProdutoVendido(produtoVendido){
        this.produtoVenda.push(produtoVendido);
        this.salvarAtributosNoLocalStorage();

        return true;
    },

    listarProdutosVendidos(){
        let stringTabela = "<table class='table'>";
        stringTabela += "<thead>";
        stringTabela += "<tr>";
        stringTabela += "<th>Nome produto</th>";
        stringTabela += "<th>Quantidade</th>";
        stringTabela += "<th>Preço</th>";
        stringTabela += "<th>Funcionário</th>";
        stringTabela += "<th></th>";
        stringTabela += "<th></th>";
        stringTabela += "</tr>";
        stringTabela += "</thead>";

        stringTabela += "<tbody>";
        let data;

        for(let i = 0; i < this.produtoVenda.length; i++){
            stringTabela += "<tr>";
            stringTabela += "<td>" + this.produtoVenda[i].produtoSelecionado + "</td>";
            stringTabela += "<td>" + this.produtoVenda[i].quantidade + "</td>";
            stringTabela += "<td>" + this.produtoVenda[i].preco + "</td>";
            stringTabela += "<td>" + this.produtoVenda[i].funcionario + "</td>";
            stringTabela += "<td class='btn-editar'>Editar</td>";
            stringTabela += "<td class='btn-excluir'>Excluir</td>";
            stringTabela += "</tr>";
        }
        stringTabela += "</tbody>";
        stringTabela += "</table>";

        return stringTabela;
    }
};