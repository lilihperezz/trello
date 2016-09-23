window.addEventListener("load", function () {
    var contLista = document.getElementById("contieneLista");
    var lista= document.getElementById("text");
    var formLista = document.getElementById("formulario");
    var calcular =document.getElementById("calcular");
    var list = document.getElementById("list");

    lista.addEventListener("click", function() {
        lista.style.display = "none";
        formLista.style.display = "block";
    });

    calcular.addEventListener("click", function(e) {
        e.preventDefault();
        lista.style.display = "none";
        formLista.style.display = "none";

        var tituloLista = document.createElement("div");
        tituloLista.innerHTML= list.value;
        contLista.insertBefore(tituloLista,contLista.childNodes[0]);
       
        var enlace = document.createElement("a");
        enlace.href = "#";
        enlace.style.color = "gray";
        var nodo = document.createTextNode("Añadir una tarjeta..."); 
        enlace.appendChild(nodo);
        contLista.appendChild(enlace);
    });   
});

