
const navLink=document.getElementById('nav-links');
const navToggle=document.getElementById('nav-toggle');

navToggle.addEventListener('click',()=>{
    navLink.classList.toggle('active');
})