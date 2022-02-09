class naveEspacial {
    static get DECELERATION_RATE (){
        return 0.17
    }
    constructor (name, crewQuantity)
    {
        this.name = name
        this.crewQuantity = crewQuantity
        this.currentvelocity= 0
    }
    speedUp(acceleration){

        this.currentvelocity += acceleration * (1-naveEspacial.DECELERATION_RATE)
    }
}