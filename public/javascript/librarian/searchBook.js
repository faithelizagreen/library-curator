const librarianSearchHandler = async (event) => {
    event.preventDefault();


  
    const bookTitle = document.getElementById('bookInput').value.trim()
    console.log(bookTitle);
  
    if (bookTitle) {
      location.href = `/search/${bookTitle}`
    
    }
  };

  document
  .getElementById('bookInputForm')
  .addEventListener('submit', librarianSearchHandler);
