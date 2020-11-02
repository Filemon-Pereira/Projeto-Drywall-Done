let menu = document.querySelector('.menu--list')
let hamburguer = document.querySelector('.hamburguer')
let fechar = document.querySelector('.close')

hamburguer.addEventListener('click', openMenu)
fechar.addEventListener('click', closeMenu)

function openMenu() {
    menu.classList.add('show--menu')
    hamburguer.style.display = 'none'
    fechar.style.display = 'block'
}

function closeMenu() {
    menu.classList.remove('show--menu')
    fechar.style.display = 'none'
    hamburguer.style.display = 'block'
}

const getTargetMenu = menu.addEventListener('click',(e)=>{
    ifOneOfMenu(e.target.innerHTML)
})

function ifOneOfMenu(key) {
    switch (key) {
        case 'Home': 
        case 'Serviços': 
        case 'Contato': 
        case 'Sobre': closeMenu()
            break;
    }
}


