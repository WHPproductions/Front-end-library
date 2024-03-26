class Book {
    constructor (title, author, year, isComplete) {
        this.id = +new Date()
        this.title = title
        this.author = author
        this.year = year 
        this.isComplete = isComplete
    }
}

const library = []

// Showing and closing modals

const showFormModalButton = document.querySelector('.show-simpan-buku')
const showSearchModalButton = document.querySelector('.show-cari-buku')
const formModal = document.getElementById('simpan-buku')
const searchModal = document.getElementById('cari-buku')
const hideFormModalButton = document.querySelector('.hide-simpan-buku')
const hideSearchModalButton = document.querySelector('.hide-cari-buku')

showFormModalButton.addEventListener('click', () => {
    formModal.showModal()
})

showSearchModalButton.addEventListener('click', () => {
    searchModal.showModal()
})

hideFormModalButton.addEventListener('click', ()    => {
    formModal.close()
})

hideSearchModalButton.addEventListener('click', ()    => {
    searchModal.close()
})