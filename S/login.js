$(document).ready(function () {
    // Check if the user is already logged in
    const isLoggedIn = localStorage.getItem('isLoggedIn');

    if (isLoggedIn === 'true') {
        // Redirect to home page or any other page after successful login
        window.location.href = 'home.html';
    }

    // Handle form submission
    $('form').submit(function (event) {
        event.preventDefault(); // Prevent the default form submission

        // Get input values
        const phoneNumber = $('#mobile_code').val();

        // Validate form data
        if (!phoneNumber) {
            alert('Please enter your phone number');
            return;
        }

        // Assuming login is successful
        // You can add more validation or call an API to authenticate the user here

        // Store login status in local storage
        localStorage.setItem('isLoggedIn', 'true');

        // Redirect to home page or any other page after successful login
        window.location.href = 'home.html';
    });
});
