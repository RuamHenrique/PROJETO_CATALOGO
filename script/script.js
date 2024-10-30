function atualizarPreco(idPreco, preco) {
    document.getElementById(idPreco).innerText = `R$ ${parseFloat(preco).toFixed(2).replace('.', ',')}`;
}

const produtoContainer = document.getElementById('produtos');
const produtos = Array.from(produtoContainer.children);

produtos.sort((a, b) => {
    const nomeA = a.getAttribute('data-nome').toLowerCase();
    const nomeB = b.getAttribute('data-nome').toLowerCase();
    return nomeA.localeCompare(nomeB);
});

produtos.forEach(produto => produtoContainer.appendChild(produto));