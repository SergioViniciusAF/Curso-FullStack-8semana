function slowDown(velocity,printer) {
    let deceleration = 20
    while(velocity > 0){
        printer(velocity)
        velocity -= deceleration
    }
    alert(" Nave parada,pode abrir as comportas!")
} 
let velocidadeAtual = 150
slowDown(velocidadeAtual,function(velocity) {
    console.log("velocidade atual: " + velocity)
    
})