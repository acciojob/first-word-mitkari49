function firstWord(s) {
  // your code her
	const result='';
	if(s!==''){
		for(let i=0;i<s.length;i++){
			if(s.charAt(i)===' '){
				return result;
			}
			else{
							result+=s.charAt(i);
			}
			}
		return result;
		}
	}
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
