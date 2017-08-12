let ViewModel = function () {

    let self = this;

    self.projectList = ko.observableArray([
        {
            title: "Neighborhood Map",
            introduction: "Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsum",
            learningOutcomes: "learningOutcomes",
            keywords: "keyword1, keyword2",
            pictureUrl: "PICTURE"
        },
        {
            title: "Feed Reader Testing",
            introduction: "Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsum",
            learningOutcomes: "learningOutcomes",
            keywords: "keyword1, keyword2",
            pictureUrl: "PICTURE"
        },
        {
            title: "Frogger Arcade Game",
            introduction: "Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsum",
            learningOutcomes: "learningOutcomes",
            keywords: "keyword1, keyword2",
            pictureUrl: "PICTURE"
        },
        {
            title: "Website Performance Optimisation",
            introduction: "Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsum",
            learningOutcomes: "learningOutcomes",
            keywords: "keyword1, keyword2",
            pictureUrl: "PICTURE"
        }
    ]);
};

ko.applyBindings(new ViewModel());

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