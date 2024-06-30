document.addEventListener('DOMContentLoaded', function() {
  const preferencesForm = document.getElementById('preferencesForm');
  const fontSizeInput = document.getElementById('fontsize');
  const fontColorInput = document.getElementById('fontcolor');

  // Function to set preferences from cookies, if available
  function setPreferencesFromCookies() {
    const fontSize = getCookie('fontSize');
    const fontColor = getCookie('fontColor');
    
    if (fontSize) {
      document.body.style.fontSize = fontSize;
      fontSizeInput.value = parseInt(fontSize); // Update form input value
    }

    if (fontColor) {
      document.body.style.color = fontColor;
      fontColorInput.value = fontColor; // Update form input value
    }
  }

  // Function to save preferences to cookies
  function savePreferences(event) {
    event.preventDefault();

    const fontSize = fontSizeInput.value + 'px';
    const fontColor = fontColorInput.value;

    document.body.style.fontSize = fontSize;
    document.body.style.color = fontColor;

    setCookie('fontSize', fontSize, 30); // Save fontSize cookie for 30 days
    setCookie('fontColor', fontColor, 30); // Save fontColor cookie for 30 days

    alert('Preferences saved successfully!');
  }

  // Function to set a cookie
  function setCookie(name, value, days) {
    const expires = new Date();
    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
  }

  // Function to get the value of a cookie
  function getCookie(name) {
    const cookieValue = document.cookie.match(`(^|;)\\s*${name}\\s*=\\s*([^;]+)`);
    return cookieValue ? cookieValue.pop() : null;
  }

  // Set initial preferences from cookies when the page loads
  setPreferencesFromCookies();

  // Event listener for form submission
  preferencesForm.addEventListener('submit', savePreferences);
});
