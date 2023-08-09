let btnOne=document.querySelector('.btn-1');
let btnTwo=document.querySelector('.btn-2');
let btnTree=document.querySelector('.btn-3');
let btnFour=document.querySelector('.btn-4');
let menuWidth=document.querySelector('.sidebar-menu');
let boxHome=document.querySelector('.box');
let barUn=document.querySelector('.bar-1');
let barDeux=document.querySelector('.bar-2');

console.log(btnOne);

document.querySelector('.btn-1').onclick=()=>{
    btnOne.classList.add('clik');
    btnTwo.classList.remove('clik');
    btnTree.classList.remove('clik');
    btnFour.classList.remove('clik');
    boxHome.classList.toggle('nonbox')
}
document.querySelector('.btn-2').onclick=()=>{
    btnOne.classList.remove('clik');
    btnTwo.classList.add('clik');
    btnTree.classList.remove('clik');
    btnFour.classList.remove('clik');
}
document.querySelector('.btn-3').onclick=()=>{
    btnOne.classList.remove('clik');
    btnTwo.classList.remove('clik');
    btnTree.classList.add('clik');
    btnFour.classList.remove('clik');
}
document.querySelector('.btn-4').onclick=()=>{
    btnOne.classList.remove('clik');
    btnTwo.classList.remove('clik');
    btnTree.classList.remove('clik');
    btnFour.classList.add('clik');
}
document.querySelector('.menu').onclick=()=>{
    menuWidth.classList.toggle('deploi');
    barUn.classList.toggle('croix');
    barDeux.classList.toggle('croix-2');
}
