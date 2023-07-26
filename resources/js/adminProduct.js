const listproduct = document.getElementById("tableProduct");

fetch(`http://localhost:2000/v1/book/product`, {
  method: "GET",
  headers: {
    Accept: "application.json",
    "Content-Type": "application/json",
  },
})
  .then((response) => response.json())
  .then(({ data }) => {
    let result = '';
    data.map(({_id, name, images, price, description }) => {
        result += `
        <tr>
        <td class="imgage">
          <img src="${images}" />
        </td>
        <td class="name">${name}</td>
        <td class="price">${price} VND</td>
        <td>
        <p class="description">${description}</p></td>
        <td>
        <a href="/updateProduct/${_id}"><button class="button-1" type="button">View</button></a>
          <button id="deleteProduct" class="button-2" data-id="${_id}" type="button" data-toggle="modal" data-target="#delete">Delete</button>
        </td>
      </tr>`
    });
    listproduct.innerHTML = result;
    console.log(result);
  });
 