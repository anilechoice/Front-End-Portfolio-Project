const form = document.querySelector("log-in");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    let firstName = e.target.firstName.value
    let lastName = e.target.lastName.value
    let email = e.target.email.value
    let password = e.target.password.value
    let repeatPassword = e.target.password.value

    console.log(firstName);
    console.log(lastName);
    console.log(email);
    console.log(password);
    console.log(repeatPassword)

    generateUserCard(firstName, lastName, email, password);

    form.reset();
})
