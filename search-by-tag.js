let tags = ["variables", "arrays", "css", "cycles", "C#", "data structures", "linked list"];

function cycle(){
  for (i=0; i<tags.length; i++){
      document.write(`<option value="`,tags[i],`"/>`);
  }
}