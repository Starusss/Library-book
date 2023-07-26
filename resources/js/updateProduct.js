const updateProduct = document.getElementById("updateProduct");

const url = window.location.href;

const id = url.substring(url.lastIndexOf("/") + 1);
console.log(id);

fetch(`http://localhost:2000/v1/book/productDetails/${id}`, {
  method: "GET",
  headers: {
    Accept: "application.json",
    "Content-Type": "application/json",
  },
})
  .then((response) => response.json())

  .then(({ data: { _id, name, images, price, description } }) => {
    const result = `
    <div class="row">
      <div class="col-25">
        <label for="name">Name Product</label>
      </div>
      <div class="col-75">
        <input
          type="text"
          id="name"
          name="name"
          value="${name}"
        />
      </div>
    </div>

    <div class="row">
      <div class="col-25">
        <label for="price">price </label>
      </div>
      <div class="col-75">
        <input
          type="text"
          id="price"
          name="price"
          value="${price}"
        />
      </div>
    </div>

    <div class="row">
      <div class="col-25">
        <label for="img">img</label>
      </div>
      <div class="col-75">
        <input  
          type="text"
          id="img"
          name="img"
          value="${images}"
        >
      </div>
      <div class="row">
      <div class="col-25">
        <label for="description">description</label>
      </div>
      <div class="col-75">
        <textarea  
          type="text"
          id="description"
          name="description"
          value="${description}"
        >${description}</textarea>
      </div>
    </div> `;

    updateProduct.innerHTML = result;

      const submit = document.getElementById("submit");
      submit.addEventListener("click", function (e) {
        const name = document.getElementById("name").value;
        const price = document.getElementById("price").value;
        const description = document.getElementById("description").value;
        const images = document.getElementById("img").value;

        const body = JSON.stringify({
          name,
          price,
          description,
          images,
        });
        fetch(`http://localhost:2000/v1/book/updateProduct/${id}`, {
          method: "PUT",
          headers: {
            Accept: "application.json",
            "Content-Type": "application/json",
          },
          body,
        })
          .then((response) => response.json())
          .then((data) => console.log(data));
        alert("san pham da duoc update");
      });
  });
