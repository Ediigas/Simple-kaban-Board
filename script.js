// Help 
function log(message) {
    console.log('>' + message)  
}

// APP
const cards = document.querySelectorAll('.card')

cards.forEach(card => {
    card.addEventListener('dragstart', dragstart)
    card.addEventListener('drag', drag)
    card.addEventListener('dragend', dragend)
})

function dragstart() {
    log('CARD: Start dragging')
}

function drag() {
    log('CARD: IS dragging')
}

function dragend() {
    log('CARD: Stop drag!')
}
