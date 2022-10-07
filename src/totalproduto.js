
const totalProduto = () => {
    let unidadeEst = document.getElementById(".valor-uni").value;
    let valorUni = document.getElementById(".qtd-estoque").value;
    let valorTotal = document.getElementById(".valor-total").value;
    let total = unidadeEst * valorUni;
    console.log(valorTotal,valorUni,unidadeEst,total)
    if (valorUni != '' && unidadeEst != '') {
        valorTotal.value = total;
    } else {
        valorTotal = '';
    }
}