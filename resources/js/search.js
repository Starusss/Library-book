const submit = document.getElementById("submit");
submit.addEventListener("click", function (e) {
  const search = document.getElementById("search").value;
  window.location.href = `/search/${search}`;

});

const url = window.location.href;
const keyword = url.substring(url.lastIndexOf("/") + 1);

// console.log(keyword);
// document.getElementById("search").value = keyword;

const renderProduct = document.getElementById("renderProduct");
fetch(`http://localhost:2000/v1/book/search/${keyword}`, {
  method: "GET",
  headers: {
    Accept: "application.json",
    "Content-Type": "application/json",
  },
})
  .then((response) => response.json())
  .then(({ data }) => {

    const result = data.map(({ _id, name, images, price }) => {
      return `
          <div class="col-md-4">
          <a href="/productDetails/${_id}">
          <div class="card">
            <div class="ccc">
              <p class="text-center">
                <img
                  src="${images}"
                  class="imw"
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
        </div>`;
    });
    renderProduct.innerHTML = result;
  });
