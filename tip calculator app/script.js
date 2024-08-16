const billInput = document.getElementById('bill');
const peopleInput = document.getElementById('people');
const tipButtons = document.querySelectorAll('.tip-btn');
const customTipInput = document.getElementById('custom-tip');
const tipAmountDisplay = document.getElementById('tip-amount');
const totalAmountDisplay = document.getElementById('total-amount');
const resetButton = document.getElementById('reset');

let tipPercent = 0;

tipButtons.forEach(button => {
  button.addEventListener('click', () => {
    tipButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    tipPercent = parseFloat(button.dataset.tip);
    calculateTip();
  });
});

customTipInput.addEventListener('input', () => {
  tipButtons.forEach(btn => btn.classList.remove('active'));
  tipPercent = parseFloat(customTipInput.value) || 0;
  calculateTip();
});

billInput.addEventListener('input', calculateTip);
peopleInput.addEventListener('input', calculateTip);

resetButton.addEventListener('click', () => {
  billInput.value = '';
  peopleInput.value = '';
  customTipInput.value = '';
  tipAmountDisplay.textContent = '$0.00';
  totalAmountDisplay.textContent = '$0.00';
  tipButtons.forEach(btn => btn.classList.remove('active'));
  tipPercent = 0;
});

function calculateTip() {
  const bill = parseFloat(billInput.value) || 0;
  const people = parseInt(peopleInput.value) || 1;
  const tipAmount = (bill * (tipPercent / 100)) / people;
  const totalAmount = (bill + tipAmount * people) / people;

  tipAmountDisplay.textContent = `$${tipAmount.toFixed(2)}`;
  totalAmountDisplay.textContent = `$${totalAmount.toFixed(2)}`;
}
