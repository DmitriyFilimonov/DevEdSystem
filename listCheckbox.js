
function changeCheckboxDisplay(checkboxes){
  if ((checkboxes.style.display=="none")||(checkboxes.style.display=="")){//почему none эквивалентно ""??? И почему с одной "" onclick() срабатывает только один раз??
    checkboxes.style.display = "block";
  } else {
    console.log("it works");
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
function customCells(){
  let table = document.getElementsByClassName("table-row");

  console.log(table);

  for (i=0; i<table.length; i++){
    let tableCells = table[i].getElementsByClassName("col");
    for (j=0; j<tableCells.length; j++){
      tableCells[j].style.border = "1px solid #FF0000";
    }
  }
}
function showChecking(){
  console.log("open")
  checkingWindow = document.getElementById("answer-checking-container");
  checkingWindow.style.display = "flex";
}

function closeChecking(){
  console.log("event call")
  checkingWindow = document.getElementById("answer-checking-container");
  checkingWindow.style.display = "none";
}

//jQuery


$(document).ready(function() {
  $(".appoint").click(function(){
    if($(this).val()=="назначить"){
      $(this).val("назначено");
    }
    else{
      $(this).val("назначить");
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

