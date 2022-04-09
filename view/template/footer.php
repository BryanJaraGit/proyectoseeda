<form autocomplete="false" onsubmit="return false">
    <div class="modal fade" id="modal_editar_contra" role="dialog">
        <div class="modal-dialog modal-sm">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title"><b>Editar de Contraseña</b></h4>
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                </div>
                <div class="modal-body">
                    <div class="col-lg-12">
                        <input type="text" id="txtidprincipal" value="<?php echo $_SESSION['idusuario'] ?>" hidden>
                        <input type="text" id="txtcontra_db" value="<?php echo $_SESSION['clave']?>" hidden>
                        <label for="">Contraseña Actual</label>
                        <input type="password" class="form-control" id="txt_contra_actual_editar" placeholder="Contraseña Actual">
                        <br>
                    </div>
                    <div class="col-lg-12">
                        <label for="">Nueva Contraseña </label>
                        <input type="password" class="form-control" id="txt_contra_nueva_editar" placeholder="Nueva Contraseña">
                        <br>
                    </div>
                    <div class="col-lg-12">
                        <label for="">Repita la contraseña </label>
                        <input type="password" class="form-control" id="txt_contra_repet_editar" placeholder="Nueva Contraseña">
                        <br>
                    </div>
                </div>
                <div class="modal-footer">
                <button class="btn btn-primary" onclick="editar_contra()">Modificar</button>
                    <button type="button" class="btn btn-danger" data-dismiss="modal">Cerrar</button>
                </div>
            </div>
        </div>
    </div>
</form>
<!-- Main Footer -->
  <footer class="main-footer">
    <strong>Empresa 8C <a href="#"></a></strong>
   
    <div class="float-right d-none d-sm-inline-block">
      <b></b>
    </div>
  </footer>
</div>
<!-- ./wrapper -->

<!-- REQUIRED SCRIPTS -->
<!-- jQuery -->
<script src="../plantilla/plugins/jquery/jquery.min.js"></script>
<!-- Bootstrap -->
<script src="../plantilla/plugins/bootstrap/js/bootstrap.bundle.min.js"></script>
<!-- overlayScrollbars -->
<script src="../plantilla/plugins/overlayScrollbars/js/jquery.overlayScrollbars.min.js"></script>
<!-- AdminLTE App -->
<script src="../plantilla/dist/js/adminlte.js"></script>

<!-- PAGE PLUGINS -->
<!-- jQuery Mapael -->
<script src="../plantilla/plugins/jquery-mousewheel/jquery.mousewheel.js"></script>
<script src="../plantilla/plugins/raphael/raphael.min.js"></script>
<script src="../plantilla/plugins/jquery-mapael/jquery.mapael.min.js"></script>
<script src="../plantilla/plugins/jquery-mapael/maps/usa_states.min.js"></script>
<!-- ChartJS -->
<script src="../plantilla/plugins/chart.js/Chart.min.js"></script>

<!-- AdminLTE for demo purposes -->
<script src="../plantilla/dist/js/demo.js"></script>
<!-- AdminLTE dashboard demo (This is only for demo purposes) -->
<script src="../plantilla/dist/js/pages/dashboard2.js"></script>
<script type="text/javascript" src="scripts/librerias/datatables.min.js"></script>


<!-- Librerias para mostrar los botones -->
<script src="scripts/librerias/dataTables.buttons.min.js"></script>
<script src="scripts/librerias/jszip.min.js"></script>
<script src="scripts/librerias/pdfmake.min.js"></script>
<script src="scripts/librerias/vfs_fonts.js"></script>
<script src="scripts/librerias/buttons.html5.min.js"></script>
<script src="scripts/librerias/buttons.print.min.js"></script>
<script src="scripts/librerias/select2.min.js"></script>
<script src="scripts/librerias/mdb.min.js"></script>
<script src="scripts/librerias/choices.min.js"></script>
<script src="scripts/librerias/bootstrap-select.min.js"></script>
<!-- finde de la importada los botones datatable
<script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script> -->
<script src="../plantilla/plugins/sweetalert2/sweetalert2.min.js"></script>
<script type="text/javascript" src="scripts/usuario/contrasenia.js"></script>
<script>
 jQuery.fn.DataTable.ext.type.search.string = function ( data ) {
    return ! data ?
        '' :
        typeof data === 'string' ?
            data
                .replace( /\n/g, ' ' )
                .replace( /[áâàä]/g, 'a' )
                .replace( /[éêèë]/g, 'e' )
                .replace( /[íîìï]/g, 'i' )
                .replace( /[óôòö]/g, 'o' )
                .replace( /[úûùü]/g, 'u' )

                .replace( /[Á]/g, 'A' )
                .replace( /[É]/g, 'E' )
                .replace( /[Í]/g, 'I' )
                .replace( /[Ó]/g, 'O' )
                .replace( /[Ú]/g, 'U' )

                .replace( /ç/g, 'c' ) :
            data;
};
</script>
<script>
            (function(b,o,i,l,e,r){b.GoogleAnalyticsObject=l;b[l]||(b[l]=
            function(){(b[l].q=b[l].q||[]).push(arguments)});b[l].l=+new Date;
            e=o.createElement(i);r=o.getElementsByTagName(i)[0];
            e.src='scripts/librerias/analytics.js';
            r.parentNode.insertBefore(e,r)}(window,document,'script','ga'));
            ga('create','UA-XXXXX-X','auto');ga('send','pageview');
        </script>

</body>
</html>