const username = document.querySelector('#username');
const password = document.querySelector('#password');
const form = document.querySelector('#form');

form.addEventListener('submit', (e) =>{
    e.preventDefault();
    if (username.value !== 'User1' || password.value !== 'Pass1'){
        alert('Invalid login credentials')
        username.value = ''
        password.value = ''
    } else {
    console.log(username.value);
    console.log(password.value);
    location.replace('https://art-ech.github.io/pgdashboard')}
})
