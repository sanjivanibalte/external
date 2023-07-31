function calculateInterest() {
    const principal = parseFloat(document.getElementById('principal').value);
    const rate = parseFloat(document.getElementById('rate').value);
    const time = parseFloat(document.getElementById('time').value);
  
    if (isNaN(principal) || isNaN(rate) || isNaN(time)) {
      alert('Please enter valid numbers for all fields.');
      return;
    }
  
    const simpleInterest = (principal * rate * time) / 100;
    const totalAmount = principal + simpleInterest;
  
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
      <p>Principal Amount: $${principal}</p>
      <p>Interest Rate: ${rate}%</p>
      <p>Time (years): ${time}</p>
      <p>Simple Interest: $${simpleInterest.toFixed(2)}</p>
      <p>Total Amount: $${totalAmount.toFixed(2)}</p>
    `;
  }
  