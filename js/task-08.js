const loginFormEl = document.querySelector(".login-form");

const user = {};

// console.dir(loginFormEl.elements);

loginFormEl.addEventListener('submit', (e) => {
    e.preventDefault();
    // console.log(e.currentTarget);

    if (e.target.elements.email.value === '' || e.target.elements.password.value === '') {
        alert('Усі поля повинні бути заповнені !');
    } else {

        user.email = e.target.elements.email.value,
        user.password = e.target.elements.password.value,

        console.log(user);
        
        e.currentTarget.reset();
    }
});
