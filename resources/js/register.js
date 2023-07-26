const submit = document.getElementById("submit");
submit.addEventListener("click", function (e) {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const passwordError = document.getElementById("passwordError");

  const error = {
    name: true,
    email: true,
    password: true,
  };
  if (name === "") {
    error.name = true;
    nameError.innerHTML = "vui long nhap ten ";
  } else if (!(name.length >= 4)) {
    error.name = true;
    nameError.innerHTML = "ten tu` 4 ki tu";
  } else {
    error.name = false;
    nameError.innerHTML = "";
  }

  const filterEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (email === "") {
    error.email = true;
    emailError.innerHTML = "vui long nhap email";
  } else if (!filterEmail.test(email)) {
    error.email = true;
    emailError.innerHTML = "sai dinh dang email";
  } else {
    error.email = false;
    emailError.innerHTML = "";
  }

  if (password === "") {
    error.password = true;
    passwordError.innerHTML = "password khong duoc de trong";
  } else if (password.length < 10) {
    error.password = true;
    passwordError.innerHTML = "password toi thieu 10 ki tu";
  } else {
    error.password = false;
    passwordError.innerHTML = "";
  }

  if (!error.name && !error.email && !error.password) {
    const body = JSON.stringify({
      name,
      email,
      password,
    });
    fetch("http://localhost:2000/v1/auth/register", {
      method: "POST",
      headers: {
        Accept: "application.json",
        "Content-Type": "application/json",
      },
      body,
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  }
})
