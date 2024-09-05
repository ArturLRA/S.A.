function teste() {
    var nomeCadastro = document.getElementById('nome').value;
    var CNPJCadastro = document.getElementById('CNPJ').value;
    var emailCadastro = document.getElementById('email').value;
    var senhaCadastro = document.getElementById('senha').value;
    var confirmarSenhaCadastro = document.getElementById('confirmarSenha').value;

    if (senhaCadastro != confirmarSenhaCadastro) {
        alert('o conde é muito gato')
    }
    else {
        
    }
}