let projects = [
    {
        pictureUrl: "src/images/feed-reader-testing-450w.jpg",
        title: "Feed Reader Testing",
        keywords: "jasmine framework, unit testing",
        projectUrl: "https://ovsundal.github.io/Feed-Reader-Testing/",
        introduction: "Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsum",
        learningOutcomes: "Jasmine testing framework, async unit testing"
    },
    {
        pictureUrl: "src/images/project2.jpeg",
        title: "Neigborhood Map of Stavanger",
        keywords: "knockoutJs (MVVM), async API requests, google maps",
        projectUrl: "https://github.com/ovsundal/Neighborhood-Map-of-Stavanger",
        introduction: "Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsum",
        learningOutcomes: "learningOutcomes",
    },
    {
        pictureUrl: "src/images/website-optimization-450w.jpg",
        title: "Website Optimisation",
        keywords: "gulp task runner, file minification, google pagespeed",
        projectUrl: "https://ovsundal.github.io/Frogger-Arcade-Game/",
        introduction: "Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsum",
        learningOutcomes: "learningOutcomes",
    },
    {
        pictureUrl: "src/images/Frogger-image.jpg",
        title: "Frogger Arcade Game",
        keywords: "OOP, HTML5 Canvas",
        projectUrl: "https://ovsundal.github.io/Frogger-Arcade-Game/",
        introduction: "Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsum",
        learningOutcomes: "learningOutcomes",
    }
];

//create project
projects.forEach(function (project) {

    $('#projectHolder')
        .append(
            '<article class="col-sm-3">' +
            '<img id="project.title" src="' + project.pictureUrl + '" class="img-responsive cursor-link" alt="Image" />' +
            '<h3 class="text-center project-title">' + project.title + "</h3>" +
            '<div class="text-center"><i>' + project.keywords + '</i></div>' +
            '</article>'
        );

    $("#" + project.title).click(function () {
        window.open(project.name);
    });

});


$(document).ready(function () {

    $(".cursor-link").hover(function () {
        $(this).toggleClass('shadow-effect');
    });


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