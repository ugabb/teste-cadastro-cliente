var valorUnitario;
var valorEst;
var valorTotal;




if (document.getElementById('container-item')) {
    valorUnitario = document.getElementById("valor-uni").value;
    valorEst = document.getElementById("qtd-estoque").value;
    valorTotal = document.getElementById("valor-total");
} else {
    console.log("error");
}




const totalProduto = () => {

    console.log("funcuouj");

    let unidadeEst = valorEst;
    let valorUni = valorUnitario;
    let total = unidadeEst * valorUni;

    if (valorUni != '' && unidadeEst != '') {
        valorTotal.value = total;
    } else {
        valorTotal = '';
    }

}