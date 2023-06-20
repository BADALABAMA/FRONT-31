function validateName(name) {
  return name.length >= 2;
}

function validateEmail(email) {
  return email.includes('@');
}

function validatePassword(password) {
  return password.length > 7;
}

const name = prompt('Enter your name:');

if (!validateName(name)) {
  console.log('Name should have at least 2 symbols.');
} else {
  const email = prompt('Enter your email:');
  if (!validateEmail(email)) {
    console.log('Invalid email address.');
  } else {
    const password = prompt('Enter your password:');
    if (!validatePassword(password)) {
      console.log('Password should be longer than 7 characters.');
    } else {
      const age = prompt('Enter your age:');
      console.log('Registration successful!');
      console.log('Name:', name);
      console.log('Email:', email);
      console.log('Password:', password);
      console.log('Age:', age);
    }
  }
}
