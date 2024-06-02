// 1) Ստեղծել div էլեմենտ, որը կպարունակի ցուցակ իր անդամներով:
let div = document.createElement('div');
document.body.append(div);

let list = document.createElement('ul');

let items = ['List Item 1', 'List Item 2', 'List Item 3'];
items.forEach(itemText => {
    let listItem = document.createElement('li');
    listItem.textContent = itemText;
    list.append(listItem);
});

div.append(list);

