
var today = moment();
var saveTask = $('#savetasks');


//start hour and end hour selected
var options = {
  startHour: 9,
  endHour: 17,
}
//hours linked to colour slots on css
  function newTime() {
    var currentHour = moment().hour();
  
    $('.time-block').each(function(index, element){
      var hour = parseInt($(this).attr('id'));

    if(hour < currentHour){
    $(this).addClass('past');
    }

    else if (hour === currentHour) {
      $(this).removeClass('past')
      $(this).addClass('present');
    }

    else {
      $(this).removeClass('present')
      $(this).removeClass('past')
      $(this).addClass('future')
    }
    });
  }

newTime();
// save added to description and id for hours and task 
  function onSave(e) {
    console.log (e.target);
    
   var task = $(e.target).parent().parent().find('.description').val();

   var hour = $(e.target).parent().parent().attr('id');

   localStorage.setItem(hour,task);

   console.log(task,hour)


  }


//function generateTimeslots() {
//for (var hour = 9; hour <= 17; hour++) {
  
//var savedTask = localStorage.getItem(hour);

//   }
// }

$('#9 .description').val(localStorage.getItem("9"))
$('#10 .description').val(localStorage.getItem("10"))
$('#11 .description').val(localStorage.getItem("11"))
$('#12 .description').val(localStorage.getItem("12"))
$('#13 .description').val(localStorage.getItem("13"))
$('#14 .description').val(localStorage.getItem("14"))
$('#15 .description').val(localStorage.getItem("15"))
$('#16 .description').val(localStorage.getItem("16"))
$('#17 .description').val(localStorage.getItem("17"))








//loads date first 
//loads save button for local storage 
//set time function to reload page
  function init() {

    $('.lead').text(today.format("MMM Do, YYYY"));

    $('.container').on('click', onSave);
   
    setInterval(newTime, 10000);
    
  }

  init();