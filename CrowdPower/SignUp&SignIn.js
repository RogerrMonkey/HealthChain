import { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from './Firebase_Config.js';

// Sign-up functionality
document.getElementById('SignUpForm').addEventListener('SignUpFormSubmit', (e) => {
    e.preventDefault();
    const name = document.getElementById('SignUpName').value;
    const email = document.getElementById('SignUpEmail').value;
    const password = document.getElementById('SignUpPassword').value;

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            alert(`Welcome, ${name}! Account created.`);
            // You can redirect the user to another page or perform additional tasks here
        })
        .catch((error) => {
            alert(error.message);
        });
});

// Sign-in functionality
document.getElementById('SignInform').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('SignInEmail').value;
    const password = document.getElementById('SignInPassword').value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            alert('Successfully signed in!');
            // Redirect to a logged-in page or dashboard
        })
        .catch((error) => {
            alert(error.message);
        });
});

// Real-time authentication listener (to check if a user is signed in)
onAuthStateChanged(auth, (user) => {
    if (user) {
        console.log('User is signed in:', user.email);
    } else {
        console.log('No user is signed in.');
    }
});document.getElementById('signUp').addEventListener('click', () => {
    document.querySelector('.sign-up-container').classList.add('active');
    document.querySelector('.sign-in-container').classList.remove('active');
});

document.getElementById('signIn').addEventListener('click', () => {
    document.querySelector('.sign-in-container').classList.add('active');
    document.querySelector('.sign-up-container').classList.remove('active');
});
