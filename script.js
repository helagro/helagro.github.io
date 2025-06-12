function onHover() {
    document.activeElement.blur()
}

let timeout = null

document.addEventListener('keydown', event => {
    if (event.altKey) {
        if (timeout) clearTimeout(timeout)

        document.body.classList.add('showHidden')
    }
})

document.addEventListener('keyup', event => {
    if (!event.altKey) {
        timeout = setTimeout(() => {
            document.body.classList.remove('showHidden')
        }, 4000)
    }
})
