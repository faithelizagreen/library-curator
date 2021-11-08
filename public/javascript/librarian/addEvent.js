async function newEventHandler() {
    
  
  const title = document.querySelector('.event-form-title');
  const description = document.querySelector('.event-form-description');
  
  const response = await fetch(`/api/events/`, {
      method: 'POST',
      body: JSON.stringify({
        title,
        description,
        time,
        date
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (response.ok) {
      document.location.replace('/librarian/events');
    } else {
      alert(response.statusText);
    }
  }
  
  // document.querySelector('.createPost').addEventListener(
  //   'click', newEventHandler) 
   
   