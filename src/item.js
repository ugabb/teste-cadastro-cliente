const incluir = document.querySelector('#addItem');
const divItem = document.querySelector('.teste')

incluir.addEventListener("click", (e) => {
    e.preventDefault();
    var div = document.createElement('div');
    div.innerHTML += `
    <div id="container-item" class="container d-flex">


        <div id="trash" class="d-flex align-items-center col-md-1">
                            <i class=" fa-solid fa-trash-can fs-4"></i>
        </div>
        <div id="item" class=" container mb-3 border p-3">

            <div id="descricao" class="container d-flex justify-content-between align-items-center">
                <label for="" class="form-label me-3 text-center text-nowrap">Descrição do Produto:</label>
                <input type="text" class="form-control form-control-sm" id="desc-produto" required>
            </div>

            <div id="desc-values">
                <div class="container d-flex justify-content-between align-items-center">
                    <div class="col-md-2">
                        <label for="" class="form-label">Und. Medida</label>
                        <div class="">
                            <select class="form-select" id="und-medida" required>
                                <option selected></option>
                                <option value="Quilograma">Quilograma</option>
                                <option value="Grama">Grama</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-md-2">
                        <label for="" class="form-label">Qtd. em Estoque</label>
                        <input type="number" class="form-control form-control-sm  qtd-estoque" id="qtd-estoque" required>
                    </div>
                    <div class="col-md-2">
                        <label for="" class="form-label">Valor Unitário</label>
                        <input onblur="totalProduto()" type="number" class="form-control form-control-sm  valor-uni" id="valor-uni" required>
                    </div>
                    <div class="col-md-2">
                        <label for="" class="form-label">Valor Total</label>
                        <input type="number" class="form-control form-control-sm  valor-total" id="valor-total" disabled>
                    </div>
                </div>
            </div>
        </div>
    </div>

`;
    divItem.appendChild(div);
    
})

// // var btn = document.createElement('button');
// //     btn.classList.add('btn');
// //     btn.classList.add('btn-primary');
// //     btn.innerText = 'click me'
// divItem.appendChild(btn)