const addBookLibraryDB = async (event) => {

    event.preventDefault();

    const googleKey = "AIzaSyArrMjqUSxtIDaXs97e6AAynyVPSaJO0ao";
    const bookTitle= "";
    const googleBooks = `https://www.googleapis.com/books/v1/volumes?q=${bookTitle}&key=${googleKey}`;
    const bookInput = document.querySelector("#book-input")

    if(bookInput && googleBooks) {

    const response = await fetch( googleBooks, {
        method: "GET",
        headers: {"Content-Type" : "application/json"},
    });

    if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to search book');
      }
    }
};

document
  .querySelector(".add-book-form")
  .addEventListener('search', addBookLibraryDB);


