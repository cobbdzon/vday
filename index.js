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

DOMContentLoaded().then(setupFlickity)