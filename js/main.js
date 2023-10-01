$(function(e){
    $(document).on('click','a[href="#"]',function(e){ e.preventDefault() }) 
    mainInit()
})

function mainInit(){
    gnb_menu()
    top_menu()
    bottom_menu()
}



function gnb_menu(){
    let $topmenu = $('#header .top-menu .bar');
    let $login = $('#login');
    let $nav = $('#nav');
    let $close = $('#login .close');
    let $menua = $('#nav .gnb li > a');

    $topmenu.on('click', function(){
        $login.addClass('on');
        $nav.addClass('on');
        $('#nav .gnb li ul').stop().hide();
        $('.bottom-nav').animate({bottom:-80},300);
    })

    $close.on('click', function(){
        $login.removeClass('on');
        $nav.removeClass('on');
        $('.bottom-nav').animate({bottom:0},300);
    })

    $menua.on('click', function(){
        
        $('#nav .gnb li ul').stop().slideUp()
        $(this).next().stop().slideToggle();
    })
}

function top_menu(){
    let $lang = $('#header .top-menu .ko');
    let $other = $('#header .top-menu .otherlan');

    $other.hide();
    $lang.on('click',function(){
        $other.slideToggle();
    })
}

function bottom_menu(){
    let bottom = 0;
    $('.bottom-nav').hide();
    $(window).on('scroll', function(){
        bottom = $(this).scrollTop();                
        if(bottom>400){
            $('.bottom-nav').slideDown();
        }else {
            $('.bottom-nav').slideUp();
        }
    })
}