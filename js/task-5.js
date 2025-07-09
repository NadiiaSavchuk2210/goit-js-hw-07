function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const handleClick = () => {
  const colorValue = getRandomHexColor();
  const colorOutput = document.querySelector('.color');
  colorOutput.textContent = colorValue;
  document.body.style.backgroundColor = colorValue;
};

const changeColorBtn = document.querySelector('.change-color');
changeColorBtn.addEventListener('click', handleClick);
