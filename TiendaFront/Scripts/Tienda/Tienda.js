//Inicializando

$(Document).ready(function () {
     // inicio 
    $('#Inventario-tab').hide();
    $('#Ventas-tab').hide();
    $('#Clientes-tab').hide();

    // Inventario
    $('#InventarioAgregar-tab').hide();
    $('#InventarioConsulta-tab').hide();
    $('#InventarioModificar-tab').hide();

    // Ventas

    $('#VentaConsulta-tab').show();
    $('#VentasAgregar-tab').hide();
});

// inventario

$('#InventarioTab').click(function () {

    $('#Inventario-tab').show();
    $('#Ventas-tab').hide();
    $('#Clientes-tab').hide();
    $('#InventarioAgregar-tab').hide();
    $('#InventarioConsulta-tab').hide();
    $('#InventarioModificar-tab').hide();

});
$('#InventarioAgregarTab').click(function () {

    $('#InventarioAgregar-tab').show();
    $('#InventarioConsulta-tab').hide();
    $('#InventarioModificar-tab').hide();
    
});

$('#InventarioConsultaTab').click(function () {

    $('#InventarioConsulta-tab').show();
    $('#InventarioAgregar-tab').hide();
    $('#InventarioModificar-tab').hide();
    
});
$('#InventarioModificarTab').click(function () {

    $('#InventarioModificar-tab').show();
    $('#InventarioConsulta-tab').hide();
    $('#InventarioAgregar-tab').hide();
    
});
// Ventas

$('#VentasTab').click(function () {

    $('#Ventas-tab').show();
    $('#Inventario-tab').hide();
    $('#Clientes-tab').hide();
    $('#VentasAgregar-tab').hide();
    $('#VentaConsulta-tab').hide();

});

$('#VentaAgregarTab').click(function () {

    $('#VentasAgregar-tab').show();
    $('#VentaConsulta-tab').hide();

});
$('#VentaConsultaTab').click(function () {

    $('#VentaConsulta-tab').show();
    $('#VentasAgregar-tab').hide();

});

// Clientes

$('#ClientesTab').click(function () {

    $('#Clientes-tab').show();
    $('#Inventario-tab').hide();
    $('#Ventas-tab').hide();

});

