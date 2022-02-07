let dobraCont =0
let opcao= ""

let nomeNave= prompt("Digite o nome da nave ?!")
closenOption= prompt(" Deseja entrar na dobra espacial?\n1- sim \n2-não")
while(closenOption =="1"){
    dobraCont +=1
    closenOption=prompt(" Entrar em uma nova dobra?\n1- sim \n2-não")
}
alert("Nave :" + nomeNave + "\n Quantidade de dobras :" + dobraCont )