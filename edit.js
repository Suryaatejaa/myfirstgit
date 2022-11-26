var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
form.addEventListener('submit',onSubmit);
itemList.addEventListener('click',removeItem);
filter.addEventListener('keyup',filterItems);
function onSubmit(e){
    e.preventDefault();
    var newItem = document.getElementById('item').value;
    const descrip = document.getElementById('descrip').value;
    var li = document.createElement('li');
    li.className = 'list-group-item';
    const newtext = document.createTextNode(newItem);
    const descriptext = document.createTextNode(descrip);
    li.appendChild(newtext);
    li.appendChild(descriptext);
    
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
function filterItems(e){

    var text = e.target.value.toLowerCase();

    var items = itemList.getElementsByTagName('li');

    Array.from(items).forEach(function(item){

        var itemName = item.firstChild.textContent; 
        const descrip = item.childNodes[1].textContent;

        if(itemName.toLowerCase().indexOf(text)!=-1 || descrip.toLowerCase().indexOf(text)!=-1) {

            item.style.display = 'block';

        }else{

            item.style.display = "none"

        }

    })

}
