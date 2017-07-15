$(document).ready(function() {

    $(".cursor-link").hover(function(){ $(this).toggleClass('shadow-effect'); });


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