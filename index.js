//console.dir(document);
console.log(document.domain);
console.log(document.head);
console.log(document.body);
console.log(document.title);
document.title = 'shubham Page'
console.log(document.all[10]);
document.all[10].textContent = 'items lister'

console.log(document.forms);
console.log(document.images);

let headerTitle = document.getElementById('header-title');
headerTitle.style.borderBottom = 'solid 3px black';
let header = document.getElementById('main-header');
header.style.borderBottom = 'solid 5px black';

//let additem = document.getElementsByClassName("title");
//console.log(additem);
//additem[0].innerHTML = '<h1 style="color:red">Add Elements</h1>';

//let items = document.getElementsByClassName('list-group-item');
//console.log(items)
//console.log(items[1]);
//items[2].style.backgroundColor = 'green';

//for(i=0;i < items.length;i++) {
    //items[i].style.fontWeight = 'bold'
//}
//get Element by tag name//
let li = document.getElementsByClassName('list-group-item');
console.log(li);
console.log(li[1]);
li[1].style.backgroundColor = 'green'
li[4].style.backgroundColor = 'red'
li[4].style.fontWeight = 'bold'




