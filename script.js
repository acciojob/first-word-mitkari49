function firstWord(s) {
  // your code her
 if (str.length === 0) {
    return '';
  }
  
  // Find the index of the first space in the string
  const index = str.indexOf(' ');
  
  // If a space is found, return the substring from the beginning to the index
  // Otherwise, return the entire string
  return index !== -1 ? str.substring(0, index) : str;
	}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
