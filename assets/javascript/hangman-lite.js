const wordInput = document.getElementById('word-input');
const letterInput = document.getElementById('letter-input');
const checkLetterBtn = document.querySelector('.button-primary');
const output = document.getElementById('output');
const wordDisplay = document.getElementById('word-display');

let word = '';

document.querySelector('.word-submit').addEventListener('click', () => {
  word = wordInput.value.toLowerCase().trim();
  wordDisplay.textContent = word;
  wordInput.value = '';
});

function checkLetter() {
  const letter = letterInput.value.toLowerCase().trim();

  if (word.includes(letter)) {
    const count = (word.match(new RegExp(letter, 'g')) || []).length;
    output.textContent = `The letter "${letter}" exists ${count} times in my word.`;
  } else {
    output.textContent = `That letter doesn't exist in my word.`;
  }
}
