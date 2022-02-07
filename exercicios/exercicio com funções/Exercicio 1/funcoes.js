let nomeNave = prompt("Qual o nome da Nave ?")
let velocidade = 0
let closenOption
 
function menu() {
    let opcoes
    while (opcoes != "1" && opcoes != "2 " && opcoes != "3" ) {
        opcoes = prompt (" O que deseja fazer? \n" +
                            "1 - Acelerar a nave em mais 5 km/s \n" +
                            "2- Desacelerar a nave em mais 5 km/s \n" +
                            "3- imprimir dados de bordo \n" +
                            "4- Sair"

        )
        return opcoes
    }
}
console.log(menu())
  function NovaVelocidade(veloc) {
      let newVelocity = veloc + 5
      return newVelocity
    }

 function desacelerando(desacel){
     let newVelocity = desacel - 5
     if (newVelocity < 0){
         newVelocity = 0
     }
     return newVelocity
    }

 function imprimirDados(name, velocity ) {
     alert ("Nave : " + name + "\nVelocidade: " + velocity + "Km/s")
     
 }

do{
    closenOption = menu()
    switch(closenOption){
        case "1" :
            velocidade = NovaVelocidade (velocidade)
            break
        case "2" :
            velocidade = desacelerando (velocidade)
            break
        case "3" :
          imprimirDados(nomeNave,velocidade)
         break
         default :
         alert ("Encerrando o programa de bordo")

    }

}while(closenOption !="4")