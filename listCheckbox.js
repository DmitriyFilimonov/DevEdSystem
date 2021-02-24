
function changeCheckboxDisplay(checkboxes){
  if ((checkboxes.style.display=="none")||(checkboxes.style.display=="")){//почему none эквивалентно ""??? И почему с одной "" onclick() срабатывает только один раз??
    checkboxes.style.display = "block";
  } else {
    checkboxes.style.display = "none";
  }
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


//table cells customization

let table = document.getElementsByClassName("table-row");
table[0].style.borderTop = "2px solid #ffdaff";

for (i=0; i<table.length; i++){
  let tableCells = table[i].getElementsByClassName("col");
  table[i].style.borderBottom = "2px solid #ffdaff";
  for (j=0; j<tableCells.length; j++){
    tableCells[j].style.alignSelf="center";
  }
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

// ПОЧЕМУ ТАК НЕ РАБОТАЕТ??

// $(document).ready(function() {
//   $(".student").click(function(){
//     $.each($(".student"), function(i, value){
//       console.log(i,' ', value.text());
//     });
//   })
// })

//А ТАК РАБОТАЕТ??

// $(document).ready(function() {
//   $(".student").click(function(){
//     $.each($(".student"), function(){
//       console.log($(this).text());
//     });
//   })
// })

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

