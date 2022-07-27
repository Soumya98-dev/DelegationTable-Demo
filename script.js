//*** "null" -> empty value
//*** "not null" -> not empty

let className = null; //*** TO TRACK WHICH ELEMENT WE HAVE CURRENTLY SELECTED & REMOVE AND ADD THE CLASSNAME "highlight"

let table = document.getElementById("my-table");
let td = document.getElementsByTagName("td");
table.addEventListener("click", changeColor);

function changeColor(event) {
  let target = event.target;
  if (target.tagName != "TD") {
    return;
  } else {
    addHighlight(target);
  }
}

function addHighlight(targetElement) {
  // console.log(className);

  //HERE BELOW THE PREVIOUS "targetElement" CLASS IS REMOVED
  if (className != null) {
    className.classList.remove("highlight");
  }
  className = targetElement; //*** PUTTING THE NEW SELECTED TARGET ELEMENT IN THE "className" variable
  className.classList.add("highlight");
}