        
document.querySelector(".Registrarse").addEventListener("click", register);
document.querySelector(".iniciarsesion1").addEventListener("click", iniciarSesion);
window.addEventListener("resize", anchoPagina);

var contenedorregister = document.querySelector (".contenedorregister");
var formulariologin = document.querySelector (".formulariologin");
var formularioregister = document.querySelector (".formularioregister");
var cajalogin = document.querySelector ( ".cajalogin");
var cajaregister = document.querySelector (".cajaregister");

function anchoPagina() {
      if (window.innerWidth > 850) {

        cajalogin.style.display = "block";
        cajaregister.style.display = "block";

      } else{

        cajaregister.style.display = "block";
        cajaregister.style.opacity = 1;
        cajalogin.style.display = "none";
        formulariologin.style.display = "block";
        formularioregister.style.display = "none";
        contenedorregister.style.left = "0px";

      }
}

anchoPagina();




function iniciarSesion() {
     
     if (window.innerWidth > 850) {
        formularioregister.style.display = "none";
        contenedorregister.style.left = "10px ";
        formulariologin.style.display = "block";
        cajaregister.style.opacity = 1;
        cajalogin.style.opacity = 0;
}  else{
        formularioregister.style.display = "none";
        contenedorregister.style.left = "0px ";
        formulariologin.style.display = "block";
        cajaregister.style.opacity = "block";
        cajalogin.style.opacity = "none";

}   
        
}




function register() {
          
      if (window.innerWidth > 850) {

        formularioregister.style.display = "block";
        contenedorregister.style.left = "410px";
        formulariologin.style.display = "none";
        cajaregister.style.opacity = "0";
        cajalogin.style.opacity = "1";
      }  else{

         formularioregister.style.display = "block";
        contenedorregister.style.left = "0px";
        formulariologin.style.display = "none";
        cajaregister.style.opacity = "none";
        cajalogin.style.opacity = "1";
        cajalogin.style.display= "block"
      }  
        
}