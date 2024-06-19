$(function(){

    var inputFN = $('input[name=firstName]');
    var inputLN = $('input[name=lastName]');
    var inputEmail = $('input[name=email]');
    var inputPass = $('input[name=password]');
    var inputSubmit = $('input[name=submit]');

    $('input[type=text],input[type=password]').focus(function(){
        resetInvalidField($(this));
    });

    $(document).ready(function() {
        applySpacing();
    });

    $(window).on('scroll resize', function() {
        applySpacing();
    });

    $('form').submit(function(event){
        event.preventDefault();

        var firstName = inputFN.val();
        var lastName = inputLN.val();
        var email = inputEmail.val();
        var password = inputPass.val();
        var isValid = true;

        if (firstName === '') {
            applyFieldInvalid(inputFN);
            $('p#firstName').show();
            isValid = false;
        } else if (!/^[A-Za-z]+$/.test(firstName)) {
            applyFieldInvalid(inputFN);
            $('p#firstName').show();
            isValid = false;
        }

        if (lastName === '') {
            applyFieldInvalid(inputLN);
            $('p#lastName').show();
            isValid = false;
        } else if (!/^[A-Za-z]+$/.test(lastName)) {
            applyFieldInvalid(inputLN);
            $('p#lastName').show();
            isValid = false;
        }

        if (email === '') {
            applyFieldInvalid(inputEmail);
            $('p#emailEmpty').show();
            isValid = false;
        } else if (!(/^[^\s@]+@[^\s@]+\.[^\s@]+$/).test(email)) {
            applyFieldInvalid(inputEmail);
            $('p#emailEmpty').show();
            isValid = false;
        }

        if (password === '') {
            applyFieldInvalid(inputPass);
            $('p#password').show();
            isValid = false;
        }

        if (isValid) {
            var animate = $('#animate');
            var inputs = [inputFN, inputLN, inputEmail, inputPass, inputSubmit];
        
            animate.removeClass('hidden').addClass('flex');
            inputs.forEach(input => input.prop('disabled', true));
        
            setTimeout(function(){
                animate.removeClass('animate__bounceInDown').addClass('animate__bounceOutUp');
                inputs.slice(0, 4).forEach(input => input.val(''));
        
                setTimeout(function() {
                    animate.removeClass('animate__bounceOutUp flex').addClass('hidden animate__bounceInDown');
                    inputs.forEach(input => input.prop('disabled', false));
                }, 500);
            }, 5000);
        }        
    });

    function applySpacing() {
        var scrollTop = $(window).scrollTop();
        var scrollHeight = $(document).height();
        var windowHeight = $(window).height();
        
        if (scrollHeight > windowHeight || scrollTop > 0) {
            $('body').addClass('my-8');
        }
    }

    function applyFieldInvalid(el){
        el.removeClass('border-col-GB placeholder-gray-500 text-col-DB').addClass('border-col-R placeholder-col-R text-col-R');
        $(el).parent().find('img').removeClass('hidden').addClass('flex');
        if (el.attr("name") == "email") {
            el.attr('placeholder', 'email@exemplo.com');
        }
    }

    function resetInvalidField(el){
        el.removeClass('border-col-R placeholder-col-R text-col-R').addClass('border-col-GB placeholder-gray-500 text-col-DB');
        $(el).parent().find('img').removeClass('flex').addClass('hidden');
        $(el).parent().find('p').hide();
        el.val('');
        if (el.attr("name") == "email") {
            el.attr('placeholder', 'Email Address');
        }
    }

});