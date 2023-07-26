const listproduct = document.getElementById('renderProduct');

    fetch("http://localhost:2000/v1/book/product", {
    method: "GET",
    headers: {
      Accept: "application.json",
      "Content-Type": "application/json",
    },
  })
  .then((response) => response.json())
  .then(({ data }) => {
    const result = data.map(({_id, name, images, price}) => {
        return (
        `
          <div class="col-md-4">
          <a href="/productDetails/${_id}">
          <div class="card">
            <div class="ccc">
              <p class="text-center">
                <img
                  src="${images}"
                  class="img"
                />
              </p>
            
            </div>
            <div class="card-body">
              <h5 class="text-center" style=" overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;">${name}</h5>
              <p class="text-center">${price} đ</p>
              <p class="text-center">
                <input type="submit" name="Save" value="Buy" class="cc1" />
              </p>
            </div>
          </div>
          </a>
        </div>`
        )
    })
    listproduct.innerHTML = result;
  });


