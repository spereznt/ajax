$(document).ready(function() {
          $('#tablaUsuarios').DataTable( {
            "ajax":{
                "url": "baseDeDatos/consulta.php",
                "dataSrc":""
            },
            "columns":[
                {"data": "user_id"},
                {"data": "username"},
                {"data": "first_name"},
                {"data": "last_name"},
                {"data": "gender"},
                {"data": "password"},
                {"data": "status"}
            ]  
          });
      });