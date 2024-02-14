var _domContentLoaded = false
function DOMContentLoaded(...args) {
    if (_domContentLoaded) {
        return Promise.resolve(...args)
    } else {
        return new Promise(resolve => document.addEventListener("DOMContentLoaded", () => {
            _domContentLoaded = true
            resolve(...args)
        }))
    }
}
DOMContentLoaded()

function setupFlickity() {
    const gallery = document.getElementById("gallery")
    const gallery_carousel = gallery.getElementsByClassName("gallery-carousel")[0]

    const gallery_flkty = new Flickity(gallery_carousel, {
        cellAlign: "center",
        draggable: true,
    })

    console.log("farted")
}

function setupButtons() {
    const thanks_screen = document.getElementById("thanks")
    const buttons = document.body.getElementsByClassName("yes-button")
    for (let i = 0; i < buttons.length; i++) {
        const btn = buttons[i];
        btn.onclick = () => {
            thanks_screen.style.opacity = 1
        }
    }
}

DOMContentLoaded().then(setupFlickity).then(setupButtons)