const cards = document.querySelectorAll('.card')

function removeActive(){
    cards.forEach(card =>{
        card.classList.remove('active')
    })
}

cards.forEach(card =>{
    card.addEventListener('click', () =>{
        removeActive()
        card.classList.add('active')
    })
})