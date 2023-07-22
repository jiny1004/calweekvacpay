document.getElementById("calculateBtn").addEventListener("click", function() {
  // Get input values
  const totalHoursValue = document.getElementById("totalHours").value;
  const hourlyRateValue = document.getElementById("hourlyRate").value;
  
  // Check the validity of the inputs
  if (!totalHoursValue || !hourlyRateValue || isNaN(totalHoursValue) || isNaN(hourlyRateValue)) {
      alert("올바른 값을 입력해주세요.");
      return;
  }
  
  const totalHours = parseFloat(totalHoursValue);
  const hourlyRate = parseFloat(hourlyRateValue);

  // Calculate 주휴수당
  let totalPay = totalHours >= 40 ? totalHours * hourlyRate : (totalHours / 5) * hourlyRate;

  // Format the result as KRW (Korean Won)
  const formattedPay = new Intl.NumberFormat("ko-KR", { style: "currency", currency: "KRW" }).format(totalPay);

  // Display the result
  document.getElementById("result").textContent = `주휴수당은 ${formattedPay}원 입니다.`;
});
