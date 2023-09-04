const inputProduto = document.getElementById('input-produto'); 
const listaDeCompras = document.getElementById('lista-de-compras'); 
const btnSend = document.getElementById('btn-send');  
const btnClear = document.getElementById('btn-clear'); 

function criarItem(text) { 
    const createLi = document.createElement('li') 
    createLi.classList.add('item-lista')  
    createLi.innerText = text 
    const checkBox = document.createElement('input');
    checkBox.type = 'checkbox';
    listaDeCompras.appendChild(createLi) 
    createLi.appendChild(checkBox)
}

function adicionaIntemLocalStorage() { 
    const itens = document.getElementsByClassName('item-lista') 
    const arrayItens = []; 
    for (const item of itens) { 
        arrayItens.push(item.innerText) 
    }
    localStorage.setItem('itens', JSON.stringify(arrayItens)) 
}

function colocarItemLista() {  
    const inputValue = inputProduto.value; 
    criarItem(inputValue); 
    inputProduto.value = '' 
    adicionaIntemLocalStorage(); 
}

function limparLista() {
    while (listaDeCompras.firstChild) {
        listaDeCompras.removeChild(listaDeCompras.firstChild)
    }
}

btnSend.addEventListener('click', colocarItemLista) 
btnClear.addEventListener('click', limparLista)

function retornaStorage() { 
    if(localStorage.itens) { 
        const arrayItens = JSON.parse(localStorage.getItem('itens')); 
        for (let i = 0; i < arrayItens.length; i += 1) { 
            criarItem(arrayItens[i]); 
        }
    } 
}

retornaStorage(); 


// 1 - Após clicar no botão Enviar, adicinar uma nova li a lista de itens digitados

// 2 - Depois de adicionar os itens à lista, salvar esses itens no localStorage

// 3 - Se tiver os itens salvos no localStorage, renderizar esses itens na tela

// 4 = Botão limpar deve remover todos os itens da lista e também limpar o localStorage