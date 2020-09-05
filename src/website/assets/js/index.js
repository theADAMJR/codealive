const subscribeBttn = document.querySelector('button.subscribe-button');

window.addEventListener('click', e => {
    if((!e.path.includes(subscribeBttn)
    && subscribeBttn.classList.contains('active'))
    || e.target.classList.contains('subscribe-button'))
      toggleClasses();
});

const toggleClasses = () => {
    subscribeBttn.classList.toggle('active');
    document.body.classList.toggle('colorful');
}

$('.confirm-button').on('click', () => {
    const body = {
        _id: $('#email').val(),
        name: $('#name').val()
    };

    $.post('/subscribe', body, () => window.location.replace('/subscribed'));
});

$('#name').on('change', function() {
    const isValid = $(this).val().length > 1;
    
    $('#formError').text(!isValid ? 'Invalid values.' : '');
    $('.confirm-button').attr('hidden', !isValid);
});

$('#email').on('change', function() {
    const isValid = $(this)[0].checkValidity();
    
    $('#formError').text(!isValid ? 'Invalid values.' : '');
    $('.confirm-button').attr('hidden', !isValid);
});