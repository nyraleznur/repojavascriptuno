$(document).ready(function(){
    alert("kjhhg")
 
    $.ajax({
        url: "datos.json",
        type:"get",
        dataType:"JSON",
        success: function( respuesta ) {
            console.log(respuesta)

            let tam=respuesta.length;

            for(i=0;i<tam; i++){
        
              $( "#contenedor" ).append(respuesta[i].Documento +"    "
              + respuesta[i].Nombre+"<br>");
            }
           }
      });

});