// // jQuery File
//
//
//
// $(document).ready(function() {
//
//     // $('div').fadeOut(2000);
//
//     // On Display none in SCSS
//     // $('div').fadeIn(2000);
//
//     // $('div').slideUp(2000);
//
//     // on Display none in SCSS
//     // $('div').slideDown(2000);
//
//     // $('div').click(function() {
//
//     // Tests that function works
//     // window.alert('Clicked!');
//     // (this) is a selector for the parent syntax
//
//     // $(this).fadeOut(500);
//
//     // $(this).slideToggle(500);
//
//     // });
//
//     // $('#toggle').click(function() {
//     // $('#box').fadeToggle(500);
//
//     // });
//
//     // $('#slide').click(function() {
//     // $('#box').slideToggle(500);
//     // });
//
//     // $('#box').mouseenter(function() {
//     //     $(this).fadeOut(500);
//     // });
//     //
//     // // $('#box').hover(function() {
//     // //     $('this').fadeOut(500);
//     // // });
//     //
//     // $('#box').mouseleave(function() {
//     //     $(this).fadeIn(500);
//     // });
//
//     // $('#box').click(function() {
//     //     $('.opaque').fadeTo(5, 0.2);
//     // });
//
//     // $('#box').click(function() {
//     //     $('ul li:nth-child(2), #box, #slide, #toggle').fadeTo(5, 0.2);
//     // });
//
//
//
// });
// $(document).ready(function() {
//
//     // $variable = 'string';
//     // $var2 = 7;
//     // $var h1 = $("<h1>Hello World!</h1>")
//
//     // var $li = $('<li>Chinese</li>');
//     //
//     // $('ul').prepend($li);
//     // $('ul').append($li);
//
//     // var $div = $('<div id="div2"></div>');
//     //
//     // $('body').append($div);
//     //
//     // var $div2 = $('<div id="div2"></div>');
//     //
//     // $('body').prepend($div2);
//
//     // var $div = $('<div id="div2">I\'m a div.</div>');
//     //
//     // $($div).appendTo('body');
//
//     // var $name = "Kent";
//     // var $divClass = "green";
//     // var $weekDay = "Wednesday";
//     // var $oneWord = "some";
//     //
//     // var $div = $('<div class="' + $divClass + '">Hi ' + $name + '. Today is ' + $weekDay + '.</div>');
//     //
//     // $($div).appendTo('body');
//     //
//     // var $para = $('<p>I am going to add ' + $oneWord + ' words to this sentence.</p>');
//     //
//     // $($para).appendTo('body');
//
//     // var $paragraph = $('p');
//     //
//     // $('div').after($paragraph);
//     //
//     //
//     // var $class = 'green';
//     // var $div = $('<div class="' + $class + '"></div>');
//     //
//     // $('div').before($div);
//
//     // var $class = 'green';
//     // var $div = $('<div class="' + $class + '"></div>');
//
//     // $('#blueDiv').before($div);
//
//     // $('.red').click(function() {
//     //     $('#blankDiv').toggleClass('blue');
//     // });
//
//     // $('#blueDiv').click(function() {
//     //     $(this).fadeOut(200);
//     // });
//
//     // $($div).click(function() {
//     //     $(this).remove();
//     // });
//
//     // $(document).on('click', '#blueDiv', function() {
//     //     $(this).remove();
//     // });
//
//     // $('#blankDiv').addClass('blue');
//
//     // $('#blankDiv').click(function(){
//     //
//     // });
//
//
//
//     // $('.red').click(function() {
//     //     // $('#blankDiv').height('500px');
//     //     // $('#blankDiv').width('500px');
//     //     $('#blankDiv').toggle(function() {
//     //         $('#blankDiv').css('background-color', '#0ff');
//     //         $('#blankDiv').css('height', '300px');
//     //         $('#blankDiv').css('width', '300px');
//     //         $('#blankDiv').html('We added text too.');
//     //         $('#blankDiv').css('color', '#f0f');
//     //     });
//     // });
//     //
//     // $('.red').html('This is new text.');
//
//
// });
// $(document).ready(function() {
// $('ul').hide();
// $(document).on('event', 'selector', function(){});
// var $button = $('.Button').html();
//
// $('.Button').click(function() {
//
//     // $(this).toggleClass('active');
//     // $(this).height('200px');
//     // $(this).html("Don't push me");
//
//     var $button = $('.Button').html();
//
//     $(this).html("Don't Push Me");
//
//     $('p').html($button);
//
// });
// });
// $(document).ready(function() {
//
//     $('button').click(function() {
//
//         // window.alert("I'm working.");
//
//         var $input = $('input[name="fName"]').val();
//
//
//         $('h1').html('Hello ' + $input + '!');
//         $('input[name="fName"]').val('');
//
//     });
//
//
// });
// $(document).ready(function() {
//     $('#doIt').click(function() {
//
//         var $input = $('input[name="toDo"]').val();
//
//         $('ul').append('<li  class="toDoList">' + $input + '</li>');
//         $('input[name="toDo"]').val('');
//
//     });
//
//     $(document).on('click', 'ul li', function() {
//
//         $(this).remove();
//
//     });
//
//     $('#clearAll').click(function() {
//
//         $('ul').empty();
//
//     });
//
// });

$(document).ready(function() {

    var $toDoCount = 0;
    var $toDoInput = 'input[name="toDo"]';

    $('#doIt').click(function() {

        $toDoCount = $toDoCount + 1;
        $('h3').html('You have' + $toDoCount + 'todos!');


        var $input = $($toDoInput).val();
        var $li = $('<li>' + $input + '</li>');

        $('ul').append($li);

        $($toDoInput).val('');

    });

    $(document).on('click', 'ul li', function() {

        $(this).remove();

        $toDoCount = $toDoCount - 1;
        $('h3').html('You have' + $toDoCount + 'todos!');

    });

    $('#clearAll').click(function() {

        $('ul').empty();

    });

});
