var header = document.querySelector('#main-header');
header.style.borderBottom = 'solid 4px #ccc'
var input = document.querySelector('input');
input.value = 'Hello world'
var submit = document.querySelector('input[type="submit"]');
submit.value = 'send'
var item = document.querySelector('.list-group-item');
item.style.color = 'red';
var lastItem = document.querySelector('.list-group-item:last-child');
lastItem.style.color = 'blue'
var secondItem = document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.background = 'green'
var thirdItem = document.querySelector('.list-group-item:nth-child(3)');
thirdItem.style.visibility = 'hidden'
var odd = document.querySelectorAll('li:nth-child(odd)');
for (var i=0; i<odd.length; i++){
    odd[i].style.background = 'green'
}
