
document.querySelector(".calcular").addEventListener("click", VpLow);
datos = document.querySelector(".entradadatos");






  input-pl.setAttribute("title","Precio mas bajo del mercado")
  input-ph.setAttribute("title","Precio mas alto del mercado")
  input-montousdt.setAttribute("title","Monto en usdt comercializado en 24hrs")
  input-volumen.setAttribute("title","volumen que se comercializó de la moneda elegida")

function VpLow() {

    const precioH = document.querySelector(".input-ph") .value;

const precioA = document.querySelector(".input-pa").value;
const precioL = document.querySelector(".input-pl").value ;
const monto = document.querySelector(".input-montousdt").value; 
const volumen = document.querySelector(".input-volumen").value;

 VpLow = (((monto -(precioL *volumen)) *100) /monto);
       Il = VpLow -((precioH -precioA)*100 /precioH);
ganancia1 = precioA +((precioA *(((precioA -precioL)*100) /precioL)) /100);
  compra1 = precioA -((precioA *(((precioA -precioL) *100) /precioH)) /100);        


     
   
 
    document.write(["Le sugerimos que compre cuando el precio llegue a "] + "<b>" + compra1 +"</b>"+ "<br>" + "<br>" 
        + ["Tome ganancia cuando el precio toque los "] + "<b>"+ [ganancia1] +"</b>"+ "<br>" + "<br>"
        + ["Revise el resultado del valor IL, si este es negativo la tendencia es a que continuen disminuyendo los precios y si es positivo la tendencia es a que suban"] + "<br>" + "<br>"
        + ["El Il adquiere un valor de  "] + "<b>" + Il + "</b>"+ "<br>" + "<br>")  


   }
   
 
