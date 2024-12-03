
function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const address = document.getElementById('address').value;
    const dob = document.getElementById('dob').value;
    const gender = document.getElementById('gender').value;

    if (!/^[a-zA-Z\s]+$/.test(name)) {
        alert("Please enter a valid name containing only letters and spaces.");
        return false;
    }

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    if (password.length < 8 || !/\d/.test(password) || !/[a-zA-Z]/.test(password)) {
        alert("Password must be at least 8 characters long, including a number and a letter.");
        return false;
    }

    if (address.trim() === "") {
        alert("Address is required.");
        return false;
    }

    if (!dob) {
        alert("Please select your date of birth.");
        return false;
    }

    if (gender === "") {
        alert("Please select your gender.");
        return false;
    }

    return true;
}
