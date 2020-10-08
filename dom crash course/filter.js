
//EXAMINE   DOCUMENT OBJECT MODEL
//console.log(document.URL)
//console.log(document.title)
//document.title=123;
//console.log(document.all[10])
//console.log(document.forms)

//GETELEMENT BYID
//console.log(document.getElementById('header-title'));
//var headerTitle=document.getElementById('header-title');
//var header=document.getElementById('main-header');
//console.log(headerTitle);
//headerTitle.textContent='hello'
//headerTitle.innerText='Goodbye'
//InnerText pays attention to the style applied in html more than textContent
//headerTitle.innerHTML='<h3>Hello</h3>';
//header.style.borderBottom='solid 3px #000';

//GET ELEMENTSBYCLASSNAME
//var items=document.getElementsByClassName('list-group-item');
//console.log(items);
//items[1].textContent='hello';
//items[2].style.fontWeight='bold';
//items[3].style.backgroundColor='yellow';
//Displays error
//items.style.backgroundColor='#f4f4f4';
//for(var i=0;i<items.length;i++){
  //  items[i].style.backgroundColor='#f4f4f4';
//}
//GETELEMENTS BYTAGNAME
//var li=document.getElementsByTagName('li');
//console.log(li);
//li[1].textContent='hello';
//li[2].style.fontWeight='bold';
//li[3].style.backgroundColor='yellow';
//li.style.backgroundColor='#f4f4f4';
//for(var i=0;i<li.length;i++){ 
  //li[i].style.backgroundColor='#f4f4f4';
//}
//QUERYSELECTOR
//var header = document.querySelector('#main-header');
//header.style.borderBottom = 'solid 4px #000'; 

//var input = document.querySelector('input[type="text"]');
//input.value ='Hello World';

//var submit=document.querySelector('input[type="submit"]');
//submit.value='SEND';

//var item = document.querySelector('.list-group-item');
//item.style.color='red';

//var lastItem = document.querySelector('.list-group-item:last-child');
//lastItem.style.color='red';

//var secondItem = document.querySelector('.list-group-item:nth-child(2)');
//secondItem.style.color='coral';

//QUERYSELECTORALL
var titles=document.querySelectorAll('.title');
console.log(titles);
var odd=document.querySelectorAll('li:nth-child(odd)');
var even=document.querySelectorAll('li:nth-child(even)');
for(var i=0;i<odd.length;i++){
  odd[i].style.backgroundColor='#f4f4f4';
  even[i].style.backgroundColor='#ccc';
}
