const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');
const defaultName = 'Anonymous';

nameInput.addEventListener('input', event => {
  const inputValue = event.target.value.trim();
  nameOutput.textContent = !inputValue ? defaultName : inputValue;
});
