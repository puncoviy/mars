const menuBtn = document.getElementById('burgerMenu');
const menu = document.getElementById('menu');
const div = document.querySelector('.burger__center');
const shader = document.querySelector('.shader')

menuBtn.addEventListener('click', function(){
    menuBtn.classList.toggle('active');
    div.classList.toggle('active');
    menu.classList.toggle('active');
    shader.classList.toggle('active');
})

shader.addEventListener('click', function(){
    menuBtn.classList.toggle('active');
    div.classList.toggle('active');
    menu.classList.toggle('active');
    shader.classList.toggle('active');
})