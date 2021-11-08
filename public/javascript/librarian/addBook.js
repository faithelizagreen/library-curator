async function newBookHandler(book_id) {
    
  
    const title = document.querySelector('.book-form-title');
    const author = document.querySelector('.book-form-author');
    const isbn = document.querySelector('.book-form-isbn');
    const subject = document.querySelector('.book-form-subject');

    
    const response = await fetch(`/api/books/` + book_id, {
        method: 'POST',
        body: JSON.stringify({
          title,
          author,
          isbn,
          subject
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        document.location.replace('/librarian/books');
      } else {
        alert(response.statusText);
      }
    }