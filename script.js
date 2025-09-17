//your JS code here. If required.
// Get the input field by its ID
const inputField = document.getElementById('fname');

// Add an event listener for the 'blur' event (when input field loses focus)
inputField.addEventListener('blur', function() {
    this.value = this.value.toUpperCase();
});
