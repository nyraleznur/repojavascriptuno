/*var num=10;
var num=12;
let num1=200;
numeros=100;
numeros=300;
console.log("esto es un texto",num)
alert("el número es "+num)*/

let val1,val2;
opc=0
function descuento(){
    while(opc<3){
        val1=parseInt(prompt("Digite el primer valor"));
        val2=parseInt(prompt("Digite el segundo valor"));
        total=val1+val2;
        if(total>50000){
        des=total*0.1;
        }
        else{
            des=total*0.05;
        }
        totalpago=total-des
        alert("Total de la compra es de "+total+"\n El descuento es de "+des+"\n Total a  pagr es de "+totalpago)
        opc++;
    }

    arr=[]
}



descuento();