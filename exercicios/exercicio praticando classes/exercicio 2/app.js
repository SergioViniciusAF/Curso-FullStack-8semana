class aap{
    constructor(){
        this.naveEspacial = null
    }
    start(){
        this.cadastrarNave()
        let chosenOption
        do {
            chosenOption = this. showMenu()
            this.redirectFeature(chosenOption)
        }while (chosenOption != "3")
        this.printAndExit()
    }

    cadastrarNave (){
            let nomeNave = prompt ("Digite o nome da nave ?")
            let quantidadeTripulante = ("Qual a quantidade de tripulantes?")
            let tipoNave = this.askForNaveEspacialKind()
            if(askForNaveEspacialKind == "1"){
                let weaponsQuantity = prompt(" Quantas armas a nave possui?")
                this.naveEspacial= new BattleNave(nomeNave,quantidadeTripulante,weaponsQuantity)
            }else {
                let sitsQuantity = prompt(" Quantas lugares a nave possui?")
                this.naveEspacial= new trasporteNave(nomeNave,quantidadeTripulante,sitsQuantity)

            }
    }
    askForNaveEspacialKind(){
        let chosenOption
        while (!["1","2"].includes(chosenOption)) {
        chosenOption = prompt("Qual o tipo da nave ?\n1-Batalha\n2-transportadora")
        }
     return chosenOption
    }

    showMenu(){
        const promptMessage = " O que deseja fazer?\n" +
                              "1- Acelerar nave\n" +
                              "2- Trocar a nave\n" +
                              "3- Imprimir e sair"
        let chosenOption = prompt(promptMessage) 
        while (!["1","2","3"].includes(chosenOption)) {
            chosenOption = prompt(promptMessage) 

        }      
        return chosenOption             
    }

    redirectFeature(chosenOption){
        switch(chosenOption){
            case "1":
                this.accelarateNaveEspacial()
                break
            case "2":
                this.cadastrarNave()
                break
        }
    }

    accelarateNaveEspacial(){
        let Acelerar =Number(prompt("Quanto você quer acelerar?")) 
        this.naveEspacial.speedUp()
    }

    printAndExit (){
        let finalMessage = "Nome: " + this.naveEspacial.name + "\n" +
                            "Quantidade : " + this.naveEspacial.crewQuantity + "\n" +
                            " Velocidade atual: " + this.naveEspacial.currentvelocity + "\n"
           alert(finalMessage)                 
        
    }
}
