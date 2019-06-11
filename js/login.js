var atualiza;
window.addEventListener("load", function(){

    $('.verificaLogin').click(function(){

        // Falta colocar a cor vermelha na msg
        if(document.getElementById('inputEmail').value != 'admin'){
            atualiza = "<label for='inputEmail' class='label-invisivel'>Email</label><input type='email' id='inputEmail' class='form-control' placeholder='Usuario incorreto' autofocus>";
            document.getElementById('verificacaoEmail').innerHTML = atualiza;
        }else if(document.getElementById('inputPassword').value != 'admin'){
            atualiza = '<label for="inputPassword" class="label-invisivel">Senha</label><input type="password" id="inputPassword" class="form-control" placeholder="Senha incorreta">';
            document.getElementById('verificacao').innerHTML = atualiza;
        }else if((document.getElementById('inputEmail').value == 'admin') && (document.getElementById('inputPassword').value == 'admin')){
            window.open('inicio.html','janela');
        }
    });

});