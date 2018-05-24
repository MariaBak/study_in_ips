$(function()
{
    $("#addNewFIlm").click(function () 
    {
        
        let checkUrl         = $("#urlNewFilm").val();
        let checkName        = $("#nameNewFIlm").val();
        let checkDescription = $("#descriptionFilm").val();

        if (checkUrl !=="" && checkName !=="" && checkDescription !=="")
        {
            let mainBlock          = $("<div></div>"),
                imgBlock           = $("<div></div>").append($('<img/>',{src: $("#urlNewFilm").val()})),            
                nameNewFIlm        = $("<span></span>").append($("#nameNewFIlm").val()),
                descriptionNewFilm = $("<p/>").append($("#descriptionFilm").val());
            
            mainBlock.append(imgBlock,nameNewFIlm,descriptionNewFilm);
            
            mainBlock.addClass("block_sidebar_film_block float_film revealator-slideright revealator-delay2 revealator-partially-above");
            imgBlock.addClass("film_poster_four");
            
            $('#add_new_film').append(mainBlock);
        }
     
        event.preventDefault();

        if (checkUrl !=="" && checkName !=="" && checkDescription !=="")
        {
            document.getElementById("shadow_block_new_film").classList.remove("show");	
            document.getElementById("block_add_film").classList.remove("show");	
    
        }
    })
});