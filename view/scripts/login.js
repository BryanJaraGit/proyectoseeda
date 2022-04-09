$("#frmAcceso").on('submit', function (e) {
    e.preventDefault();
    logina = $("#logina").val();
    clavea = $("#clavea").val();
    
    $.post("../controller/usuario.php?op=verificar",
        { "logina": logina, "clavea": clavea },
        function (data) {
            if (data == 2) {
               Swal.fire("Mensaje de Error", "Credenciales Incorrectas", "error");
                //$(location).attr("href", "home.php");
               
            }else {
             
                $(location).attr("href", "escritorio.php");
            }
        });
}) 

