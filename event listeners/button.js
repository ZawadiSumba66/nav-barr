const btn=document.querySelector('.btn');
const body=document.querySelector('body');
btn.addEventListener('click',(e)=>{
  e.preventDefault();
 btn.style.background='#fff';
 btn.innerHTML='TAKE OVER';
 body.style.background='#333';
});
