

function convEaP()
{
  /* 1 Dólar = $ 678 Pesos    */
  var Euro=document.getElementById("valor").value;
  var euroApeso=Euro*678;
  document.getElementById("total").value=euroApeso; 
  
}

function convDaP()
{
  /* 1 Euro = $ 770,29 Pesos    */
  var Dolar=document.getElementById("valor").value;
  var dolarApeso=Dolar*770.29;
  document.getElementById("total").value=dolarApeso; 
 
   
  
}
function convertir(){
    var tipo=document.getElementById("tipoCambio").value;
    if (document.getElementById("valor").value==""){
      alert("Por favor Ingrese un valor");
    }else {
      if (tipo==1){
        convEaP();
      }else{
        convDaP();
      }
    }

    

}

function limpiar(){
	document.getElementById("valor").value="";
  document.getElementById("total").value="";


}



function soloNumeros(e){
	var key = window.Event ? e.which : e.keyCode
	return (key >= 48 && key <= 57)
}
//hola();