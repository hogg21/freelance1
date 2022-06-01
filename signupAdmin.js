const formElem = document.querySelector('.form')
const email = document.querySelector('.email').value
const password = document.querySelector('.password').value
const adminData = {
    email: 'tatyana@gmail.com',
    password: 'tatyana'
}


function submitForm(e) {
    if (adminData.email !== email || adminData.password !== password) {
        alert('Admin email or password does not exist')
    } else {
        e.preventDefault()
        window.location.href = 'adminPage.html'
    }
}

formElem.addEventListener('submit', submitForm)