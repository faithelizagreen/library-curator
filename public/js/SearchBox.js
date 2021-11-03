const searchFormHandler = async (event) => {
    event.preventDefault();
  
    const bookTitle = document.getElementById('searchInput').value.trim()
    console.log(bookTitle);
  
    if (bookTitle) {
      const response = await fetch('/api/books', {
        method: 'POST',
        body: JSON.stringify ({ "search" : bookTitle }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        
         document.location.replace('/');
      } else {
        console.log('Failed to render book with that title');
      }
    }
  };

  document
  .querySelector('.search-form')
  .addEventListener('submit', searchFormHandler);


