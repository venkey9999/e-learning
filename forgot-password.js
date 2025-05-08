document.getElementById('forgotPasswordForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form from submitting the usual way
  
    const email = document.getElementById('email').value;
    const message = document.getElementById('message');
  
   
    if (email) {
    
      message.textContent = 'If this email is registered, a password reset link has been sent.';
      message.style.color = 'green';
   
      /*fetch('/api/forgot-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      })
      .then(res => res.json())
      .then(data => {
        message.textContent = data.message;
      })
      .catch(error => {
        message.textContent = 'Something went wrong.';
        message.style.color = 'red';
      });*/
    
    } else {
      message.textContent = 'Please enter a valid email.';
      message.style.color = 'red';
    }
  });
  