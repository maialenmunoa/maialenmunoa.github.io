$(document).ready(function() {
    $(".portfolio-button").click(function() {
        var imageSrc = $(this).attr("data-image-src");
        var postContent = unescape($(this).attr("data-post-content"));
        
        $("#popup-image").attr("src", imageSrc);
        $("#popup-content").html(postContent);
        $("#popup").removeClass("hidden");
    });

    $("#popup").click(function(event) {
        if (event.target.id === "popup") {
        $("#popup").addClass("hidden");
        }
    });
});