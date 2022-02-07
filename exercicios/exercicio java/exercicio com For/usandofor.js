let nomeNave= prompt ("Digite o nome da nave?!")
let substituirCaract = prompt(" Qual caracter você deseja substituir ?")
let newCaracter = prompt ("Por qual caracter desejar substituir? ")
 newNave =""
 for( let pos = 0; pos < nomeNave.length; pos++){
     if(nomeNave[pos]==substituirCaract){
         newNave += newCaracter
     }else{
         newNave +=nomeNave[pos]
     }

 }

alert(" O novo nome da nave e: " + newNave)