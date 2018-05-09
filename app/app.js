

const focusDriver = new Driver();

// Highlight the section on focus
document.getElementById('creation-input')
console.log("moo")
  .addEventListener('focus', (e) => {
    focusDriver.focus('#creation-input');
  });
