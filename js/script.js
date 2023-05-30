//Efeito maquina de escrever
function maquinEscrever(elemento) {
    const texto = elemento.innerHTML.split("")
    elemento.innerHTML = ""
    texto.forEach((letra, i) => {
        setTimeout(() => {
            elemento.innerHTML += letra
        }, 75 * i)
    });
}
const digitando = window.document.querySelector('.digitando');
maquinEscrever(digitando)

//Menu Responsivo
const ativaMenu = window.document.querySelector('.fa-bars')

ativaMenu.addEventListener('click', () => {
    ativaMenu.classList.toggle('fa-x')
})