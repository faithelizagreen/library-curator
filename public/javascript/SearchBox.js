const searchFormHandler = async (event) => {
    event.preventDefault();


  
    const bookTitle = document.getElementById('searchInput').value.trim()
    console.log(bookTitle);
  
    if (bookTitle) {
      location.href = '/search/' + bookTitle
      // const response = await fetch(`/search/${bookTitle}`, {
      //   method: 'get',
      //   headers: { 'Content-Type': 'application/json' },
      // });
  
      // if (response.ok) {
      //   console.log(response);
      //   //  document.location.replace('/search');
      // } else {
      //   console.log('Failed to render book with that title');
      // }
    }
  };

  document
  .querySelector('.search-form')
  .addEventListener('submit', searchFormHandler);

