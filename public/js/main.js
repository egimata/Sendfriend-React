;(function($){
    "use strict";

    $(document).ready(function(){

        /*--------------------------------------
           form input Focus
        ---------------------------------------*/
        if($('.single-input').length){
            $('.single-input').on('focusin', function() {
                $(this).parent().find('label').addClass('active');
            });
            $('.single-input').on('focusout', function() {
                if (!this.value) {
                    $(this).parent().find('label').removeClass('active');
                }
            });
        }
        
        if($('.riyaqas-file-input').length){
            $(".riyaqas-file-input").on("change", function() {
              var fileName = $(this).val().split("\\").pop();
              $(this).siblings(".custom-file-label").addClass("selected").html(fileName);
            });
        }
    });



})(jQuery);
