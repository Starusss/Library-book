const logout = document.getElementById("logout");
logout.addEventListener("click", function (e) {
    
    localStorage.removeItem("token");
    localStorage.removeItem("role");
})