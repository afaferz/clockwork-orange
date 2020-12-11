const botaoMenu = document.getElementById('menu-toggle');
const sidebar = document.querySelector('.sidebar');

botaoMenu.addEventListener('click', sidebarmenu)

function sidebarmenu(){
    sidebar.classList.toggle('ativo');
    botaoMenu.classList.toggle('ativo');
}