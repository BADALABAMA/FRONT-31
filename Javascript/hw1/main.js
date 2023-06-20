function calculateAge(yearOfBirth) {
  const currentYear = new Date().getFullYear();
  return currentYear - yearOfBirth;
}

function displayUserDetails(name, yearOfBirth, surname) {
  const age = calculateAge(yearOfBirth);
  const userDetails = `Name: ${name}\nAge: ${age}\nSurname: ${surname}`;
  alert(userDetails);
}

const name = prompt('Enter your name:');
const yearOfBirth = parseInt(prompt('Enter your year of birth:'));
const surname = prompt('Enter your surname:');
const loveMoney = confirm('Do you love money?');

if (name && yearOfBirth && surname) {
  displayUserDetails(name, yearOfBirth, surname);
} else {
  alert('Please fill in all the required fields.');
}
