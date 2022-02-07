let nomeNave= prompt("Digite o nome da nave?")
let nomeInvertido =""
 for(let i= nomeNave.length - 1 ; i>=0; i--){
     if(nomeNave[i] == "e"){
         break
     }
     nomeInvertido += nomeNave[i]
 }
 //console.log(nomeInvertido)
 alert(" Nome original da Nave :" + nomeNave + "\n Nome invertido :" + nomeInvertido  )