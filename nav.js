 const menuBtn=document.querySelector('.menu-btn');
const mainMenu=document.querySelector('.main-menu');
 let menuStatus=false; 
  mainMenu.style.marginLeft="-500px";
  mainMenu.style.transition="transform 0.5s ease-in-out";
  function menuToggle(){
  if(menuStatus==false){
    mainMenu.style.marginLeft="0px";
    menuStatus=true;
  }
else if(menuStatus==true){
    mainMenu.style.marginLeft="-500px";
    menuStatus=false;
}
  }
menuBtn.onclick = menuToggle;

const box= document.getElementById('box');
const nameInput=document.querySelector('#name');
const emailInput=document.querySelector('#email');
const numberInput=document.querySelector('#number');
const msg=document.querySelector('.msg');
const button=document.querySelector('.button');
const userList=document.querySelector('#users');
button.addEventListener('click',(e)=>{
  e.preventDefault();
if(nameInput.value===''||emailInput.value===''||numberInput.value===''){
  msg.innerHTML='Please enter all fields';
  msg.style.color='red';
  setTimeout(()=>msg.remove(),3000);
}
else if( nameInput.value==='' && emailInput.value==='' && numberInput.value===''){
  msg.innerHTML='Please enter all fields';
  msg.style.color='red';
  setTimeout(()=>msg.remove(),3000);
}
else {
 const li = document.createElement('li');
 li.appendChild(document.createTextNode(nameInput.value+' '+emailInput.value+' '+numberInput.value));
 userList.appendChild(li);
 nameInput.value='';
 emailInput.value='';
 numberInput.value='';
}
});