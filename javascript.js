const gameBoard = (() => {
    const unarraytablero = [{},{},{},{},{},{},{},{},{}]
    for (let index = 0; index < 9; index++) {
        unarraytablero[index] = {elindex: index}
    }
    const anadir = (x,eldiv) => {
        Object.assign(unarraytablero[x], {lamarca:'x'})
        laclase(eldiv)
    }
    const laclase = (acava) => {
        acava.append(document.createElement('p'))
        acava.querySelector('p').innerText = 'X'
        acava.classList.add('x')
    }
    return {anadir, unarraytablero}
})();

let eltablerocontenedor = document.querySelector('.contenedor')
const $solo = document.querySelector('.solo').addEventListener('click', (e)=>{swag(1)})
const $otroplayer = document.querySelector('.otroplayer').addEventListener('click', (e)=>{swag(2)})

function swag(a){
    if(a==1){

    }else if(a==2){

    }
}

for (let index = 0; index < gameBoard.unarraytablero.length; index++) {
    const undiv = document.createElement('div')
    undiv.classList.add('lineas')
    // undiv.classList.add(index.toString())
    undiv.addEventListener('click', (e)=>{
        gameBoard.anadir(index,undiv)
        console.log(gameBoard.unarraytablero[index])
    })
    eltablerocontenedor.append(undiv)
}
