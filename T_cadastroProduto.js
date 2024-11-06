// Get the modal
var modal = document.getElementById("myModal");
        
// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function cadastrarProduto() {
  const nome = document.getElementById('nome').value;
  const preco = document.getElementById('preco').value;
  const descricao = document.getElementById('descricao').value;
  const urlImage = document.getElementById('imagem').value;

  const produto = {
      urlImage,  
      nome,
      preco,
      descricao
      
  };

  if (produto.nome && produto.preco && produto.descricao) {
      let produtos = JSON.parse(localStorage.getItem('produtos')) || [];
      produtos.push(produto);
      localStorage.setItem('produtos', JSON.stringify(produtos));

      limparFormulario();
      exibirProdutos();
  } else {
      alert('Preencha todos os campos para cadastrar o produto!');
  }
}

function limparFormulario() {
  document.getElementById('nome').value = '';
  document.getElementById('preco').value = '';
  document.getElementById('descricao').value = '';
  document.getElementById('urlImage').value = '';
}
;
function exibirProdutos() {
const produtos = JSON.parse(localStorage.getItem('produtos')) || [];
const listaProdutos = document.getElementById('listaProdutos');
listaProdutos.innerHTML = '';

for (let i in produtos) {
    const produto = produtos[i];
    const li = document.createElement('li');

    const img = document.createElement('img');
    img.src = produto.urlImage;
    img.style.margin = '10px'; 
    img.style.width = '100px'; 
    img.style.height = 'auto';
    
    li.textContent = `${produto.nome} - R$${produto.preco} - ${produto.descricao}`;
    
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Deletar';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.onclick = () => deletarProduto(i);
    
    li.appendChild(img);
    li.appendChild(deleteBtn);
    listaProdutos.appendChild(li);
}
}

function deletarProduto(index) {
  let produtos = JSON.parse(localStorage.getItem('produtos'));
  produtos.splice(index, 1);
  localStorage.setItem('produtos', JSON.stringify(produtos));
  exibirProdutos();
}

function limparProdutos() {
  localStorage.removeItem('produtos');
  exibirProdutos();
}

window.onload = exibirProdutos;