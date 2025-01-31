document.addEventListener('DOMContentLoaded', () => {
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const clearButton = document.getElementById('clearButton');
    const submitButton = document.getElementById('submitButton');
    const modal = document.getElementById('modal');

    usernameInput.addEventListener('change', () => {
        console.log('Username changed:', usernameInput.value);
    });

    passwordInput.addEventListener('change', () => {
        console.log('Password changed:', passwordInput.value);
    });

    clearButton.addEventListener('click', () => {
        usernameInput.value = '';
        passwordInput.value = '';
    });

    submitButton.addEventListener('click', (event) => {
        event.preventDefault();
        if (validateForm()) {
            showModal();
        }
    });

    function validateForm() {
        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();
        if (username === '' || password === '') {
            alert('Both fields are required.');
            return false;
        }
        return true;
    }

    function showModal() {
        modal.style.display = 'block';
        setTimeout(() => {
            modal.style.display = 'none';
        }, 3000); // Simulate a delay for demonstration
    }
});