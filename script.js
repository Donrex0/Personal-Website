document.addEventListener('DOMContentLoaded', function() {
  // Dark mode toggle functionality
  const darkModeToggle = document.getElementById('darkModeToggle');

  darkModeToggle.addEventListener('change', function() {
    if (this.checked) {
      enableDarkMode();
    } else {
      disableDarkMode();
    }
  });

  // Function to enable dark mode
  function enableDarkMode() {
    document.body.classList.add('dark-mode');
    localStorage.setItem('darkMode', 'enabled');
  }

  // Function to disable dark mode
  function disableDarkMode() {
    document.body.classList.remove('dark-mode');
    localStorage.setItem('darkMode', null);
  }

  // Check local storage for dark mode preference on page load
  if (localStorage.getItem('darkMode') === 'enabled') {
    enableDarkMode();
    darkModeToggle.checked = true;
  }

  // Function to get current day and update DOM
  function getCurrentDay() {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentDate = new Date();
    const dayName = days[currentDate.getUTCDay()];
    const dayElement = document.querySelector('[data-testid="currentDay"]');
    if (dayElement) {
      dayElement.textContent = dayName;
    }
  }

  getCurrentDay(); // Call on page load
});
