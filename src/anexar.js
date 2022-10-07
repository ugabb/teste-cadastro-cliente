// const btnAnexo = document.getElementById('anexar');
const divFile = document.querySelector('.fileDiv')
Array.prototype.forEach.call(document.querySelectorAll('.btnAnexar'), (button) => {
    const hiddenInput = button.parentElement.querySelector('.myFile');
    const label = document.querySelector('.label');
    const labelText = 'Nenhum arquivo(s) selecionado'
    label.textContent = labelText;
    label.title = labelText

    button.addEventListener("click", function () {
        hiddenInput.click();
    });

    hiddenInput.addEventListener("change", () => {

        const filenameList = Array.prototype.map.call(hiddenInput.files, (file) => {
            let fileName = file.name
            return fileName
        });


        // arq = new FileReader();
        // arq.addEventListener('load', () => {
        //     localStorage.setItem(filenameList, arq.result)
        //     console.log(arq.result);
        // })
        // console.log('arq = ',arq)

        label.textContent = filenameList.join(", ") || labelText;
        label.title = label.textContent



        label.classList.add('hidden');

        var div = document.createElement('div');
        div.innerHTML += `
                <div id="doc" class="d-flex align-items-center">
                    <i class="fa-solid fa-trash-can fs-5 me-3 p-1 text-danger border        border-danger pointer"></i>
                    <i class="fa-solid fa-eye fs-5 me-3 p-1 text-success border     border-success  pointer"></i>
                    <p class="text-center label">${label.title}</p>
                </div>
        ` ;
        divFile.appendChild(div);
    })

});