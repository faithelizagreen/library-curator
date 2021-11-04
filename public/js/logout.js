const logout = async () => {
    const response = await fetch('/logout', {
      method: 'get',
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      console.log("Logged out");
      document.location.replace('/');
    } else {
      alert('Failed to log out.');
    }

  };
  
  document.getElementById('logout').addEventListener('click', logout);
