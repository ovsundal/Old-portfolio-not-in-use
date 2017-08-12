let emailHider = "<a href='http://www.google.com/recaptcha/mailhide/d?k=01xjiIWsKCKvWfEk5c3nq9Hg==&amp;c=R-Hxt4dGCqIlTbMnxPGOEq_SzvcCdz4ptMH2C6SeSO8='" + "onclick='window.open('http://www.google.com/recaptcha/mailhide/d?k\x3d01xjiIWsKCKvWfEk5c3nq9Hg\x3d\x3d\x26c\x3dR-Hxt4dGCqIlTbMnxPGOEq_SzvcCdz4ptMH2C6SeSO8\x3d', '', 'toolbar=0,scrollbars=0,location=0,statusbar=0,menubar=0,resizable=0,width=500,height=300'); return false;" + 'title="Reveal this e-mail address">email</a>';

    let personalia = {

    name: 'Ove Sundal',
    title: 'Computer Engineer',
    greeting: 'Hi there! My name is Ove Sundal, a computer engineer focusing on front-end web development. ' +
    'Feel free to view my projects, and don\'t be afraid to drop me an ' + emailHider,
    work: 'Featured work'
};

//todo: use this to hide email:
// <a href="http://www.google.com/recaptcha/mailhide/d?k=01xjiIWsKCKvWfEk5c3nq9Hg==&amp;c=R-Hxt4dGCqIlTbMnxPGOEq_SzvcCdz4ptMH2C6SeSO8=" onclick="window.open('http://www.google.com/recaptcha/mailhide/d?k\x3d01xjiIWsKCKvWfEk5c3nq9Hg\x3d\x3d\x26c\x3dR-Hxt4dGCqIlTbMnxPGOEq_SzvcCdz4ptMH2C6SeSO8\x3d', '', 'toolbar=0,scrollbars=0,location=0,statusbar=0,menubar=0,resizable=0,width=500,height=300'); return false;" title="Reveal this e-mail address">email</a>

let projects = [
    {
        pictureUrl: "src/images/feed-reader-testing-450w.jpg",
        title: "Feed Reader Testing",
        keywords: "JavaScript, Jasmine, JavaScript testing frameworks",
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
        title: "Website Optimization",
        keywords: "critical rendering path, 60FPS rendering, gulp task runner, Chrome Developer Tools",
        projectUrl: "https://github.com/ovsundal/Website-Performance-Optimization",
        introduction: "Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsum",
        learningOutcomes: "learningOutcomes",
    },
    {
        pictureUrl: "src/images/frogger-arcade-game-450w.jpg",
        title: "Frogger Arcade Game",
        keywords: "Javascript, OOP, HTML5 Canvas",
        projectUrl: "https://ovsundal.github.io/Frogger-Arcade-Game/",
        introduction: "Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsum",
        learningOutcomes: "learningOutcomes",
    }
];

//add personalia
$('#name').append(personalia.name);
$('#title').append(personalia.title);
$('#greeting').append(personalia.greeting);
$('#work').append(personalia.work);

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
                '</br>' +
            '</article>'
        );

    //store project object
    $('#' + pictureId)
        .data(project)
        //hook up click function to picture
        .click(function () {
            let projectClicked = $(this).data();
            //open url of passed object
            window.open(projectClicked.projectUrl);
    });
});

//create icons
$('#iconHolder').append(
    //github icon
    '<div class="col-xs-6 col-xs-push-1">' +
        '<img id="github-icon" class="icon img-responsive center-block cursor-link "' +
        ' src="src/images/fixed/github.svg" alt="github logo"/>' +
    '</div>' +
    //linkedIn icon
    '<div class="col-xs-6 col-xs-pull-1">' +
        '<img id="github-icon" class="icon img-responsive center-block cursor-link "' +
        ' src="src/images/fixed/linkedin.svg" alt="linkedIn logo"/>' +
    '</div>'
);

//onclick functions for logos
$("#github-icon").click(function () {
    window.open("https://github.com/ovsundal");
});

$("#linkedIn-icon").click(function () {
    window.open("https://www.linkedin.com/in/ove-sundal-08172128/");
});

//shadow effect for all clickables
$(".cursor-link").hover(function () {
    $(this).toggleClass('shadow-effect');
});