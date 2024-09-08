const inputField = document.getElementById('text');
const checkButton = document.getElementById('check');
const result = document.getElementById('result');

checkButton.addEventListener('click', checkPalindrome);

function checkPalindrome() {
    const inputString = inputField.value.toLowerCase().trim();
    const reversedString = inputString.split('').reverse().join('');

    if (inputString === reversedString) {
        result.textContent = `${inputString} is a palindrome!`;
    } else {
        result.textContent = `${inputString} is not a palindrome.`;
    }
}
