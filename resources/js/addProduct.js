const submit = document.getElementById("submit");
submit.addEventListener("click", function (e) {
  const name = document.getElementById("name").value;
  const price = document.getElementById("price").value;
  const description = document.getElementById("description").value;
  const images = document.getElementById("img").value;
  const nameError = document.getElementById("nameError");
  const priceError = document.getElementById("priceError");
  const desError = document.getElementById("descriptionError");
  const imgError = document.getElementById("imgError");

  const error = {
    name: true,
    price: true,
    description: true,
    img: true,
  };

  if (name === "") {
    error.name = true;
    nameError.innerHTML = "name khong duoc de trong";
  } else {
    error.name = false;
    nameError.innerHTML = "";
  }

  if (price === "") {
    error.price = true;
    priceError.innerHTML = "price khong duoc de trong";
  } else {
    error.price = false;
    priceError.innerHTML = "";
  }

  if (description === "") {
    error.description = true;
    desError.innerHTML = "description khong duoc de trong";
  } else {
    error.description = false;
    desError.innerHTML = "";
  }

  if (images === "") {
    error.images = true;
    imgError.innerHTML = "img khong duoc de trong";
  } else {
    error.img = false;
    imgError.innerHTML = "";
  }

  if (!error.name && !error.price && !error.description && !error.images) {
    const body = JSON.stringify({
      name,
      price,
      description,
      images,
    });
    fetch("http://localhost:2000/v1/book/addProduct", {
      method: "POST",
      headers: {
        Accept: "application.json",
        "Content-Type": "application/json",
      },
      body,
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
    alert("san pham da duoc them");
    
  } 
});
