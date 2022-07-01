$( document ).ready(function() {

  $("#fauna").click(function(){
      $('#llistatfauna').toggle(100,function() {

      });
  });

  $("#flora").click(function(){
    $('#llistatflora').toggle(100,function() {

    });
});


  
    $('#buscador').keyup(function(){
       var nombres = $('.nombres');
       var buscando = $(this).val().toLowerCase();
       var item='';
       for( var i = 0; i < nombres.length; i++ ){
           item = $(nombres[i]).html().toLowerCase();
            for(var x = 0; x < item.length; x++ ){
                if( buscando.length == 0 || item.indexOf( buscando ) > -1 ){
                    $(nombres[i]).parents('.item').show(); 
                }else{
                     $(nombres[i]).parents('.item').hide();
                }
            }
       }
    });

    $('#buscador2').keyup(function(){
        var nombres = $('.nombres2');
        var buscando = $(this).val().toLowerCase();
        var item='';
        for( var i = 0; i < nombres.length; i++ ){
            item = $(nombres[i]).html().toLowerCase();
             for(var x = 0; x < item.length; x++ ){
                 if( buscando.length == 0 || item.indexOf( buscando ) > -1 ){
                     $(nombres[i]).parents('.item').show(); 
                 }else{
                      $(nombres[i]).parents('.item').hide();
                 }
             }
        }
     });
  

  
  


});











 