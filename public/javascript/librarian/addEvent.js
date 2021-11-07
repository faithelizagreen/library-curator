

async function newEventHandler(event_id) {
    
  
  const title = document.querySelector('.event-form-title');
  const description = document.querySelector('.event-form-description');
  
  const response = await fetch(`/api/events/` + event_id, {
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
   
   

async function editEventhandler(event_id) {

  const title = document.querySelector('.event-form-title')
  const description = document.querySelector('.event-form-description')


    const response = await fetch('api/events/' + event_id,{
      method: PUT,
      body: JSON.stringify([
        title,
        description,
      
      ]),
      header: { 
        'Content-type': 'application/json',
      },
    })
    if(response.ok){
      document.replace.location('librarian/events')
    } else { 
      alert(response.statusText)
    }

//
      

    };
