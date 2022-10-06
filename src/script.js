// const { data } = require("jquery");

//calcular o total do produto
// const valorUnitario = Number($('#valor-uni').val());
// const valorEst = Number($('#qtd-estoque').val());
// let valorTotal = Number($('#valor-total').val());



const totalProduto = () => {
    console.log('works');
    console.log(valorTotal, valorEst, valorUnitario)

    let unidadeEst = valorEst;
    let valorUni = valorUnitario;
    let total = unidadeEst * valorUni;
    if (valorUni != '' && unidadeEst != '') {
        valorTotal = total;
        console.log(total)
    } else {
        valorTotal = '';
        console.log('f', valorTotal)
    }


}

const form = document.querySelector('#form');

form.addEventListener('submit', (e) => {


    const data = {
        razaoSocial: $('#razao-social').val(),
        nomeFantasia: $('#nome-fantasia').val(),
        cnpj: $('#cnpj').val(),
        inscricaoEstadual: $('#inscricao-estadual').val(),
        inscricaoMunicipal: $('#insc-muni').val(),
        nomeContato: $('#nome-contato').val(),
        telefoneContato: $('#telefone').val(),
        emailContato: $('#email').val(),

        produtos: [
            {
                indice: 1,
                descricaoProduto: $('#desc-produto').val(),
                unidadeMedida: $('#und-medida').val(),
                qtdeEstoque: $('#qtd-estoque').val(),
                valorUnitario: $('#valor-uni').val(),
                valorTotal: $('#valor-total').val()
            },
        ],
        anexos: [
            {
                indice: 1,
                nomeArquivo: 'iouahsiuahusihausihiahiuah',
                blobArquivo: 'iouahsiuahusihausihiahiuah'
            }
        ]

    }

    console.log({ data })
    // const jsondata = JSON.stringify(data);
    // console.log(jsondata)

    e.preventDefault();
})



