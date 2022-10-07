const totalProduto = () => {
    let unidadeEst = document.getElementById("valor-uni").value;
    let valorUni = document.getElementById("qtd-estoque").value;
    let valorTotal = document.getElementById("valor-total");
    let total = unidadeEst * valorUni;

    if (valorUni != '' && unidadeEst != '') {
        valorTotal.value = total;
    } else {
        valorTotal = '';
    }
}