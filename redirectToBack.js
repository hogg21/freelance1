const buttonBack = document.querySelector('.back-button')
function redirectToBack() {
    window.location.href = 'homePage.html'
}

buttonBack.addEventListener("click", redirectToBack)
