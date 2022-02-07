 let  nome = prompt("Digite seu nome ")
 let velocInicial= 0
 
 let velocidade = prompt("velocidade atual 0 , qual será a velocidade inicial?")
 let confirmaVeloc = confirm ("Sua velocidade inicial será : " + velocidade + " km/h , está certo disso?");
 
 alert ("velocidade atual da nave : " + velocidade + " km/h");

 if (velocidade <=0){
     alert("Nave esta parada.Considere partir e aumentar a velocidade")
     
 }else if( velocidade < 40){
    alert ("Você esta devagar, podemos aumentar mais a velocidade")
 }
 else if (velocidade >=40 && velocidade <=80){
     alert ("velocidade ideal, podemos continuar nesta velocidade")
 }else if (velocidade >= 80 && velocidade <= 100){
    alert (" Velocidade alta, recomendamos diminuir a velocidade")
 }else { 
    alert(" Velocidade Perigosa, Controle automático forçado")
}
alert(" Nome do piloto : " + nome + "\n Velocidade atual : " + velocidade + " Km\h")
 