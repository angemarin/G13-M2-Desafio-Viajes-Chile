$(function () {
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    })

    $('#enviarInfo').click(function () {
        alert("El mensaje fue enviado correctamente")
    });

    $('.card-title').click(function () {
        $('.card-text').toggle();
    });

    $('body').on('dblclick', 'h5', function () {
        $(this).css("color", 'cyan');
    });

            $("a").on('click', function (event){
                if (this.hash !==""){
                    event.preventDefault();
                    let hash = this.hash;
                    $('html, body').animate({
                        scrollTop: $(hash).offset().top
                    }, 800, function (){
                        window.location.hash = hash;
                    });
                }
            });

});
