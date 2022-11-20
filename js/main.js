inout('#step-1','#step-0','#iniciar')
inout('#step-2','#step-1','#sig-1')
inout('#step-3','#step-2','#sig-2')

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

carga()

gira('#opt1')
gira('#opt2')
gira('#opt3')
gira('#opt4')
gira('#opt5')
gira('#opt6')
gira('#opt7')
gira('#opt8')
gira('#opt9')
gira('#opt10')
gira('#opt11')
gira('#opt12')

function gira (opcion){
    const opt = document.querySelector(opcion)
    let nada
    opt.addEventListener("click",() =>{
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
    })
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
    for (let index = 1; index < 13; index++) {
        let opciones = document.querySelector(`#opt${index}`)
        opciones.innerHTML=(`
            <h2>${index}</h2>
            <img class="d-none img-fluid" src="./img/img${orden[index-1]}.jpg" alt="">`
        )
    }
}
