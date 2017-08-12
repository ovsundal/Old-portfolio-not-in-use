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
        keywords: "jquery, knockoutJs (MVVM), async API requests, google maps",
        projectUrl: "https://github.com/ovsundal/Neighborhood-Map-of-Stavanger",
        introduction: "Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsum",
        learningOutcomes: "learningOutcomes",
    },
    {
        pictureUrl: "src/images/website-optimization-450w.jpg",
        title: "Website Optimisation",
        keywords: "gulp task runner, file minification/inlining, google pagespeed",
        projectUrl: "https://ovsundal.github.io/Frogger-Arcade-Game/",
        introduction: "Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsum",
        learningOutcomes: "learningOutcomes",
    },
    {
        pictureUrl: "src/images/frogger-arcade-game-450w.jpg",
        title: "Frogger Arcade Game",
        keywords: "OOP, HTML5 Canvas, chrome devtools debugging",
        projectUrl: "https://ovsundal.github.io/Frogger-Arcade-Game/",
        introduction: "Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsum",
        learningOutcomes: "learningOutcomes",
    }
];

//create project
projects.forEach(function (project) {

    //set id to be project concatenated title
    let pictureId = project.title.replace(/ /g, '');

    //create DOM elements
    $('#projectHolder')
        .append(
            '<article class="col-sm-3">' +
            '<img id=' + pictureId + ' src="' + project.pictureUrl + '" class="img-rounded img-responsive cursor-link" alt="Image" />' +
            '<h3 class="text-center project-title">' + project.title + "</h3>" +
            '<div class="text-center"><i>' + project.keywords + '</i></div>' +
            '</br></article>'
        );

    //store project object and pass it to click function
    $('#' + pictureId)
        .data(project)
        .click(function () {
            let projectClicked = $(this).data();

            //open url of passed object
            window.open(projectClicked.projectUrl);
    });
});



$(document).ready(function () {

    //shadow effect for clickables
    $(".cursor-link").hover(function () {
        $(this).toggleClass('shadow-effect');
    });


    // $("#resume-image").click(function () {
    //     window.open("https://ovsundal.github.io/Resume/");
    // });
    // $("#frogger-image").click(function () {
    //     window.open("https://ovsundal.github.io/Frogger-Arcade-Game/");
    // });

    $("#github-icon").click(function () {
        window.open("https://github.com/ovsundal");
    });

    $("#linkedIn-icon").click(function () {
        window.open("https://www.linkedin.com/in/ove-sundal-08172128/");
    });
});