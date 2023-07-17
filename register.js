const form = document.querySelector("registration");

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
    if (!password == repeatPassword) {
        alert("Passwords do not match. Please retry")
    }
    else {
        alert("You are registered. Welcome to The Business!")
    }
})
