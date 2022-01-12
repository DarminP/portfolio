jQuery(document).ready(function($){

    //Toggle menu on button click

    var $root = $('html,body'),
        menu_toggle = $('.menu-toggle');

    menu_toggle.on('click', function(){
        var $this = $(this)

        $this.toggleClass('close');
        $('.menu, .menu-nav, .menu-nav-item').toggleClass('show');
    });

    // Toggle nav menu on menu item click and smooth scrolling
    $('.menu-nav-item a').on('click', function() {
        var $this = $(this),
            href = $this.attr('href');

        //Toggle nav menu

         menu_toggle.removeClass('close');
         $this.parents('.menu-nav, .menu-nav-item, .menu').removeClass('show');

        //Smooth scrolling

         $root.animate({
             scrollTop: $(href).offset().top - 0
         }, 500, function(){
            window.location.hash = href;
         });

         return false;

    });


    //Atach a submit handler to the form 

     $(".btn-submit").on('click', function(){
         if($('#text').val() && $('#email').val() && $('#message').val() !== ''){
             $.ajax({
                 url: 'process.php',
                 type: 'POST',
                 data: {
                     name: $('#text').val(),
                     email: $('#email').val(),
                     message: $('#message').val(),
                     url: $('#url').val(),
                 },
                 success: function(msg) {
                     $('.contact-form').show();
                     $('.status-messages-fail').hide();
                     $('.status-messages').slideDown();
                     $('.contact-form')[0].reset();
    
                     console.log("done");
                 }
             });
         }else{
            console.log('Error');
            $('.status-messages').hide();
            $('.status-messages-fail').slideDown();
         }
     });
});
             

                
                
                 
                