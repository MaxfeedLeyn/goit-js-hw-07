const inputName = document.getElementById('name-input');

inputName.addEventListener('input', event => {
  const name = event.target.value.trim();
  const greeting = document.getElementById('name-output');
  if (name === '') {
    greeting.textContent = 'Anonymous';
  } else {
    greeting.textContent = name;
  }
});
