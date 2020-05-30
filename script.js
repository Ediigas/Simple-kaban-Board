// Help 
function log(message) {
    console.log('>' + message)
}

// APP
const cards = document.querySelectorAll('.card')
const dropzones = document.querySelectorAll('.dropzone')

cards.forEach(card => {
    card.addEventListener('dragstart', dragstart)
    card.addEventListener('drag', drag)
    card.addEventListener('dragend', dragend)
})

function dragstart() {
    log('CARD: Start dragging')
    dropzones.forEach(dropzone => dropzone.classList.add('highlight'))

    this.classList.add('is-dragging')
}

function drag() {
    log('CARD: IS dragging')
}

function dragend() {
    log('CARD: Stop drag!')
    dropzones.forEach(dropzone => dropzone.classList.remove('highlight'))

    this.classList.remove('is-dragging')
}

// palce where we will drop cards

dropzones.forEach(dropzone => {
    dropzone.addEventListener('dragenter', dragenter)
    dropzone.addEventListener('dragover', dragover)
    dropzone.addEventListener('dragleave', dragleave)
    dropzone.addEventListener('drop', drop)

})

function dragenter() {
    log('DROPZONE: Enter in zone')
}

function dragover() {
    this.classList.add('over')


    //get dragging card
    const carBeingDragged = document.querySelector('.is-dragging')

    //this = dropzone
    this.appendChild(carBeingDragged)
}

function dragleave() {
    // log('DROPZONE: Leave')
    //this = dropzone
    this.classList.remove('over')
}

function drop() {
    log('DROPZONE: dropped')
    this.classList.remove('over')
}