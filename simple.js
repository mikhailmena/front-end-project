

const $body = $("body");
var eventObject = {}

    
//when dom loads 
document.addEventListener('DOMContentLoaded', function() {
//define these variables
  document.getElementById("eventName").defaultValue = "Meeting with Marc";
  document.getElementById("eventDate").defaultValue = "2022-09-19";
  let eventName = document.getElementById("eventName").value;
let eventDate = document.getElementById("eventDate").value;

  var calendarEl = document.getElementById('calendar');
  
    var calendar = new FullCalendar.Calendar(calendarEl, {
      events: [
        {
          eventObject }, { title  : 'Hire Marc Menard', start  : '2022-09-16', end    : '2022-09-19'
},
{
  title  : 'event3',
  start  : '2010-01-09T12:30:00',
  allDay : false // will make the time show
}
]
});
      // initialView: 'dayGridMonth'
      // plugins:  [googleCalendarPlugin], googleCalendarApiKey: 'AIzaSyC_Oklvdz_uov0uIiafCrX8bmjEFwBun-8', events: { googleCalendarId: '580138303029-tvvoh0sh6anf9m8vfgdogk5ttubsjl2d.apps.googleusercontent.com'}
              

  calendar.render();
});


function scheduleButton(){
document.getElementById("scheduleButton").click(function(){
    // var eventObject = {title: eventName, start: eventDate}
    console.log(eventObject)

});
}








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






