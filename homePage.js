const buttonRedirect = document.querySelector('.products-button')

function redirectToProduct() {
    window.location.href = 'products.html'
}
function redirectToSignUpAdmin() {
    window.location.href = 'admin.html'
}

function logOut() {
    window.location.href = 'index.html'
}


buttonRedirect.addEventListener("click", redirectToProduct)