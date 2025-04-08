function validateForm() {
    // Get form field values
    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Check if any required field is empty
    if (!name || !phone || !email || !message) {
        alert('Please fill in all the required fields *');
        return false; // Prevent form submission
    }

    // You can add more validation here if needed (e.g., phone number format)

    // Show success message only when form is properly filled
    alert  ('Form submitted successfully!');

    document.getElementById('yourFormId').reset(); // Replace 'yourFormId' with your actual form ID

    return false; // Return false to prevent actual form submission if you're not sending data to a backend
}
