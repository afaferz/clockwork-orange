const botaoMenu = document.getElementById('menu-toggle');
const sidebar = document.querySelector('.sidebar');
console.log(botaoMenu);

botaoMenu.addEventListener('click', sidebarmenu)

function sidebarmenu(){
    sidebar.classList.toggle('ativo');
    botaoMenu.classList.toggle('ativo');
}
// sidebarmenu();