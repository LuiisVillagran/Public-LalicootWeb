/*----------------------LLAMAR A NAVBAR-----------------------*/
fetch('../pages/nav.html')
    .then(response => response.text())
    .then(data => {
        const navbar = document.getElementById('navbar');
        if (navbar) {
            navbar.innerHTML = data;
            marcarEnlaceActivo();
        }
    });

/*----------------------LLAMAR A FOOTER-----------------------*/
fetch('../pages/footer.html')
    .then(response => response.text())
    .then(data => {
        const footer = document.getElementById('footer');
        if (footer) footer.innerHTML = data;
    });

/*----------------------LLAMAR INICIO------------------------*/
fetch('../pages/inicio.html')
    .then(response => response.text())
    .then(data => {
        const inicio = document.getElementById('inicio');
        if (inicio) inicio.innerHTML = data;
    });

/*----------------MARCAR ENLACE ACTIVO DEL NAV----------------*/
function marcarEnlaceActivo() {
    const rutaActual = window.location.pathname;
    document.querySelectorAll('.style-navbar .nav-link').forEach(link => {
        if (link.getAttribute('href') === rutaActual) {
            link.classList.add('active');
            link.setAttribute('aria-current', 'page');
        }
    });
}

/*--------------FIJADOR DE NAV--------------------------------*/
$(document).ready(function(){
    var navbar = $('#navbar');
    var sticky = navbar.offset().top;

    $(window).scroll(function(){
        if (window.pageYOffset >= sticky){
            navbar.addClass("sticky");
        } else {
            navbar.removeClass("sticky");
        }
    });
});


function openPDF() {
    window.open('/img/pdfs/TableroPrecios.pdf', '_blank'); // Reemplaza 'ruta/al/archivo.pdf' con la ruta correcta del archivo
}
