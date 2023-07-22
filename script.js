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
  
    // Format the result as KRW (Korean Won)
    const formattedPay = new Intl.NumberFormat("ko-KR", { style: "currency", currency: "KRW" }).format(totalPay);
  
    // Display the result
    const resultElement = document.getElementById("result");
    resultElement.textContent = `주휴수당은 ${formattedPay}원 입니다.`;
});
