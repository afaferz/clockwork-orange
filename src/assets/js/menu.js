const botaoMenu = document.getElementById('menu-toggle');
const sidebar = document.querySelector('.sidebar');

// botaoMenu.addEventListener('click', sidebarmenu)

function sidebarmenu(){
    sidebar.classList.toggle('ativo');
    botaoMenu.classList.toggle('ativo');
}

document.documentElement.addEventListener('click', (e)=>{
  sidebarmenu();
  if(e.target != botaoMenu){
    sidebar.classList.remove('ativo');
    botaoMenu.classList.remove('ativo');
  } 
});