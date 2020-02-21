
// starter code for week 5 of pui lab
<!-- javascript -->
<script src="main.js" type="text/javascript"></script>


function addNewList() {
    alert('hello world alert!');
    console.log('hello world console');
}

function addListItem() {
console.log('hello world');
}

var list = document.getElementById("grocery-list");

var itemInput = document.getElementById("new-list-item");

var newItem = document.createElement("li");

newItem.appendChild(document.createTextNode(itemInput.value));

list.appendChild(newItem);
