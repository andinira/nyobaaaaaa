const DB_USER = [
    {
        username: " ",
        password: " "
    }
]

const inputUsername = document.querySelector("#username");
const inputPassword = document.querySelector("#password");
const buttonSubmit = document.querySelector("#submitForm");

buttonSubmit.addEventListener('click', (e) => {
    e.preventDefault();
    const valueInputPassword = inputPassword.value;
    const valueInputUsername = inputUsername.value;

    let flag = 0;

    DB_USER.map((data) => {
        if (data.username === valueInputUsername && data.password === valueInputPassword) {
            flag = 1;
        }
    })

    const warningMsg = document.querySelector(".warning");

    if (flag === 0) {
        warningMsg.className = "text-danger";
    } else {
        alert("Selamat anda masuk ke home");
    }
})

function checkPassword(form) {
    password1 = form.password1.value;
    password2 = form.password2.value;

    if (password1 == '')
        alert("Please enter Password");

    // 
    else if (password2 == '')
        alert("Please enter confirm password");

    else if (password1 != password2) {
        alert("\nPassword did not match: Please try again...")
        return false;
    }

    else {
        alert("Password Match: Welcome to Ourwebsite!")
        return true;
    }
}