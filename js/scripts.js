/* activate scrollspy menu */
$('body').scrollspy({
    target: '#navbar-collapsible',
    offset: 52
});

/* smooth scrolling sections */
$('a[href*=#]:not([href=#])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            $('html,body').animate({
                scrollTop: target.offset().top - 50
            }, 800);

            if (this.hash == "#home") {
                $('.scroll-up').hide();
            } else {
                $('.scroll-up').show();
            }

            // activte animations in this section
            target.find('.animate').delay(1200).addClass("animated");
            setTimeout(function () {
                target.find('.animated').removeClass("animated");
            }, 2000);

            return false;
        }
    }
});

/* Fechar menu navbar-collapse */
$('.navbar-collapse a').click(function () {
    $(".navbar-collapse").collapse('hide');
});

/* BtnEmail sweetalert and copy to clipboard */
$('.btn-clipboardTel').on('click', function () {
    // copying to clipboard
    var clipboard = new Clipboard('.btn-clipboardTel');

    // Alert sweetalert
    swal(
        '',
        '<i class="fa fa-sw fa-clipboard"></i> Telefone copiado para a área de transferência!',
        'success'
    )
});

/* BtnEmail sweetalert and copy to clipboard */
$('.btn-clipboardEmail').on('click', function () {
    // copying to clipboard
    var clipboard = new Clipboard('.btn-clipboardEmail');

    // Alert sweetalert
    swal(
        '',
        '<i class="fa fa-sw fa-clipboard"></i> E-mail copiado para a área de transferência!',
        'success'
    )
});


function move() {
    if (document.getElementById('ball').classList.contains('ball-academico') == true) {
        document.getElementById('ball').classList.remove('ball-academico');
        document.getElementById('ball').classList.add('ball-profissional');
        document.getElementById('row-profissional').classList.remove('esconder');
        document.getElementById('row-academico').classList.add('esconder');
    }
    else {
        document.getElementById('ball').classList.remove('ball-profissional');
        document.getElementById('ball').classList.add('ball-academico');
        document.getElementById('row-academico').classList.remove('esconder');
        document.getElementById('row-profissional').classList.add('esconder');
    }
    // body...
}

// function move2() {
//     if (document.getElementById('ball').classList.contains('ball-academico') == true) {
//         alert("aqui");
//         document.getElementById('ball').classList.remove('ball-academico');
//         document.getElementById('ball').classList.add('ball-profissional');
//         document.getElementById('row-profissional').classList.remove('esconder');
//         document.getElementById('row-academico').classList.add('esconder');
//     }
//     else {
//         alert("aqui2");
//         document.getElementById('ball').classList.remove('ball-profissional');
//         document.getElementById('ball').classList.add('ball-academico');
//         document.getElementById('row-academico').classList.remove('esconder');
//         document.getElementById('row-profissional').classList.add('esconder');
//     }
//     // body...
// }



 $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: true,
    centerMode: true,
    focusOnSelect: true,
    autoplay: true,
});
