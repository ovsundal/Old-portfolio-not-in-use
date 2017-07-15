$(document).ready(function() {

    //shadow effect when hovering
    $(".cursor-link").hover(
        function(){ $(this).removeClass('shadow-effect') },

        function() { $(this).toggleClass('shadow-effect')});

    //link references
    $("#resume-image").click(function () {
        window.open("https://ovsundal.github.io/Resume/");
    });
    $("#frogger-image").click(function () {
        window.open("https://ovsundal.github.io/Frogger-Arcade-Game/");
    });

    $("#github-icon").click(function () {
        window.open("https://github.com/ovsundal");
    });

    $("#linkedIn-icon").click(function () {
        window.open("https://www.linkedin.com/in/ove-sundal-08172128/");
    });
});