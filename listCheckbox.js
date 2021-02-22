var expanded = false;

function changeCheckboxDisplay(checkboxes){
    if (!expanded) {
        checkboxes.style.display = "block";
        expanded = true;
      } else {
        checkboxes.style.display = "none";
        expanded = false;
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