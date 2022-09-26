


const $body = $("body");
var eventObject = {}

var titleObj = "AddEvent";
var dateObj = "2022-09-27";
document.addEventListener('click', function(){
    var titleObj = document.getElementById("#eventTitle");
    var dateObj = document.getElementById("#eventDate");
        // var eventObject = {title: eventName, start: eventDate}
        // console.log(eventObject)
    
    });


document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, 
        { googleCalendarApiKey: 'AIzaSyBL4zQVyQCUqVYGXkopeHYJcu64YxjY_eI',
        events: {
            googleCalendarId: 'auvblb0sgs0clje78dsgj1mqis@group.calendar.google.com'
        }       
    });
    calendar.render();
  });
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






