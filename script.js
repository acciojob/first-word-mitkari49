function firstWord(s) {
  // your code her
const index = s.indexOf(' ');
  return index !== -1 ? str.substring(0, index) : s;
	}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
