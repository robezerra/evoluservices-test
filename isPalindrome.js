function isPalindrome(word) {
  const regularWord = word.toLowerCase();
  const reverseWord = regularWord.split('').reverse().join('');

  console.log(regularWord == reverseWord);
}

isPalindrome('Deleveled');