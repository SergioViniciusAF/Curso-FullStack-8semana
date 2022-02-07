let spaceship = {
    velocity : 0,
    speedUp: function (aceleration) {
        this.velocity += aceleration
        
    }
}
function registrarSpaceship() {
    spaceship.name = prompt ("informe o nome da nave")
    spaceship.type = prompt("informe o tipo da nave")
    spaceship.maxVelocity = Number(prompt("informe a velocidade maxima da nave (km/s)"))
    
}
function acelerate() {
     let acceleration = Number(prompt("Quanto você  quer acelerar? (km/s)"))
     spaceship.speedUp(acceleration)
     if(spaceship.velocity>spaceship.maxVelocity){
         alert( "Velocidade maxima ultrapassada!" +
         "\nVelocidade da Nave: " + spaceship.velocity + "km/s" +
         "\nVelocidade máxima da nave: " + spaceship.maxVelocity + "km/s")
     }
}
function Stop() {
     alert ("Nome : " +spaceship.name + "\nTipo: " + spaceship.type + "\nvelocidade da nave: "
                    + spaceship.velocity + "\nMaxima velocidade :" + spaceship.maxVelocity)
        spaceship.velocity = 0            
     
}

function showmenu() {
     let chosenOption
     do{
         chosenOption = prompt(" Você deseja :\n1- Acelerar\n2- Parar")
         switch(chosenOption){
           case"1":
              acelerate()
              break
           case "2":  
                Stop()
                break
            default:
                alert("Opção inválida")
        }
           
    }while(chosenOption != "2")
     
}
registrarSpaceship()
showmenu()
