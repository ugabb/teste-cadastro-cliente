const createJSON = () => {
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
    let json = JSON.stringify(data);
    localStorage.setItem('arquivoJSON',json)

    console.log(json)
}

const enviar = document.querySelector('#enviar');

enviar.addEventListener("click", createJSON);