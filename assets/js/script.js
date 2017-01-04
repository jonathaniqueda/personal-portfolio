$(function() {
    'use strict';

    /*========================================
    	SmoothScroll
    ==========================================*/
    smoothScroll.init({
        updateURL: false
    });

    /*========================================
    	Adjust Menu Button's Color
    ==========================================*/
    var c_height = $('.main-section').outerHeight() - 40,
        $menu_btn = $('.menu-btn'),
        $body = $('body');

    function menu_btn_color() {
        if ($(window).scrollTop() >= c_height) {
            $menu_btn.removeClass('white-btn');
        } else {
            $menu_btn.addClass('white-btn');
        }
    }
    menu_btn_color();


    $(window).on('resize', function() {

        c_height = $('.main-section').outerHeight() - 40;

        setTimeout(function() {
            AOS.refreshHard();
        }, 800);

    }).on('load', function() {

        $body.addClass('loaded');

        /*========================================
        	Testimonials Slider
        ==========================================*/
        $('.testimonials-slider').owlCarousel({
            items: 1
        });

        /*========================================
        	Project Images Slider
        ==========================================*/
        $('.project-slider').owlCarousel({
            items: 1,
            autoHeight: true
        });

        /*========================================
        	Portfolio Items
        ==========================================*/

        $('.portfolio-items').owlCarousel({
            items: 1,
            autoHeight: false
        });

        /*========================================
        	AnimateOnScroll
        ==========================================*/
        AOS.init({
            offset: 40,
            disable: 'mobile',
            duration: 600
        });


    }).on('scroll', function() {

        menu_btn_color();

    });

    /*========================================
    	Material Design Ripples
    ==========================================*/
    Waves.attach('.btn-custom, .menu li > a', 'waves-classic');
    Waves.init();

    /*========================================
    	Material Design Textbox
    ==========================================*/
    $('.material-input > .form-control').blur(function() {
        if ($(this).val()) {
            $(this).addClass('used');
        } else {
            $(this).removeClass('used');
        }
    });

    /*========================================
    	Portfolio Items Ripple Effect
    ==========================================*/
    // $('.portfolio-items > li > .inner').each(function() {
    //     var $this = $(this),
    //         _w = $this.outerWidth(),
    //         _h = $this.outerHeight(),
    //         _s = _w > _h ? _w : _h,
    //         _s = _s * 2.6;
    //     $this.append('<div class="ripple" ></div>');
    //     $this.find('.ripple').css({
    //         height: _s,
    //         width: _s
    //     });
    // }).on('mouseenter', function(e) {
    //     var $this = $(this),
    //         _s = parseInt($this.find('.ripple').css('height')),
    //         _offset = $this.offset(),
    //         _x = e.pageX - $this.offset().left,
    //         _y = e.pageY - $this.offset().top,
    //         _x = _x - (_s / 2),
    //         _y = _y - (_s / 2);
    //     $this.find('.ripple').css({
    //         'top': _y,
    //         'left': _x
    //     });
    // });

    /*========================================
    	Menu Functions
    ==========================================*/
    $menu_btn.on('click', function(e) {
        e.preventDefault();
        $body.toggleClass('show-menu');
    });
    $('.menu li > a').on('click', function(e) {
        $body.removeClass('show-menu');
    });

    $('#contact-form').on('submit', function(e) {
        if (!e.isDefaultPrevented()) {
            e.preventDefault();

            $.ajax({
                type: "GET",
                url: '/csrfToken',
                dataType: 'json',
                success: function(data) {
                    var inputs = $('#contact-form').serializeArray();
                    inputs[inputs.length] = {
                        name: "_csrf",
                        value: data._csrf
                    };

                    $.ajax({
                        type: "POST",
                        url: $('#contact-form').attr('action'),
                        data: inputs,
                        dataType: 'json',
                        success: function(res) {
                            if (res.status === 'success') {
                                var html = "<div class='form-group' >\
                                              <div class='alert alert-success' role='alert'> \
                                              <strong>Mesagem enviada com sucesso!</strong> Vou entrar em contato com você daqui a pouco!\
                                              </div>\
                                            </div>";

                                $('#contact-form-result').append(html);
                                $('#contact-form').trigger('reset');
                            }
                        },
                        error: function(e) {
                            var asJson = e.responseJSON;
                            if (asJson.status === 'error') {
                                $.each(asJson.msg, function(k, v) {
                                    var splitKey = k.split('.');

                                    var input = $("input[name='" + splitKey[0] + "[" + splitKey[1] + "]'");

                                    if (input.length < 1) {
                                        var input = $("textarea[name='" + splitKey[0] + "[" + splitKey[1] + "]'");
                                    }

                                    if (input.length < 1) {
                                        var input = $("select[name='" + splitKey[0] + "[" + splitKey[1] + "]'");
                                    }

                                    input.parent().parent().append('<div class="help-block with-errors" style="margin-top: 10px; color:red;">' + v + '</div>');
                                });

                                var html = "<div class='form-group' >\
                                                <div class='alert alert-danger' role='alert'> \
                                                <strong>Oops!</strong> Desculpa, algum erro aconteceu. Tenta recarregar a página e se continuar me manda uma mensagem no WhatsApp: 21-9-8284-1840.\
                                                </div>\
                                            </div>";

                                $('#contact-form-result').append(html);
                            }
                        },
                        beforeSend: function() {
                            $('btn-custom').html('enviando...');
                            $('.with-errors').remove();

                            if ($('#contact-form-result').children('.form-group').length > 0) {
                                $('#contact-form-result').children('.form-group').remove();
                            }
                        },
                        complete: function() {
                            $('btn-custom').html('enviar');
                        }
                    });
                }
            });
        }
    });
});
