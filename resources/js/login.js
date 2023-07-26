const submit = document.getElementById("submit");
submit.addEventListener("click", function (e) {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;


  const body = JSON.stringify({
    email,
    password,
  });
  fetch("http://localhost:2000/v1/auth/login", {
    method: "POST",
    headers: {
      Accept: "application.json",
      "Content-Type": "application/json",
    },
    body,
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      if (data.status) {
        window.localStorage.setItem('token', data.data.token);
        window.location.href = "http://localhost:2000";
      }else{
        alert("tai` khoa?n khong dung'")
      }
    });


});
