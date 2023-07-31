function calculate() {
    const hours = parseFloat(document.getElementById('hours').value);
    const rate = parseFloat(document.getElementById('rate').value);
    const result = hours * rate;
    document.getElementById('result').textContent = `Estimated Amount: $${result.toFixed(2)}`;
  }
  