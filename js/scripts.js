(function ($, Drupal) {

  Drupal.behaviors.STARTER = {
    attach: function(context, settings) {
      // Get your Yeti started.
    }
  };

})(jQuery, Drupal);

(function ($) {
  $(document).ready(function () {

    $('.top-cart-title').each(function(){

      var $link = $(this),
          $div = $('#block-commerce-cart-cart'),
          div_or_link_is_hovered = false,
          show = function(){
             $div.slideDown(600);
             $link.addClass('active');
          },
          hide = function(){
              setTimeout(function(){
                  if(div_or_link_is_hovered === false){
                      $div.slideUp(600);
                      $link.removeClass('active');
                  };
              }, 300);
          };

        $link.add($div).mouseover(function(){
            div_or_link_is_hovered = true;
            show();
        });

        $link.add($div).mouseout(function(){
            div_or_link_is_hovered = false;
            hide();
        });

    });

  });
})(jQuery);
