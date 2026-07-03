// выбираем элементы DOM
const display = document.getElementById('display');
const minusBtn = document.getElementById('minusBtn');
const plusBtn = document.getElementById('plusBtn');
const extremeMsg = document.getElementById('extremeMessage');

let count = 0; // текущий счетчик

// функция обновления отображения и логики
function updateDisplay() {
  // показываем текущее значение
  display.textContent = count;

  // меняем цвет фона в зависимости от значения
  if (count > 0) {
    display.style.backgroundColor = 'yellow';
  } else if (count < 0) {
    display.style.backgroundColor = 'green';
  } else {
    display.style.backgroundColor = 'red'; // ноль
  }

  // отключение кнопки "+" при 10
  if (count >= 10) {
    plusBtn.disabled = true;
  } else {
    plusBtn.disabled = false;
  }

  // отключение кнопки "-" при -10
  if (count <= -10) {
    minusBtn.disabled = true;
  } else {
    minusBtn.disabled = false;
  }

  // показываем сообщение при достижении экстремальных значений
  if (count === 10 || count === -10) {
    extremeMsg.classList.remove('hidden');
  } else {
    extremeMsg.classList.add('hidden');
  }
}

// обработчик для увеличения
plusBtn.addEventListener('click', () => {
  if (count < 10) {
    count++;
    updateDisplay();
  }
});

// обработчик для уменьшения
minusBtn.addEventListener('click', () => {
  if (count > -10) {
    count--;
    updateDisplay();
  }
});

// вызываем сразу при загрузке страницы
updateDisplay();