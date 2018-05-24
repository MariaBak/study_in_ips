$(document).ready(function(){

    $('.open-button').click(function(){
      $(this).toggleClass('open');
    });

    $(".open-button").click(function(e){
        e.preventDefault();
        $(".mobile-menu").toggleClass('open');
    });
	
});