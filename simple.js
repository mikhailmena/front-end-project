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
//hide text divs on startup
hideDiv($("#ResumePdf"))
hideDiv($("#aboutmetext"))
hideDiv($("#armycareertext"))
hideDiv($("#experiencelist"))
//declare hide and unhide function
function hideDiv(div) {
    div.hide()
}
function unhide(div) {
    div.fadeIn()
}
// let $original = function original(){
//     $(this).html($(""));
// };
// let $clickToView = function clickToView(){
//     $(this).html($("<span> click to view </span>"));

// }
//add event listener
$("#resumeButtons").click(function(){
    unhide($("#ResumePdf"))
});
$("#aboutme").mouseenter(function(){
    $(this).html($("<span> click to view </span>"));

});
$("#aboutme").mouseleave(function(){
    $(this).html($(""));

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


//Google Calendar API Key: AIzaSyC_Oklvdz_uov0uIiafCrX8bmjEFwBun-8
var key= "AIzaSyC_Oklvdz_uov0uIiafCrX8bmjEFwBun-8"

//clientId: 216823178620-qmi4u1ddf5i46f3gd35uu4vgatsne61o.apps.googleusercontent.com
//client Secret: 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
