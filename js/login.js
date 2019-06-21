var atualiza;
window.addEventListener("load", function(){

    $('.verificaLogin').click(function(){
        
        if(document.getElementById('inputEmail').value != 'admin'){
            atualiza = "<div style='visibility: visible; color: red;' id='esconde-div'><label>Email invalido</label></div>";
            //atualiza = "<label for='inputEmail' class='label-invisivel'>Email</label><input type='email' id='inputEmail' class='form-control' placeholder='Usuario incorreto' autofocus>";
            document.getElementById('esconde-div').innerHTML = atualiza;
        }else if(document.getElementById('inputPassword').value != 'admin'){
            atualiza = "<div style='visibility: visible; color: red;' id='esconde-div'><label>Senha invalido</label></div>";
            document.getElementById('esconde-div').innerHTML = atualiza;
        }else if((document.getElementById('inputEmail').value == 'admin') && (document.getElementById('inputPassword').value == 'admin')){
            window.open('inicio.html','janela');
        }
    });

});