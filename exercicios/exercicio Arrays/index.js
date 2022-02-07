const nomeNaves = [
    ["Fenix",8, true],
    ["Golias",10,true],
    ["Helmet",5,false],
    ["Elemental",3,true],
    ["Darwin",15,false]
]
let listaNave = nomeNaves.filter(Naves =>{
    return Naves[1] > 9
}).map(Naves =>{
    return Naves[0]
})
let angardisponivel = nomeNaves.findIndex(Naves=>{
    return Naves[2]==false
})

let caixaAlta=nomeNaves.map(Naves =>{
    return Naves[0].toUpperCase()
})

let message = "Espaçonaves com mais de 9 tripulantes: " + listaNave.join(", ")
message += "\nPlataforma em processo de engate : "+ (angardisponivel + 1)
message += "\n Espaçonaves destacadas: " + caixaAlta.join(", ")

alert(message)