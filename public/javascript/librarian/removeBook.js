async function deleteBookHandler(book_id) {
    const response = await fetch(`/api/book/` + book_id, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (response.ok) {
      document.location.replace('/librarian/book');
    } else {
      alert(response.statusText);
    }
  }
  
  document.body.addEventListener(
    'click', (e) => {
      // Check if target.id is a number and not a NaN and if it is equal
      // to a number it will go on to cofirm as a validator. (change later easier on user eyes)
      if (parseInt(e.target.id) === parseInt(e.target.id)) {
        if (confirm(`Are you sure you want to delete this book?`)) {
          deleteBookHandler(e.target.id);
        } else {
        }
      }
    },
    true
  );