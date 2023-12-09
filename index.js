// Select the button element
const button = document.querySelector(".app__button");

// Define a function to check if a string is a palindrome
const checkPalindrome = (string) => {
	// Clean the string by converting it to lowercase and removing all non-alphanumeric characters
	const cleanedString = string.toLowerCase().replace(/[^a-z0-9]/g, "");
	// Reverse the cleaned string
	const reversedString = cleanedString.split("").reverse().join("");
	// Check if the cleaned string is the same as its reversed string, palindrome check.
	return cleanedString === reversedString;
};

// Define a function to render the result based on user input
const renderResult = () => {
	// Get the input string value
	const inputString = document.querySelector(".app__input").value;
	// Get the result element
	let result = document.querySelector(".app__result");
	// Check if the input string value is a palindrome and update the result
	result.innerHTML = checkPalindrome(inputString) ? `This string is a Palindrome.` : `This string is not a Palindrome.`;
	// Remove CSS classes to change the color of the result
	result.classList.remove("app__result--on", "app__result--off");
	// Add CSS class to change the color of the result
	result.classList.add(checkPalindrome(inputString) ? "app__result--on" : "app__result--off");
};

// Add an event listener to the button to trigger the app functionality when clicked
button.addEventListener("click", renderResult);

// console.log(checkPalindrome("eye"));
// console.log(checkPalindrome("eye"));
// console.log(checkPalindrome("_eye"));
// console.log(checkPalindrome("race car"));
// console.log(checkPalindrome("not a checkPalindrome"));
// console.log(checkPalindrome("A man, a plan, a canal. Panama"));
// console.log(checkPalindrome("never odd or even"));
// console.log(checkPalindrome("nope"));
// console.log(checkPalindrome("almostomla"));
// console.log(checkPalindrome("My age is 0, 0 si ega ym."));
// console.log(checkPalindrome("1 eye for of 1 eye."));
// console.log(checkPalindrome("0_0 (: /- :) 0-0"));
// console.log(checkPalindrome("five|_/|four"));
