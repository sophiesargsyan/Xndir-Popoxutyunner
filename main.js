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

// 2) 1-ին կետում ստեղծած div-ից առաջ ավելացնել առաջին կարգի վերնագիր, որը կպարունակի "My favorite list":
let title = document.createElement('h1');
title.textContent = "My favorite list";

document.body.insertBefore(title, div);

// 3) 1-ին կետում ստեղծած div-ից հետո ավելացնել աղյուսակ, որը իրենից կներկայացնի 
// օրացույց` գլխարկային տողում շաբաթվա օրերի անվանումներ, իսկ օրերի դասավորվածությունը 
// և քանակը համապատասխանի ներկա ամսվանը, նաև կարմի ֆոնով և սպիտակ տեքստի գույնով նշել 
// այսօրվա օրվա վանդակը:

let table = document.createElement('table');

const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
let headerRow = document.createElement('tr');

daysOfWeek.forEach(day => {
    let th = document.createElement('th');
    th.textContent = day;
    th.style.padding = '5px';
    headerRow.appendChild(th);
});

table.appendChild(headerRow);

const today = new Date();
const todayDate = today.getDate();
const daysInMay = 31; 
const firstDayOfMay = 2; 

let currentRow = document.createElement('tr');

for (let i = 0; i < firstDayOfMay; i++) {
    let emptyCell = document.createElement('td');
    emptyCell.style.padding = '5px';
    currentRow.appendChild(emptyCell);
}

for (let day = 1; day <= daysInMay; day++) {
    let cell = document.createElement('td');
    cell.textContent = day;
    cell.style.padding = '5px';
    cell.style.textAlign = 'center';
    
    if (day === 15) { 
        cell.style.backgroundColor = 'red';
        cell.style.color = 'white';
    }
    
    currentRow.appendChild(cell);

    if ((firstDayOfMay + day - 1) % 7 === 6) {
        table.appendChild(currentRow);
        currentRow = document.createElement('tr');
    }
}

if (currentRow.childNodes.length > 0) {
    table.appendChild(currentRow);
}
document.body.insertAdjacentElement('beforeend', table);

// 4) 3-րդ կետում ստեղծած աղյուսակում ավելացնել tfoot էլեմենտ ամբողջ լայնությամբ և գրել ակտւալ ժամը, 
// որը իրական ժամանակում թարմացվի (ժամի ֆորմատը ժամ:րոպե:վայրկյան) 
// և գրված լինի ամբողջ լայնության կենտորոնով: 
// Ամեն վարկյան թարմացումը կատարվի թարթելով:

if (currentRow.childNodes.length > 0) {
    table.appendChild(currentRow);
}

let tfoot = document.createElement('tfoot');
let footRow = document.createElement('tr');
let footCell = document.createElement('td');
footCell.colSpan = 7;
footCell.style.textAlign = 'center';
footCell.style.padding = '10px';
footCell.style.fontWeight = 'bold';
footRow.appendChild(footCell);
tfoot.appendChild(footRow);
table.appendChild(tfoot);

const updateTime = () => {
    let now = new Date();
    footCell.textContent = now.toLocaleTimeString();

    footCell.style.opacity = '0.5';
    setTimeout(() => {
        footCell.style.opacity = '1';
    }, 200);
};

updateTime();
setInterval(updateTime, 1000);
document.body.insertAdjacentElement('beforeend', table);

// 5) 4-րդ կետում ստեղծած ժամացույցի յուրաքանչյուր րոպեի թարմացման դեպքում ամբողջ աղյուսակի 
// գույնը թարմացնել պատահական գեներացված գույնում:

const updateTableColor = () => {
    let randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    let cells = document.querySelectorAll('td');
    cells.forEach(cell => {
        cell.style.backgroundColor = randomColor;
    });
};

updateTime();
updateTableColor();
setInterval(updateTime, 1000);
setInterval(updateTableColor, 60000);
document.body.insertAdjacentElement('beforeend', table);

