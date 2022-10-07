
const divFile = document.querySelector('.fileDiv')
anexoArray = [];

const readFile = () => {
    Array.prototype.forEach.call(document.querySelectorAll('.btnAnexar'), button => {
        //pegando os elementos
        const hiddenInput = button.parentElement.querySelector('.myFile');
        const label = document.querySelector('.label');
        const labelText = 'Nenhum arquivo(s) selecionado'
        label.textContent = labelText;
        label.title = labelText

        //add o click ao botao
        hiddenInput.click();

        //quando for adicionado o arquivo
        hiddenInput.addEventListener("change", e => {
            const file = hiddenInput.files[0];
            const reader = new FileReader();

            reader.addEventListener("load", () => {
                console.log(reader.result)
                var div = document.createElement('div');
                div.innerHTML = `
                <div id="doc" class="d-flex align-items-center">
                    <i class="fa-solid fa-trash-can fs-5 me-3 p-1 text-danger border border-danger pointer" onclick="${removeFile()}"></i>
                    <a href="${reader.result}" target="_blank">
                        <i class="fa-solid fa-eye fs-5 me-3 p-1 text-success border  border-success  pointer"></i>
                    </a>
                    <p class="text-center label">${label.title}</p>
                    <img id="openFile" src="">
                </div>
        ` ;
                divFile.appendChild(div);
                getAnexo(label.title,reader.result);
                sessionStorage.setItem("fileName",label.title);
                sessionStorage.setItem("blob",reader.result);
            });
            reader.readAsDataURL(file);
            console.log(file)


            //pegando o nome do arquivo
            const filenameList = Array.prototype.map.call(hiddenInput.files, (file) => {
                let fileName = file.name
                return fileName
            });

            label.textContent = filenameList.join(", ") || labelText;
            label.title = label.textContent

            //escondendo o span
            label.classList.add('hidden');

            //criação da div do arquivo

        });
    })
};

// const viewDocument = (dataUrl) => {
//     window.open(dataUrl,'_blank')
// }   


const removeFile = () => {
    sessionStorage.removeItem("name");
    sessionStorage.removeItem("blob");
}

const getAnexo = (name,blob) => {
    let anexo = {
        name:name,
        blob:blob
    }
    anexoArray.push(anexo);
    console.log(anexoArray[0].name)
}

var i = 0;

const createJSON = (e) => {
   e.preventDefault();
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
                indice: i,
                nomeArquivo: anexoArray[i].name,
                blobArquivo: anexoArray[i].blob
            }
        ]

    }
    let json = JSON.stringify(data);
    localStorage.setItem('arquivoJSON',json)
    i++;
    console.log(json)
}

const enviar = document.querySelector('#enviar');

enviar.addEventListener("click", createJSON);