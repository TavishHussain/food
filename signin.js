// Array to store users [username, password]
    const users = [];

    function openModal(form) {
      document.getElementById('modal').style.display = 'flex';
      if (form === 'signup') {
        document.getElementById('signup-form').style.display = 'block';
        document.getElementById('login-form').style.display = 'none';
      } else {
        document.getElementById('signup-form').style.display = 'none';
        document.getElementById('login-form').style.display = 'block';
      }
    }

    function closeModal() {
      document.getElementById('modal').style.display = 'none';
    }

    // Sign up function
    function signup() {
      const username = document.getElementById('signup-username').value.trim();
      const password = document.getElementById('signup-password').value.trim();

      let isValid = true;

      if (username === '') {
        document.getElementById('signup-username-error').textContent = 'Username is required.';
        isValid = false;
      } else {
        document.getElementById('signup-username-error').textContent = '';
      }

      if (password === '') {
        document.getElementById('signup-password-error').textContent = 'Password is required.';
        isValid = false;
      } else if (password.length < 6) {
        document.getElementById('signup-password-error').textContent = 'Password must be at least 6 characters.';
        isValid = false;
      } else {
        document.getElementById('signup-password-error').textContent = '';
      }

      if (isValid) {
        users.push([username, password]);
        alert('Sign up successful!');
        closeModal();
      }
    }

    // Log in function
    function login() {
      const username = document.getElementById('login-username').value.trim();
      const password = document.getElementById('login-password').value.trim();

      let isValid = true;

      if (username === '') {
        document.getElementById('login-username-error').textContent = 'Username is required.';
        isValid = false;
      } else {
        document.getElementById('login-username-error').textContent = '';
      }

      if (password === '') {
        document.getElementById('login-password-error').textContent = 'Password is required.';
        isValid = false;
      } else {
        document.getElementById('login-password-error').textContent = '';
      }

      if (isValid) {
        const user = users.find(user => user[0] === username && user[1] === password);
        if (user) {
          alert('Login successful!');
          closeModal();
        } else {
          alert('Invalid username or password.');
        }
      }
    }
