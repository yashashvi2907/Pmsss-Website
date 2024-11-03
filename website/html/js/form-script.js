document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('registrationForm');
    const passwordError = document.getElementById('passwordError');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');

    // Function to check if all required fields are filled
    function checkRequiredFields() {
        let isValid = true;
        const requiredFields = form.querySelectorAll('input[required]');
        requiredFields.forEach(field => {
            if (!field.value.trim()) {
                isValid = false;
                field.style.borderColor = 'red'; // Highlight empty field
            } else {
                field.style.borderColor = ''; // Reset border color
            }
        });
        return isValid;
    }
    
    // Function to check if passwords match
    function checkPasswordsMatch() {
        if (password.value !== confirmPassword.value) {
            passwordError.style.display = 'block';
            return false;
        } else {
            passwordError.style.display = 'none';
            return true;
        }
    }

    // Prevent form submission if validation fails
    form.addEventListener('submit', function(event) {
        const allFieldsValid = checkRequiredFields();
        const passwordsMatch = checkPasswordsMatch();
        
        if (!allFieldsValid || !passwordsMatch) {
            event.preventDefault(); // Prevent form submission
        }
    });

    // Real-time feedback for required fields
    const inputs = form.querySelectorAll('input[required]');
    inputs.forEach(input => {
        input.addEventListener('input', function() {
            if (input.value.trim()) {
                input.style.borderColor = '';
            } else {
                input.style.borderColor = 'red';
            }
        });
    });

    // Real-time feedback for password matching
    [password, confirmPassword].forEach(field => {
        field.addEventListener('input', function() {
            checkPasswordsMatch();
        });
    });
});