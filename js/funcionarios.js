const Funcionario = {
    idFuncionario: 1,
    funcionarios: [],

    inicializar(){
        if(localStorage.getItem("funcionarios") != null){
            this.carregarAtributosDoLocalStorage();
        }
        return true;
    },

    carregarAtributosDoLocalStorage(){
        this.funcionarios = JSON.parse(localStorage.getItem("funcionarios"));
        this.idFuncionario = JSON.parse(localStorage.getItem("idFuncionario"));

        return true;
    },

    salvarAtributosNoLocalStorage(){
        localStorage.setItem("funcionarios", JSON.stringify(this.funcionarios));
        localStorage.setItem("idFuncionario", JSON.stringify(this.idFuncionario));

        return true;
    },

    adicionar(funcionario){
        this.funcionarios.push(funcionario);
        this.salvarAtributosNoLocalStorage();

        return true;
    },

    remover(id){
        for(let i = 0; i < this.funcionarios.length; i++){
            if(this.funcionarios[i].id === id){
                this.funcionarios.splice(i, 1);
                this.salvarAtributosNoLocalStorage();
                return true;
            }
        }
        return false;
    },

    editar(id, funcionario){
        for(let i = 0; i < this.funcionarios.length; i++){
            if(this.funcionarios[i].id === id){
                this.funcionarios[i] = funcionario;
                this.salvarAtributosNoLocalStorage();
                return true;
            }
        }
        return false;
    },

    getFuncionario(id){
        for(let i = 0; i < this.funcionarios.length; i++){
            if(this.funcionarios[i].id === id){
                return this.funcionarios[i];
            }
        }
        return false;
    },

    listarFuncionarios(){
        let stringTabela = "<table class='table'>";
        stringTabela += "<thead>";
        stringTabela += "<tr>";
        stringTabela += "<th>Id</th>";
        stringTabela += "<th>Nome</th>";
        stringTabela += "<th>Endereço</th>";
        stringTabela += "<th>Cargo</th>";
        stringTabela += "<th>Salário</th>";
        stringTabela += "<th></th>";
        stringTabela += "<th></th>";
        stringTabela += "</tr>";
        stringTabela += "</thead>";

        stringTabela += "<tbody>";
        let data;

        for(let i = 0; i < this.funcionarios.length; i++){
            stringTabela += "<tr>";
            stringTabela += "<td>" + this.funcionarios[i].id + "</td>";
            stringTabela += "<td>" + this.funcionarios[i].nome + "</td>";
            stringTabela += "<td>" + this.funcionarios[i].endereco + "</td>";
            stringTabela += "<td>" + this.funcionarios[i].cargo + "</td>";
            stringTabela += "<td>" + this.funcionarios[i].salario + "</td>";
            stringTabela += "<td class='btn-editar'><i class='fas fa-edit'></i></td>";
            stringTabela += "<td class='btn-excluir'><i class='fas fa-trash'></i></td>";
            stringTabela += "</tr>";
        }
        stringTabela += "</tbody>";
        stringTabela += "</table>";

        return stringTabela;
    },
};