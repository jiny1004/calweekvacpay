document.getElementById("calculateBtn").addEventListener("click", function() {
    // Get input values
    const totalHours = parseFloat(document.getElementById("totalHours").value);
    const hourlyRate = parseFloat(document.getElementById("hourlyRate").value);
  
    // Calculate 주휴수당
    let totalPay = 0;
    if (totalHours >= 40) {
      totalPay = totalHours * hourlyRate;
    } else {
      totalPay = (totalHours / 5) * hourlyRate;
    }
  
    // Display the result
    const resultElement = document.getElementById("result");
    resultElement.textContent = `주휴수당: $${totalPay.toFixed(2)}`;
  });
  