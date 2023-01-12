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
        if(gameBoard.unarraytablero[posalazarCPU].lamarca == undefined){
            Object.assign(gameBoard.unarraytablero[posalazarCPU], {lamarca: marcapc})
            laclase(divcpu[posalazarCPU],marcapc)
         }
    }
    return {anadir, unarraytablero, vsPC}
})();

let eltablerocontenedor = document.querySelector('.contenedor')
const $solo = document.querySelector('.solo').addEventListener('click', (e)=>{swag(1)})
const $otroplayer = document.querySelector('.otroplayer').addEventListener('click', (e)=>{swag(2)})
const $elpackdedivs = eltablerocontenedor.getElementsByTagName('div')
function swag(a){
    if(a==1){
        return esCPU = true
    }else if(a==2){
        return esCPU = false
    }
}

// async function laespera(){
//     async function pause() {
//         await new Promise(resolve => setTimeout(resolve, 5000));
//       }
      
//       console.log('Start');
//       await pause();
// }

for (let index = 0; index < gameBoard.unarraytablero.length; index++) {
    const undiv = document.createElement('div')
    undiv.classList.add('lineas')
    undiv.addEventListener('click', (e)=>{
        gameBoard.anadir(index,undiv,turno)
        if(esCPU == true){
            // const wait = () => {
            //     return new Promise(resolve => setTimeout(resolve, 1000));
            //   }       
            //   wait().then(() => {
                // laespera()
                gameBoard.vsPC($elpackdedivs)
            //   })
        }else{
            if(turno == 'X'){
                turno = 'O'
            }else if(turno == 'O'){
                turno = 'X'
            }
        }
    })
    undiv.append(document.createElement('p'))
    eltablerocontenedor.append(undiv)
}