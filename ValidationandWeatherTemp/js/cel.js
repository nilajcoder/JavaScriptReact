function convertToCelsius() {
  const fahrenheit = document.getElementById("fahrenheit").value;
  let resultText = "";
  if (fahrenheit === "") {
      document.getElementById("result").innerText = "Please enter a value.";
      return;
  }
  const celsius = ((fahrenheit - 32) * 5) / 9;
  resultText=`${fahrenheit}°F ${celsius.toFixed(2)}°C`;
  
  
}
