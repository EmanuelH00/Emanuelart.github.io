let icono = []
let selecciones = [];

generarTablero()

function cargarImg(){
    icono = [
        '<img class="back" src="./img/1.jpg" alt="">',
        '<img class="back" src="./img/2.jpg" alt="">',
        '<img class="back" src="./img/3.jpg" alt="">',
        '<img class="back" src="./img/4.jpg" alt="">',
        '<img class="back" src="./img/5.jpg" alt="">',
        '<img class="back" src="./img/6.jpg" alt="">'
    ]
}

function generarTablero(){
    cargarImg()
    selecciones = []
    let tablero = document.getElementById("tablero")
    let tarjetas = []
    for(let i = 0; i < 12; i++){
        tarjetas.push(`
        <div class="area-targeta" onclick="seleccionarTarjeta(${i})">
            <div class="targeta" id="tarjeta${i}">
                <div class="cara trasera" id="trasera${i}">
                    ${icono[0]}
                </div>
                <div class="cara superior">
                    <img src="./img/Sin título-1.jpg" alt="">
                </div>
            </div>
        </div>`)
        if(i % 2 == 1) {
            icono.splice(0, 1)
        }
    }
    tarjetas.sort(()=> Math.random() - 0.5);
    tablero.innerHTML = tarjetas.join(" ");
}

function seleccionarTarjeta(i) {
    let tarjeta = document.getElementById("tarjeta" + i)
    if(tarjeta.style.transform != "rotateY(180deg)"){
        tarjeta.style.transform = "rotateY(180deg)"
        selecciones.push(i)
    }
    if(selecciones.length == 2){
        deseleccionar(selecciones)
        selecciones = []
    }
}

    function deseleccionar(selecciones) {
        setTimeout(() => {
            let trasera1 = document.getElementById("trasera" + selecciones[0])
            let trasera2 = document.getElementById("trasera" + selecciones[1])
            
            if (trasera1.innerHTML != trasera2.innerHTML){
                let tarjeta1 = document.getElementById("tarjeta" + selecciones[0])
                let tarjeta2 = document.getElementById("tarjeta" + selecciones[1])
                tarjeta1.style.transform = "rotateY(0deg)"
                tarjeta2.style.transform = "rotateY(0deg)"
            } else {
                trasera1.style.background = "plum"
                trasera2.style.background = "plum"
            };
        }, 1000);
    }
