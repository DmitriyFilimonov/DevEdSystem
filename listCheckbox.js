
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

let table = document.getElementsByClassName("table-row");

for (i=0; i<table.length; i++){
  let tableCell = table[i].getElementsByClassName("col");
  for (j=0; j<tableCell.length; j++){
    tableCell[j].style.border = "1px solid #0000FF";
  }
}