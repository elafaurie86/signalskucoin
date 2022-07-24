
let precioH = prompt("colaca el precio mas alto del día");
let precioA = prompt("coloca el precio actual");
let precioL = prompt("colca el precio mas bajo del día");
let montousdt = prompt("coloca el monto total en usdt que se comercializó de la moneda");
let volumen = prompt("coloca el volumen total de la moneda que se comercializó");



VpLow = (((montousdt -(precioL *volumen)) *100) /montousdt);
 Il = VpLow -((precioH -precioA)*100 /precioH);
 ganancia1 = precioA +((precioA *(((precioA -precioL)*100) /precioH))/100);
compra1 = precioA -((precioA *(((precioA -precioL) *100) /precioH)) /100);
		

	
document.write(["Para este par sugerimos compras en "] + "<b>" + [compra1] +"</b>" +"</b>"+ "<br>" + "<br>"
+ ["Tomar ganancias en  "] + "<b>" + [ganancia1] +"</b>" + "<br>" + "<br>"
+ ["Revise el resultado del valor IL, si este es negativo la tendencia es a que continuen disminuyendo los precios y si es positivo la tendencia es a que suban"] + "<br>" + "<br>"
  + ["El Il adquiere un valor de  "] + "<b>" + Il + "</b>"+ "<br>" + "<br>")










