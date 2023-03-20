const formulario = document.querySelector('#formulario')
const btnEnviar = document.querySelector('#btnEnviar')
const btnCargando = document.querySelector('#btnCargando')

// Guardando el toast del HTML
const adflotante = document.querySelector('.toast')

formulario.addEventListener('submit', e => {
    e.preventDefault()

    const datos = new FormData(formulario)
    const eventoToast = new bootstrap.Toast(adflotante)

    console.log('Campo Email', datos.get('emailCampo'))
    console.log('Campo Password', datos.get('passCampo'))
    console.log('Campo CheckBox', datos.get('checkCampo'))

    if (!document.querySelector('#checkbox').checked) {
        eventoToast.show()
        return
    }

    btnEnviar.classList.add('d-none')
    btnCargando.classList.remove('d-none')

    window.setTimeout(() => {
        btnEnviar.classList.remove('d-none')
        btnCargando.classList.add('d-none')
        eventoToast.hide()
    },2000)

    formulario.reset()
})