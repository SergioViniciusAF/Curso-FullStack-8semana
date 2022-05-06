class app{
    addImoveis(){
        alert("teste")
        event.preventDefault()

        let tipoDeImovel = document.querySelector("select[name='tipoDeImovel']").value
        let area = document.querySelector("input[name='area']").value
        let vendido = document.querySelector("input[name='vendido']").Checked
        let imoveis = new Imoveis(tipoDeImovel, area, vendido)
        this.addOnImoveisLista(imoveis)
        this.cleanForm()
    }
     addOnImoveisLista(imoveis){
        let listElement = document.createElement("li")
        let imovelInfo = " Tipo: " + imoveis.tipoDeImovel + " (Área: " + imoveis.area + "m²)"

        if(imoveis.vendido){
            let imovelVendido = this.createImovelVendido()
             listElement.appendChild(imovelVendido)
        }

        listElement.innerHTML += imovelInfo
        let buttonRemoveImovel = this.createRemoveButton()
        listElement.appendChild(buttonRemoveImovel)
        document.getElementById("propriedades").appendChild(listElement)

    }
    createImovelVendido(){
         let imovelVendido = document.createElement("span")
            imovelVendido.style.color = "white"
            imovelVendido.style.backgroundColor = "red"
           imovelVendido.innerText = "VENDIDO"
            return imovelVendido
    }
    createRemoveButton(){
        let removeBotao = document.createElement("button")
        removeBotao .setAttribute("onclick", "app.remove()")
        removeBotao .style.backgroundColor ="green"
        removeBotao .innerText = "Remover"
         return removeBotao 

    }
     cleanForm(){
         document.querySelector("input[name='area']").value = ""
          document.querySelector("input[name='vendido']").checked = false
    }
     remove(){
            let liToRemove = event.target.parentNode
            document.getElementById("propriedades").removeChild(liToRemove)
    }

}