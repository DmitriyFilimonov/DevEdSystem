
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

let tags = ["variables", "arrays", "css", "cycles", "C#", "data structures", "linked list"];

function cycle(){
  for (i=0; i<tags.length; i++){
      document.write(`<option value="`,tags[i],`"/>`);
  }
}