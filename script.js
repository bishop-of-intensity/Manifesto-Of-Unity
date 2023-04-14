// SECTION-EXPANDER
$('.parent .expander-p-container').click(function() {
    if(!$(this).parent().hasClass('main-section-expanded-p')) {
        $(this).parent().addClass('main-section-expanded-p');
    } else {
        $(this).parent().removeClass('main-section-expanded-p');
        $(this).parent().children('.main-content-container').removeClass('main-section-expanded');
        $(this).parent().children('.main-content-container')
        .children('.main-content-container').removeClass('main-section-expanded');

    }
});

$('.expander').click(function() {
    if(!$(this).parent().parent().hasClass('main-section-expanded')) {
        $(this).parent().parent().addClass('main-section-expanded');
    } else {
        $(this).parent().parent().removeClass('main-section-expanded');
        $(this).parent().parent().children('.main-content-container').removeClass('main-section-expanded');
    }
});

$('.expander-lvl-2').click(function() {
    if(!$(this).parent().parent().hasClass('main-section-expanded')) {
        $(this).parent().parent().addClass('main-section-expanded');
    } else {
        $(this).parent().parent().removeClass('main-section-expanded');
    }
});

$('.close-all').click(function() {
    $(this).parent().children().removeClass('main-section-expanded-p');
    $(this).parent().children().children('.main-content-container').removeClass('main-section-expanded');
    $(this).parent().children().children('.main-content-container').removeClass('main-section-expanded');
    $(this).parent().children().children('.main-content-container')
    .children('.main-content-container').removeClass('main-section-expanded');
});

$('.expand-all').click(function() {
    $(this).parent().children().addClass('main-section-expanded-p');
    $(this).parent().children().children('.main-content-container').addClass('main-section-expanded');
    $(this).parent().children().children('.main-content-container').addClass('main-section-expanded');
    $(this).parent().children().children('.main-content-container')
    .children('.main-content-container').addClass('main-section-expanded');
});

$('.expand-medium').click(function() {
    $(this).parent().children().addClass('main-section-expanded-p');
    $(this).parent().children().children('.main-content-container').addClass('main-section-expanded');
    $(this).parent().children().children('.main-content-container').removeClass('main-section-expanded');
    $(this).parent().children().children('.main-content-container')
    .children('.main-content-container').removeClass('main-section-expanded');
});


// $('#start_render').click(function() {
//     const image_containers = $(this).parent().parent().children('.GUTS-Images-Container');
//     image_containers.children('.base_of_guts').addClass('img__base_of_guts');
//     image_containers.children('.divider').addClass('img__divider');
//     image_containers.children('.chakras').addClass('img__chakras');
//     $(`#start_render`).addClass('GUTS-selected');
//     $(`#add_base`).addClass('GUTS-selected');
//     $(`#add_chakras`).addClass('GUTS-selected');
// });

$('#add_all').click(function() {
    $(this).parent().parent().children('.second-one').children('button').addClass('GUTS-selected');
    const image_containers = $(this).parent().parent().children('.GUTS-Images-Container');
    image_containers.children(`.christ_txt`).addClass('img__christianity_txt');
    image_containers.children(`.christianity`).addClass('img__christianity');
    image_containers.children(`.base_of_guts`).addClass('img__base_of_guts');
    image_containers.children(`.divider`).addClass('img__divider');


    image_containers.children(`.the_big_five`).addClass('img__the_big_five');
    image_containers.children(`.dark_tetrad`).addClass('img__dark_tetrad');
    image_containers.children(`.base_of_guts`).addClass('img__base_of_guts');
    image_containers.children(`.norse_mytho`).addClass('img__norse_mytho');
    image_containers.children(`.abc_clusters`).addClass('img__abc_clusters');
    image_containers.children(`.norse_mytho`).addClass('img__norse_mytho');
    image_containers.children(`.chakras`).addClass('img__chakras');

});

$('#clear_all').click(function() {
    $(this).parent().parent().children('.second-one').children('button').removeClass('GUTS-selected');
    const image_containers = $(this).parent().parent().children('.GUTS-Images-Container');
    image_containers.children(`.christ_txt`).removeClass('img__christianity_txt');
    image_containers.children(`.christianity`).removeClass('img__christianity');
    image_containers.children(`.base_of_guts`).removeClass('img__base_of_guts');
    image_containers.children(`.divider`).removeClass('img__divider');


    image_containers.children(`.the_big_five`).removeClass('img__the_big_five');
    image_containers.children(`.dark_tetrad`).removeClass('img__dark_tetrad');
    image_containers.children(`.base_of_guts`).removeClass('img__base_of_guts');
    image_containers.children(`.norse_mytho`).removeClass('img__norse_mytho');
    image_containers.children(`.abc_clusters`).removeClass('img__abc_clusters');
    image_containers.children(`.norse_mytho`).removeClass('img__norse_mytho');
    image_containers.children(`.chakras`).removeClass('img__chakras');
});

$('.GUTS-Container.second-one').click(function(e) {
    const image_containers = $(this).parent().children('.GUTS-Images-Container');
    console.log(e.target.id)
    console.log(image_containers)
    console.log(image_containers.children(`.${e.target.id}`))
    image_containers.children(`.${e.target.id}`).addClass(e.target.id);
    if ($(`#${e.target.id}`).hasClass('GUTS-selected')) {
        $(`#${e.target.id}`).removeClass('GUTS-selected');
        if (e.target.id === 'christianity') {
            image_containers.children(`.christ_txt`).removeClass('img__christianity_txt');
            image_containers.children(`.christianity`).removeClass('img__christianity');
        } else if (e.target.id === 'base_of_guts') {
            image_containers.children(`.base_of_guts`).removeClass('img__base_of_guts');
            image_containers.children(`.divider`).removeClass('img__divider');
        } else {
            image_containers.children(`.${e.target.id}`).removeClass(`img__${e.target.id}`);
        }
    } else {
        $(`#${e.target.id}`).addClass('GUTS-selected');
        if (e.target.id === 'christianity') {
            image_containers.children(`.christ_txt`).addClass('img__christianity_txt');
            image_containers.children(`.christianity`).addClass('img__christianity');
        } else if (e.target.id === 'base_of_guts') {
            image_containers.children(`.base_of_guts`).addClass('img__base_of_guts');
            image_containers.children(`.divider`).addClass('img__divider');
        } else {
            image_containers.children(`.${e.target.id}`).addClass(`img__${e.target.id}`);
        }
    }
});





// const GUTS_Element_list = [
//     'add_base',
//     'add_chakras',
//     'add_the-big-five',
//     'add_christianity',
//     'add_dark-tetrad',
//     'add_norse-mythology',
//     'add_abc-cluster',
// ]