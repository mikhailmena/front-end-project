// 'use strict';
// var http = require('http');
// var port = process.env.PORT || 1337;

// http.createServer(function (req, res) {
//     res.writeHead(200, { 'Content-Type': 'text/plain' });
//     res.end('Hello World\n');
// }).listen(port);
// $.get("https://www.googleapis.com/auth/calendar");
// $.get("https://www.googleapis.com/calendar/v3/calendars/calendarId");

// $.get("https://www.googleapis.com/calendar/v3/users/me/calendarList")
// calendarId("auvblb0sgs0clje78dsgj1mqis@group.calendar.google.com")




// let $aboutme = document.getElementById("#aboutme");
// $aboutme.addEventListener.on("click", function() {
//     // .unhide()

// });

const $body = $("body");

//hide text divs on startup
hideDiv($("#ResumePdf"))
hideDiv($("#aboutmetext"))
hideDiv($("#armycareertext"))
hideDiv($("#experiencelist"))
hideDiv($("#skillslist"))
hideDiv($("#goalslist"))
hideDiv($("#achievementslist"))
//declare hide and unhide function
function hideDiv(div) {
    div.hide()
}
function unhide(div) {
    div.show()
}
// text pop up function
$(function() {
    $('.popper').hover(function() {
        $('#pop').toggle();
    });
    });

    
//add event listener
$("#resumeButtons").click(function(){
    unhide($("#ResumePdf"))
});



$("#aboutme").click(function(){
    unhide($("#aboutmetext"))
});
$("#armycareer").click(function(){
    unhide($("#armycareertext"))
});
$("#Experience").click(function(){
    unhide($("#experiencelist"))
});
$("#skills").click(function(){
    unhide($("#skillslist"))
});
$("#goals").click(function(){
    unhide($("#goalslist"))
});
$("#achievements").click(function(){
    unhide($("#achievementslist"))
});


var $clickCounter = $("<div></div>");

function clickCount(){
    let $container = $(".container")
    $container.addEventListener("click", function() {
        for (var i = 0; i < 100; i++) {
        var count = 0
        count++
        console.log(count)
        ($clickCounter).prepend("count")
        }
})
}



