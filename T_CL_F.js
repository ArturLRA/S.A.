function cadastrar() {
    let nomeCadastro =  document.getElementById('nome').value;
    let emailCadastro = document.getElementById('email').value;
    let senhaCadastro =  document.getElementById('senha').value;
    let confirmarSenhaCadastro =  document.getElementById('confirmarSenha').value;
    let cnpjCadastro =  document.getElementById('CNPJ').value;
    let modal = document.querySelector('#modal')

    if(senhaCadastro == confirmarSenhaCadastro){
        let loginsUsuarios = JSON.parse(localStorage.getItem("CadastroUsuarios")) || {};
        
        if(loginsUsuarios[emailCadastro]){
            alert("Nome de Usuário já cadastrado")
            return;
        }

        loginsUsuarios[emailCadastro] = {
            nomeCadastrado: nomeCadastro,
            emailCadastrado: emailCadastro,
            senhaCadastrada: senhaCadastro,
            cnpjCadastrado: cnpjCadastro
        }

        localStorage.setItem('CadastroUsuarios', JSON.stringify(loginsUsuarios))

        alert('usuario cadstrado com sucesso')
    }
    else{
        modal.showModal()
    }

}

function fechar() {
    modal.close()
}


function login() {
    let nomeLogin =  document.getElementById('nome').value;
    let emailLogin = document.getElementById('email').value;
    let senhaLogin =  document.getElementById('senha').value;
    let cnpjLogin = document.getElementById('CNPJ').value;

    console.log('nome', nomeLogin);
    console.log('email', emailLogin);
    console.log('senha', senhaLogin);

    let cadastro = JSON.parse(localStorage.getItem('CadastroUsuarios'))

    console.log('cadastro', cadastro);


if(nomeLogin === cadastro[emailLogin].nomeCadastrado && emailLogin === cadastro[emailLogin].emailCadastrado && senhaLogin === cadastro[emailLogin].senhaCadastrada && cnpjLogin === cadastro[emailLogin].cnpjCadastrado){
    alert('logado')
}
else{
    alert('voce nao esta cadastrado')
}
}