const loginForm = document.querySelector('.login-form');

const handleSubmit = event => {
  event.preventDefault();
  const form = event.target;

  const email = form.elements.email.value.trim();
  const password = form.elements.password.value.trim();

  if (!email || !password) {
    alert('All form fields must be filled in');
    return false;
  }

  const resultData = { email, password };
  console.log(resultData);
  form.reset();
};

loginForm.addEventListener('submit', handleSubmit);
