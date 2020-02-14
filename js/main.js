$('h1.jumbotron').addClass('text-center');

$('.text-center').css( { backgroundColor: 'green', color: 'white', opacity: '55%', fontSize: '2rem', paddingTop: '1rem', paddingBottom: '5px', 
height: '4rem'} );

$('.container').css({width: '50%', height: '50%', margin: '20rem'});

$('.input-row').css({display: 'flex'});

$('.add-skill').css({marginLeft: '1rem', border: '0', backgroundColor: 'white',
boxShadow: '0px 0px 0px 3px rgba(141,	202,	141	)', color: 'rgba(141,	202, 141)' });

$('.input-skill').css({margingRight: '1rem', border: 'none',
boxShadow: '0px 0px 0px 3px rgba(141,	202,	141)', flex: '1'   
});

$('.skills-text').css({color: 'orange'});
$('.html-text').css({color: 'orange'});
$('.css-text').css({color: 'orange'});

$('.remove-button').css({opacity: '70%', backgroundColor: 'red', color: 'white', border: '0'});

$('.control').css({marginLeft: '20rem'});


$("#skills").on('click', 'button', function(e) {
    let row = $(this).closest('.new-row')
    console.log(row)
    console.log(this)
    row.remove();
})


let skills = []



$('#addSkill').click(function(e){
    let inp = $('.input-skill').val();
    $('#inputSkill').val('');
    let newRow = `<div class="new-row">
                   <button class="remove-button">X</button>
                   <div class="skills-text"> ${inp} </div>
                </div>`;

  $('.skills').append(newRow)

});