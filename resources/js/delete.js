const deleteElement = document.getElementById("delete-btn");
deleteElement.addEventListener("click", function (e) {

  const getid = document.getElementById("deleteProduct")
 const id = getid.dataset.id
console.log(getid.dataset.id);
  
  
  fetch(`http://localhost:2000/v1/book/adminProduct/${id}`, {
    method: "DELETE",
    headers: {
      Accept: "application.json",
      "Content-Type": "application/json",
    },

  });
  window.location.href="/adminProduct"
});