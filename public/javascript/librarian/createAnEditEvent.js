

const editEventhandler = async (event) => {

  const id = document.querySelector('#editEventBtn').getAttribute('data-src');
  console.log(id);
 
  const title = document.getElementById('event-title').value
  const description = document.getElementById('event-content').value
  const time = document.getElementById('time').value
  const date = document.getElementById('event-date').value
  console.log(title);
  console.log(description);
  console.log(time);
  console.log(date);

  const response = await fetch('/librarian/events/' + id, {
    method: 'PUT',
    body: JSON.stringify({
      title, 
      description, 
      time, 
      date}),
    headers: {
      'Content-type': 'application/json',
    },
  });
  if (response.ok) {
    document.window.redirect('/librarian/events')
  } else {
    alert(response.statusText);
  }
}
// Btn for submitting put method
document.querySelector('.submitEdit').addEventListener('click',editEventhandler)



// Function to create a new method.
async function newEventHandler() {
  const title = document.querySelector('.event-form-title');
  const description = document.querySelector('.event-form-description');

  const response = await fetch(`/api/events/`, {
    method: 'POST',
    body: JSON.stringify({
      title,
      description,
      time,
      date,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if (response.ok) {
    document.reload()
  } else {
    alert(response.statusText);
  }
}

