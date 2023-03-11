let input = document.querySelectorAll('.input')
let copybtn = document.querySelectorAll('#copy')
let body = document.querySelector('body')

function myFunction(){
let code = colorcode()
body.style.backgroundColor=code;
input[0].value= code;
}

function colorcode(){
  
  let red=Math.floor(Math.random()*(255-0)+1)+0;
  let green=Math.floor(Math.random()*(255-0)+1)+0;
  let blue=Math.floor(Math.random()*(255-0)+1)+0;

   return `rgb(${red},${green},${blue})`
}



function myFunction1() {
  let code = colorcode1()
  body.style.backgroundColor = code;
  input[1].value = code;
}

function colorcode1() {

  let red = Math.floor(Math.random() * (255 - 0) + 1) + 0;
  let green = Math.floor(Math.random() * (255 - 0) + 1) + 0;
  let blue = Math.floor(Math.random() * (255 - 0) + 1) + 0;

  return `rgba(${red},${green},${blue},${Math.random().toFixed(2)})`
}



function myFunction2() {
  let code = colorcode2()
  body.style.backgroundColor = code;
  input[2].value = code;
}

function colorcode2() {

  let red = Math.floor(Math.random() * (255 - 0) + 1) + 0;
  let green = Math.floor(Math.random() * (255 - 0) + 1) + 0;
  let blue = Math.floor(Math.random() * (255 - 0) + 1) + 0;

  return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`
}

function copy(){
  
navigator.clipboard.writeText(input[0].value )
toastMassage(input[0].value)

}
function copy1() {
  navigator.clipboard.writeText(input[1].value)
  toastMassage(input[1].value)
}
function copy2() {
  navigator.clipboard.writeText(input[2].value)
  toastMassage(input[2].value)
}




input[0].addEventListener('keyup',(e)=>{
  
let color = e.target.value;
body.style.backgroundColor=color;
});
input[1].addEventListener('keyup',(e)=>{
  
let color = e.target.value;
body.style.backgroundColor=color;
});
input[2].addEventListener('keyup',(e)=>{
  
let color = e.target.value;
body.style.backgroundColor=color;
});



function toastMassage(colo){
  
let div= document.createElement('div');
 let span = document.createElement('span')
 div.className='toast'
 div.classList.add('anin')
 div.appendChild(span)
 span.textContent=colo+' Copied'
 body.appendChild(div);
 
 
 
 
 div.addEventListener('click', () => {
 
   div.classList.remove('anin')
  div.style.right='-225px'
   div.classList.add('anout');
   
   div.addEventListener('animationend',()=>{div.remove()})
 })
 
 setTimeout(()=>{
   
   div.classList.remove('anin')
      div.style.right = '-225px'
      div.classList.add('anout');
         
   div.addEventListener('animationend',()=>{div.remove()})
   
 },1500)
}


//console.log(input[0])

///^[0-9A-Fa-f]{6}/i.test('0AaFae')
/*
let here = document.querySelector('.here');

let range = document.getElementById('ran')
 range.addEventListener('touchmove',(e)=>here.innerText=range.value);

 document.addEventListener('mousemove',(e)=>{
   
   console.log(e.offsetX,e.offsetY)
 })*/
 
// let x = 0.4
// let y =x.toString(16)
 
 
 
 