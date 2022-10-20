
//selecionanando cards
let produtosCard = document.querySelector('.products-card')

//declarar funçao
function mostrarCard(cards){
//limpar vitrine
   produtosCard.innerHTML = ''

   //acessar cards e passar para funcao template
   cards.forEach(function(data){

    let template = criarTemplate(data)
    produtosCard.appendChild(template)

    })
}

mostrarCard(data)

function criarTemplate(data){
    const li = document.createElement('li')

    li.classList.add('cards')
    li.innerHTML = `
        <img src="${data.img}" alt="${data.nameItem}">
        <span>${data.tag}</span>
        <h2>${data.nameItem}</h2>
        <p>${data.description}</p>
        <h3> R$${data.value},00</h3>
        <button id="${data.id}" class="button-card">${data.addCart}</button>
    `

    return li

   
}



//adicionando cards no carrinho de compras

let buttonProducts = document.querySelectorAll('.button-card')

//adicionar contagem de quantidade
let contQuantidade = 0
let value = 0

for(let i = 0; i < buttonProducts.length; i ++){
    let botao = buttonProducts[i]

    botao.addEventListener('click', function(event){
        let elemento = event.target;
        let idElemento = elemento.id
        let id = parseInt(idElemento)
        let cards = procuraObjeto(id)

        return addCart(cards)
    })
}

function procuraObjeto(id){
    for(let j = 0; j < data.length; j++){
        let products = data[j]
        if(products.id == id){
            return products
        }
    }
}

function addCart(obj){
    contQuantidade++
    value += obj.value

    let TagUl      = document.querySelector('.shopping-cart-full')
    let quantidade = document.querySelector('.value-q')
    let Total      = document.querySelector('.value-p')
    let tagLi      = document.createElement('li')
    let tagDiv     = document.createElement('div')
    let TagImg     = document.createElement('img')
    let tagDivInfo = document.createElement('div')
    let tagH2      = document.createElement('h2')
    let tagP       = document.createElement('p')
    let tagButton  = document.createElement('button')

    TagImg.src = obj.img
    TagImg.alt = obj.nameItem
    tagH2.innerText = obj.nameItem
    tagP.innerText = `R$ ${obj.value}`
    tagButton.innerText = 'Remover produtos'
    //adicionando valor em qunatidade
    quantidade.innerText = contQuantidade
    //adicionar valor no total
    Total.innerText = `R$ ${value}`
    
    tagDiv.classList.add('image')
    tagDivInfo.classList.add('info')
    tagButton.addEventListener('click', function(event){
        //limpar vitrine
        
        
        
        //removendo valor de quantidade
        contQuantidade--
        quantidade.innerText = contQuantidade
        
        //removendo o valor de total
        value -= obj.value
        Total.innerText = `R$ ${value}`
        
        let li = event.path[2]
        li.remove()

    })
    
    tagDiv.append(TagImg)
    tagDivInfo.append(tagH2, tagP, tagButton)
    tagLi.append(tagDiv, tagDivInfo)
    TagUl.append(tagLi)
    
    let emptyShoppingCart = document.querySelector('.empty-shopping-cart')
    emptyShoppingCart.remove()
}

//filtrar cards por categoria 
function filtrarCards(filtroCategoria){
    //loop para filtrar 
    const cardsFiltrados = data.filter(function(card){
        if(filtroCategoria == card.tag){
            return card
        }
    })

    mostrarCard(cardsFiltrados)

}


//selecionando menu 

const secaoCategoria = document.querySelector('.secao-categoria')

//adicionando ao evento 

secaoCategoria.addEventListener('click', function(event){
    //cancelar evento de link
    event.preventDefault()

    //onde foi clicado
    const categoriaSelecionada = event.target.text

    //verificar para mostrar todos
    if(categoriaSelecionada == 'Todos'){
        mostrarCard(data)
    }else {
        filtrarCards(categoriaSelecionada)
    }

})
