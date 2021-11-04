const externalBookSearch = async (event) => {

    event.preventDefault();

    const googleKey = "AIzaSyArrMjqUSxtIDaXs97e6AAynyVPSaJO0ao";
    const bookInput = document.querySelector("#book-input");
    const googleBooks = `https://www.googleapis.com/books/v1/volumes?q=${bookInput}&key=${googleKey}`;
    

    if(googleBooks) {

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
  .querySelector(".external-book-form")
  .addEventListener('search', externalBookSearch);


