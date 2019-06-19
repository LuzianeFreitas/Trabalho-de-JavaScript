$(".btn-limpar").on("click", function(event){
    event.preventDefault();
    $("#form-cadastro-produto")[0].reset();
    $("#id").val(Estoque.idProduto);
});