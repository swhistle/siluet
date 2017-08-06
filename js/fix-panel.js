if (window.innerWidth > 992) {

    var BlockTop = document.getElementsByClassName('js-panel-top')[0];
    var BlockBottom = document.getElementsByClassName('js-panel-bottom')[0];
    var coordBlockTop; //координаты верхнего блока
    var coordBlockBottom; //координаты нижнего блока
    var HEIGHTBLOCKTOP = BlockTop.offsetHeight; //высота верхнего блока
    var COORDBLOCKTOPINIT = BlockTop.getBoundingClientRect().top + window.pageYOffset; //начальная координата (top) верхнего блока
    var COORDBLOCKBOTTOMINIT = BlockBottom.getBoundingClientRect().top + window.pageYOffset; //начальная координата (top) нижнего блока
    var NEWCOORDBLOCKTOP = COORDBLOCKBOTTOMINIT - HEIGHTBLOCKTOP - 20 - COORDBLOCKTOPINIT; //новая координата верхнего блока после прокрутки

    window.onscroll = function() {
        if (window.innerWidth > 992) {
            coordBlockTop = BlockTop.getBoundingClientRect();
            coordBlockBottom = BlockBottom.getBoundingClientRect();

            if((coordBlockBottom.top - coordBlockTop.bottom <= 20) && (BlockTop.classList.contains('fixed') )) {
                BlockTop.style.top = NEWCOORDBLOCKTOP +'px';
                BlockTop.classList.remove('fixed');
            }

            if((coordBlockTop.top > COORDBLOCKTOPINIT) && (!BlockTop.classList.contains('fixed') )) {
                BlockTop.style.top = COORDBLOCKTOPINIT + 'px';
                BlockTop.classList.add('fixed');
            }
        }
    }

}