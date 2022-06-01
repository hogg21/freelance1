const formElem = document.querySelector('.form')
const email = document.querySelector('.email').value
const password = document.querySelector('.password').value
const userData = {
    email: 'vpupkin@gmail.com',
    password: 'vasiliy'
}


function submitForm(e) {
    if (userData.email !== email || userData.password !== password) {
        alert('Admin email or password does not exist')
    } else {
        e.preventDefault()
        window.location.href = 'homePage.html'
    }
}


formElem.addEventListener('submit', submitForm)