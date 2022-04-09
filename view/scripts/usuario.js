var tabla;

//Función que se ejecuta al inicio
function init() {
    mostrarform(false);
    listar();

    $("#formulario").on("submit", function (e) {
        guardaryeditar(e);
    })

    $("#imagenmuestra").hide();
    //Mostramos los permisos
    $.post("../controller/usuario.php?op=permisos&id=", function (r) {
        $("#permisos").html(r);
    });
}

//Función limpiar
function limpiar() {
    $("#nombre").val("");
    $("#email").val("");
    $("#cargo").val("");
    $("#login").val("");
    $("#clave").val("");
    $("#imagenmuestra").attr("src", "");
    $("#imagenactual").val("");
    $("#idusuario").val("");
}

//Función mostrar formulario
function mostrarform(flag) {
    limpiar();
    if (flag) {
        $("#listadoregistros").hide();
        $("#formularioregistros").show();
        $("#btnGuardar").prop("disabled", false);
        $("#btnagregar").hide();
    } else {
        $("#listadoregistros").show();
        $("#formularioregistros").hide();
        $("#btnagregar").show();
    }
}

//Función cancelarform
function cancelarform() {
    limpiar();
    mostrarform(false);
}

//Función Listar
function listar() {
    tabla = $('#tbllistado').dataTable({
        /*"scrollY": 200,  navegar en el datatable
        "scrollX": true, */
        "paging": true,
        "lengthChange": true,
        "searching": true,
        "ordering": true,
        "info": true,
        "autoWidth": false,
        
        responsive: true,
        "scrollX": true,

        "aProcessing": true, //Activamos el procesamiento del datatables
        "aServerSide": true, //Paginación y filtrado realizados por el servidor
        dom: 'Bfrtip', //Definimos los elementos del control de tabla
  
        "ajax": {
            url: '../controller/usuario.php?op=listar',
            type: "get",
            dataType: "json",
            error: function (e) {
                console.log(e.responseText);
            }
        },
        "bDestroy": true,
        "iDisplayLength": 20, //Paginación
        "order": [[0, "desc"]], //Ordenar (columna,orden)
        language: {
            zeroRecords: 'No hay registros para mostrar.',
            info: "Mostrando página _PAGE_ de _PAGES_ páginas",
            search: 'BUSCAR',
            emptyTable: 'La tabla está vacia.',
            "oPaginate": {
            "sFirst":    "Primero",
            "sLast":     "Ultimo",
            "sNext":     "Siguiente",
            "sPrevious": "Anterior",
            }
        }
    }).DataTable();
}

//Función para guardar o editar

function guardaryeditar(e) {
    e.preventDefault(); //No se activará la acción predeterminada del evento
    $("#btnGuardar").prop("disabled", true);
    var formData = new FormData($("#formulario")[0]);

    $.ajax({
        url: "../controller/usuario.php?op=guardaryeditar",
        type: "POST",
        data: formData,
        contentType: false,
        processData: false,

        success: function (datos) {
            if (datos ==  1) {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Usuario registrado',
                    showConfirmButton: false,
                    timer: 1500
                })

            } else if (datos == 3) {
                console.log(datos);
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Usuario actualizado',
                    showConfirmButton: false,
                    timer: 1500
                })
            } else if (datos == 2) {
                Swal.fire({
                    position: 'top-end',
                    icon: 'error',
                    title: 'No se pudo registrar',
                    showConfirmButton: false,
                    timer: 1500
                })
            }else if (datos == 4){
                Swal.fire({
                    position: 'top-end',
                    icon: 'error',
                    title: 'No se pudo actualizar',
                    showConfirmButton: false,
                    timer: 1500
                })
            }
            mostrarform(false);
            tabla.ajax.reload();
        }

    });
    limpiar();
}

function mostrar(idusuario) {
    $.post("../controller/usuario.php?op=mostrar", {
        idusuario: idusuario
    }, function (data, status) {
        data = JSON.parse(data);
        mostrarform(true);
        
        $("#nombre").val(data.nombre);
        $("#tipo_documento").val(data.tipo_documento).trigger("change");
        $("#num_documento").val(data.num_documento);
        $("#telefono").val(data.telefono);
        $("#email").val(data.email);
        $("#cargo").val(data.cargo);
        $("#login").val(data.login);
        $("#clave").val(data.clave);
        $("#imagenmuestra").show();
        $("#imagenmuestra").attr("src", "../files/usuarios/" + data.imagen);
        $("#imagenactual").val(data.imagen);
        $("#idusuario").val(data.idusuario);

    });
    $.post("../controller/usuario.php?op=permisos&id=" + idusuario, function (r) {
        $("#permisos").html(r);
    });
}

//Función para desactivar registros
function desactivar(idusuario) {



    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: 'btn btn-success',
            cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
    })
    swalWithBootstrapButtons.fire({
        title: 'DESACTIVAR USUARIO',
        text: "Esta acción influye sobre el acceso al sistema",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Si, Desactivar!',
        cancelButtonText: 'No, cancelar!',
        reverseButtons: true
    }).then((result) => {
        if (result.isConfirmed) {
            $.post("../controller/usuario.php?op=desactivar", {
                idusuario: idusuario
            }, function (e) {
                tabla.ajax.reload();
            });
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Desactivado con éxito.',
                showConfirmButton: false,
                timer: 1500
            })
        } else if (
            /* Read more about handling dismissals below */
            result.dismiss === Swal.DismissReason.cancel
        ) {
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: 'Se cancelo la desactivación',
                showConfirmButton: false,
                timer: 1500
            })
        }
    })

}

//Función para activar registros
function activar(idusuario) {

    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: 'btn btn-success',
            cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
    })
    swalWithBootstrapButtons.fire({
        title: 'ACTIVAR USUARIO',
        text: "Esta acción influye sobre el Acceso al sistema",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Si, Activar!',
        cancelButtonText: 'No, cancelar!',
        reverseButtons: true
    }).then((result) => {
        if (result.isConfirmed) {

            $.post("../controller/usuario.php?op=activar", {
                idusuario: idusuario
            }, function (e) {
                tabla.ajax.reload();
            });
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Activado con éxito.',
                showConfirmButton: false,
                timer: 1500
            })
        } else if (
            /* Read more about handling dismissals below */
            result.dismiss === Swal.DismissReason.cancel
        ) {
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: 'Se cancelo la activación',
                showConfirmButton: false,
                timer: 1500
            })
        }
    })
}

init();
