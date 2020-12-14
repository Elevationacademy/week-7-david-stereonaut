$.get('/getInputs', function(inputs) {
    inputs.forEach(input => {
        $('#container').append(`<p>${input.text}</p>`)
    })
})

$('button').on('click', function() {
    let text = $('input').val()
    $.post('/saveInput', { text }, function(input) {
        $('#container').append(`<p>${input.text}</p>`)
    })
})