const valorUnitario = document.getElementById("valor-uni");
const valorEst = document.getElementById("qtd-estoque");
const valorTotal = document.getElementById("valor-total");

const totalProduto = () => {

    let unidadeEst = valorEst.value;
    let valorUni = valorUnitario.value;
    let total = unidadeEst * valorUni;

    if (valorUni != '' && unidadeEst != '') {
        valorTotal.value = total;
    } else {
        valorTotal = '';
    }
}