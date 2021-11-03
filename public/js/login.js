const loginFormHandler = async (event) => {
    event.preventDefault();
  
    const userID = document.querySelector('#user-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
  
    if (userID && password) {
      const response = await fetch('/api/readers/login', {
        method: 'POST',
        body: JSON.stringify({ userID, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to log in.');
      }
    }
  };

  document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);
