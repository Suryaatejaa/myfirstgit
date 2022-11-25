var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
form.addEventListener('submit',addItem);
itemList.addEventListener('click',removeItem);
function addItem(e){
    e.preventDefault();
    var newItem = document.getElementById('item').value;
    var li = document.createElement('li');
    li.className = 'list-group-item';
    li.appendChild(document.createTextNode(newItem));
    var dbutton = document.createElement('button');
    dbutton.className = 'btn btn-danger btn-sm float-right delete';
    dbutton.appendChild(document.createTextNode('X'));
    li.appendChild(dbutton);
    itemList.appendChild(li);
}

function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure?')){
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}