const byteSize = (str) => {
  // write your code here
	let encoder = new TextEncoder();
	return encoder.encode(str).length;
};

// Do not change the code below
const str = prompt("Enter some string.");
alert(byteSize(str));
