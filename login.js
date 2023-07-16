const form = document.querySelector("log-in");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    let email = e.target.email.value
    let password = e.target.password.value

    console.log(email);
    console.log(password);

    generateUserCard(email, password);

    form.reset();
})
