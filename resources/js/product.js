// import { response } from "express";

const getproduct = document.getElementById("productDetails");
const url = window.location.href;

const id = url.substring(url.lastIndexOf("/") + 1);
console.log(id);
const token = localStorage.getItem("token");

const body = JSON.stringify({
    token,
})

if (!token) {
  window.location.href = "http://localhost:2000/login";
}else {

  fetch(`http://localhost:2000/v1/auth/me`, {
    method: "POST",
    headers: {
      Accept: "application.json",
      "Content-Type": "application/json",
    },
   body,
  })
  .then((response) => response.json())
  .then((data) => {
    localStorage.setItem("role", data.data.user.user.admin);
}) 
}
fetch(`http://localhost:2000/v1/book/productDetails/${id}`, {
  method: "GET",
  headers: {
    Accept: "application.json",
    "Content-Type": "application/json",
  },
})
  .then((response) => response.json())

  .then(({ data: { _id, name, images, price, description } }) => {
    const result = `<div class="row">
            <div class="col-md-6 col-sm-12">
                <img class="img-fluid details-img" src="${images}" alt="">
            </div>
            <div class="col-md-6 col-sm-12 description-container p-5">
                <div class="main-description">
                    <h3>${name}</h3>
                    <hr>
                    <p class="product-price">${price}</p>
                    <form class="add-inputs" method="post">
                        <input type="number" class="form-control" id="cart_quantity" name="cart_quantity" value="1"
                            min="1" max="10">
                        <button name="add_to_cart" type="submit" class="btn btn-primary btn-lg">Add to cart</button>
                    </form>
                    <form class="add-inputs" method="post">
                        <button name="add_to_cart" type="submit" class="btn btn-primary btn-lg">Add to
                            Wishlist</button>
                    </form>
                    <div style="clear:both"></div>

                    <hr>


                    <p class="product-title mt-4 mb-1">About this product</p>
                    <p class="product-description mb-4">
                        ${description}
                    </p>

                    <hr>

                    <p class="product-title mt-4 mb-1">Share this product</p>
                    <ul class="social-list">
                        <li><a href="#"><i class="fa-brands fa-facebook"></a></i></li>
                        <li><a href="#"><i class="fa-brands fa-twitter"></a></i></li>
                        <li><a href="#"><i class="fa-brands fa-square-instagram"></a></i></li>
                    </ul>
                </div>
            </div>
        </div>`;
    getproduct.innerHTML = result;
    console.log(url);
  });
