window.addEventListener("load", function () {
	var lista= document.getElementById("text");
	var formLista = document.getElementById("formulario");
	
	lista.addEventListener("click", function() {
		lista.style.display = "none";
		formLista.style.display = "block";
	}); 
});


