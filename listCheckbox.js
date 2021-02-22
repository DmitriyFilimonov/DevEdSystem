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