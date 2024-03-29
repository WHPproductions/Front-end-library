class Book {
  constructor(title, author, year, isComplete) {
    this.id = +new Date();
    this.title = title;
    this.author = author;
    this.year = year;
    this.isComplete = isComplete;
  }
}

const LIBRARY_LOCAL_STORAGE_KEY = "library";
const library = localStorage.getItem(LIBRARY_LOCAL_STORAGE_KEY)
  ? JSON.parse(localStorage.getItem(LIBRARY_LOCAL_STORAGE_KEY))
  : [];

// Rak buku render

function rakRakBukuRender(libraryArray) {

  const rakBelumSelesaiDibaca = document.querySelector(
    "#rak-belum-selesai-dibaca .rak-buku > ul"
  );
  const rakSelesaiDibaca = document.querySelector(
    "#rak-selesai-dibaca .rak-buku > ul"
  );

  if (libraryArray.length === 0) {
    rakBelumSelesaiDibaca.innerHTML = '';
    rakSelesaiDibaca.innerHTML='';
  }

  let unreadListHTMLString = "";
  let readListHTMLString = "";

  for (const book of libraryArray) {
    if (book.isComplete) {
      readListHTMLString += `
            <li>
              <div class="book-info">
                <h3 class="title">
                  ${book.title}
                </h3>
                <span class="author">${book.author}</span>
                <span class="year">${book.year}</span>
              </div>
              <div class="book-buttons">
                <button class="tooltip delete" data-id="${book.id}">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="white"
                    class="bi bi-trash3"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"
                    />
                  </svg>
                  <span class="tooltip-text">Hapus</span>
                </button>
                <button class="tooltip edit" data-id="${book.id}">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="white"
                    class="bi bi-pencil-square"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"
                    />
                    <path
                      fill-rule="evenodd"
                      d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"
                    />
                  </svg>
                  <span class="tooltip-text">Sunting</span>
                </button>
                <button class="tooltip check-read" data-id="${book.id}">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="white"
                      class="bi bi-x-square"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"
                      />
                      <path
                        d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"
                      />
                    </svg>
                  <span class="tooltip-text">Belum selesai dibaca</span>
                </button>
              </div>
            </li>
            `;
    } else {
      unreadListHTMLString += `
            <li>
              <div class="book-info">
                <h3 class="title">
                  ${book.title}
                </h3>
                <span class="author">${book.author}</span>
                <span class="year">${book.year}</span>
              </div>
              <div class="book-buttons">
                <button class="tooltip delete" data-id="${book.id}">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="white"
                    class="bi bi-trash3"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"
                    />
                  </svg>
                  <span class="tooltip-text">Hapus</span>
                </button>
                <button class="tooltip edit" data-id="${book.id}">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="white"
                    class="bi bi-pencil-square"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"
                    />
                    <path
                      fill-rule="evenodd"
                      d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"
                    />
                  </svg>
                  <span class="tooltip-text">Sunting</span>
                </button>
                <button class="tooltip check-unread" data-id="${book.id}">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="white"
                      class="bi bi-check-square"
                      viewBox="0 0 16 16"
                    >
                        <path
                        d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"
                        />
                        <path
                        d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z"
                        />
                    </svg>
                  <span class="tooltip-text">Selesai dibaca</span>
                </button>
              </div>
            </li>
            `;
    }

    rakBelumSelesaiDibaca.innerHTML = unreadListHTMLString;
    rakSelesaiDibaca.innerHTML = readListHTMLString;
  }

  const deleteButtons = document.querySelectorAll('.book-buttons > .delete');
  const unreadButtons = document.querySelectorAll('.book-buttons > .check-read');
  const readButtons = document.querySelectorAll('.book-buttons > .check-unread');

  deleteButtons.forEach((button) => {
    const id = button.getAttribute('data-id')

    button.addEventListener('click', () => {
      const dangerModal = document.getElementById("danger-modal");
      const deleteYesButton = document.getElementById("delete-yes");
      const deleteNoButton = document.getElementById("delete-no");

      dangerModal.showModal();
      
      function yesEventHandler () {
        removeBook(library, LIBRARY_LOCAL_STORAGE_KEY, id)
        deleteYesButton.removeEventListener('click', yesEventHandler)
        dangerModal.close()
      }

      function noEventHandler () {
        deleteYesButton.removeEventListener('click', yesEventHandler)
        dangerModal.close()
      }

      deleteYesButton.addEventListener('click', yesEventHandler)
      deleteNoButton.addEventListener('click', noEventHandler)
    })
  })

  unreadButtons.forEach(button => {
    const id = button.getAttribute('data-id')

    button.addEventListener('click', () => {
      toggleCompleteBook(library, LIBRARY_LOCAL_STORAGE_KEY, id)
    })
  })
  
  readButtons.forEach(button => {
    const id = button.getAttribute('data-id')
    
    button.addEventListener('click', () => {
      toggleCompleteBook(library, LIBRARY_LOCAL_STORAGE_KEY, id)
    })
  })

}

document.addEventListener("DOMContentLoaded", (event) => {
  //Rak buku first render initialization
  
  rakRakBukuRender(library);
});

// Showing and closing modals

const showFormModalButton = document.querySelector(".show-simpan-buku");
const showSearchModalButton = document.querySelector(".show-cari-buku");
const formModal = document.getElementById("simpan-buku");
const searchModal = document.getElementById("cari-buku");
const hideFormModalButton = document.querySelector(".hide-simpan-buku");
const hideSearchModalButton = document.querySelector(".hide-cari-buku");

showFormModalButton.addEventListener("click", () => {
  formModal.showModal();
});

showSearchModalButton.addEventListener("click", () => {
  searchModal.showModal();
});

hideFormModalButton.addEventListener("click", () => {
  formModal.close();
});

hideSearchModalButton.addEventListener("click", () => {
  searchModal.close();
});

// Create new book

function addBook(libraryArray, localStorageKey, book) {
  libraryArray.push(book);
  localStorage.setItem(localStorageKey, JSON.stringify(libraryArray));
  rakRakBukuRender(libraryArray);
}

formModal.addEventListener("submit", () => {
  const titleInput = document.getElementById("title");
  const authorInput = document.getElementById("author");
  const yearInput = document.getElementById("year");
  const isCompleteInput = document.getElementById("is-complete");
  const form = document.querySelector("#simpan-buku form");

  const newBook = new Book(
    titleInput.value,
    authorInput.value,
    yearInput.value,
    isCompleteInput.checked
  );

  addBook(library, LIBRARY_LOCAL_STORAGE_KEY, newBook);

  form.reset();
});

// Delete a book

function removeBook(libraryArray, localStorageKey, bookId) {
  const bookArrayIndex = libraryArray.findIndex((book) => {
    return book.id == bookId
  });
  libraryArray.splice(bookArrayIndex, 1)
  localStorage.setItem(localStorageKey, JSON.stringify(libraryArray));
  rakRakBukuRender(libraryArray);
}

// Toggle read or unread a book

function toggleCompleteBook (libraryArray, localStorageKey, bookId) {
  const bookArrayIndex = libraryArray.findIndex((book) => {
    return book.id == bookId
  });
  libraryArray[bookArrayIndex].isComplete = !libraryArray[bookArrayIndex].isComplete
  localStorage.setItem(localStorageKey, JSON.stringify(libraryArray));
  rakRakBukuRender(libraryArray);
}