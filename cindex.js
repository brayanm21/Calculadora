var form1 = document.getElementById('form1')
var expr1 = document.getElementById('expr1')
var link = document.getElementById('link')


form1.onsubmit = function (event) {
  event.preventDefault()
  var url = '/v4/?expr=' + encodeURIComponent(expr1.value)
  location.href = 'http://api.mathjs.org'+url;
}

function limpiar(){
  respuesta.textContent = "";
}

function init(){
	
var uno = document.getElementById('1')
var dos = document.getElementById('2')
var tres = document.getElementById('3')
var cuatro = document.getElementById('4')
var cinco = document.getElementById('5')
var seis = document.getElementById('6')
var siete = document.getElementById('7')
var ocho = document.getElementById('8')
var nueve = document.getElementById('9')
var cero = document.getElementById('0')
var mas = document.getElementById('mas')
var menos = document.getElementById('menos')
var multiplicacion = document.getElementById('multiplicacion')
var punto = document.getElementById('punto')
var igual = document.getElementById('igual')
var division = document.getElementById('division')
var ce = document.getElementById('ce')
	
	uno.onclick = function(e){
	respuesta.textContent = respuesta.textContent + "1";
	}
	dos.onclick = function(e){
	respuesta.textContent = respuesta.textContent + "2";
	}
	tres.onclick = function(e){
	respuesta.textContent = respuesta.textContent + "3";
	}
	cuatro.onclick = function(e){
	respuesta.textContent = respuesta.textContent + "4";
	}
	cinco.onclick = function(e){
	respuesta.textContent = respuesta.textContent + "5";
	}
	seis.onclick = function(e){
	respuesta.textContent = respuesta.textContent + "6";
	}
	siete.onclick = function(e){
	respuesta.textContent = respuesta.textContent + "7";
	}
	ocho.onclick = function(e){
	respuesta.textContent = respuesta.textContent + "8";
	}
	nueve.onclick = function(e){
	respuesta.textContent = respuesta.textContent + "9";
	}
	cero.onclick = function(e){
	respuesta.textContent = respuesta.textContent + "0";
	}
	mas.onclick = function(e){
	respuesta.textContent = respuesta.textContent + "+";
	}
	menos.onclick = function(e){
	respuesta.textContent = respuesta.textContent + "-";
	}
	multiplicacion.onclick = function(e){
	respuesta.textContent = respuesta.textContent + "*";
	}
	punto.onclick = function(e){
	respuesta.textContent = respuesta.textContent + ".";
	}
	division.onclick = function(e){
	respuesta.textContent = respuesta.textContent + "/";
	}
	ce.onclick = function(e){
	limpiar();
	}
	
	
	function loadDoc() {
	var xhttp = new XMLHttpRequest();
	var text = respuesta.textContent;
	var url = '/v4/?expr=' + encodeURIComponent(text)
	xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
		
		if(this.responseText == "Infinity"){
		document.getElementById("respuesta").innerHTML = "Math Error";
		}else{	
			document.getElementById("respuesta").innerHTML = this.responseText;
		}	 
    }
	};
	xhttp.open("GET", "http://api.mathjs.org"+url, true);
	xhttp.send();
	}
	
	igual.onclick = function(e){//ajustar infinity 
		loadDoc();

	}			
	
}





