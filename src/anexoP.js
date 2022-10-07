const divFile = document.querySelector('.fileDiv')
const readFile = () => {
    Array.prototype.forEach.call(document.querySelectorAll('.btnAnexar'), button => {
        //pegando os elementos
        const hiddenInput = button.parentElement.querySelector('.myFile');
        const label = document.querySelector('.label');
        const labelText = 'Nenhum arquivo(s) selecionado'
        label.textContent = labelText;
        label.title = labelText

        //add o click ao botao
        button.addEventListener("click", function () {
            hiddenInput.click();
            console.log("clicou - click function")
        });

        //quando for adicionado o arquivo
        console.log("clicou")
        hiddenInput.addEventListener("change", e => {
            const file = hiddenInput.files[0];
            const reader = new FileReader();

            reader.addEventListener("load", () => {
                console.log(reader.result)
            });
            reader.readAsDataURL(file);


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
            var div = document.createElement('div');
            div.innerHTML = `
                <div id="doc" class="d-flex align-items-center">
                    <i class="fa-solid fa-trash-can fs-5 me-3 p-1 text-danger border        border-danger pointer"></i>
                    <i class="fa-solid fa-eye fs-5 me-3 p-1 text-success border     border-success  pointer"></i>
                    <p class="text-center label">${label.title}</p>
                </div>
        ` ;
            divFile.appendChild(div);
        });
    })
}


