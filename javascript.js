let turno = 'X'
let esCPU = false

const gameBoard = (() => {
    const unarraytablero = [{},{},{},{},{},{},{},{},{}]
    const marcapc = 'O'
    for (let index = 0; index < 9; index++) {
        unarraytablero[index] = {elindex: index}
    }
    const anadir = (x,eldiv,turn) => {
        Object.assign(unarraytablero[x], {lamarca: turn})
        laclase(eldiv,turn)
    }
    const laclase = (acava,turnodiv) => {
        acava.querySelector('p').innerText = turnodiv
        acava.classList.add(turnodiv)
        acava.classList.add('no-click')
    }
    const vsPC = (divcpu) => {
        posalazarCPU = Math.floor(Math.random() * 9)
        z = false
        while(z == false){
            if(gameBoard.unarraytablero[posalazarCPU].lamarca == undefined){
                z = true
            }else{
                posalazarCPU = Math.floor(Math.random() * 9)
            }
        }
        Object.assign(gameBoard.unarraytablero[posalazarCPU], {lamarca: marcapc})
        laclase(divcpu[posalazarCPU],marcapc)
        // ganar(gameBoard.unarraytablero)
    }
    const elganador = (quien) => {
        for (let index = 0; index < $elpackdedivs.length; index++) {
            $elpackdedivs[index].classList.add('no-click')
        }
        $elganador.innerText = quien
        $ventanaresultados.style.display = "grid"
    }
    return {anadir, unarraytablero, vsPC, elganador}
})();

function resetgameboard(){
    for (let index = 0; index < $elpackdedivs.length; index++) {
        $elpackdedivs[index].classList.remove('no-click')
        $elpackdedivs[index].classList.remove('O')
        $elpackdedivs[index].classList.remove('X')
        $elpackdedivs[index].querySelector('p').innerText = ''
        gameBoard.unarraytablero[index] = {elindex: index}
    }
    $elganador.innerText = ''
    $ventanaresultados.style.display = "none"
}

let eltablerocontenedor = document.querySelector('.contenedor')
const $solo = document.querySelector('.solo').addEventListener('click', (e)=>{swag(1)})
const $otroplayer = document.querySelector('.otroplayer').addEventListener('click', (e)=>{swag(2)})
const $elpackdedivs = eltablerocontenedor.getElementsByTagName('div')
const $reset = document.querySelector('.reset').addEventListener('click', (e)=>{resetgameboard()})
const $elganador = document.querySelector('.resultados')
const $ventanaresultados = document.querySelector('.ventanaresultados')
$ventanaresultados.style.display = "none"
function swag(a){
    if(a==1){
        return esCPU = true
    }else if(a==2){
        return esCPU = false
    }
}
const ganar = (elarray) => {
    const segano = (one,two,three) => {
        if(one.lamarca == 'X' && two.lamarca == 'X' && three.lamarca == 'X'){
            return gameBoard.elganador('Ganaste!')
        }else if(one.lamarca == 'O' && two.lamarca == 'O' && three.lamarca == 'O'){
            return gameBoard.elganador('Gano el CPU!')
        }
    }
    segano(elarray[0],elarray[1],elarray[2])
    segano(elarray[0],elarray[4],elarray[8])
    segano(elarray[0],elarray[3],elarray[6])
    segano(elarray[1],elarray[4],elarray[7])
    segano(elarray[2],elarray[4],elarray[6])
    segano(elarray[2],elarray[5],elarray[8])
    segano(elarray[3],elarray[4],elarray[5])
    segano(elarray[6],elarray[7],elarray[8])
}
for (let index = 0; index < gameBoard.unarraytablero.length; index++) {
    const undiv = document.createElement('div')
    undiv.classList.add('lineas')
    undiv.addEventListener('click', (e)=>{
        gameBoard.anadir(index,undiv,turno)
        if(esCPU == true){
            // ganar(gameBoard.unarraytablero)
            cuantosquedan = gameBoard.unarraytablero.filter(u => u.lamarca == undefined)
            if(cuantosquedan.length > 1){
                gameBoard.vsPC($elpackdedivs)
                // ganar(gameBoard.unarraytablero)
            }
        }else{
            if(turno == 'X'){
                turno = 'O'
            }else if(turno == 'O'){
                turno = 'X'
            }
        }
        ganar(gameBoard.unarraytablero)
    })
    undiv.append(document.createElement('p'))
    eltablerocontenedor.append(undiv)
    
}