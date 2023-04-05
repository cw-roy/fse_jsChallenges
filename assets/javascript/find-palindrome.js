function checkPalindrome() {
    const inputWord = document.getElementById('input-word').value;
    const reversedWord = inputWord.split('').reverse().join('');
    if (inputWord === reversedWord) {
        document.getElementById('output').innerHTML = `${inputWord} is a palindrome.`;
    } else {
        document.getElementById('output').innerHTML = `${inputWord} is not a palindrome.`;
    }
}
