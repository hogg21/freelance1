const redirectButton = document.querySelector('.redirect-button')

function redirectToUser() {
    window.location.href = 'homePage.html'
}

redirectButton.addEventListener('click', redirectToUser)
const chat = prompt('Здравствуйте, мне нужна помощь администратора.')
if (chat === 'Добрый день, меня зовут Татьяна. Я администратор ТелеЛайт. Вам нужна помощь?') {
    prompt('Да.Как я могу просмотреть учет товаров?')
}
if (chat === 'Да.Как я могу просмотреть учет товаров?') {
    prompt('Вы можете нажать на кнопку учет товаров и вы перейдете на страницу с товарами.')
}