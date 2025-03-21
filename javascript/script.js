

document.getElementById('login-btn').addEventListener('click', function (event) { // Add Event Listener to Login Button
    event.preventDefault(); // Prevent Default Form Submission
    const acountNumber = document.getElementById("Account-number").value;// Get Account Number
    const pinNumber = document.getElementById("pin").value; // Get Pin Number
    const convertedPin = parseInt(pinNumber); // Convert Pin Number to Integer
    if (acountNumber.length === 11) { // Check if Account Number is 11 digits
        if (convertedPin === 1234) { // Check if Pin Number is 1234      
            window.location.href = "./main.html"; // Redirect to Main Page
        }
        else {
            alert("Wrong Pin Number"); // Alert Wrong Pin Number
        }
        }
    else {
        alert("Wrong Account Number"); // Alert Wrong Account Number
    }
})

