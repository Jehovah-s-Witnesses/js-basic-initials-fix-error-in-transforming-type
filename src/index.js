const userName = prompt("What's your name?");
const age = +prompt('How old are you?');
const ageInFiveYears = age + 5;

if (ageInFiveYears === 30) {
  alert(`${userName} , you will be 30 years old in 5 years!`);
} else {
  alert(`${userName} , you will be ${ageInFiveYears} years old in 5 years.`);
}
