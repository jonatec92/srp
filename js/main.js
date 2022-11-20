// inout('#step-1','#step-0','#iniciar')
// inout('#step-2','#step-1','#sig-1')

// function inout (ing,out,disp) {
//     let diparador = document.querySelector(`${disp}`)
//     let entra = document.querySelector(`${ing}`)
//     let sale = document.querySelector(`${out}`)

//     diparador.addEventListener("click", () => {
//         sale.classList.add("desaparece")
//         sale.classList.remove("aparece")
//         setTimeout(() => {
//             sale.classList.add("d-none");
//             entra.classList.remove("d-none");
//             setTimeout(() => {
//                 entra.classList.add("aparece");
//             }, "300")
            
//         }, "200")
//     })
// }

gira('#opt1')
gira('#opt2')

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
