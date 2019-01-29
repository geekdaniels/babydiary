 ( function ( $ ) {
    $( function () {
     /**
         * Slidebars Controller
         */

     // Init
     var controller = new slidebars();
     controller.init();

     // Overlay demo
     $( '.js-toggle-main-menu' ).on( 'click', function ( event ) {
      event.preventDefault();
      event.stopPropagation();
      controller.open( 'main-menu' );
     } );

     $( '.js-close-any' ).on( 'click', function ( event ) {
      event.preventDefault();
      event.stopPropagation();
      controller.close( 'main-menu' );
     } );


    } );
   } ) ( jQuery );

   $('.close-alt').on('click', function(){
    console.log($(this));
    $('.js-close-any').trigger('click')})
