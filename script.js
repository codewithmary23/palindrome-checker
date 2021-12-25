const btnCheck = document.getElementById('check');
const message = document.querySelector('.message');

btnCheck.addEventListener('click', () => {
    let wordValue = document.getElementById('word').value;
    // a4a
    let word = wordValue.toLowerCase();
    let reverseWord = "";

    for (let i = word.length - 1; i >= 0; i--) {
        reverseWord += word[i];
        // a4a
    }

    if (reverseWord == word) {
        document.getElementById('word').value = '';
        message.textContent = 'It is a Palindrome.';
        message.style.color = '#67dc82';
    } else {
        document.getElementById('word').value = '';
        message.textContent = 'It is not a Palindrome.';
        message.style.color = '#b92222';
    }
});