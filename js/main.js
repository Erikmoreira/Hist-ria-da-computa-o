
jQuery(function($){
   
     var elementoMenu = $("#menu");
  
     var posicaoMenu = elementoMenu.offset().top;
   
   
    $(window).scroll(function(){
    
          var posicaoAtualScroll = $(window).scrollTop();
   
        
         if(posicaoAtualScroll > posicaoMenu){
             elementoMenu.addClass('contentFullFixed');
           } else{
             elementoMenu.removeClass('contentFullFixed');
         }
   
     });
  });