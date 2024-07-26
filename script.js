function firstWord(s) {
  // Trim leading and trailing whitespace
  s = s.trim();

  // Check if the input string is empty after trimming
  if (s.length === 0) {
    return '';
  }

  // Find the index of the first space in the string
  const index = s.indexOf(' ');

  // If a space is found, return the substring from the beginning to the index
  // Otherwise, return the entire string
  return index !== -1 ? s.substring(0, index) : s;
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
