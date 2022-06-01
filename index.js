const buttonRedirect = document.querySelector('button')


function redirectToHome() {
    window.location.href = 'homePage.html'
}
buttonRedirect.addEventListener('click', redirectToHome)
