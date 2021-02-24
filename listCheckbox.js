
function changeCheckboxDisplay(checkboxes){
  checkboxes.classList.toggle("hidden");
  
}

function showCourses() {
  var checkboxes = document.getElementById("courses");
  changeCheckboxDisplay(checkboxes);
}

function showGroups() {
  var checkboxes = document.getElementById("groups");
  changeCheckboxDisplay(checkboxes);
}

function showThemes() {
  var checkboxes = document.getElementById("themes");
  changeCheckboxDisplay(checkboxes);
}

function showChecking(){
  checkingWindow = document.getElementById("answer-checking-container");
  checkingWindow.style.display = "flex";
}

function closeChecking(){
  checkingWindow = document.getElementById("answer-checking-container");
  checkingWindow.style.display = "none";
}

//jQuery


$(document).ready(function() {
  $(".appoint").click(function(){
    if($(this).text()=="назначить"){
      $(this).text("назначено");
      $(this).removeClass("btn-danger");
    }
    else{
      $(this).text("назначить");
      $(this).addClass("btn-danger");
    }
  })
});


$(document).ready(function() {
  $(".student").click(function(){
      target=$(this).text();
      $.each(answers, function(i){
        if (target==answers[i].studentName)
          $(".test-screenshot img").attr("src", answers[i].screenshot);
      });
  })
})


//classes
class Answer{
  
  constructor(studentName, screenshot, gitLink, chat){
    this.studentName=studentName;
    this.screenshot=screenshot;
    this.gitLink=gitLink;
    this.chat=chat;
  }
}

let answers = [new Answer(), new Answer()];

answers[0].studentName="Семён Швец";
answers[1].studentName="Иван Иванов";

answers[0].screenshot="https://www.codeproject.com/KB/architecture/autp5/vts.jpg";
answers[1].screenshot="https://docs.microsoft.com/en-us/visualstudio/test/media/test-explorer-banktests-passed.png?view=vs-2019";

