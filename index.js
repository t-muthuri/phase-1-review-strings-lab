// Write your code in this file!
const currentUser = 'Santiago Calatrava';
//Santiago Calatrava - acclaimed Spanish/Swiss architect, structural engineer, sculptor and painter.
//const welcomeMessage = 'Welcome to Flatbook, '+ currentUser + '!';

const welcomeMessage = `Welcome to Flatbook, ${currentUser}!`; //template literal

const excitedWelcomeMessage = welcomeMessage.toUpperCase();

//const shortGreeting = `Welcome, ${currentUser[0]}!`; using bracket notation to access the first value, 0, of the string

const shortGreeting = `Welcome, ${currentUser.slice(0,1)}!`;