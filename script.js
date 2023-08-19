document.addEventListener("DOMContentLoaded", function() {
    var svgElement = document.getElementById("click");
    var audio = document.getElementById("happy");

    svgElement.addEventListener("click", function() {
        audio.play();
    });
});