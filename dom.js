// Add
let form = document.getElementById('addForm');
form.addEventListener('submit', clk);
function clk(e) {
    e.preventDefault();
    let a = document.getElementById('item').value;
    // if(a=="")
   
    var valid=a.replace(/\s+/g, '');
    if(valid.length==0)
     {
        alert("insert some text");
        doSomethingAfterTheAlertIsCleared();
    }
    uln = document.getElementById('items');
    lin = document.createElement('li');
    lin.setAttribute("class", "list-group-item draggable");
    // lin.setAttribute("class", "draggable");
    //  li.appendChild(document.createTextNode(a));
    lin.innerHTML = a + '<i class="fa-sharp fa-solid fa-circle-chevron-down"></i><button onclick="removeLI()" class="btn btn-danger btn-sm float-right delete">X</button><i class="fa-solid fa-bars drag">';
    uln.appendChild(lin);

}
// Delete

document.addEventListener('click', removeLI);
function removeLI(e) {
    // e.preventDefault();
    const li = e.target.parentElement;
    // console.log(li);
    let ul = document.getElementById("items");
    ul.removeChild(li);
}

// Drag and Drop

function slist (target) {
    // (A) SET CSS + GET ALL LIST ITEMS
    target.classList.add("slist");
    let items = target.getElementsByTagName("li"), current = null;
  
    // (B) MAKE ITEMS DRAGGABLE + SORTABLE
    for (let i of items) {
      // (B1) ATTACH DRAGGABLE
      i.draggable = true;
      
      // (B2) DRAG START - YELLOW HIGHLIGHT DROPZONES
      i.ondragstart = (ev) => {
        current = i;
        for (let it of items) {
          if (it != current) { it.classList.add("hint"); }
        }
      };
      
      // (B3) DRAG ENTER - RED HIGHLIGHT DROPZONE
      i.ondragenter = (ev) => {
        if (i != current) { i.classList.add("active"); }
      };
  
      // (B4) DRAG LEAVE - REMOVE RED HIGHLIGHT
      i.ondragleave = () => {
        i.classList.remove("active");
      };
  
      // (B5) DRAG END - REMOVE ALL HIGHLIGHTS
      i.ondragend = () => { for (let it of items) {
          it.classList.remove("hint");
          it.classList.remove("active");
      }};
   
      // (B6) DRAG OVER - PREVENT THE DEFAULT "DROP", SO WE CAN DO OUR OWN
      i.ondragover = (evt) => { evt.preventDefault(); };
   
      // (B7) ON DROP - DO SOMETHING
      i.ondrop = (evt) => {
        evt.preventDefault();
        if (i != current) {
          let currentpos = 0, droppedpos = 0;
          for (let it=0; it<items.length; it++) {
            if (current == items[it]) { currentpos = it; }
            if (i == items[it]) { droppedpos = it; }
          }
          if (currentpos < droppedpos) {
            i.parentNode.insertBefore(current, i.nextSibling);
          } else {
            i.parentNode.insertBefore(current, i);
          }
        }
      };
    }
  }
