$(document).ready(function() {
    /*$(".portfolio-button").click(function() {
        var imageSrc = $(this).attr("data-image-src");
        var postContent = unescape($(this).attr("data-post-content"));
        
        $("#popup-image").attr("src", imageSrc);
        $("#popup").removeClass("hidden");
        $("body").addClass("popup-opened");
    });*/

    $(".portfolio-button").click(function() {
        // Obtener la lista de imágenes desde el atributo "data-image-src" del botón
        var imageList = $(this).attr("data-image-src").split(",");
        
        // Obtener el contenido desde el atributo "data-post-content" del botón
        var postContent = unescape($(this).attr("data-post-content"));
        
        // Obtener el índice de la imagen actual
        var currentIndex = 0;
        
        // Crear el contenido HTML del carrusel
        var slickHtml = '<div id="popup-image-carousel" class="slick-carousel">';
        for (var i = 0; i < imageList.length; i++) {
            slickHtml += '<div class="slick-slide"><img src="' + imageList[i] + '" alt=""></div>';
            if (i === 0) {
            currentIndex = i;
            }
        }
        slickHtml += '</div>';
        
        // Agregar el contenido HTML al popup
        $("#popup-carousel").html(slickHtml);
        
        $(".slick-slide img").on("load", function() {
            var $img = $(this);
            if ($img[0].naturalWidth > $img[0].naturalHeight 
                && ($img[0].naturalWidth > $img.parent().width() || $img[0].naturalHeight > $img.parent().height())) {
                $img.css("object-fit", "cover");
                $img.css("object-position", "top center");
            }
        });

        // Inicializar el carrusel
        $("#popup-image-carousel").slick({
            dots: true,
            arrows: true,
            initialSlide: currentIndex
        });
        
        $("#popup-content").html(postContent);
        $("#popup-carousel-container").css("background-image", "url('" + imageList[0] + "')");

        // Mostrar el popup
        $("#popup").removeClass("hidden");
        $("body").addClass("popup-opened");
    });

    $("#popup").click(function(event) {
        if (event.target.id === "popup") popupClose()
    });

    $("#popup-close").click(popupClose);

    $("#popup-close-mobile").click(popupClose);

    function popupClose() {
        $("#popup").addClass("hidden");
        $("body").removeClass("popup-opened");
    }
});