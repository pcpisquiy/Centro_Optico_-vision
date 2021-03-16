function crear_Reservacion(){
    var Nombre_completo = "";
    Nombre_completo = document.getElementById('first_name').value + " " + document.getElementById('last_name').value;
    var miUrl = "https://wa.me/50237604627?text=" + "Nombre:%20" + Nombre_completo + "%0A" + "Servicio:%20" + document.getElementById('service').value + "%0A" +  "%0A" + "Fecha:%20" + document.getElementById('date').value +"Hora:%20" + document.getElementById('time').value + "%0A" + "Contacto:%20" + document.getElementById('telefono').value;
    window.open(miUrl);
    window.close();
}