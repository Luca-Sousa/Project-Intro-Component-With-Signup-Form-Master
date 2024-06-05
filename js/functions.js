$(function(){

    $('input[type=text],input[type=email],input[type=password]').focus(function(){
        resetInvalidField($(this));
    });

    $('form').submit(function(event){
        // Evitar o envio padrão do formulário
        event.preventDefault();

        var firstName = $('input[name=firstName]').val();
        var lastName = $('input[name=lastName]').val();
        var email = $('input[name=email]').val();
        var password = $('input[name=password]').val();
        var isValid = true;

        if (firstName === '') {
            applyFieldInvalid($('input[name=firstName]'));
            $('p#firstName').show();
            isValid = false;
        } else if (!/^[A-Za-z]+$/.test(firstName)) {
            applyFieldInvalid($('input[name=firstName]'));
            $('p#firstName').show();
            isValid = false;
        }

        if (lastName === '') {
            applyFieldInvalid($('input[name=lastName]'));
            $('p#lastName').show();
            isValid = false;
        } else if (!/^[A-Za-z]+$/.test(lastName)) {
            applyFieldInvalid($('input[name=lastName]'));
            $('p#lastName').show();
            isValid = false;
        }

        if (email === '') {
            applyFieldInvalid($('input[name=email]'));
            $('p#email').show();
            $('#email').attr('placeholder', 'email@exemplo/com');
            isValid = false;
        } else if (!(/^[^\s@]+@[^\s@]+\.[^\s@]+$/).test(email)) {
            applyFieldInvalid($('input[name=email]'));
            $('p#email').show();
            $('#email').attr('placeholder', 'email@exemplo/com');
            isValid = false;
        }

        if (isValid) {
            alert("enviado com sucesso");
        }
    });

    function applyFieldInvalid(el){
        el.css('border-color', 'hsl(0, 100%, 74%)');
    }

    function resetInvalidField(el){
        el.css('border-color', 'hsl(248, 32%, 49%)')
        el.css('outline-color', 'hsl(248, 32%, 49%)');
        el.val('');
        $(el).parent().find('p').hide();
    }
    
});