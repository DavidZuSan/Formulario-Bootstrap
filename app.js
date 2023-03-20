const formulario = document.querySelector('#formulario')
const btnEnviar = document.querySelector('#btnEnviar')
const btnCargando = document.querySelector('#btnCargando')

formulario.addEventListener('submit', e => {
    e.preventDefault()

    const datos = new FormData(formulario)

    console.log('Campo Email', datos.get('emailCampo'))
    console.log('Campo Password', datos.get('passCampo'))
    console.log('Campo CheckBox', datos.get('checkCampo'))

    if (!document.querySelector('#checkbox').checked) {
        alert('Debes marcar la casilla para continuar.')
        return
    }

    btnEnviar.classList.add('d-none')
    btnCargando.classList.remove('d-none')

    window.setTimeout(() => {
        btnEnviar.classList.remove('d-none')
        btnCargando.classList.add('d-none')
    },2000)

    formulario.reset()
})