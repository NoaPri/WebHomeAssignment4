// Get all radio buttons
const radioButtons = document.querySelectorAll('input[name="testType"]');
const psychometricGradeInput = document.getElementById('psychometricGrade');
const mechinaGradeInput = document.getElementById('mechinaGrade');
const bagroutGradeInput = document.getElementById('bagroutGrade');
const ageInput = document.getElementById('age');
const messageArea = document.getElementById('messageArea');
const validateBtn = document.getElementById('validateBtn');

// Set initial state
psychometricGradeInput.disabled = false;
mechinaGradeInput.disabled = true;

// Listen for radio changes
radioButtons.forEach(radio => {
    radio.addEventListener('change', function() {
        if (this.value === 'psychometric') {
            // Disable Mechina, enable Psychometric
            psychometricGradeInput.disabled = false;
            mechinaGradeInput.disabled = true;
            mechinaGradeInput.value = '';
        } else {
            // Disable Psychometric, enable Mechina
            psychometricGradeInput.disabled = true;
            psychometricGradeInput.value = '';
            mechinaGradeInput.disabled = false;
        }
    });
});

// Validate button click
validateBtn.addEventListener('click', function() {
    const age = parseInt(ageInput.value);
    const bagroutGrade = bagroutGradeInput.value;

    // Reset message
    messageArea.innerHTML = '';
    messageArea.classList.remove('green');

    // Check if Bagrut grade entered
    if (!bagroutGrade) {
        alert('You should enter a bagrut grade');
        return;
    }

    // Show message if age > 30
    if (age > 30) {
        messageArea.classList.add('green');
        messageArea.innerHTML = 'You are eligible for admission to any faculty you choose';
    }
});