inout('#step-1','#step-0','#iniciar')
inout('#step-2','#step-1','#sig-1')
inout('#step-3','#step-2','#sig-2')
inout('#step-4','#step-3','#sig-3')
inout('#step-5','#step-4','#sig-4')
inout('#step-8','#step-7','#sig-7')
inout('#step-9','#step-8','#sig-8')
inout('#step-10','#step-9','#sig-9')
inout('#step-11','#step-10','#sig-10')
inout('#step-12','#step-11','#sig-11')
inout('#step-12','#step-11','#sig-12')
carga()

const again = document.querySelector("#again")
again.addEventListener("click",() => {
    for (let index = 1; index < 13; index++) {
        giraNow(`#opt-${index}`);
    }
    const msg = document.querySelector("#msg");
    msg.classList.toggle("d-none");
    setTimeout(() => {
        carga();
    }, 1000);
})

const validar = document.querySelector("#sig-5")
validar.addEventListener("click",()=>{
    const codigo1 = document.querySelector("#codigo1")
    const resul = document.querySelector("#resul")
    if (codigo1.value == "AGUANTE-BOCA") {
        resul.innerText = ('😃​Correcto!😃​')
        inout('#step-6','#step-5','#sig-5')
        validar.innerText = ("Avanzar")  
    }else{
        resul.innerText=('​😭Codigo invalido!​😭​')
        codigo1.value=""
    }
})

const validar2 = document.querySelector("#sig-6")
validar2.addEventListener("click",()=>{
    const codigo2 = document.querySelector("#codigo2")
    const resul2 = document.querySelector("#resul2")
    if (codigo2.value == "JYM") {
        resul2.innerText = ('😃​Correcto!😃​')
        inout('#step-7','#step-6','#sig-6')
        validar2.innerText = ("Ver")  
    }else{
        resul2.innerText=('​😭Codigo invalido!​😭​')
        codigo2.value=""
    }
})


function inout (ing,out,disp) {
    let diparador = document.querySelector(`${disp}`)
    let entra = document.querySelector(`${ing}`)
    let sale = document.querySelector(`${out}`)

    diparador.addEventListener("click", () => {
        sale.classList.add("desaparece")
        sale.classList.remove("aparece")
        setTimeout(() => {
            sale.classList.add("d-none");
            entra.classList.remove("d-none");
            setTimeout(() => {
                entra.classList.add("aparece");
            }, "300")
            
        }, "200")
    })
}

function gira (opcion){
    const opt = document.querySelector(opcion)
    let clases = opt.classList
        for (const clase of clases) {
            if (clase == 'gira-in'){
                opt.classList.toggle("gira-in")
            }
        }
        opt.classList.toggle("gira-out")
        setTimeout(() => {
            opt.children[0].classList.toggle("d-none")
            opt.children[1].classList.toggle("d-none")
            opt.classList.toggle("bw")
            opt.classList.toggle("gira-out")
            opt.classList.toggle("gira-in")

        }, "600");
}

function giraNow (opcion){
    const opt = document.querySelector(opcion)
    let clases = opt.classList
        for (const clase of clases) {
            if (clase == 'gira-in'){
                opt.classList.toggle("gira-in")
            }
        }
        opt.classList.toggle("gira-out")
        setTimeout(() => {
            opt.children[0].classList.toggle("d-none")
            opt.children[1].classList.toggle("d-none")
            opt.classList.toggle("bw")
            opt.classList.toggle("gira-out")
            opt.classList.toggle("gira-in")

        }, "600"); 
        
}

function carga(){
    const images = [1,1,2,2,3,3,4,4,5,5,6,6]
    let lista = [0,1,2,3,4,5,6,7,8,9,10,11];
    lista = lista.sort(function() {return Math.random() - 0.5});
    let orden = []
    let i = 0
    for (const num of lista) {
        orden[num]=images[i]
        i++
    }
    let ordenstrify=JSON.stringify(orden)
    localStorage.setItem('orden',ordenstrify)
    for (let index = 1; index < 13; index++) {
        let opciones = document.querySelector(`#opt-${index}`)
        opciones.innerHTML=(`
            <h2>${index}</h2>
            <img class="d-none img-fluid" src="./img/img${orden[index-1]}.jpg" alt="">`
        )
    }
}

function verifica (opc) {
    let opc1 = JSON.parse(localStorage.getItem('opc-1'))
    let opt1 = JSON.parse(localStorage.getItem('opt-1'))
    let orden = JSON.parse(localStorage.getItem('orden'))
    if (opc1 !== null) {
        if (orden[opc-1] == opc1) {
            localStorage.removeItem('opc-1')
            localStorage.removeItem('opt-1')
            let gano = JSON.parse(localStorage.getItem('gano'))
            if (gano !== null) {
                if (gano == 5) {
                    setTimeout(() => {
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: 'Coinciden!',
                            showConfirmButton: false,
                            timer:800
                        })
                    }, 900);
                    setTimeout(() => {
                        const msg = document.querySelector("#msg")
                        msg.classList.toggle("d-none")
                    }, 1900);
                    localStorage.removeItem('gano')
                }else{
                    localStorage.setItem('gano',gano+1)
                    setTimeout(() => {
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: 'Coinciden!',
                            showConfirmButton: false,
                            timer:800
                        })
                    }, 900);
                }
            }else{
                localStorage.setItem('gano',1)
                setTimeout(() => {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Coinciden!',
                        showConfirmButton: false,
                        timer:800
                    })
                }, 900);
            }
        }else{
            localStorage.removeItem('opc-1')
            localStorage.removeItem('opt-1')
            setTimeout(() => {
                Swal.fire({
                    position: 'center',
                    icon: 'error',
                    title: 'No coinciden!',
                    showConfirmButton: false,
                    timer:800
                })
                giraNow(`#opt-${opc}`)
                giraNow(`#opt-${opt1}`)
            }, 1200); 
        }
    }else{
        let orden = JSON.parse(localStorage.getItem('orden'))
        localStorage.setItem('opc-1',orden[opc-1])
        localStorage.setItem('opt-1',opc)
    }
}