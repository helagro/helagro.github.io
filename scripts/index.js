;[...document.getElementsByClassName('linkGroup')].forEach(elem => {
    console.log(elem, 'wow')

    for (const child of elem.children) {
        child.addEventListener('mouseover', () => {
            document.activeElement.blur()
            child.focus()
        })

        child.addEventListener('mouseout', () => {
            child.blur()
        })
    }
})

let timeout = null

/* ============================== HANDLE HIDDEN ELEMS ============================== */

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
