
function changeCheckboxDisplay(checkboxes){
  if (checkboxes.style.display=="none") {
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

//tags


let tags = ["variables", "arrays", "css", "cycles", "C#", "data structures", "linked list"];

function cycle(){
  for (i=0; i<tags.length; i++){
      document.write(`<option value="`,tags[i],`"/>`);
  }
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