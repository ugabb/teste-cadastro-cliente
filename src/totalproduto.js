const totalProduto = () => {
    let unidadeEst = document.querySelectorAll(".col-md-2 #valor-uni");
    let valorUni = document.querySelectorAll(".col-md-2 #qtd-estoque");
    let valorTotal = document.querySelectorAll(".col-md-2 #valor-total");

    let total = 0
    for(let i = 0; i < unidadeEst.length; i++){
        total = +(unidadeEst[i].value) * +(valorUni[i].value);
        if (valorUni != '' && unidadeEst != '') {
            valorTotal[i].value = total;
        } else {
            valorTotal = '';
        }
    }
}